import antlr4 from 'antlr4';
import ASPLexer from '../../generated/src/parser/grammar/ASPLexer.mjs';
import ASPParser from '../../generated/src/parser/grammar/ASPParser.mjs';
import ASPListener from '../../generated/src/parser/grammar/ASPListener.mjs';
import { error } from 'console';

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
                while(previousLineText.trim() === '') {
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
        const currentLineText = lines[line - 1]; // Get the current line text

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
        this.statementsByLine = new Map();
        this.definedPredicates = new Map();
        this.usedPredicates = new Map();
        this.lineRanges = new Map();
        this.unsafeVariables = [];
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
    }

    enterConstant(ctx) {
        if (!ctx.start || !ctx.stop) return;

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

        const head = ctx.head();
        if(head) {
            if(head.choice()) {
                const choice_elements = head.choice().choice_element();
                
                if(choice_elements) {
                    choice_elements.forEach(choice_element => {
                        let choiceVariables = new Set();
                        let choiceGroundedVariables = new Set();
                        let choiceLinkedVariables = [];

                        const head_atom = choice_element.choiceHead_atoms();
                        
                        if(head_atom.literal()) {
                            const terms = head_atom.literal().classical_atom().atom().term();
                            if(terms) {
                                terms.forEach(term => {
                                    const vars = this.collectVariablesFromTerm(term);
                                    vars.forEach(v => choiceVariables.add(v));
                                });
                            }
                        } else if(head_atom.assignment()) {
                            // TODO: understand how to handle unsafe variables in assignments
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
                                    const terms = body_atom.literal().classical_atom().atom().term();
                                    if(terms) {
                                        terms.forEach(term => {
                                            const vars = this.collectVariablesFromTerm(term);
                                            vars.forEach(v => choiceGroundedVariables.add(v));
                                        });
                                    }
                                } else if(body_atom.assignment()) {
                                    // TODO: understand how to handle unsafe variables in assignments
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
            } else if(head.aggregate_atom_head()) {
                const aggregate_atom = head.aggregate_atom_head();

                if(aggregate_atom.term()) {
                    const vars = this.collectVariablesFromTerm(aggregate_atom.term());
                    vars.forEach(v => totalVariables.add(v));
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
                                const vars = this.collectVariablesFromTerm(term);
                                vars.forEach(v => totalVariables.add(v));
                            });
                        }
                    } else if(head_atom.builtIn_atom()) {
                        const hasNot = head_atom.NOT() !== null;
                        const builtIn_atom = head_atom.builtIn_atom();

                        const result = this.collectVariablesFromBuiltInAtom(builtIn_atom, hasNot, true);
                        result.vars.forEach(v => totalVariables.add(v));
                        result.groundedVars.forEach(v => groundedVariables.add(v));
                        result.linkedVars.forEach(linkedVar => linkedVariables.push(linkedVar));

                    } else if(head_atom.assignment()) {
                        // TODO: understand how to handle unsafe variables in assignments
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
                indexEnd: ctx.stop.column
            })
        }
    }

    enterChoice_rule(ctx) {
        if (!ctx.start || !ctx.stop) return;

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
                                const vars = this.collectVariablesFromTerm(term);
                                vars.forEach(v => choiceVariables.add(v));
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

                    } else if(head_atom.assignment()) {
                        const assignment = head_atom.assignment();
                        const assignee = assignment.assignee();
                        const assigned_value = assignment.assigned_value();

                        if(assignee.term()) {
                            this.processTerm(assignee.term(), this.definedPredicates, false);
                        } else if (assignee.literal()) {
                            const atom = assignee.literal().classical_atom().atom();
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

                        if(assigned_value.term()) {
                            this.processTerm(assigned_value.term(), this.usedPredicates, false);
                        } else if(assigned_value.classical_atom()) {
                            const atom = assigned_value.classical_atom().atom();
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
                            const atom = body_atom.literal().classical_atom().atom();
                            if (!atom || !atom.start || !atom.stop) return;
                            const predicateName = atom.CONSTANT().getText();
                            const terms = atom.term();
                            const arity = terms ? terms.length : 0;

                            if(terms) {
                                terms.forEach(term => {
                                    this.processTerm(term, this.usedPredicates, true);

                                    const vars = this.collectVariablesFromTerm(term);
                                    vars.forEach(v => choiceGroundedVariables.add(v));
                                    if(!hasMultipleElements) {
                                        vars.forEach(v => headGroundedVariables.add(v));
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

                        } else if(body_atom.assignment()) {
                            const assignment = body_atom.assignment();
                            const assignee = assignment.assignee();
                            const assigned_value = assignment.assigned_value();

                            if(assignee.term()) {
                                this.processTerm(assignee.term(), this.usedPredicates, false);
                            } else if (assignee.literal()) {
                                const atom = assignee.literal().classical_atom().atom();
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

                            if(assigned_value.term()) {
                                this.processTerm(assigned_value.term(), this.usedPredicates, false);
                            } else if(assigned_value.classical_atom()) {
                                const atom = assigned_value.classical_atom().atom();
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
            body_atoms.forEach(body_atom => {
                if(body_atom.literal()) {
                    const terms = body_atom.literal().classical_atom().atom().term();
                    if(terms) {
                        terms.forEach(term => {
                            const vars = this.collectVariablesFromTerm(term);
                            vars.forEach(v => groundedVariables.add(v));
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
                    // O term que é usado na comparaçao do aggregate deve ir para as totalVariables
                    const aggregate_atom = body_atom.aggregate_atom_body();
                    const term = aggregate_atom.term();
                    if(term) {
                        const vars = this.collectVariablesFromTerm(term);
                        vars.forEach(v => {
                            totalVariables.add(v)
                            if(headGroundedVariables.has(v)) {
                                groundedVariables.add(v);
                            }
                        });

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
                    }
                } else if(body_atom.assignment()) {
                    // TODO: understand how to handle unsafe variables in assignments
                } else if(body_atom.choice()) {
                    // TODO: I think we do not need to check choices in the body of a choice rule for unsafe variables, but need to confirm   
                }
            });
        }

        /* console.log('totalVars: ', totalVariables);
        console.log('groundedVars: ', groundedVariables);
        console.log('linkedVars: ', linkedVariables);
        console.log('contextVars: ', contextVariables);
        console.log('groundedContextVars: ', groundedContextVariables);
        console.log('linkedContextVars: ', linkedContextVariables);
        console.log('headGroundedVars: ', headGroundedVariables) */

        const result = Array.from(this.verifyUnsafeVariables(totalVariables, groundedVariables, linkedVariables, contextVariables, groundedContextVariables, linkedContextVariables));
        if(result.length > 0) {
            this.unsafeVariables.push({
                unsafeVariables: result,
                lineStart: ctx.start.line,
                lineEnd: ctx.stop.line,
                indexStart: ctx.start.column,
                indexEnd: ctx.stop.column
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
    }

    enterOptimization(ctx) {
        if (!ctx.start || !ctx.stop) return;

        const optimizationBodys = ctx.optimizationBody();

        optimizationBodys.forEach(optimizationBody => {
            if(optimizationBody.aggregate_element()) {
                const aggregateElement = optimizationBody.aggregate_element();

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
            }
        });

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
    }

    enterWeak_constraint(ctx) {
        if (!ctx.start || !ctx.stop) return;

        if(ctx.term()) {
            const terms = ctx.term();
            terms.forEach(term => {
                this.processTerm(term, this.usedPredicates, false);
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
    }

    enterHead(ctx) {
        if (!ctx.head_atoms() && !ctx.choice() && !ctx.aggregate_atom_head()) return;

        if(ctx.choice()) {
            const choice = ctx.choice();
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

                        if (!this.definedPredicates.has(predicateKey)) {
                            this.definedPredicates.set(predicateKey, []);
                        }
                        this.definedPredicates.get(predicateKey).push({ lineStart, lineEnd, indexStart, indexEnd });
                    } else if(head_atom.assignment()) {
                        const assignment = head_atom.assignment();
                        const assignee = assignment.assignee();
                        const assigned_value = assignment.assigned_value();

                        if(assignee.term()) {
                            this.processTerm(assignee.term(), this.definedPredicates, false);
                        } else if (assignee.literal()) {
                            const atom = assignee.literal().classical_atom().atom();
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

                        if(assigned_value.term()) {
                            this.processTerm(assigned_value.term(), this.usedPredicates, false);
                        } else if(assigned_value.classical_atom()) {
                            const atom = assigned_value.classical_atom().atom();
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
                        } else if(body_atom.assignment()) {
                            const assignment = body_atom.assignment();
                            const assignee = assignment.assignee();
                            const assigned_value = assignment.assigned_value();

                            if(assignee.term()) {
                                this.processTerm(assignee.term(), this.usedPredicates, false);
                            } else if (assignee.literal()) {
                                const atom = assignee.literal().classical_atom().atom();
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

                            if(assigned_value.term()) {
                                this.processTerm(assigned_value.term(), this.usedPredicates, false);
                            } else if(assigned_value.classical_atom()) {
                                const atom = assigned_value.classical_atom().atom();
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
                });
            }
        } else if(ctx.head_atoms()) {
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

                } else if (headAtom.assignment()) {
                    const assignment = headAtom.assignment();
                    const assignee = assignment.assignee();
                    const assigned_value = assignment.assigned_value();

                    if(assignee.term()) {
                        this.processTerm(assignee.term(), this.definedPredicates, false);
                    } else if (assignee.literal()) {
                        const atom = assignee.literal().classical_atom().atom();
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

                    if(assigned_value.term()) {
                        this.processTerm(assigned_value.term(), this.usedPredicates, false);
                    } else if(assigned_value.classical_atom()) {
                        const atom = assigned_value.classical_atom().atom();
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
        
    }

    enterBody(ctx) {
        if (!ctx.body_atoms()) return;
        const atoms = ctx.body_atoms();
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
                        } else if(head_atom.assignment()) {
                            const assignment = head_atom.assignment();
                            const assignee = assignment.assignee();
                            const assigned_value = assignment.assigned_value();

                            if(assignee.term()) {
                                this.processTerm(assignee.term(), this.usedPredicates, false);
                            } else if (assignee.literal()) {
                                const atom = assignee.literal().classical_atom().atom();
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

                            if(assigned_value.term()) {
                                this.processTerm(assigned_value.term(), this.usedPredicates, false);
                            } else if(assigned_value.classical_atom()) {
                                const atom = assigned_value.classical_atom().atom();
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
                            } else if(body_atom.assignment()) {
                                const assignment = body_atom.assignment();
                                const assignee = assignment.assignee();
                                const assigned_value = assignment.assigned_value();

                                if(assignee.term()) {
                                    this.processTerm(assignee.term(), this.usedPredicates, false);
                                } else if (assignee.literal()) {
                                    const atom = assignee.literal().classical_atom().atom();
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

                                if(assigned_value.term()) {
                                    this.processTerm(assigned_value.term(), this.usedPredicates, false);
                                } else if(assigned_value.classical_atom()) {
                                    const atom = assigned_value.classical_atom().atom();
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
                    });
                }
            } else if (bodyAtom.assignment()) {
                const assignment = bodyAtom.assignment();
                const assignee = assignment.assignee();
                const assigned_value = assignment.assigned_value();

                if(assignee.term()) {
                    this.processTerm(assignee.term(), this.usedPredicates, false);
                } else if (assignee.literal()) {
                    const atom = assignee.literal().classical_atom().atom();
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

                if(assigned_value.term()) {
                    this.processTerm(assigned_value.term(), this.usedPredicates, false);
                } else if(assigned_value.classical_atom()) {
                    const atom = assigned_value.classical_atom().atom();
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
    }

    processTerm(term, predicateMap, isArgument) {
        if (!term || !term.start || !term.stop) return;
        if (!isArgument && term.simpleTerm()) {
            if(term.simpleTerm().CONSTANT()) {
                const predicateName = term.simpleTerm().CONSTANT().getText();
                const predicateKey = predicateName + '/0';

                const lineStart = term.start.line;
                const lineEnd = term.stop.line;
                const indexStart = term.start.column;
                let indexEnd = term.stop.column;

                if(indexEnd ==  indexStart) {
                    indexEnd += predicateName.length;
                }

                if (!predicateMap.has(predicateKey)) {
                    predicateMap.set(predicateKey, []);
                }
                predicateMap.get(predicateKey).push({ lineStart, lineEnd, indexStart, indexEnd });
            } 
        }   else if (term.functionTerm()) {
            this.processFunctionTerm(term.functionTerm(), predicateMap);

        } else if (term.tuple()) {
            this.processTuple(term.tuple(), predicateMap);
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
        if(!term) return new Set();

        let vars = new Set();

        if(term.simpleTerm()) {
            const simpleTerm = term.simpleTerm();
            if(simpleTerm.VARIABLE()) {
                vars.add(simpleTerm.VARIABLE().getText());
            }
        } else if(term.functionTerm()) {
            const functionTerm = term.functionTerm();
            const terms = functionTerm.term();
            if(terms) {
                terms.forEach(t => {
                    const nestedVars = this.collectVariablesFromTerm(t);
                    nestedVars.forEach(v => vars.add(v));
                });
            }
        } else if(term.tuple()) {
            const tuple = term.tuple();
            const terms = tuple.term();
            if(terms) {
                terms.forEach(t => {
                    const nestedVars = this.collectVariablesFromTerm(t);
                    nestedVars.forEach(v => vars.add(v));
                });
            }
        }

        return vars;
    }

    collectVariablesFromBuiltInAtom(builtIn_atom, hasNot, isOnHead) {
        let vars = new Set();
        let groundedVars = new Set();
        let linkedVars = [];

        const term1 = builtIn_atom.term(0);
        const term2 = builtIn_atom.term(1);
        
        const vars1 = this.collectVariablesFromTerm(term1);
        const vars2 = this.collectVariablesFromTerm(term2);

        vars1.forEach(v => vars.add(v));
        vars2.forEach(v => vars.add(v));

        const comparator = builtIn_atom.COMPARATOR().getText();

        if(isOnHead) {
            if((!hasNot && comparator == '!=') || (hasNot && comparator == '==')) {
                if(vars1.size > 0 && vars2.size == 0) {
                    vars1.forEach(v => groundedVars.add(v));
                } else if(vars1.size == 0 && vars2.size > 0) {
                    vars2.forEach(v => groundedVars.add(v));
                } else if(vars1.size > 0 && vars2.size > 0) {
                    const set1 = new Set(vars1);
                    const set2 = new Set(vars2);
                    linkedVars.push({set1: set1, set2: set2});
                }
            }
        } else {
            if((!hasNot && comparator == '==') || (hasNot && comparator == '!=')) {
                if(vars1.size > 0 && vars2.size == 0) {
                vars1.forEach(v => groundedVars.add(v));
                } else if(vars1.size == 0 && vars2.size > 0) {
                    vars2.forEach(v => groundedVars.add(v));
                } else if(vars1.size > 0 && vars2.size > 0) {
                    const set1 = new Set(vars1);
                    const set2 = new Set(vars2);
                    linkedVars.push({ set1: set1, set2: set2 } );
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
                        const vars = this.collectVariablesFromTerm(term);
                        vars.forEach(v => aggregateVariables.add(v));
                    });
                }

                const aggregate_literals = aggregateElement.aggregate_literal();
                if(aggregate_literals) {
                    aggregate_literals.forEach(aggregateLiteral => {
                        if(aggregateLiteral.literal()) {
                            const terms = aggregateLiteral.literal().classical_atom().atom().term();
                            if(terms) {
                                terms.forEach(term => {
                                    const vars = this.collectVariablesFromTerm(term);
                                    vars.forEach(v => aggregateVariables.add(v));
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
                        const vars = this.collectVariablesFromTerm(term);
                        vars.forEach(v => aggregateVariables.add(v));
                    });
                }

                const aggregate_literals = aggregateElement.aggregate_literal();
                if(aggregate_literals) {
                    aggregate_literals.forEach(aggregateLiteral => {
                        if(aggregateLiteral.literal()) {
                            const terms = aggregateLiteral.literal().classical_atom().atom().term();
                            if(terms) {
                                terms.forEach(term => {
                                    const vars = this.collectVariablesFromTerm(term);
                                    vars.forEach(v => aggregateGroundedVariables.add(v));
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
        console.log('Unsafe variables:')
        console.log(this.unsafeVariables);
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

        const parserSyntaxErrors = parserErrorListener.getSyntaxErrors();
        const listenerSyntaxErrors = listener.getSyntaxErrors();
        const tokenErrors = lexerErrorListener.getTokenErrors();
        const constructTypes = listener.getConstructTypes();
        const definedPredicates = listener.getDefinedPredicates();
        const usedPredicates = listener.getUsedPredicates();
        const statementsByLine = listener.getStatementsByLine();
        const lineRanges = listener.getLineRanges();

        return {syntaxErrors: [...parserSyntaxErrors, ...listenerSyntaxErrors], tokenErrors, constructTypes, definedPredicates, usedPredicates, statementsByLine, lineRanges};

    } catch (error) {
        console.error('Unexpected error during parsing:', error);
        return null;
    }
}

export { antlr4 };