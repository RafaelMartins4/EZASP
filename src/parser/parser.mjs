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
        }

         // Check if the error is at the end of the line
        const currentLineText = tokenStream.tokenSource.inputStream.strdata.split('\n')[line - 1];
        
        if (indexEnd > currentLineText.length) {
            // Move to the next line if it exists
            if (line < tokenStream.tokenSource.inputStream.strdata.split('\n').length) {
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

        // Access the input stream directly from the recognizer
        const inputStream = recognizer._input; // `_input` contains the input stream
        const inputText = inputStream.strdata; // Full input text
        const lines = inputText.split('\n'); // Split input into lines

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
    }

    enterChoice_rule(ctx) {
        if (!ctx.start || !ctx.stop) return;

        const choice = ctx.choice();
        if (choice) {
            const choiceBody = choice.choice_body();
            if (choiceBody) {
                // Process defined predicates (before the colon)
                const definedAtoms = choiceBody.defined_atom();
                definedAtoms.forEach(definedAtom => {
                    const atom = definedAtom.atom();
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
                });

                // Process used predicates (after the colon)
                const usedAtoms = choiceBody.used_atom();
                usedAtoms.forEach(usedAtom => {
                    const atom = usedAtom.atom();
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
                    const definedAtoms = choiceBody.defined_atom();
                    definedAtoms.forEach(atom => {
                        const atomObj = atom.atom();
                        if (!atomObj || !atomObj.start || !atomObj.stop) return;
                        const predicateName = atomObj.CONSTANT().getText();
                        const terms = atomObj.term();
                        const arity = terms ? terms.length : 0;

                        const predicateKey = `${predicateName}/${arity}`;

                        const lineStart = atomObj.start.line;
                        const lineEnd = atomObj.stop.line;
                        const indexStart = atomObj.start.column;
                        let indexEnd = atomObj.stop.column;

                        if(indexEnd ==  indexStart) {
                            indexEnd += predicateName.length;
                        }

                        if (!this.definedPredicates.has(predicateKey)) {
                            this.definedPredicates.set(predicateKey, []);
                        }
                        this.definedPredicates.get(predicateKey).push({ lineStart, lineEnd, indexStart, indexEnd });
                    });

                    const usedAtoms = choiceBody.used_atom();
                    usedAtoms.forEach(atom => {
                        const atomObj = atom.atom();
                        if (!atomObj || !atomObj.start || !atomObj.stop) return;
                        const predicateName = atomObj.CONSTANT().getText();
                        const terms = atomObj.term();
                        const arity = terms ? terms.length : 0;

                        const predicateKey = `${predicateName}/${arity}`;

                        const lineStart = atomObj.start.line;
                        const lineEnd = atomObj.stop.line;
                        const indexStart = atomObj.start.column;
                        let indexEnd = atomObj.stop.column;

                        if(indexEnd ==  indexStart) {
                            indexEnd += predicateName.length;
                        }

                        if (!this.usedPredicates.has(predicateKey)) {
                            this.usedPredicates.set(predicateKey, []);
                        }
                        this.usedPredicates.get(predicateKey).push({ lineStart, lineEnd, indexStart, indexEnd });
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
                    const definedAtoms = choiceBody.defined_atom();
                    definedAtoms.forEach(atom => {
                        const atomObj = atom.atom();
                        if (!atomObj || !atomObj.start || !atomObj.stop) return;
                        const predicateName = atomObj.CONSTANT().getText();
                        const terms = atomObj.term();
                        const arity = terms ? terms.length : 0;

                        const predicateKey = `${predicateName}/${arity}`;

                        const lineStart = atomObj.start.line;
                        const lineEnd = atomObj.stop.line;
                        const indexStart = atomObj.start.column;
                        let indexEnd = atomObj.stop.column;

                        if(indexEnd ==  indexStart) {
                            indexEnd += predicateName.length;
                        }

                        if (!this.usedPredicates.has(predicateKey)) {
                            this.usedPredicates.set(predicateKey, []);
                        }
                        this.usedPredicates.get(predicateKey).push({ lineStart, lineEnd, indexStart, indexEnd });
                    });

                    const usedAtoms = choiceBody.used_atom();
                    usedAtoms.forEach(atom => {
                        const atomObj = atom.atom();
                        if (!atomObj || !atomObj.start || !atomObj.stop) return;
                        const predicateName = atomObj.CONSTANT().getText();
                        const terms = atomObj.term();
                        const arity = terms ? terms.length : 0;

                        const predicateKey = `${predicateName}/${arity}`;

                        const lineStart = atomObj.start.line;
                        const lineEnd = atomObj.stop.line;
                        const indexStart = atomObj.start.column;
                        let indexEnd = atomObj.stop.column;

                        if(indexEnd ==  indexStart) {
                            indexEnd += predicateName.length;
                        }

                        if (!this.usedPredicates.has(predicateKey)) {
                            this.usedPredicates.set(predicateKey, []);
                        }
                        this.usedPredicates.get(predicateKey).push({ lineStart, lineEnd, indexStart, indexEnd });
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

    exitProgram(ctx) {
        /* console.log("lineRanges:");
        console.log(this.lineRanges);

        console.log("definedPredicates:");
        console.log(this.definedPredicates);

        console.log("usedPredicates:");
        console.log(this.usedPredicates); */
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
        console.log('lineRanges :', this.lineRanges);
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

// Example Test Cases
const testProgram = 
`#const test = 5. % test

%* multi
line
comment 

%and
another *%

% Define workers and tasks
worker(alice). worker(bob). worker(charlie). 
task(task1)~
 task(task2). task(task3). 

% Define worker's skills and proficiency levels
skill(alice, 2, 3). skill(alice, 1, 1). 
skill(bob, 2, 1). skill(bob, 3, 3).
skill(charlie, 1, 2). skill(charlie, 3, 2).

% Define the required skills to handle each task
required_skill(task1, 1).
required_skill(task2, 2).
required_skill(task3, 3).

% Generate non-deterministic task assignments
{assigned(W, T)} :- worker(W), task(T), qualification(W,T,_).

% Define which workers can handle which task, along with their proficiency level with that skill
qualification(W, T, P) :- not worker(W), task(T), required_skill(T, S), skill(W, S, P).

% Sums the proficiency level in all the assigned tasks and stores it in a proficiency predicate
total_proficiency(TP) :- TP = #sum {P, W, T: assigned(W,T), qualification(W,T,P)}.

% Ensure each worker is assigned at most one task
:- assigned(W, T1), assigned(W, T2), T1 != T2.

% Ensure each task is assigned to at most one worker
:- assigned(W1, T), assigned(W2, T), W1 != W2.

% Ensure every task is assigned to a worker
:- task(T), not assigned(_, T).

% Ensure every worker is assigned a task
:- worker(W), not assigned(W, _).

% Maximize Proficiency Level
#maximize { TP : total_proficiency(TP)}.
  
% Alternative Optimization to a Maximize Statement using a Weak Constraint
:~ total_proficiency(TP). [-TP]

#show T : task(T).
#show assigned/2. `;

// Unmatched parentheses
const testErrors1 = 
`p(X :- q(X)`;

// Unclosed block comment
const testErrors2 = 
`%* This is a comment without an end
a :- b.`;

// Missing period at the end of a rule
const testErrors3 = 
`a :- b
c :- d.`;

// Invalid operators or symbol combinations
const testErrors4 = 
`worker(alice) worker(bob). worker(charlie).`;

// Unbalanced curly braces in aggregates
const testErrors5 = 
`a :- #count{X : p(X} > 2.`;

// Invalid choice rule syntax
const testErrors6 = 
`{a; b)} :- c.`;

// Dangling else in conditional literals
const testErrors7 = 
`a :- b : c else d.`;


const testErrors8 = 
`#const test = .

%* multi
line
comment *%

%*and
another
*%

task(task1).

% Define workers and tasks
worker(alice.`;

const testProgram2 =
`worker(alice). worker(bob). worker(charlie). 
task(task1). task(task2). task(task3). 

% Define worker's skills and proficiency levels
skill(alice, 2, 3). skill(alice, 1, 1). 
skill(bob, 2, 1). skill(bob, 3, 3).
skill(charlie, 1, 2). skill(charlie, 3, 2).

% Define the required skills to handle each task
required_skill(task1, 1).
required_skill(task2, 2).
required_skill(task3, 3).

% Generate non-deterministic task assignments
{assigned(W, T)} :-  {}, worker(W), task(T), qualification(W,T,_).

% Define which workers can handle which task, along with their profiency level with that skill
qualification(W, T, P) :- worker(W), task(T), required_skill(T, S), skill(W, S, P).`;

const testErrors9 = 
`#const test = 5.

% test

%* multi
line
comment 

%*and
another*%

worker(bob).`

const testErrors10 = 
`worker(alice) worker(bob).`;

const testErrors11 = 
`a :- b, c. 
b :- e, d
c :- d.`;

const testErrors12 = 
`#const test = 5. % test

%* multi
line
comment 

%and
another *%

% Define workers and tasks
worker(alice). worker(bob). worker(charlie). 
task(task1)~
 task(task2). task(task3). 

% Define worker's skills and proficiency levels
skill(alice, 2, 3). skill(alice, 1, 1). 
skill(bob, 2, 1). skill(bob, 3, 3).
skill(charlie, 1, 2). skill(charlie, 3, 2).

% Define the required skills to handle each task
required_skill(task1, 1).
required_skill(task2, 2).
required_skill(task3, 3).

% Generate non-deterministic task assignments
{assigned(W, T)} :- worker(W), task(T), qualification(W,T,_).

% Define which workers can handle which task, along with their proficiency level with that skill
qualification(W, T, P) :- not worker(W), task(T), required_skill(T, S), skill(W, S, P).

% Sums the proficiency level in all the assigned tasks and stores it in a proficiency predicate
total_proficiency(TP) :- TP = #sum {P, W, T: assigned(W,T), qualification(W,T,P)}.

% Ensure each worker is assigned at most one task
:- assigned(W, T1), assigned(W, T2), T1 != T2.

% Ensure each task is assigned to at most one worker
:- assigned(W1, T), assigned(W2, T), W1 != W2.

% Ensure every task is assigned to a worker
:- task(T), not assigned(_, T).

% Ensure every worker is assigned a task
:- worker(W), not assigned(W, _).

% Maximize Proficiency Level
#maximize { TP : total_proficiency(TP)}.
  
% Alternative Optimization to a Maximize Statement using a Weak Constraint
:~ total_proficiency(TP). [-TP]

#show T : task(T).
#show assigned/2. `;

const testProgram3 = 
`#const test = .   % test

%* multi
line
comment 

%and
another *%

% Define workers and tasks
worker(alice). worker(bob). worker(charlie). 
task(task1)
task(task2). task(task3).

task(task1).
} % Error

% Define worker's skills and proficiency levels
skill(alice, 2, 3). skill(alice, 1, 1). 
skill(bob, 2, 1). skill(bob, 3, 3).
skill(charlie, 1, 2). skill(charlie, 3, 2).

% Define the required skills to handle each task
required_skill(task1, 1).
required_skill(task2, 2).
required_skill(task3, 3).

% Generate non-deterministic task assignments
{assigned(W, T)} :- worker(W), task(T), qualification(W,T,_).

X = 5 :- task(X).

% Define which workers can handle which task, along with their proficiency level with that skill
qualification(W, T, P) :- not worker(W), task(T), required_skill(T, S), skill(W, S, P).

% Sums the proficiency level in all the assigned tasks and stores it in a proficiency predicate
total_proficiency(TP); test(W); test1(X) :- TP = #sum {P, W, T: assigned(W,T), qualification(W,T,P)}.

% Ensure each worker is assigned at most one task
:- assigned(W, T1), assigned(W, T2), T1 != T2.

% Ensure each task is assigned to at most one worker
:- assigned(W1, T), assigned(W2, T), W1 != W2.

% Ensure every task is assigned to a worker
:- task(T), not assigned(_, T).

% Ensure every worker is assigned a task
:- worker(W), not assigned(W, _).

% Maximize Proficiency Level
#maximize { TP : total_proficiency(TP)}.
  
% Alternative Optimization to a Maximize Statement using a Weak Constraint
:~ total_proficiency(TP). [-TP]

#show T : task(T).
#show assigned/2. `

const testProgram4 = 
`#const test = 5.   % test

%* multi
line
comment 

%and
another *%

% Define workers and tasks
worker(alice). worker(bob). worker(charlie). 
task(task1). task(task2). task(task3).


% Define worker's skills and proficiency levels
skill(alice, 2, 3). skill(alice, 1, 1). 
skill(bob, 2, 1). skill(bob, 3, 3).
skill(charlie, 1, 2). skill(charlie, 3, 2).

% Define the required skills to handle each task
required_skill(task1, 1).
required_skill(task2, 2).
required_skill(task3, 3).

% Generate non-deterministic task assignments
{assigned(W, T) : test(X)} :- worker(W), task(T), qualification(W,T,_).

% Define which workers can handle which task, along with their proficiency level with that skill
qualification(W, T, P) :- not worker(W), task(T), required_skill(T, S), skill(W, S, P).

% Sums the proficiency level in all the assigned tasks and stores it in a proficiency predicate
total_proficiency(TP); test(W); test1(X) :- TP = #sum {test: assigned(W,T), qualification(W,T,P)}.

% Ensure each worker is assigned at most one task
:- assigned(W, T1), assigned(W, T2), T1 != T2.

% Ensure each task is assigned to at most one worker
:- assigned(W1, T), assigned(W2, T), W1 != W2.

% Ensure every task is assigned to a worker
:- task(T), not assigned(_, T).

% Ensure every worker is assigned a task
:- worker(W), not assigned(W, _).

% Maximize Proficiency Level
#maximize { TP : total_proficiency(TP)}.
  
% Alternative Optimization to a Maximize Statement using a Weak Constraint
:~ total_proficiency(TP). [-TP]

#show T : task(T).
#show assigned/2.`;
 
//parse(testProgram3);

export { antlr4 };