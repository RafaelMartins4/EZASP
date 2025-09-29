import antlr4 from 'antlr4';
import ASPLexer from '../../generated/src/parser/grammar/ASPLexer.mjs';
import ASPParser from '../../generated/src/parser/grammar/ASPParser.mjs';
import ASPListener from '../../generated/src/parser/grammar/ASPListener.mjs';

let errorRangeSize = 2;

//@ts-ignore
class ASPParserErrorListener extends antlr4.error.ErrorListener {
	constructor() {
	  super();
      this.syntaxErrors = [];
	}
  
	// Override the syntaxError method to capture errors
	syntaxError(recognizer, offendingSymbol, line, charPositionInLine, msg, e) {
        let tokenStream = recognizer.getInputStream();

        let lineStart = line;
        let lineEnd = line;
        let indexStart = charPositionInLine > errorRangeSize ? charPositionInLine - errorRangeSize : 0;
        let indexEnd = charPositionInLine + errorRangeSize + 1;

        // Check if the error has anything to do with the previous line
        if(charPositionInLine < errorRangeSize) {
            if (line > 1) {
                let previousLine = line - 2;
                let previousLineText = tokenStream.tokenSource.inputStream.strdata.split('\n')[previousLine];
                
                // Skip empty lines 
                while(previousLine >= 0 && previousLineText !== undefined && previousLineText.trim() === '') {
                    previousLine--;
                    previousLineText = tokenStream.tokenSource.inputStream.strdata.split('\n')[previousLine];
                }

                // Use token stream to search for a construct, comment, or terminator
                let foundTerminator = false;
                let foundConstruct = false;
                for (let i = tokenStream.size - 1; i >= 0; i--) {
                    const token = tokenStream.get(i);
                    if (token.line === previousLine + 1) {
                        if (token.text === '.' || token.text === ']' || token.text.includes('%')) {
                            foundTerminator = true;
                            break;
                        } else if (token.text.trim() !== '') { 
                            foundConstruct = true;
                            break;
                        }
                    }
                }

                if(foundConstruct) {
                    lineStart = previousLine + 1;
                    indexStart = previousLineText.length - errorRangeSize - 1;
                } else if(foundTerminator) {
                    indexEnd += errorRangeSize - charPositionInLine; 
                }
            } else {
                indexEnd += errorRangeSize - charPositionInLine; 
            }
            
        } else {
            // Check if the error is at the end of the line
            const currentLineText = tokenStream.tokenSource.inputStream.strdata.split('\n')[line - 1];
            
            if (indexEnd > currentLineText.length) {
                const constructEnd = currentLineText.slice(charPositionInLine);
                if(constructEnd.includes('.') || constructEnd.includes(']')) {
                    // The construct ends with a terminator, so extend the range backwards to guarantee consistent underline length
                    indexEnd = currentLineText.length;
                    indexStart = Math.max(0, indexEnd - 2 * errorRangeSize - 1);
                } else {
                    // Move to the next line if it exists
                    if (line < tokenStream.tokenSource.inputStream.strdata.split('\n').length) {
                        lineEnd = line + 1;
                        indexEnd = charPositionInLine - currentLineText.length + errorRangeSize + 1;
                    }
                }
            }
        }

        const errorObj = {
            lineStart, 
            lineEnd, 
            indexStart, 
            indexEnd,
            message: msg,
            offendingSymbol: offendingSymbol.text
        };

        this.syntaxErrors.push(errorObj);
    }
    

    getSyntaxErrors() {
        return this.syntaxErrors;
    }
      
    clearErrors() {
        this.syntaxErrors = [];
    }
}

//@ts-ignore
class ASPLexerErrorListener extends antlr4.error.ErrorListener {
    constructor() {
        super();
        this.tokenErrors = [];
    }

    syntaxError(recognizer, offendingSymbol, line, charPositionInLine, msg, e) {

        const inputStream = recognizer._input;
        const inputText = inputStream.strdata;
        const lines = inputText.split('\n'); 

        let lineStart = line;
        let lineEnd = line;
        let indexStart = charPositionInLine > errorRangeSize ? charPositionInLine - errorRangeSize : 0;
        let indexEnd = charPositionInLine + errorRangeSize;

        // Check if the error is at the end of the line
        const currentLineText = lines[line - 1];

        if (indexEnd > currentLineText.length) {
            // Move to the next line if it exists
            if (line < lines.length) {
                lineEnd = line + 1;
                indexEnd = charPositionInLine - currentLineText.length + errorRangeSize;
            }
        }

        const errorObj = {
            lineStart,
            lineEnd,
            indexStart,
            indexEnd,
            message: msg,
            offendingSymbol: offendingSymbol ? offendingSymbol.text : null
        };

        this.tokenErrors.push(errorObj);
    }

    getTokenErrors() {
        return this.tokenErrors;
    }

    clearErrors() {
        this.tokenErrors = [];
    }
}


// Verbose Listener to track parsing events
class VerboseASPListener extends ASPListener {
    constructor() {
        super();
        this.syntaxErrors = [];
        this.constructTypes = [];
        this.hasGenerator = false;
        this.hasUnclosedComment = false;
        this.statementsByLine = new Map();
        this.definedPredicates = new Map();
        this.usedPredicates = new Map();
        this.lineRanges = new Map();
        this.unsafeVariables = [];
        // This helps to uniquely identify anonymous variables. 
        // This is important for safety checking, as each anonymous variable is considered distinct and so (as far as I am aware) cannot be grounded
        this.anonCounter = 0;
    }

    enterStatement(ctx) {
        if (!ctx.start || !ctx.stop) {
            return;
        }
        
        if(!this.lineRanges.has(ctx.start.line)) {
            this.lineRanges.set(ctx.start.line, []);
        }

        this.lineRanges.get(ctx.start.line).push({
            lineStart: ctx.start.line,
            lineEnd: ctx.stop.line,
            indexStart: ctx.start.column,
            indexEnd: ctx.stop.column
        });

        this.anonCounter = 0;
    }

    enterConstant(ctx) {
        if (!ctx.start || !ctx.stop) return;

        if(ctx.CONSTANT()) {
            const predicateName = ctx.CONSTANT().getText();
            const predicateKey = predicateName + '/0'; // Constants are treated as predicates with arity 0

            const lineStart = ctx.start.line;
            const lineEnd = ctx.stop.line;
            const indexStart = ctx.start.column
            let indexEnd = ctx.stop.column;

            if(indexEnd ==  indexStart) {
                indexEnd += predicateName.length;
            }

            if (!this.definedPredicates.has(predicateKey)) {
                this.definedPredicates.set(predicateKey, []);
            }
            this.definedPredicates.get(predicateKey).push({ lineStart, lineEnd, indexStart, indexEnd });

            this.constructTypes.push({
                type: 'Constant',
                lineStart: ctx.start.line,
                lineEnd: ctx.stop.line,
                indexStart: ctx.start.column,
                indexEnd: ctx.stop.column,
            });

            if(!this.statementsByLine.has(ctx.start.line)) {
                this.statementsByLine.set(ctx.start.line, []);
            }
            this.statementsByLine.get(ctx.start.line).push(ctx.getText());
        }
    }

    enterFact(ctx) {
        if (!ctx.start || !ctx.stop) return;

        this.constructTypes.push({
            type: 'Fact',
            lineStart: ctx.start.line,
            lineEnd: ctx.stop.line,
            indexStart: ctx.start.column,
            indexEnd: ctx.stop.column,
        });

        if(!this.statementsByLine.has(ctx.start.line)) {
            this.statementsByLine.set(ctx.start.line, []);
        }
        this.statementsByLine.get(ctx.start.line).push(ctx.getText());

        // Check for unsafe variables
        let totalVariables = new Set();
        let groundedVariables = new Set();
        let linkedVariables = [];

        // Context variables will be used to track variables that are only available inside certain contexts from the grammar
        // The contextVariables array will store various Sets of variables that are only available inside certain contexts
        // The groundedContextVariables array will store grounded variables that are available inside certain contexts
        // This way, grounded variables that are only available inside a certain context can be used to check for unsafe variables only inside the given context
        // The set of variables in groundedContextVariables[1] will be used to check for unsafety in variables inside contextVariables[1]
        let contextVariables = [];
        let groundedContextVariables = [];
        let linkedContextVariables = [];

        if(ctx.choice()) {
            this.hasGenerator = true;
            
            const choice = ctx.choice();
            
            if(choice.term()) {
                const terms = choice.term();
                terms.forEach(term => {
                    this.processTerm(term, this.usedPredicates, false);
                    const result = this.collectVariablesFromTerm(term)
                    if(result.skip) {
                        // In clingo, when there is a arithmetic operation between two elements with different types (for example, between a variable and a tuple), a 'undefined operation'
                        // message is shown. This could be implemented in this parser, however it requires tracking the typing of every element that can be used in arithmetic operations.
                        // As a result, we will simply skip these cases and not throw any errors.
                    } else {
                        result.allVars.forEach(v => totalVariables.add(v));
                    }
                })
            }

            const choice_elements = choice.choice_element();
            
            if(choice_elements) {
                choice_elements.forEach(choice_element => {
                    let choiceVariables = new Set();
                    let choiceGroundedVariables = new Set();
                    let choiceLinkedVariables = [];

                    const head_atom = choice_element.choiceHead_atoms();
                    
                    if(head_atom.literal()) {
                        const atom = head_atom.literal().classical_atom().atom();
                        if (!atom || !atom.start || !atom.stop) return;
                        const predicateName = atom.CONSTANT().getText();
                        const terms = atom.term();
                        const arity = terms ? terms.length : 0;

                        if(terms) {
                            terms.forEach(term => {
                                this.processTerm(term, this.usedPredicates, true);
                                const result = this.collectVariablesFromTerm(term);
                                if(result.skip) {
                                    // In clingo, when there is a arithmetic operation between two elements with different types (for example, between a variable and a tuple), a 'undefined operation'
                                    // message is shown. This could be implemented in this parser, however it requires tracking the typing of every element that can be used in arithmetic operations.
                                    // As a result, we will simply skip these cases and not throw any errors.
                                } else {
                                    result.allVars.forEach(v => choiceVariables.add(v));
                                }
                            });
                        }

                        const predicateKey = `${predicateName}/${arity}`;

                        const lineStart = atom.start.line;
                        const lineEnd = atom.stop.line;
                        const indexStart = atom.start.column;
                        let indexEnd = atom.stop.column;

                        if(indexEnd == indexStart) {
                            indexEnd += predicateName.length;
                        }

                        if (!this.definedPredicates.has(predicateKey)) {
                            this.definedPredicates.set(predicateKey, []);
                        }
                        this.definedPredicates.get(predicateKey).push({ lineStart, lineEnd, indexStart, indexEnd });

                    } else if(head_atom.builtIn_atom()) {
                        const hasNot = head_atom.NOT() !== null;
                        const builtIn_atom = head_atom.builtIn_atom();

                        // For some reason, built-in atoms that are in the head of a choice act like built-in atoms in the body of a rule
                        // So they only ground variables if they use "==" or "not ... !="
                        const result = this.collectVariablesFromBuiltInAtom(builtIn_atom, hasNot, false);
                        result.vars.forEach(v => choiceVariables.add(v));
                        result.groundedVars.forEach(v => choiceGroundedVariables.add(v));
                        result.linkedVars.forEach(linkedVar => choiceLinkedVariables.push(linkedVar));
                    }

                    const body_atoms = choice_element.choiceBody_atoms();
                    if(body_atoms) {
                        body_atoms.forEach(body_atom => {
                            if(body_atom.literal()) {
                                const literal = body_atom.literal();
                                const hasNot = literal.NOT() !== null;
                                const atom = literal.classical_atom().atom();
                                if (!atom || !atom.start || !atom.stop) return;
                                const predicateName = atom.CONSTANT().getText();
                                const terms = atom.term();
                                const arity = terms ? terms.length : 0;
                                
                                if(terms) {
                                    terms.forEach(term => {
                                        this.processTerm(term, this.usedPredicates, true);

                                        const result = this.collectVariablesFromTerm(term);

                                        if(result.skip) {
                                            // In clingo, when there is a arithmetic operation between two elements with different types (for example, between a variable and a tuple), 
                                            // a 'undefined operation' message is shown. This could be implemented in this parser, however it requires tracking the typing of every element 
                                            // that can be used in arithmetic operations.
                                            // As a result, we will simply skip these cases and not throw any errors.
                                        } else {
                                            result.allVars.forEach(v => {
                                                // Anonymous variables are not considered unsafe if used in a negative literal in the body of a rule
                                                if(!v.startsWith('#Anon'))
                                                    choiceVariables.add(v)
                                            });
                                            if(!hasNot) {
                                                result.groundableVars.forEach(v => choiceGroundedVariables.add(v));
                                            }
                                        }
                                    });
                                }

                                const predicateKey = `${predicateName}/${arity}`;
                                const lineStart = atom.start.line;
                                const lineEnd = atom.stop.line;
                                const indexStart = atom.start.column;
                                let indexEnd = atom.stop.column;

                                if(indexEnd == indexStart) {
                                    indexEnd += predicateName.length;
                                }

                                if (!this.usedPredicates.has(predicateKey)) {
                                    this.usedPredicates.set(predicateKey, []);
                                }
                                this.usedPredicates.get(predicateKey).push({ lineStart, lineEnd, indexStart, indexEnd });
                        
                            } else if(body_atom.builtIn_atom()) {
                                const hasNot = body_atom.NOT() !== null;
                                const builtIn_atom = body_atom.builtIn_atom();
                                const result = this.collectVariablesFromBuiltInAtom(builtIn_atom, hasNot, false);
                                result.groundedVars.forEach(v => choiceGroundedVariables.add(v));
                                result.linkedVars.forEach(linkedVar => choiceLinkedVariables.push(linkedVar));
                            }
                        });
                    }
                
                    contextVariables.push(choiceVariables);
                    groundedContextVariables.push(choiceGroundedVariables);
                    linkedContextVariables.push(choiceLinkedVariables);
                });
            }
        } else if(ctx.head()) {
            const head = ctx.head();
            if(head.aggregate_atom_head()) {
                const aggregate_atom = head.aggregate_atom_head();

                if(aggregate_atom.term()) {
                    const result = this.collectVariablesFromTerm(aggregate_atom.term());
                    if(result.skip) {
                        // In clingo, when there is a arithmetic operation between two elements with different types (for example, between a variable and a tuple), a 'undefined operation'
                        // message is shown. This could be implemented in this parser, however it requires tracking the typing of every element that can be used in arithmetic operations.
                        // As a result, we will simply skip these cases and not throw any errors.
                    } else {
                        result.allVars.forEach(v => totalVariables.add(v));
                    }
                }
                
                const result = this.collectVariablesFromAggregateAtomHead(aggregate_atom);
                contextVariables.push(result.aggregateVariables);
                groundedContextVariables.push(result.aggregateGroundedVariables);
                linkedContextVariables.push(result.aggregateLinkedVariables);

            } else if(head.head_atoms()) {
                const atoms = head.head_atoms();
                atoms.forEach(head_atom => {
                    if(head_atom.literal()) {
                        const terms = head_atom.literal().classical_atom().atom().term();
                        if(terms) {
                            terms.forEach(term => {
                                const result = this.collectVariablesFromTerm(term);
                                if(result.skip) {
                                    // In clingo, when there is a arithmetic operation between two elements with different types (for example, between a variable and a tuple), a 'undefined operation'
                                    // message is shown. This could be implemented in this parser, however it requires tracking the typing of every element that can be used in arithmetic operations.
                                    // As a result, we will simply skip these cases and not throw any errors.
                                } else {
                                    result.allVars.forEach(v => totalVariables.add(v));
                                }
                            });
                        }
                    } else if(head_atom.builtIn_atom()) {
                        const hasNot = head_atom.NOT() !== null;
                        const builtIn_atom = head_atom.builtIn_atom();

                        const result = this.collectVariablesFromBuiltInAtom(builtIn_atom, hasNot, true);
                        result.vars.forEach(v => totalVariables.add(v));
                        result.groundedVars.forEach(v => groundedVariables.add(v));
                        result.linkedVars.forEach(linkedVar => linkedVariables.push(linkedVar));

                    }
                })
            }
        }

        const result = Array.from(this.verifyUnsafeVariables(totalVariables, groundedVariables, linkedVariables, contextVariables, groundedContextVariables, linkedContextVariables));
        if(result.length > 0) {
            this.unsafeVariables.push({
                unsafeVariables: result,
                lineStart: ctx.start.line,
                lineEnd: ctx.stop.line,
                indexStart: ctx.start.column,
                indexEnd: ctx.stop.column + 1
            })
        }
    }

    enterChoice_rule(ctx) {
        if (!ctx.start || !ctx.stop) return;

        this.hasGenerator = true;

        // Check for unsafe variables
        let totalVariables = new Set();
        let groundedVariables = new Set();
        let linkedVariables = [];

        // This structure will be used to simulate clingo's behaviour regarding variables that are grounded through choices.
        // A choice can ground variables in the whole rule through it's body. 
        // However, these variables need to be 'pulled' into the context in order to be considered to be grounded globally.
        // As a result, if a variable is not used in the body of the rule, it will not be grounded even if it appears in the body of the choice.
        let headGroundedVariables = new Set();

        let contextVariables = [];
        let groundedContextVariables = [];
        let linkedContextVariables = [];

        const choice = ctx.choice();
        if (choice) {
            if(choice.term()) {
                const terms = choice.term();
                terms.forEach(term => {
                    this.processTerm(term, this.usedPredicates, false);
                    const result = this.collectVariablesFromTerm(term)
                    if(result.skip) {
                        // In clingo, when there is a arithmetic operation between two elements with different types (for example, between a variable and a tuple), a 'undefined operation'
                        // message is shown. This could be implemented in this parser, however it requires tracking the typing of every element that can be used in arithmetic operations.
                        // As a result, we will simply skip these cases and not throw any errors.
                    } else {
                        result.allVars.forEach(v => totalVariables.add(v));
                    }
                })
            }

            const choice_elements = choice.choice_element();
            if (choice_elements) {
                // When there are multiple choice elements, clingo does not allow variables to be grounded through choices. 
                const hasMultipleElements = choice_elements.length > 1;
                choice_elements.forEach(choice_element => {
                    // These structures will temporarily hold the variables for each choice element, which will then be used to check for unsafe variables
                    let choiceVariables = new Set();
                    let choiceGroundedVariables = new Set();
                    let choiceLinkedVariables = [];

                    // Process defined predicates (before the colon)
                    const head_atom = choice_element.choiceHead_atoms();
                
                    if(head_atom.literal()) {
                        const atom = head_atom.literal().classical_atom().atom();
                        if (!atom || !atom.start || !atom.stop) return;
                        const predicateName = atom.CONSTANT().getText();
                        const terms = atom.term();
                        const arity = terms ? terms.length : 0;

                        if(terms) {
                            terms.forEach(term => {
                                this.processTerm(term, this.usedPredicates, true);
                                const result = this.collectVariablesFromTerm(term);
                                if(result.skip) {
                                    // In clingo, when there is a arithmetic operation between two elements with different types (for example, between a variable and a tuple), a 'undefined operation'
                                    // message is shown. This could be implemented in this parser, however it requires tracking the typing of every element that can be used in arithmetic operations.
                                    // As a result, we will simply skip these cases and not throw any errors.
                                } else {
                                    result.allVars.forEach(v => choiceVariables.add(v));
                                }
                            });
                        }

                        const predicateKey = `${predicateName}/${arity}`;

                        const lineStart = atom.start.line;
                        const lineEnd = atom.stop.line;
                        const indexStart = atom.start.column;
                        let indexEnd = atom.stop.column;

                        if(indexEnd == indexStart) {
                            indexEnd += predicateName.length;
                        }

                        if (!this.definedPredicates.has(predicateKey)) {
                            this.definedPredicates.set(predicateKey, []);
                        }
                        this.definedPredicates.get(predicateKey).push({ lineStart, lineEnd, indexStart, indexEnd });

                    } else if(head_atom.builtIn_atom()) {
                        const hasNot = head_atom.NOT() !== null;
                        const builtIn_atom = head_atom.builtIn_atom();

                        // For some reason, built-in atoms that are in the head of a choice act like built-in atoms in the body of a rule
                        // So they only ground variables if they use "==" or "not ... !="
                        const result = this.collectVariablesFromBuiltInAtom(builtIn_atom, hasNot, false);
                        result.vars.forEach(v => choiceVariables.add(v));
                        
                        result.groundedVars.forEach(v => choiceGroundedVariables.add(v));
                        if(!hasMultipleElements) {
                            result.groundedVars.forEach(v => headGroundedVariables.add(v));
                        }
                        result.linkedVars.forEach(linkedVar => choiceLinkedVariables.push(linkedVar));
                    }
                
                    // Process used predicates (after the colon)
                    const body_atoms = choice_element.choiceBody_atoms();
                    body_atoms.forEach(body_atom => {
                        if(body_atom.literal()) {
                            const literal = body_atom.literal();
                            const hasNot = literal.NOT() !== null;
                            const atom = literal.classical_atom().atom();
                            if (!atom || !atom.start || !atom.stop) return;
                            const predicateName = atom.CONSTANT().getText();
                            const terms = atom.term();
                            const arity = terms ? terms.length : 0;

                            if(terms) {
                                terms.forEach(term => {
                                    this.processTerm(term, this.usedPredicates, true);

                                    const result = this.collectVariablesFromTerm(term);

                                    if(result.skip) {
                                        // In clingo, when there is a arithmetic operation between two elements with different types (for example, between a variable and a tuple), a 'undefined operation'
                                        // message is shown. This could be implemented in this parser, however it requires tracking the typing of every element that can be used in arithmetic operations.
                                        // As a result, we will simply skip these cases and not throw any errors.
                                    } else {
                                        result.allVars.forEach(v => {
                                            // Anonymous variables are not considered unsafe if used in a negative literal in the body of a rule
                                            if(!v.startsWith('#Anon'))
                                                choiceVariables.add(v)
                                        });
                                        if(!hasNot) {
                                            result.groundableVars.forEach(v => choiceGroundedVariables.add(v));
                                            if(!hasMultipleElements) {
                                                result.groundableVars.forEach(v => headGroundedVariables.add(v));
                                            }
                                        }
                                    }
                                });
                            }

                            const predicateKey = `${predicateName}/${arity}`;
                            const lineStart = atom.start.line;
                            const lineEnd = atom.stop.line;
                            const indexStart = atom.start.column;
                            let indexEnd = atom.stop.column;

                            if(indexEnd ==  indexStart) {
                                indexEnd += predicateName.length;
                            }

                            if (!this.usedPredicates.has(predicateKey)) {
                                this.usedPredicates.set(predicateKey, []);
                            }
                            this.usedPredicates.get(predicateKey).push({ lineStart, lineEnd, indexStart, indexEnd });
                            
                        } else if(body_atom.builtIn_atom()) {
                            const hasNot = body_atom.NOT() !== null;
                            const builtIn_atom = body_atom.builtIn_atom();
                            
                            const result = this.collectVariablesFromBuiltInAtom(builtIn_atom, hasNot, false);
                            result.groundedVars.forEach(v => choiceGroundedVariables.add(v));
                            if(!hasMultipleElements) {
                                result.groundedVars.forEach(v => headGroundedVariables.add(v));
                            }
                            result.linkedVars.forEach(linkedVar => choiceLinkedVariables.push(linkedVar));
                        }
                    });

                    contextVariables.push(choiceVariables);
                    groundedContextVariables.push(choiceGroundedVariables);
                    linkedContextVariables.push(choiceLinkedVariables);
                });
            }
        }

        const body = ctx.body();
        if(body) {
            const body_atoms = body.body_atoms();
            if(body_atoms) {
                body_atoms.forEach(body_atom => {
                    if(body_atom.literal()) {
                        const literal = body_atom.literal();
                        const hasNot = literal.NOT() !== null;
                        const terms = literal.classical_atom().atom().term();
                        if(terms) {
                            terms.forEach(term => {
                                const result = this.collectVariablesFromTerm(term);

                                if(result.skip) {
                                    // In clingo, when there is a arithmetic operation between two elements with different types (for example, between a variable and a tuple), a 'undefined operation'
                                    // message is shown. This could be implemented in this parser, however it requires tracking the typing of every element that can be used in arithmetic operations.
                                    // As a result, we will simply skip these cases and not throw any errors.
                                } else {
                                    result.allVars.forEach(v => {
                                        // Anonymous variables are not considered unsafe if used in a negative literal in the body of a rule
                                        if(!v.startsWith('#Anon'))
                                            totalVariables.add(v)
                                    });
                                    if(!hasNot) {
                                        result.groundableVars.forEach(v => groundedVariables.add(v));
                                    }
                                }
                                
                            });
                        }
                    } else if(body_atom.builtIn_atom()) {
                        const hasNot = body_atom.NOT() !== null;
                        const builtIn_atom = body_atom.builtIn_atom();

                        const result = this.collectVariablesFromBuiltInAtom(builtIn_atom, hasNot, false);
                        result.vars.forEach(v => {
                            totalVariables.add(v)
                            // If a variable is used in the body of a rule by an atom that does not ground the variable, then we must check if that variable was grounded in the head
                            // If it was, then we 'pull' the variable into the globally grounded variables set
                            if(headGroundedVariables.has(v)) {
                                groundedVariables.add(v);
                            }
                        });
                        result.groundedVars.forEach(v => groundedVariables.add(v));
                        result.linkedVars.forEach(linkedVar => linkedVariables.push(linkedVar));
                    } else if(body_atom.aggregate_atom_body()) {
                        const aggregate_atom = body_atom.aggregate_atom_body();
                        const term = aggregate_atom.term();
                        if(term) {
                            // Clingo only considers aggregate atoms' variables if there is a term of comparison in the aggregate
                            // As a result, if there is no term, we do not need to consider the variables inside the aggregate for unsafety
                            let aggregateVariables = new Set();
                            let aggregateGroundedVariables = new Set();
                            let aggregateLinkedVariables = [];

                            const aggregateResult = this.collectVariablesFromAggregateAtomBody(aggregate_atom);
                            aggregateResult.aggregateVariables.forEach(v => aggregateVariables.add(v));
                            aggregateResult.aggregateGroundedVariables.forEach(v => aggregateGroundedVariables.add(v));
                            aggregateResult.aggregateLinkedVariables.forEach(linkedVar => aggregateLinkedVariables.push(linkedVar));
                        
                            contextVariables.push(aggregateVariables);
                            groundedContextVariables.push(aggregateGroundedVariables);
                            linkedContextVariables.push(aggregateLinkedVariables);

                            // A special case seems to happen in aggregate atoms in the body. If the aggregate has an equality comparison ('=' or '==') then it is possible for the 
                            // comparison term to be grounded. However, it only happens if the variables inside the comparison term are not used inside the aggregate itself
                            // For example: {q(N)} :- #count{V,X,Y: term(V,X,Y)}=N.     Here, N is grounded because it is used in an equality comparison, and not used inside the aggregate
                            // If we change it to: {q(N)} :- #count{V,X,Y: term(V,X,Y)}=q(N,Y).     Then N is not grounded (nor is Y).
                            // {q(N,Z)} :- #count{V,X,Y: term(V,X,Y)}=q(N,Z).     It can even ground multiple variables, as long as NONE appear inside the aggregate

                            const hasEquality = aggregate_atom.EQ() !== null || aggregate_atom.EQEQ() !== null;
                            const termResult = this.collectVariablesFromTerm(term);

                            if(termResult.skip) {
                                // In clingo, when there is a arithmetic operation between two elements with different types (for example, between a variable and a tuple), a 'undefined operation'
                                // message is shown. This could be implemented in this parser, however it requires tracking the typing of every element that can be used in arithmetic operations.
                                // As a result, we will simply skip these cases and not throw any errors.
                            } else {
                                // If NONE of the variables in the term appear inside the aggregate and has an equality constraint
                                if([...termResult.allVars].every(v => !aggregateVariables.has(v)) && hasEquality) {
                                    termResult.allVars.forEach(v => {
                                        totalVariables.add(v)
                                        groundedVariables.add(v)
                                    })
                                } else {
                                    termResult.allVars.forEach(v => {
                                        totalVariables.add(v);
                                        if(headGroundedVariables.has(v)) {
                                            groundedVariables.add(v);
                                        }
                                    });
                                }
                            }
                        }
                    }
                });
            }
        }

        const result = Array.from(this.verifyUnsafeVariables(totalVariables, groundedVariables, linkedVariables, contextVariables, groundedContextVariables, linkedContextVariables));
        if(result.length > 0) {
            this.unsafeVariables.push({
                unsafeVariables: result,
                lineStart: ctx.start.line,
                lineEnd: ctx.stop.line,
                indexStart: ctx.start.column,
                indexEnd: ctx.stop.column + 1
            })
        }

        this.constructTypes.push({
            type: 'ChoiceRule',
            lineStart: ctx.start.line,
            lineEnd: ctx.stop.line,
            indexStart: ctx.start.column,
            indexEnd: ctx.stop.column,
        });

        if(!this.statementsByLine.has(ctx.start.line)) {
            this.statementsByLine.set(ctx.start.line, []);
        }
        this.statementsByLine.get(ctx.start.line).push(ctx.getText());
    }

    enterDefinite_rule(ctx) {
        if (!ctx.start || !ctx.stop) return;

        this.constructTypes.push({
            type: 'DefiniteRule',
            lineStart: ctx.start.line,
            lineEnd: ctx.stop.line,
            indexStart: ctx.start.column,
            indexEnd: ctx.stop.column,
        });

        if(!this.statementsByLine.has(ctx.start.line)) {
            this.statementsByLine.set(ctx.start.line, []);
        }
        this.statementsByLine.get(ctx.start.line).push(ctx.getText());

        // Check for unsafe variables
        let totalVariables = new Set();
        let groundedVariables = new Set();
        let linkedVariables = [];

        let contextVariables = [];
        let groundedContextVariables = [];
        let linkedContextVariables = [];

        if(ctx.head()) {
            const head = ctx.head();
            if(head.aggregate_atom_head()) {
                const aggregate_atom = head.aggregate_atom_head();

                if(aggregate_atom.term()) {
                    const result = this.collectVariablesFromTerm(aggregate_atom.term());

                    if(result.skip) {
                        // In clingo, when there is a arithmetic operation between two elements with different types (for example, between a variable and a tuple), a 'undefined operation'
                        // message is shown. This could be implemented in this parser, however it requires tracking the typing of every element that can be used in arithmetic operations.
                        // As a result, we will simply skip these cases and not throw any errors.
                    } else {
                        result.allVars.forEach(v => totalVariables.add(v));
                    }
                }
                
                const result = this.collectVariablesFromAggregateAtomHead(aggregate_atom);
                contextVariables.push(result.aggregateVariables);
                groundedContextVariables.push(result.aggregateGroundedVariables);
                linkedContextVariables.push(result.aggregateLinkedVariables);
            } else if(head.head_atoms()) {
                const head_atoms = head.head_atoms();
                head_atoms.forEach(head_atom => {
                    if(head_atom.literal()) {
                        const terms = head_atom.literal().classical_atom().atom().term();
                        if(terms) {
                            terms.forEach(term => {
                                const result = this.collectVariablesFromTerm(term);
                                if(result.skip) {
                                    // In clingo, when there is a arithmetic operation between two elements with different types (for example, between a variable and a tuple), a 'undefined operation'
                                    // message is shown. This could be implemented in this parser, however it requires tracking the typing of every element that can be used in arithmetic operations.
                                    // As a result, we will simply skip these cases and not throw any errors.
                                } else {
                                    result.allVars.forEach(v => totalVariables.add(v));
                                }
                            });
                        }
                    } else if(head_atom.builtIn_atom()) {
                        const hasNot = head_atom.NOT() !== null;
                        const builtIn_atom = head_atom.builtIn_atom();

                        const result = this.collectVariablesFromBuiltInAtom(builtIn_atom, hasNot, true);
                        result.vars.forEach(v => totalVariables.add(v));
                        result.groundedVars.forEach(v => groundedVariables.add(v));
                        result.linkedVars.forEach(linkedVar => linkedVariables.push(linkedVar));
                    }
                });
            }
        }

        if(ctx.body()) {
            const body = ctx.body();
            const body_atoms = body.body_atoms();
            if(body_atoms) {
                body_atoms.forEach(body_atom => {
                    if(body_atom.literal()) {
                        const literal = body_atom.literal();
                        const hasNot = literal.NOT() !== null;
                        const terms = literal.classical_atom().atom().term();
                        if(terms) {
                            terms.forEach(term => {
                                const result = this.collectVariablesFromTerm(term);
                                if(result.skip) {
                                    // In clingo, when there is a arithmetic operation between two elements with different types (for example, between a variable and a tuple), a 'undefined operation'
                                    // message is shown. This could be implemented in this parser, however it requires tracking the typing of every element that can be used in arithmetic operations.
                                    // As a result, we will simply skip these cases and not throw any errors.
                                } else {
                                    result.allVars.forEach(v => {
                                        // Anonymous variables are not considered unsafe if used in a negative literal in the body of a rule
                                        if(!v.startsWith('#Anon'))
                                            totalVariables.add(v)
                                    });
                                    if(!hasNot) {
                                        result.groundableVars.forEach(v => groundedVariables.add(v));
                                    }
                                }
                            });
                        }
                    } else if(body_atom.builtIn_atom()) {
                        const hasNot = body_atom.NOT() !== null;
                        const builtIn_atom = body_atom.builtIn_atom();

                        const result = this.collectVariablesFromBuiltInAtom(builtIn_atom, hasNot, false);
                        result.vars.forEach(v => totalVariables.add(v));
                        result.groundedVars.forEach(v => groundedVariables.add(v));
                        result.linkedVars.forEach(linkedVar => linkedVariables.push(linkedVar));
                    } else if(body_atom.aggregate_atom_body()) {
                        const aggregate_atom = body_atom.aggregate_atom_body();
                        const term = aggregate_atom.term();
                        if(term) {
                            // Clingo only considers aggregate atoms' variables if there is a term of comparison in the aggregate
                            // As a result, if there is no term, we do not need to consider the variables inside the aggregate for unsafety
                            let aggregateVariables = new Set();
                            let aggregateGroundedVariables = new Set();
                            let aggregateLinkedVariables = [];

                            const result = this.collectVariablesFromAggregateAtomBody(aggregate_atom);
                            result.aggregateVariables.forEach(v => aggregateVariables.add(v));
                            result.aggregateGroundedVariables.forEach(v => aggregateGroundedVariables.add(v));
                            result.aggregateLinkedVariables.forEach(linkedVar => aggregateLinkedVariables.push(linkedVar));
                        
                            contextVariables.push(aggregateVariables);
                            groundedContextVariables.push(aggregateGroundedVariables);
                            linkedContextVariables.push(aggregateLinkedVariables);

                            // A special case seems to happen in aggregate atoms in the body. If the aggregate has an equality comparison ('=' or '==') then it is possible for the 
                            // comparison term to be grounded. However, it only happens if the variables inside the comparison term are not used inside the aggregate itself
                            // For example: {q(N)} :- #count{V,X,Y: term(V,X,Y)}=N.     Here, N is grounded because it is used in an equality comparison, and not used inside the aggregate
                            // If we change it to: {q(N)} :- #count{V,X,Y: term(V,X,Y)}=q(N,Y).     Then N is not grounded (nor is Y).
                            // {q(N,Z)} :- #count{V,X,Y: term(V,X,Y)}=q(N,Z).     It can even ground multiple variables, as long as NONE appear inside the aggregate

                            const hasEquality = aggregate_atom.EQ() !== null || aggregate_atom.EQEQ() !== null;
                            const termResult = this.collectVariablesFromTerm(term);

                            if(termResult.skip) {
                                // In clingo, when there is a arithmetic operation between two elements with different types (for example, between a variable and a tuple), a 'undefined operation'
                                // message is shown. This could be implemented in this parser, however it requires tracking the typing of every element that can be used in arithmetic operations.
                                // As a result, we will simply skip these cases and not throw any errors.
                            } else {
                                // If NONE of the variables in the term appear inside the aggregate and has an equality constraint
                                if([...termResult.allVars].every(v => !aggregateVariables.has(v)) && hasEquality) {
                                    termResult.allVars.forEach(v => {
                                        totalVariables.add(v)
                                        groundedVariables.add(v)
                                    })
                                } else {
                                    termResult.allVars.forEach(v => totalVariables.add(v));
                                }
                            }
                        }
                    }
                });
            }
        }

        const result = Array.from(this.verifyUnsafeVariables(totalVariables, groundedVariables, linkedVariables, contextVariables, groundedContextVariables, linkedContextVariables));
        if(result.length > 0) {
            this.unsafeVariables.push({
                unsafeVariables: result,
                lineStart: ctx.start.line,
                lineEnd: ctx.stop.line,
                indexStart: ctx.start.column,
                indexEnd: ctx.stop.column + 1
            })
        }
    }

    enterConstraint(ctx) {
        if (!ctx.start || !ctx.stop) return;

        this.constructTypes.push({
            type: 'Constraint',
            lineStart: ctx.start.line,
            lineEnd: ctx.stop.line,
            indexStart: ctx.start.column,
            indexEnd: ctx.stop.column,
        });

        if(!this.statementsByLine.has(ctx.start.line)) {
            this.statementsByLine.set(ctx.start.line, []);
        }
        this.statementsByLine.get(ctx.start.line).push(ctx.getText());

        // Check for unsafe variables
        let totalVariables = new Set();
        let groundedVariables = new Set();
        let linkedVariables = [];

        let contextVariables = [];
        let groundedContextVariables = [];
        let linkedContextVariables = [];

        if(ctx.body()) {
            const body = ctx.body();
            const body_atoms = body.body_atoms();
            if(body_atoms) {
                body_atoms.forEach(body_atom => {
                    if(body_atom.literal()) {
                        const literal = body_atom.literal();
                        const hasNot = literal.NOT() !== null;
                        const terms = literal.classical_atom().atom().term();
                        if(terms) {
                            terms.forEach(term => {
                                const result = this.collectVariablesFromTerm(term);
                                if(result.skip) {
                                    // In clingo, when there is a arithmetic operation between two elements with different types (for example, between a variable and a tuple), a 'undefined operation'
                                    // message is shown. This could be implemented in this parser, however it requires tracking the typing of every element that can be used in arithmetic operations.
                                    // As a result, we will simply skip these cases and not throw any errors.
                                } else {
                                    result.allVars.forEach(v => {
                                        // Anonymous variables are not considered unsafe if used in a negative literal in the body of a rule
                                        if(!v.startsWith('#Anon'))
                                            totalVariables.add(v)
                                    });
                                    if(!hasNot) {
                                        result.groundableVars.forEach(v => groundedVariables.add(v));
                                    }
                                }
                            });
                        }
                    } else if(body_atom.builtIn_atom()) {
                        const hasNot = body_atom.NOT() !== null;
                        const builtIn_atom = body_atom.builtIn_atom();

                        const result = this.collectVariablesFromBuiltInAtom(builtIn_atom, hasNot, false);
                        result.vars.forEach(v => totalVariables.add(v));
                        result.groundedVars.forEach(v => groundedVariables.add(v));
                        result.linkedVars.forEach(linkedVar => linkedVariables.push(linkedVar));
                    } else if(body_atom.aggregate_atom_body()) {
                        const aggregate_atom = body_atom.aggregate_atom_body();
                        const term = aggregate_atom.term();
                        if(term) {                            
                            // Clingo only considers aggregate atoms' variables if there is a term of comparison in the aggregate
                            // As a result, if there is no term, we do not need to consider the variables inside the aggregate for unsafety
                            let aggregateVariables = new Set();
                            let aggregateGroundedVariables = new Set();
                            let aggregateLinkedVariables = [];

                            const result = this.collectVariablesFromAggregateAtomBody(aggregate_atom);
                            result.aggregateVariables.forEach(v => aggregateVariables.add(v));
                            result.aggregateGroundedVariables.forEach(v => aggregateGroundedVariables.add(v));
                            result.aggregateLinkedVariables.forEach(linkedVar => aggregateLinkedVariables.push(linkedVar));
                        
                            contextVariables.push(aggregateVariables);
                            groundedContextVariables.push(aggregateGroundedVariables);
                            linkedContextVariables.push(aggregateLinkedVariables);

                            // A special case seems to happen in aggregate atoms in the body. If the aggregate has an equality comparison ('=' or '==') then it is possible for the 
                            // comparison term to be grounded. However, it only happens if the variables inside the comparison term are not used inside the aggregate itself
                            // For example: {q(N)} :- #count{V,X,Y: term(V,X,Y)}=N.     Here, N is grounded because it is used in an equality comparison, and not used inside the aggregate
                            // If we change it to: {q(N)} :- #count{V,X,Y: term(V,X,Y)}=q(N,Y).     Then N is not grounded (nor is Y).
                            // {q(N,Z)} :- #count{V,X,Y: term(V,X,Y)}=q(N,Z).     It can even ground multiple variables, as long as NONE appear inside the aggregate

                            const hasEquality = aggregate_atom.EQ() !== null || aggregate_atom.EQEQ() !== null;
                            const termResult = this.collectVariablesFromTerm(term);

                            if(termResult.skip) {
                                // In clingo, when there is a arithmetic operation between two elements with different types (for example, between a variable and a tuple), a 'undefined operation'
                                // message is shown. This could be implemented in this parser, however it requires tracking the typing of every element that can be used in arithmetic operations.
                                // As a result, we will simply skip these cases and not throw any errors.
                            } else {
                                // If NONE of the variables in the term appear inside the aggregate and has an equality constraint
                                if([...termResult.allVars].every(v => !aggregateVariables.has(v)) && hasEquality) {
                                    termResult.allVars.forEach(v => {
                                        totalVariables.add(v)
                                        groundedVariables.add(v)
                                    })
                                } else {
                                    termResult.allVars.forEach(v => totalVariables.add(v));
                                }
                            }
                        }
                    }
                });
            }
        }

        const result = Array.from(this.verifyUnsafeVariables(totalVariables, groundedVariables, linkedVariables, contextVariables, groundedContextVariables, linkedContextVariables));
        if(result.length > 0) {
            this.unsafeVariables.push({
                unsafeVariables: result,
                lineStart: ctx.start.line,
                lineEnd: ctx.stop.line,
                indexStart: ctx.start.column,
                indexEnd: ctx.stop.column + 1
            })
        }
    }

    enterOptimization(ctx) {
        if (!ctx.start || !ctx.stop) return;

        // Check for unsafe variables
        let contextVariables = [];
        let groundedContextVariables = [];
        let linkedContextVariables = [];

        const optimizationBodys = ctx.optimizationBody();

        if(optimizationBodys) {
            optimizationBodys.forEach(optimizationBody => {
                let bodyVariables = new Set();
                let bodyGroundedVariables = new Set();
                let bodyLinkedVariables = [];

                if(optimizationBody.aggregate_element_optimization()) {
                    const aggregateElement = optimizationBody.aggregate_element_optimization();

                    if(aggregateElement.term()) {
                        const terms = aggregateElement.term();
                        terms.forEach(term => {
                            this.processTerm(term, this.usedPredicates, false);
                            const result = this.collectVariablesFromTerm(term);
                            if(result.skip) {
                                // In clingo, when there is a arithmetic operation between two elements with different types (for example, between a variable and a tuple), a 'undefined operation'
                                // message is shown. This could be implemented in this parser, however it requires tracking the typing of every element that can be used in arithmetic operations.
                                // As a result, we will simply skip these cases and not throw any errors.
                            } else {
                                result.allVars.forEach(v => bodyVariables.add(v));
                            }
                        });
                    }
        
                    if(aggregateElement.aggregate_literal()) {
                        const aggregate_literals = aggregateElement.aggregate_literal();
                        aggregate_literals.forEach(aggregateLiteral => {
                            if(aggregateLiteral.literal()) {
                                const literal = aggregateLiteral.literal();
                                const hasNot = literal.NOT() !== null;
                                const atom = aggregateLiteral.literal().classical_atom().atom();
                                if (!atom || !atom.start || !atom.stop) return;
                                const predicateName = atom.CONSTANT().getText();
                                const terms = atom.term();
                                const arity = terms ? terms.length : 0;
        
                                if(terms) {
                                    terms.forEach(term => {
                                        this.processTerm(term, this.usedPredicates, true);

                                        const result = this.collectVariablesFromTerm(term);
                                        if(result.skip) {
                                            // In clingo, when there is a arithmetic operation between two elements with different types (for example, between a variable and a tuple), a 'undefined operation'
                                            // message is shown. This could be implemented in this parser, however it requires tracking the typing of every element that can be used in arithmetic operations.
                                            // As a result, we will simply skip these cases and not throw any errors.
                                        } else {
                                            result.allVars.forEach(v => {
                                                // Anonymous variables are not considered unsafe if used in a negative literal in the body of a rule
                                                if(!v.startsWith('#Anon'))
                                                    bodyVariables.add(v)
                                            });
                                            if(!hasNot) {
                                                result.groundableVars.forEach(v => bodyGroundedVariables.add(v));
                                            }
                                        }
                                    });
                                }
        
                                const predicateKey = `${predicateName}/${arity}`;

                                const lineStart = atom.start.line;
                                const lineEnd = atom.stop.line;
                                const indexStart = atom.start.column;
                                let indexEnd = atom.stop.column;

                                if(indexEnd ==  indexStart) {
                                    indexEnd += predicateName.length;
                                }
        
                                if (!this.usedPredicates.has(predicateKey)) {
                                    this.usedPredicates.set(predicateKey, []);
                                }
                                this.usedPredicates.get(predicateKey).push({ lineStart, lineEnd, indexStart, indexEnd });
                            } else if(aggregateLiteral.builtIn_atom()) {
                                const hasNot = aggregateLiteral.NOT() !== null;
                                const builtIn_atom = aggregateLiteral.builtIn_atom();

                                const result = this.collectVariablesFromBuiltInAtom(builtIn_atom, hasNot, false);
                                result.vars.forEach(v => bodyVariables.add(v));
                                result.groundedVars.forEach(v => bodyGroundedVariables.add(v));
                                result.linkedVars.forEach(linkedVar => bodyLinkedVariables.push(linkedVar));
                            }
                        });
                    }
                }

                contextVariables.push(bodyVariables);
                groundedContextVariables.push(bodyGroundedVariables);
                linkedContextVariables.push(bodyLinkedVariables);
            });
        }

        this.constructTypes.push({
            type: 'Optimization',
            lineStart: ctx.start.line,
            lineEnd: ctx.stop.line,
            indexStart: ctx.start.column,
            indexEnd: ctx.stop.column
        });

        if(!this.statementsByLine.has(ctx.start.line)) {
            this.statementsByLine.set(ctx.start.line, []);
        }
        this.statementsByLine.get(ctx.start.line).push(ctx.getText());

        const result = Array.from(this.verifyUnsafeVariables(new Set(), new Set(), [], contextVariables, groundedContextVariables, linkedContextVariables));
        if(result.length > 0) {
            this.unsafeVariables.push({
                unsafeVariables: result,
                lineStart: ctx.start.line,
                lineEnd: ctx.stop.line,
                indexStart: ctx.start.column,
                indexEnd: ctx.stop.column + 1
            })
        }
    }

    enterWeak_constraint(ctx) {
        if (!ctx.start || !ctx.stop) return;

         // Check for unsafe variables
        let totalVariables = new Set();
        let groundedVariables = new Set();
        let linkedVariables = [];

        let contextVariables = [];
        let groundedContextVariables = [];
        let linkedContextVariables = [];

        if(ctx.body()) {
            const body = ctx.body();
            const body_atoms = body.body_atoms();

            if(body_atoms) {
                body_atoms.forEach(body_atom => {
                    if(body_atom.literal()) {
                        const literal = body_atom.literal();
                        const hasNot = literal.NOT() !== null;
                        const terms = literal.classical_atom().atom().term();
                        if(terms) {
                            terms.forEach(term => {
                                const result = this.collectVariablesFromTerm(term);
                                if(result.skip) {
                                    // In clingo, when there is a arithmetic operation between two elements with different types (for example, between a variable and a tuple), a 'undefined operation'
                                    // message is shown. This could be implemented in this parser, however it requires tracking the typing of every element that can be used in arithmetic operations.
                                    // As a result, we will simply skip these cases and not throw any errors.
                                } else {
                                    result.allVars.forEach(v => {
                                        // Anonymous variables are not considered unsafe if used in a negative literal in the body of a rule
                                        if(!v.startsWith('#Anon'))
                                            totalVariables.add(v)
                                    });
                                    if(!hasNot) {
                                        result.groundableVars.forEach(v => groundedVariables.add(v));
                                    }
                                }
                            });
                        }
                    } else if(body_atom.builtIn_atom()) {
                        const hasNot = body_atom.NOT() !== null;
                        const builtIn_atom = body_atom.builtIn_atom();

                        const result = this.collectVariablesFromBuiltInAtom(builtIn_atom, hasNot, false);
                        result.vars.forEach(v => totalVariables.add(v));
                        result.groundedVars.forEach(v => groundedVariables.add(v));
                        result.linkedVars.forEach(linkedVar => linkedVariables.push(linkedVar));
                    } else if(body_atom.aggregate_atom_body()) {
                        const aggregate_atom = body_atom.aggregate_atom_body();
                        const term = aggregate_atom.term();
                        if(term) {
                            // Clingo only considers aggregate atoms' variables if there is a term of comparison in the aggregate
                            // As a result, if there is no term, we do not need to consider the variables inside the aggregate for unsafety
                            let aggregateVariables = new Set();
                            let aggregateGroundedVariables = new Set();
                            let aggregateLinkedVariables = [];

                            const result = this.collectVariablesFromAggregateAtomBody(aggregate_atom);
                            result.aggregateVariables.forEach(v => aggregateVariables.add(v));
                            result.aggregateGroundedVariables.forEach(v => aggregateGroundedVariables.add(v));
                            result.aggregateLinkedVariables.forEach(linkedVar => aggregateLinkedVariables.push(linkedVar));
                        
                            contextVariables.push(aggregateVariables);
                            groundedContextVariables.push(aggregateGroundedVariables);
                            linkedContextVariables.push(aggregateLinkedVariables);

                            // A special case seems to happen in aggregate atoms in the body. If the aggregate has an equality comparison ('=' or '==') then it is possible for the 
                            // comparison term to be grounded. However, it only happens if the variables inside the comparison term are not used inside the aggregate itself
                            // For example: {q(N)} :- #count{V,X,Y: term(V,X,Y)}=N.     Here, N is grounded because it is used in an equality comparison, and not used inside the aggregate
                            // If we change it to: {q(N)} :- #count{V,X,Y: term(V,X,Y)}=q(N,Y).     Then N is not grounded (nor is Y).
                            // {q(N,Z)} :- #count{V,X,Y: term(V,X,Y)}=q(N,Z).     It can even ground multiple variables, as long as NONE appear inside the aggregate

                            const hasEquality = aggregate_atom.EQ() !== null || aggregate_atom.EQEQ() !== null;
                            const termResult = this.collectVariablesFromTerm(term);

                            if(termResult.skip) {
                                // In clingo, when there is a arithmetic operation between two elements with different types (for example, between a variable and a tuple), a 'undefined operation'
                                // message is shown. This could be implemented in this parser, however it requires tracking the typing of every element that can be used in arithmetic operations.
                                // As a result, we will simply skip these cases and not throw any errors.
                            } else {
                                // If NONE of the variables in the term appear inside the aggregate and has an equality constraint
                                if([...termResult.allVars].every(v => !aggregateVariables.has(v)) && hasEquality) {
                                    termResult.allVars.forEach(v => {
                                        totalVariables.add(v)
                                        groundedVariables.add(v)
                                    })
                                } else {
                                    termResult.allVars.forEach(v => totalVariables.add(v));
                                }
                            }
                        }
                    }
                })
            }
        }

        if(ctx.term()) {
            const terms = ctx.term();
            terms.forEach(term => {
                this.processTerm(term, this.usedPredicates, false);

                const result = this.collectVariablesFromTerm(term);

                if(result.skip) {
                    // In clingo, when there is a arithmetic operation between two elements with different types (for example, between a variable and a tuple), a 'undefined operation'
                    // message is shown. This could be implemented in this parser, however it requires tracking the typing of every element that can be used in arithmetic operations.
                    // As a result, we will simply skip these cases and not throw any errors.
                } else {
                    result.allVars.forEach(v => totalVariables.add(v));
                }
            });
        }

        this.constructTypes.push({
            type: 'Optimization',
            lineStart: ctx.start.line,
            lineEnd: ctx.stop.line,
            indexStart: ctx.start.column,
            indexEnd: ctx.stop.column,
        });

        if(!this.statementsByLine.has(ctx.start.line)) {
            this.statementsByLine.set(ctx.start.line, []);
        }
        this.statementsByLine.get(ctx.start.line).push(ctx.getText());

        const result = Array.from(this.verifyUnsafeVariables(totalVariables, groundedVariables, linkedVariables, contextVariables, groundedContextVariables, linkedContextVariables));
        if(result.length > 0) {
            this.unsafeVariables.push({
                unsafeVariables: result,
                lineStart: ctx.start.line,
                lineEnd: ctx.stop.line,
                indexStart: ctx.start.column,
                indexEnd: ctx.stop.column + 1
            })
        }
    }

    enterShow(ctx) {
        if (!ctx.start || !ctx.stop) return;

        this.constructTypes.push({
            type: 'Show',
            lineStart: ctx.start.line,
            lineEnd: ctx.stop.line,
            indexStart: ctx.start.column,
            indexEnd: ctx.stop.column,
        });

        if(!this.statementsByLine.has(ctx.start.line)) {
            this.statementsByLine.set(ctx.start.line, []);
        }
        this.statementsByLine.get(ctx.start.line).push(ctx.getText());

        // Check for unsafe variables
        let totalVariables = new Set();
        let groundedVariables = new Set();
        let linkedVariables = [];

        let contextVariables = [];
        let groundedContextVariables = [];
        let linkedContextVariables = [];

        if(ctx.show_terms()) {
            const show = ctx.show_terms();

            const showTerm = show.term();
            if(showTerm) {
                this.processTerm(showTerm, this.usedPredicates, false);
                const result = this.collectVariablesFromTerm(showTerm);
                if(result.skip) {
                    // In clingo, when there is a arithmetic operation between two elements with different types (for example, between a variable and a tuple), a 'undefined operation'
                    // message is shown. This could be implemented in this parser, however it requires tracking the typing of every element that can be used in arithmetic operations.
                    // As a result, we will simply skip these cases and not throw any errors.
                } else {
                    result.allVars.forEach(v => totalVariables.add(v));
                }
            }

            const body = show.body();
            if(body) {
                const bodyAtoms = body.body_atoms();
                if(bodyAtoms) {
                    bodyAtoms.forEach(body_atom => {
                        if(body_atom.literal()) {
                            const literal = body_atom.literal();
                            const hasNot = literal.NOT() !== null;
                            const terms = literal.classical_atom().atom().term();
                            if(terms) {
                                terms.forEach(term => {
                                    const result = this.collectVariablesFromTerm(term);
                                    if(result.skip) {
                                        // In clingo, when there is a arithmetic operation between two elements with different types (for example, between a variable and a tuple), a 'undefined operation'
                                        // message is shown. This could be implemented in this parser, however it requires tracking the typing of every element that can be used in arithmetic operations.
                                        // As a result, we will simply skip these cases and not throw any errors.
                                    } else {
                                        result.allVars.forEach(v => {
                                            // Anonymous variables are not considered unsafe if used in a negative literal in the body of a rule
                                            if(!v.startsWith('#Anon'))
                                                totalVariables.add(v)
                                        });
                                        if(!hasNot) {
                                            result.groundableVars.forEach(v => groundedVariables.add(v));
                                        }
                                    }
                                });
                            }
                        } else if(body_atom.builtIn_atom()) {
                            const hasNot = body_atom.NOT() !== null;
                            const builtIn_atom = body_atom.builtIn_atom();

                            const result = this.collectVariablesFromBuiltInAtom(builtIn_atom, hasNot, false);
                            result.vars.forEach(v => totalVariables.add(v));
                            result.groundedVars.forEach(v => groundedVariables.add(v));
                            result.linkedVars.forEach(linkedVar => linkedVariables.push(linkedVar));
                        } else if(body_atom.aggregate_atom_body()) {
                            const aggregate_atom = body_atom.aggregate_atom_body();
                            const term = aggregate_atom.term();
                            if(term) {                                
                                // Clingo only considers aggregate atoms' variables if there is a term of comparison in the aggregate
                                // As a result, if there is no term, we do not need to consider the variables inside the aggregate for unsafety
                                let aggregateVariables = new Set();
                                let aggregateGroundedVariables = new Set();
                                let aggregateLinkedVariables = [];

                                const result = this.collectVariablesFromAggregateAtomBody(aggregate_atom);
                                result.aggregateVariables.forEach(v => aggregateVariables.add(v));
                                result.aggregateGroundedVariables.forEach(v => aggregateGroundedVariables.add(v));
                                result.aggregateLinkedVariables.forEach(linkedVar => aggregateLinkedVariables.push(linkedVar));
                            
                                contextVariables.push(aggregateVariables);
                                groundedContextVariables.push(aggregateGroundedVariables);
                                linkedContextVariables.push(aggregateLinkedVariables);

                                // A special case seems to happen in aggregate atoms in the body. If the aggregate has an equality comparison ('=' or '==') then it is possible for the 
                                // comparison term to be grounded. However, it only happens if the variables inside the comparison term are not used inside the aggregate itself
                                // For example: {q(N)} :- #count{V,X,Y: term(V,X,Y)}=N.     Here, N is grounded because it is used in an equality comparison, and not used inside the aggregate
                                // If we change it to: {q(N)} :- #count{V,X,Y: term(V,X,Y)}=q(N,Y).     Then N is not grounded (nor is Y).
                                // {q(N,Z)} :- #count{V,X,Y: term(V,X,Y)}=q(N,Z).     It can even ground multiple variables, as long as NONE appear inside the aggregate

                                const hasEquality = aggregate_atom.EQ() !== null || aggregate_atom.EQEQ() !== null;
                                const termResult = this.collectVariablesFromTerm(term);

                                if(termResult.skip) {
                                    // In clingo, when there is a arithmetic operation between two elements with different types (for example, between a variable and a tuple), a 'undefined operation'
                                    // message is shown. This could be implemented in this parser, however it requires tracking the typing of every element that can be used in arithmetic operations.
                                    // As a result, we will simply skip these cases and not throw any errors.
                                } else {
                                    // If NONE of the variables in the term appear inside the aggregate and has an equality constraint
                                    if([...termResult.allVars].every(v => !aggregateVariables.has(v)) && hasEquality) {
                                        termResult.allVars.forEach(v => {
                                            totalVariables.add(v)
                                            groundedVariables.add(v)
                                        })
                                    } else {
                                        termResult.allVars.forEach(v => totalVariables.add(v));
                                    }
                                }
                            }
                        }
                    })
                }
            }
        }

        const result = Array.from(this.verifyUnsafeVariables(totalVariables, groundedVariables, linkedVariables, [], [], []));
        if(result.length > 0) {
            this.unsafeVariables.push({
                unsafeVariables: result,
                lineStart: ctx.start.line,
                lineEnd: ctx.stop.line,
                indexStart: ctx.start.column,
                indexEnd: ctx.stop.column + 1
            })
        }
    }

    enterHead(ctx) {
        if (!ctx.head_atoms()) return;

        if(ctx.head_atoms()) {
            const atoms = ctx.head_atoms();
            atoms.forEach(headAtom => {
                if (headAtom.literal()) {
                    const atom = headAtom.literal().classical_atom().atom();
                    if (!atom || !atom.start || !atom.stop) return;
                    const predicateName = atom.CONSTANT().getText();
                    const terms = atom.term();
                    const arity = terms ? terms.length : 0;

                    if(terms) {
                        terms.forEach(term => {
                            this.processTerm(term, this.usedPredicates, true);
                        });
                    }

                    const predicateKey = `${predicateName}/${arity}`;
                    const lineStart = atom.start.line;
                    const lineEnd = atom.stop.line;
                    const indexStart = atom.start.column;
                    let indexEnd = atom.stop.column;

                    if(indexEnd ==  indexStart) {
                        indexEnd += predicateName.length;
                    }

                    if (!this.definedPredicates.has(predicateKey)) {
                        this.definedPredicates.set(predicateKey, []);
                    }
                    this.definedPredicates.get(predicateKey).push({ lineStart, lineEnd, indexStart, indexEnd });

                }
            });
        }
        
    }

    enterBody(ctx) {
        if (!ctx.body_atoms()) return;
        const atoms = ctx.body_atoms();
        if(atoms) {
            atoms.forEach(bodyAtom => {
                if (bodyAtom.literal()) {
                    const atom = bodyAtom.literal().classical_atom().atom();
                    if (!atom || !atom.start || !atom.stop) return;
                    const predicateName = atom.CONSTANT().getText();
                    const terms = atom.term();
                    const arity = terms ? terms.length : 0;

                    if(terms) {
                        terms.forEach(term => {
                            this.processTerm(term, this.usedPredicates, true);
                        });
                    }

                    const predicateKey = `${predicateName}/${arity}`;

                    const lineStart = atom.start.line;
                    const lineEnd = atom.stop.line;
                    const indexStart = atom.start.column;
                    let indexEnd = atom.stop.column;

                    if(indexEnd ==  indexStart) {
                        indexEnd += predicateName.length;
                    }

                    if (!this.usedPredicates.has(predicateKey)) {
                        this.usedPredicates.set(predicateKey, []);
                    }
                    this.usedPredicates.get(predicateKey).push({ lineStart, lineEnd, indexStart, indexEnd });

                } else if (bodyAtom.choice()) {
                    const choice = bodyAtom.choice();
                    const choice_elements = choice.choice_element();

                    if (choice_elements) {
                        choice_elements.forEach(choice_element => {
                            const head_atom = choice_element.choiceHead_atoms();
                            
                            if(head_atom.literal()) {
                                const atom = head_atom.literal().classical_atom().atom();
                                if (!atom || !atom.start || !atom.stop) return;
                                const predicateName = atom.CONSTANT().getText();
                                const terms = atom.term();
                                const arity = terms ? terms.length : 0;

                                const predicateKey = `${predicateName}/${arity}`;

                                const lineStart = atom.start.line;
                                const lineEnd = atom.stop.line;
                                const indexStart = atom.start.column;
                                let indexEnd = atom.stop.column;

                                if(indexEnd ==  indexStart) {
                                    indexEnd += predicateName.length;
                                }

                                if (!this.usedPredicates.has(predicateKey)) {
                                    this.usedPredicates.set(predicateKey, []);
                                }
                                this.usedPredicates.get(predicateKey).push({ lineStart, lineEnd, indexStart, indexEnd });
                            }

                            const choiceBody_atoms = choice_element.choiceBody_atoms();
                            choiceBody_atoms.forEach(body_atom => {
                                if(body_atom.literal()) {
                                    const atom = body_atom.literal().classical_atom().atom();
                                    if (!atom || !atom.start || !atom.stop) return;
                                    const predicateName = atom.CONSTANT().getText();
                                    const terms = atom.term();
                                    const arity = terms ? terms.length : 0;

                                    const predicateKey = `${predicateName}/${arity}`;

                                    const lineStart = atom.start.line;
                                    const lineEnd = atom.stop.line;
                                    const indexStart = atom.start.column;
                                    let indexEnd = atom.stop.column;

                                    if(indexEnd ==  indexStart) {
                                        indexEnd += predicateName.length;
                                    }

                                    if (!this.usedPredicates.has(predicateKey)) {
                                        this.usedPredicates.set(predicateKey, []);
                                    }
                                    this.usedPredicates.get(predicateKey).push({ lineStart, lineEnd, indexStart, indexEnd });
                                }
                            });
                        });
                    }
                } 
            });
        }
    }

    enterBuiltIn_atom(ctx) {
        if(ctx.term()) {
            const terms = ctx.term();
            terms.forEach(term => {
                this.processTerm(term, this.usedPredicates, false);
            });
        }
    }

    enterAggregate_atom_head(ctx) {
        if (!ctx.start || !ctx.stop) return;

        if(ctx.term()) {
            const term = ctx.term();
            this.processTerm(term, this.usedPredicates, false);
        }

        const aggregate_elements = ctx.aggregate_element_head();
        aggregate_elements.forEach(aggregateElement => {
            if(aggregateElement.term()) {
                const terms = aggregateElement.term();
                terms.forEach(term => {
                    this.processTerm(term, this.usedPredicates, false);
                });
            }

            if(aggregateElement.aggregate_literal()) {
                const aggregateLiteral = aggregateElement.aggregate_literal();
                if(aggregateLiteral.literal()) {
                    const atom = aggregateLiteral.literal().classical_atom().atom();
                    if (!atom || !atom.start || !atom.stop) return;
                    const predicateName = atom.CONSTANT().getText();
                    const terms = atom.term();
                    const arity = terms ? terms.length : 0;

                    if(terms) {
                        terms.forEach(term => {
                            this.processTerm(term, this.usedPredicates, true);
                        });
                    }

                    const predicateKey = `${predicateName}/${arity}`;

                    const lineStart = atom.start.line;
                    const lineEnd = atom.stop.line;
                    const indexStart = atom.start.column;
                    let indexEnd = atom.stop.column;

                    if(indexEnd ==  indexStart) {
                        indexEnd += predicateName.length;
                    }

                    if (!this.usedPredicates.has(predicateKey)) {
                        this.usedPredicates.set(predicateKey, []);
                    }
                    this.usedPredicates.get(predicateKey).push({ lineStart, lineEnd, indexStart, indexEnd });
                }
            }

        });
        
    }

    enterAggregate_atom_body(ctx) {
        if (!ctx.start || !ctx.stop) return;

        if(ctx.term()) {
            const term = ctx.term();
            this.processTerm(term, this.usedPredicates, false);
        }

        const aggregate_elements = ctx.aggregate_element_body();
        aggregate_elements.forEach(aggregateElement => {
            if(aggregateElement.term()) {
                const terms = aggregateElement.term();
                terms.forEach(term => {
                    this.processTerm(term, this.usedPredicates, false);
                });
            }

            if(aggregateElement.aggregate_literal()) {
                const aggregate_literals = aggregateElement.aggregate_literal();
                aggregate_literals.forEach(aggregateLiteral => {
                    if(aggregateLiteral.literal()) {
                        const atom = aggregateLiteral.literal().classical_atom().atom();
                        if (!atom || !atom.start || !atom.stop) return;
                        const predicateName = atom.CONSTANT().getText();
                        const terms = atom.term();
                        const arity = terms ? terms.length : 0;

                        if(terms) {
                            terms.forEach(term => {
                                this.processTerm(term, this.usedPredicates, true);
                            });
                        }

                        const predicateKey = `${predicateName}/${arity}`;

                        const lineStart = atom.start.line;
                        const lineEnd = atom.stop.line;
                        const indexStart = atom.start.column;
                        let indexEnd = atom.stop.column;

                        if(indexEnd ==  indexStart) {
                            indexEnd += predicateName.length;
                        }

                        if (!this.usedPredicates.has(predicateKey)) {
                            this.usedPredicates.set(predicateKey, []);
                        }
                        this.usedPredicates.get(predicateKey).push({ lineStart, lineEnd, indexStart, indexEnd });
                    }
                });
            }

        });
        
    }

    enterUnclosed_comment(ctx) {
        if (!ctx.start) return;
        // Manually throw an error for unclosed comments
        // This is a workaround for the ANTLR4 parser not handling unclosed comments properly
        const lines = ctx.start.getInputStream().strdata.split('\n');

        this.syntaxErrors.push({
            lineStart: ctx.start.line,
            lineEnd: lines.length,
            indexStart: ctx.start.column,
            indexEnd: lines[lines.length - 1].length,
            message: "Error: Unclosed Block Comment (starting at line " + ctx.start.line + ", column " + ctx.start.column + ")",
            offendingSymbol: null
        });

        this.hasUnclosedComment = true;
    }

    processTerm(term, predicateMap, isArgument) {
        if (!term || !term.start || !term.stop) return;

        const additiveTerm = term.additiveTerm();

        if(additiveTerm) {
            const multiplicativeTerms = additiveTerm.multiplicativeTerm();
            if(multiplicativeTerms) {
                multiplicativeTerms.forEach(multiplicativeTerm => {
                    const powerTerms = multiplicativeTerm.powerTerm();
                    if(powerTerms) {
                        powerTerms.forEach(powerTerm => {
                            const unaryTerms = powerTerm.unaryTerm();
                            if(unaryTerms) {
                                unaryTerms.forEach(unaryTerm => {
                                    if (!isArgument && unaryTerm.simpleTerm()) {
                                        if(unaryTerm.simpleTerm().CONSTANT()) {
                                            const predicateName = unaryTerm.simpleTerm().CONSTANT().getText();
                                            const predicateKey = predicateName + '/0';

                                            const lineStart = unaryTerm.start.line;
                                            const lineEnd = unaryTerm.stop.line;
                                            const indexStart = unaryTerm.start.column;
                                            let indexEnd = unaryTerm.stop.column;

                                            if(indexEnd ==  indexStart) {
                                                indexEnd += predicateName.length;
                                            }

                                            if (!predicateMap.has(predicateKey)) {
                                                predicateMap.set(predicateKey, []);
                                            }
                                            predicateMap.get(predicateKey).push({ lineStart, lineEnd, indexStart, indexEnd });
                                        } 
                                    } else if (unaryTerm.functionTerm()) {
                                        this.processFunctionTerm(unaryTerm.functionTerm(), predicateMap);
                                    } else if (unaryTerm.tuple()) {
                                        this.processTuple(unaryTerm.tuple(), predicateMap);
                                    }
                                });
                            }
                        });
                    }
                });
            }
        }
    }

    // Used to recursively process function terms
    processFunctionTerm(functionTerm, predicateMap) {
        if (!functionTerm || !functionTerm.start || !functionTerm.stop) return;
        const predicateName = functionTerm.CONSTANT().getText();
        const terms = functionTerm.term();
        const arity = terms ? terms.length : 0;

        const predicateKey = `${predicateName}/${arity}`;

        const lineStart = functionTerm.start.line;
        const lineEnd = functionTerm.stop.line;
        const indexStart = functionTerm.start.column;
        let indexEnd = functionTerm.stop.column;

        if(indexEnd ==  indexStart) {
            indexEnd += predicateName.length;
        }
    
        if (!predicateMap.has(predicateKey)) {
            predicateMap.set(predicateKey, []);
        }
        predicateMap.get(predicateKey).push({ lineStart, lineEnd, indexStart, indexEnd });
    
        if(terms) {
            terms.forEach(term => {
                this.processTerm(term, predicateMap, true);
            });
        }
    }

    // Used to recursively process tuples
    processTuple(tuple, predicateMap) {
        if (!tuple) return;
        
        if(tuple.term()) {
            const terms = tuple.term();
        
            terms.forEach(term => {
                this.processTerm(term, predicateMap, true);
            });
        }
    }

    collectVariablesFromTerm(term) {
        if(!term || term.getText() == '') return {allVars: new Set(), groundableVars: new Set(), skip: false, hasNonVarOrInt: false};

        let allVars = [];

        const isArithmetic = this.isTermArithmetic(term);

        if(isArithmetic) {
            let hasNonVarOrInt = false;
            let hasNonGroundableOperator = false;
            let skip = false;
            const additiveTerm = term.additiveTerm();
            if(additiveTerm) {
                const multiplicativeTerms = additiveTerm.multiplicativeTerm();
                if(multiplicativeTerms.length > 1) {
                    const hasOR = additiveTerm.OR().length > 0;
                    const hasExclusiveOR = additiveTerm.EXCLUSIVE_OR().length > 0;
                    if(hasOR || hasExclusiveOR) {
                        hasNonGroundableOperator = true;
                    }
                }

                multiplicativeTerms.forEach(multiplicativeTerm => {
                    const powerTerms = multiplicativeTerm.powerTerm();
                    if(powerTerms) {
                        if(powerTerms.length > 1) {
                            const hasDivision = multiplicativeTerm.DIVISION().length > 0;
                            const hasModulo = multiplicativeTerm.MODULO().length > 0;
                            const hasAnd = multiplicativeTerm.AND().length > 0;

                            if(hasDivision || hasModulo || hasAnd) {
                                hasNonGroundableOperator = true;
                            }
                        }

                        powerTerms.forEach(powerTerm => {
                            const unaryTerms = powerTerm.unaryTerm();

                            if(unaryTerms) {
                                if(unaryTerms.length > 1) {
                                    hasNonGroundableOperator = true;
                                }
                                unaryTerms.forEach(unaryTerm => {
                                    const result = this.collectVariablesFromUnaryTerm(unaryTerm);
                                    result.allVars.forEach(v => allVars.push(v));

                                    if(result.hasNonGroundableOperator)
                                        hasNonGroundableOperator = true
                                    if(!result.isVarOrInt) {
                                        hasNonVarOrInt = true;
                                    }
                                    if(result.skip)
                                        skip = true;
                                });
                            }
                        });
                    }
                });
            }

            if(hasNonVarOrInt) {
                // If atleast one arithmetic term has something other than vars and ints, then we do not need to consider any variables from these terms
                return {allVars: new Set(), groundableVars: new Set(), skip: true, hasNonVarOrInt: true, hasNonGroundableOperator: false};
            } else {
                if(hasNonGroundableOperator) {
                    return {allVars: new Set(allVars), groundableVars: new Set(), skip: skip, hasNonVarOrInt: false, hasNonGroundableOperator: true};
                }

                if(allVars.length == 1) {
                    return {allVars: new Set(allVars), groundableVars: new Set(allVars), skip: skip, hasNonVarOrInt: false, hasNonGroundableOperator: false};
                } else {
                    return {allVars: new Set(allVars), groundableVars: new Set(), skip: skip, hasNonVarOrInt: false, hasNonGroundableOperator: false};
                }
            }
        } else {
            const unaryTerm = term.additiveTerm().multiplicativeTerm()[0].powerTerm()[0].unaryTerm()[0];
            const result = this.collectVariablesFromUnaryTerm(unaryTerm);
            return {allVars: new Set(result.allVars), groundableVars: result.groundableVars, skip: result.skip, hasNonVarOrInt: !result.isVarOrInt, hasNonGroundableOperator: false}
        }
    }

    collectVariablesFromUnaryTerm(unaryTerm) {
        let isVarOrInt = false;
        let allVars = [];
        let groundableVars = new Set();
        let skip = false;
        let hasNonGroundableOperator = false;

        if(unaryTerm.simpleTerm()) {
            const simpleTerm = unaryTerm.simpleTerm();
            if(simpleTerm.VARIABLE()) {
                isVarOrInt = true;
                allVars.push(simpleTerm.VARIABLE().getText());
                groundableVars.add(simpleTerm.VARIABLE().getText());
            } else if(simpleTerm.UNDERSCORE()) {
                isVarOrInt = true;
                allVars.push("#Anon" + this.anonCounter);
                groundableVars.add("#Anon" + this.anonCounter);
                this.anonCounter += 1;
            } else if(simpleTerm.integer()) {
                const integer = simpleTerm.integer();
                if(integer.interval()) {
                    const interval = integer.interval();
                    if(interval.CONSTANT().length == 0) {
                        isVarOrInt = true;
                    }
                    if(interval.VARIABLE().length > 0) {
                        const variables = interval.VARIABLE();
                        variables.forEach(variable => {
                            allVars.push(variable.getText())
                            groundableVars.add(variable.getText())
                        })
                    }
                }
            }
        } else if(unaryTerm.functionTerm()) {
            const functionTerm = unaryTerm.functionTerm();
            const terms = functionTerm.term();
            if(terms) {
                terms.forEach(t => {
                    const result = this.collectVariablesFromTerm(t);
                    result.allVars.forEach(v => allVars.push(v));
                    result.groundableVars.forEach(v => groundableVars.add(v));
                });
            }
        } else if(unaryTerm.tuple()) {
            const tuple = unaryTerm.tuple();
            const terms = tuple.term();
            if(terms) {
                terms.forEach(t => {
                    const result = this.collectVariablesFromTerm(t);
                    result.allVars.forEach(v => allVars.push(v));
                    result.groundableVars.forEach(v => groundableVars.add(v));
                    if(result.hasNonGroundableOperator)
                        hasNonGroundableOperator = true
                    if(result.skip)
                        skip = result.skip
                });
            }
        } else if(unaryTerm.term()) {
            const innerTerm = unaryTerm.term();
            const result = this.collectVariablesFromTerm(innerTerm);

            result.allVars.forEach(v => allVars.push(v));
            result.groundableVars.forEach(v => groundableVars.add(v));

            hasNonGroundableOperator = result.hasNonGroundableOperator;
            isVarOrInt = !result.hasNonVarOrInt;
            skip = result.skip;
        }

        return {allVars: allVars, groundableVars: groundableVars, isVarOrInt: isVarOrInt, skip: skip, hasNonGroundableOperator: hasNonGroundableOperator};
    }

    isTermArithmetic(term) {
        if (!term) return false;

        const additiveTerm = term.additiveTerm();
        if (additiveTerm) {
            const multiplicativeTerms = additiveTerm.multiplicativeTerm();
            if (multiplicativeTerms) {
                if (multiplicativeTerms.length > 1) {
                    return true;
                } else {
                    for(let i = 0; i < multiplicativeTerms.length; i++) {
                        const multiplicativeTerm = multiplicativeTerms[i];
                        const powerTerms = multiplicativeTerm.powerTerm();
                        if (powerTerms) {
                            if (powerTerms.length > 1) {
                                return true;
                            }
                            for(let j = 0; j < powerTerms.length; j++) {
                                const powerTerm = powerTerms[i];
                                const unaryTerms = powerTerm.unaryTerm();
                                if (unaryTerms) {
                                    if (unaryTerms.length > 1) {
                                        return true;
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }

        return false;
    }

    collectVariablesFromBuiltInAtom(builtIn_atom, hasNot, isOnHead) {
        let vars = new Set();
        let groundedVars = new Set();
        let linkedVars = [];

        const term1 = builtIn_atom.term(0);
        const term2 = builtIn_atom.term(1);
        
        const result1 = this.collectVariablesFromTerm(term1);
        const result2 = this.collectVariablesFromTerm(term2);

        if(result1.skip || result2.skip) {
            // In clingo, when there is a arithmetic operation between two elements with different types (for example, between a variable and a tuple), a 'undefined operation'
            // message is shown. This could be implemented in this parser, however it requires tracking the typing of every element that can be used in arithmetic operations.
            // As a result, we will simply skip these cases and not throw any errors.
        } else {
            result1.allVars.forEach(v => vars.add(v));
            result2.allVars.forEach(v => vars.add(v));

            const comparator = builtIn_atom.COMPARATOR() !== null ? builtIn_atom.COMPARATOR().getText() : '';
            const hasEquality = builtIn_atom.EQ() !== null || builtIn_atom.EQEQ() !== null;

            if(isOnHead) {
                if((!hasNot && comparator == '!=') || (hasNot && hasEquality)) {
                    if(result1.groundableVars.size > 0 && result2.allVars.size == 0) {
                        result1.groundableVars.forEach(v => groundedVars.add(v));
                    } else if(result1.allVars.size == 0 && result2.groundableVars.size > 0) {
                        result2.groundableVars.forEach(v => groundedVars.add(v));
                    } else if(result1.groundableVars.size > 0 && result2.groundableVars.size > 0) {
                        linkedVars.push({set1: result1.groundableVars, set2: result2.groundableVars});
                    }
                }
            } else {
                if((!hasNot && hasEquality) || (hasNot && comparator == '!=')) {
                    if(result1.groundableVars.size > 0 && result2.allVars.size == 0) {
                        result1.groundableVars.forEach(v => groundedVars.add(v));
                    } else if(result1.allVars.size == 0 && result2.groundableVars.size > 0) {
                        result2.groundableVars.forEach(v => groundedVars.add(v));
                    } else if(result1.groundableVars.size > 0 && result2.groundableVars.size > 0) {
                        linkedVars.push({ set1: result1.groundableVars, set2: result2.groundableVars } );
                    }
                }
            }
        }
        
        return { vars, groundedVars, linkedVars };
    }

    collectVariablesFromAggregateAtomHead(aggregate_atom) {
        // These variables are only available inside the aggregate atom context
        // As a result, they must be stored separately to ensure we can verify for unsafety inside the given context
        let aggregateVariables = new Set();
        let aggregateGroundedVariables = new Set();
        let aggregateLinkedVariables = [];

        if(aggregate_atom.aggregate_element_head()) {
            const aggregate_elements = aggregate_atom.aggregate_element_head();
            aggregate_elements.forEach(aggregateElement => {
                const terms = aggregateElement.term();
                if(terms) {
                    terms.forEach(term => {
                        const result = this.collectVariablesFromTerm(term);
                        if(result.skip) {
                            // In clingo, when there is a arithmetic operation between two elements with different types (for example, between a variable and a tuple), a 'undefined operation'
                            // message is shown. This could be implemented in this parser, however it requires tracking the typing of every element that can be used in arithmetic operations.
                            // As a result, we will simply skip these cases and not throw any errors.
                        } else {
                            result.allVars.forEach(v => aggregateVariables.add(v));
                        }
                    });
                }

                const aggregateLiteral = aggregateElement.aggregate_literal();
                if(aggregateLiteral) {
                    if(aggregateLiteral.literal()) {
                        const terms = aggregateLiteral.literal().classical_atom().atom().term();
                        if(terms) {
                            terms.forEach(term => {
                                const result = this.collectVariablesFromTerm(term);
                                if(result.skip) {
                                    // In clingo, when there is a arithmetic operation between two elements with different types (for example, between a variable and a tuple), a 'undefined operation'
                                    // message is shown. This could be implemented in this parser, however it requires tracking the typing of every element that can be used in arithmetic operations.
                                    // As a result, we will simply skip these cases and not throw any errors.
                                } else {
                                    result.allVars.forEach(v => aggregateVariables.add(v));
                                }
                            });
                        }
                    } else if(aggregateLiteral.builtIn_atom) {
                        const hasNot = aggregateLiteral.NOT() !== null;
                        const builtIn_atom = aggregateLiteral.builtIn_atom();
                        
                        const result = this.collectVariablesFromBuiltInAtom(builtIn_atom, hasNot, false);

                        result.vars.forEach(v => aggregateVariables.add(v));
                        result.groundedVars.forEach(v => aggregateGroundedVariables.add(v));
                        result.linkedVars.forEach(linkedVar => aggregateLinkedVariables.push(linkedVar));
                    }
                }
            });
        }

        return {aggregateVariables, aggregateGroundedVariables, aggregateLinkedVariables};
    }

    collectVariablesFromAggregateAtomBody(aggregate_atom) {
        // These variables are only available inside the aggregate atom context
        // As a result, they must be stored separately to ensure we can verify for unsafety inside the given context
        let aggregateVariables = new Set();
        let aggregateGroundedVariables = new Set();
        let aggregateLinkedVariables = [];

        if(aggregate_atom.aggregate_element_body()) {
            const aggregate_elements = aggregate_atom.aggregate_element_body();
            aggregate_elements.forEach(aggregateElement => {
                const terms = aggregateElement.term();
                if(terms) {
                    terms.forEach(term => {
                        const result = this.collectVariablesFromTerm(term);
                        if(result.skip) {
                            // In clingo, when there is a arithmetic operation between two elements with different types (for example, between a variable and a tuple), a 'undefined operation'
                            // message is shown. This could be implemented in this parser, however it requires tracking the typing of every element that can be used in arithmetic operations.
                            // As a result, we will simply skip these cases and not throw any errors.
                        } else {
                            result.allVars.forEach(v => aggregateVariables.add(v));
                        }
                    });
                }

                const aggregate_literals = aggregateElement.aggregate_literal();
                if(aggregate_literals) {
                    aggregate_literals.forEach(aggregateLiteral => {
                        if(aggregateLiteral.literal()) {
                            const literal = aggregateLiteral.literal();
                            const hasNot = literal.NOT() !== null;
                            const terms = literal.classical_atom().atom().term();
                            if(terms) {
                                terms.forEach(term => {
                                    const result = this.collectVariablesFromTerm(term);
                                    if(result.skip) {
                                        // In clingo, when there is a arithmetic operation between two elements with different types (for example, between a variable and a tuple), a 'undefined operation'
                                        // message is shown. This could be implemented in this parser, however it requires tracking the typing of every element that can be used in arithmetic operations.
                                        // As a result, we will simply skip these cases and not throw any errors.
                                    } else {
                                        result.allVars.forEach(v => aggregateVariables.add(v));
                                        if(!hasNot) {
                                            result.groundableVars.forEach(v => aggregateGroundedVariables.add(v))
                                        }
                                    }
                                });
                            }
                        } else if(aggregateLiteral.builtIn_atom) {
                            const hasNot = aggregateLiteral.NOT() !== null;
                            const builtIn_atom = aggregateLiteral.builtIn_atom();
                            
                            const result = this.collectVariablesFromBuiltInAtom(builtIn_atom, hasNot, false);

                            result.vars.forEach(v => aggregateVariables.add(v));
                            result.groundedVars.forEach(v => aggregateGroundedVariables.add(v));
                            result.linkedVars.forEach(linkedVar => aggregateLinkedVariables.push(linkedVar));
                        }
                    });
                }
            });
        }

        return {aggregateVariables, aggregateGroundedVariables, aggregateLinkedVariables};
    }

    verifyUnsafeVariables(totalVariables, groundedVariables, linkedVariables, contextVariables, groundedContextVariables, linkedContextVariables) {
        let localUnsafeVariables = new Set();

        let hasChanged = true;
        
        while(hasChanged) {
            hasChanged = false;

            linkedVariables.forEach(linkedVarArray => {
                const set1 = linkedVarArray.set1;
                const set2 = linkedVarArray.set2;

                for(const groundedVar of [...groundedVariables]) {
                    let changedHere = false;

                    if (set1.delete(groundedVar)) changedHere = true;
                    if (set2.delete(groundedVar)) changedHere = true;

                    if (set1.size === 0 && set2.size > 0) {
                        set2.forEach(v => groundedVariables.add(v));
                        set2.clear();
                        changedHere = true;
                    }

                    if (set2.size === 0 && set1.size > 0) {
                        set1.forEach(v => groundedVariables.add(v));
                        set1.clear();
                        changedHere = true;
                    }

                    if (changedHere) hasChanged = true;
                }
            });
        }

        totalVariables.forEach(v => {
            if(!groundedVariables.has(v)) {
                localUnsafeVariables.add(v);
            }
        });

        for(let i = 0; i < contextVariables.length; i++) {
            const currentContextVars = contextVariables[i];
            const currentGroundedContextVars = groundedContextVariables[i];
            const currentLinkedContextVars = linkedContextVariables[i];

            hasChanged = true;
            while(hasChanged) {
                hasChanged = false;

                currentLinkedContextVars.forEach(linkedVarArray => {
                    const set1 = linkedVarArray.set1;
                    const set2 = linkedVarArray.set2;

                    for(const groundedVar of new Set([...currentGroundedContextVars, ...groundedVariables])) {
                        let changedHere = false;

                        if (set1.delete(groundedVar)) changedHere = true;
                        if (set2.delete(groundedVar)) changedHere = true;

                        if (set1.size === 0 && set2.size > 0) {
                            set2.forEach(v => currentGroundedContextVars.add(v));
                            set2.clear();
                            changedHere = true;
                        }

                        if (set2.size === 0 && set1.size > 0) {
                            set1.forEach(v => currentGroundedContextVars.add(v));
                            set1.clear();
                            changedHere = true;
                        }

                        if (changedHere) hasChanged = true;
                    }
                });
            }

            currentContextVars.forEach(v => {
                if(!groundedVariables.has(v) && !currentGroundedContextVars.has(v)) {
                    localUnsafeVariables.add(v);
                }
            });
        }

        return localUnsafeVariables;
    }

    exitProgram(ctx) {

    }

    getSyntaxErrors() {
        return this.syntaxErrors;
    }

    getConstructTypes() {
        return this.constructTypes;
    }

    getDefinedPredicates() {
        return this.definedPredicates;
    }

    getUsedPredicates() {
        return this.usedPredicates;
    }

    getStatementsByLine() {
        return this.statementsByLine;
    }

    getLineRanges() {
        return this.lineRanges;
    }

    getUnsafeVariables() {
        return this.unsafeVariables;
    }

    getHasGenerator() {
        return this.hasGenerator;
    }

    getHasUnclosedComment() {
        return this.hasUnclosedComment;
    }
}

// Parse function with custom error handling
export function parse(input) {
    try {
        const chars = new antlr4.InputStream(input);
        const lexer = new ASPLexer(chars);
        const tokens = new antlr4.CommonTokenStream(lexer);
        const parser = new ASPParser(tokens);

        const parserErrorListener = new ASPParserErrorListener();
		parser.removeErrorListeners();  // Remove default error listener
		parser.addErrorListener(parserErrorListener);

        const lexerErrorListener = new ASPLexerErrorListener();
        lexer.removeErrorListeners();  // Remove default error listener
        lexer.addErrorListener(lexerErrorListener);

        parser.buildParseTrees = true;

        const tree = parser.program();
        const listener = new VerboseASPListener();
        const walker = new antlr4.tree.ParseTreeWalker();
        walker.walk(listener, tree);

        const hasGenerator = listener.getHasGenerator();
        const hasUnclosedComment = listener.getHasUnclosedComment();
        const parserSyntaxErrors = parserErrorListener.getSyntaxErrors();
        const listenerSyntaxErrors = listener.getSyntaxErrors();
        const tokenErrors = lexerErrorListener.getTokenErrors();
        const constructTypes = listener.getConstructTypes();
        const definedPredicates = listener.getDefinedPredicates();
        const usedPredicates = listener.getUsedPredicates();
        const statementsByLine = listener.getStatementsByLine();
        const lineRanges = listener.getLineRanges();
        const unsafeVariables = listener.getUnsafeVariables();

        console.log(constructTypes)

        return {syntaxErrors: [...parserSyntaxErrors, ...listenerSyntaxErrors], tokenErrors, constructTypes, definedPredicates, usedPredicates, statementsByLine, lineRanges, unsafeVariables, 
            hasGenerator, hasUnclosedComment};

    } catch (error) {
        console.error('Unexpected error during parsing:', error);
        return null;
    }
}

export { antlr4 };