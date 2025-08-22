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
        /* let contextVariables = [];
        let groundedContextVariables = [];
        let linkedContextVariables = [];

        const head = ctx.head();
        if(head) {
            const atoms = head.rule_atoms();
            atoms.forEach(rule_atom => {
                if(rule_atom.literal()) {
                    const terms = rule_atom.literal().classical_atom().atom().term();
                    if(terms) {
                        terms.forEach(term => {
                            const vars = this.collectVariablesFromTerm(term);
                            vars.forEach(v => totalVariables.add(v));
                        });
                    }
                } else if(rule_atom.builtIn_atom()) {
                    const hasNot = rule_atom.NOT() !== null;
                    const builtIn_atom = rule_atom.builtIn_atom();

                    const result = this.collectVariablesFromBuiltInAtom(builtIn_atom, hasNot, true);
                    result.vars.forEach(v => totalVariables.add(v));
                    result.groundedVars.forEach(v => groundedVariables.add(v));
                    result.linkedVars.forEach(linkedVar => linkedVariables.push(linkedVar));

                } else if(rule_atom.aggregate_atom()) {
                    const aggregate_atom = rule_atom.aggregate_atom();
                    
                    const result = this.collectVariablesFromAggregateAtom(aggregate_atom);
                    result.totalVariables.forEach(v => totalVariables.add(v));
                    contextVariables.push(result.aggregateVariables);
                    groundedContextVariables.push(result.aggregateGroundedVariables);
                    linkedContextVariables.push(result.aggregateLinkedVariables);

                } else if(rule_atom.assignment()) {
                    // TODO: understand how to handle unsafe variables in assignments
                } else if(rule_atom.choice()) {
                    const choiceBody = rule_atom.choice().choice_body();

                    let choiceVariables = new Set();
                    let choiceGroundedVariables = new Set();

                    if(choiceBody) {
                        const definedLiterals = choiceBody.defined_literal();
                        const usedLiterals = choiceBody.used_literal();
                        
                        // For some reason, if there is more than one defined literal, clingo marks all variables before the colon as unsafe, even if they appear to be grounded after the colon
                        // To mimic this behaviour, if there is more than one defined literal, we simply add the variables from all defined literals to the choiceVariables set, without adding any to the choiceGroundedVariales set
                        // We will only add variables to the choiceGroundedVariables set if there is only one defined literal
                        // This will ensure that if these variables are not grounded elsewhere in the rule, they will be marked as unsafe, even if they appear to be grounded after the colon
                        // If there is only one defined literal, then we will proceed as intended, and only mark it as unsafe if: 
                        //      1. it is not grounded after the colon, and 2. it is not grounded anywhere else in the program
                        if(definedLiterals) {
                            definedLiterals.forEach(definedLiteral => {
                                const terms = definedLiteral.literal().classical_atom().atom().term();
                                if(terms) {
                                    terms.forEach(term => {
                                        const vars = this.collectVariablesFromTerm(term);
                                        vars.forEach(v => choiceVariables.add(v));
                                    });
                                }
                            });
                            
                            if(definedLiterals.size <= 1) {
                                if(usedLiterals) {
                                    usedLiterals.forEach(usedLiteral => {
                                        const terms = usedLiteral.literal().classical_atom().atom().term();
                                        if(terms) {
                                            terms.forEach(term => {
                                                const vars = this.collectVariablesFromTerm(term);
                                                vars.forEach(v => choiceGroundedVariables.add(v));
                                            });
                                        }
                                    });
                                }
                            }
                        }
                    }

                    contextVariables.push(choiceVariables);
                    groundedContextVariables.push(choiceGroundedVariables);
                    linkedContextVariables.push([]); // Pushing an empty array to ensure that the index of future linked variables arrays match their given context
                }
            })
        }

        const result = this.verifyUnsafeVariables(totalVariables, groundedVariables, linkedVariables, contextVariables, groundedContextVariables, linkedContextVariables);
        if(result.length > 0)
            this.unsafeVariables.push({
                unsafeVariables: result,
                lineStart: ctx.start.line,
                lineEnd: ctx.stop.line,
                indexStart: ctx.start.column,
                indexEnd: ctx.stop.column
            }) */
    }

    enterChoice_rule(ctx) {
        if (!ctx.start || !ctx.stop) return;

        const choice = ctx.choice();
        if (choice) {
            const choiceBody = choice.choice_body();
            if (choiceBody) {
                // Process defined predicates (before the colon)
                const head_atoms = choiceBody.choiceHead_atoms();
                head_atoms.forEach(head_atom => {
                    if(head_atom.literal()) {
                        const atom = head_atom.literal().classical_atom().atom();
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
                    }
                });

                // Process used predicates (after the colon)
                const body_atoms = choiceBody.choiceBody_atoms();
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
                    }
                });
            }
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
        if (!ctx.rule_atoms) return;
        const atoms = ctx.rule_atoms();
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

            } else if (headAtom.choice()) {
                const choice = headAtom.choice();
                const choiceBody = choice.choice_body();

                if (choiceBody) {
                    const choiceHead_atoms = choiceBody.choiceHead_atoms();
                    choiceHead_atoms.forEach(head_atom => {
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
                    });

                    const choiceBody_atoms = choiceBody.choiceBody_atoms();
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
                }
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

    enterBody(ctx) {
        if (!ctx.rule_atoms) return;
        const atoms = ctx.rule_atoms();
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

                if (!this.usedPredicates.has(predicateKey)) {
                    this.usedPredicates.set(predicateKey, []);
                }
                this.usedPredicates.get(predicateKey).push({ lineStart, lineEnd, indexStart, indexEnd });

            } else if (headAtom.choice()) {
                const choice = headAtom.choice();

                if (choice.choice_body()) {
                    const choiceBody = choice.choice_body();
                    const choiceHead_atoms = choiceBody.choiceHead_atoms();
                    choiceHead_atoms.forEach(head_atom => {
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
                    });

                    const choiceBody_atoms = choiceBody.choiceBody_atoms();
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
                }
            } else if (headAtom.assignment()) {
                const assignment = headAtom.assignment();
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

    enterAggregate_atom(ctx) {
        if (!ctx.start || !ctx.stop) return;

        if(ctx.term()) {
            const term = ctx.term();
            this.processTerm(term, this.usedPredicates, false);
        }

        const aggregate_elements = ctx.aggregate_element();
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
        if(!term) return;

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
                    linkedVars.push({set1: set1, set2: set2});
                }
            }
        }

        return { vars, groundedVars, linkedVars };
    }

    collectVariablesFromAggregateAtom(aggregate_atom) {
        let totalVariables = new Set();

        if(aggregate_atom.term()) {
            const vars = this.collectVariablesFromTerm(aggregate_atom.term());
            vars.forEach(v => totalVariables.add(v));
        }

        // These variables are only available inside the aggregate atom context
        // As a result, they must be stored separately to ensure we can verify for unsafety inside the given context
        let aggregateVariables = new Set();
        let aggregateGroundedVariables = new Set();
        let aggregateLinkedVariables = [];

        if(aggregate_atom.aggregate_element()) {
            const aggregate_elements = aggregate_atom.aggregate_element();
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

        return {totalVariables, aggregateVariables, aggregateGroundedVariables, aggregateLinkedVariables};
    }

    verifyUnsafeVariables(totalVariables, groundedVariables, linkedVariables, contextVariables, groundedContextVariables, linkedContextVariables) {
        let localUnsafeVariables = [];

        let hasChanged = true;
        
        while(hasChanged) {
            hasChanged = false;

            linkedVariables.forEach(linkedVarArray => {
                const set1 = linkedVarArray.set1;
                const set2 = linkedVarArray.set2;

                for(const groundedVar of [...groundedVariables]) {
                    let hasDeletedSet1 = set1.delete(groundedVar);
                    let hasDeletedSet2 = set2.delete(groundedVar);

                    if(hasDeletedSet1 || hasDeletedSet2) {
                        hasChanged = true;
                    }

                    if(set1.size === 0) {
                        set2.forEach(v => groundedVariables.add(v));
                        set2.clear();
                        hasChanged = true;
                    }

                    if(set2.size === 0) {
                        set1.forEach(v => groundedVariables.add(v));
                        set1.clear();
                        hasChanged = true;
                    }
                }
            });
        }

        totalVariables.forEach(v => {
            if(!groundedVariables.has(v)) {
                localUnsafeVariables.push(v);
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

                    for(const groundedVar of new Set([...currentGroundedContextVars, groundedVariables])) {
                        let hasDeletedSet1 = set1.delete(groundedVar);
                        let hasDeletedSet2 = set2.delete(groundedVar);

                        if(hasDeletedSet1 || hasDeletedSet2) {
                            hasChanged = true;
                        }

                        if(set1.size === 0) {
                            set2.forEach(v => currentGroundedContextVars.add(v));
                            set2.clear();
                            hasChanged = true;
                        }

                        if(set2.size === 0) {
                            set1.forEach(v => currentGroundedContextVars.add(v));
                            set1.clear();
                            hasChanged = true;
                        }
                    }
                });
            }

            currentContextVars.forEach(v => {
                if(!groundedVariables.has(v) && !currentGroundedContextVars.has(v)) {
                    localUnsafeVariables.push(v);
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