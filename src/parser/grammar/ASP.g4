grammar ASP;

program: (statement | line_comment | block_comment | unclosed_comment)* EOF;

statement: constant | fact | choice_rule | definite_rule | constraint | optimization | weak_constraint | show;

constant: 
    '#const' CONSTANT '=' constant_term DOT;

// Types of Rules: Facts, Choice Rules, Definite Rules, Integrity Constraints
fact: 
       head DOT;

choice_rule:
       choice ':-' body DOT;

choice: (lowerbound)? '{' choice_body? '}' (upperbound)?;

choice_body: choiceHead_atoms (';' choiceHead_atoms)* (':' (choiceBody_atoms (',' | ';' choiceBody_atoms)* )? )?;

choiceHead_atoms: literal | NOT? assignment | NOT? builtIn_atom;  // Used exclusively to separate the atoms before and after the colon. Useful for stratification errors
choiceBody_atoms: literal | NOT? assignment | NOT? builtIn_atom;

definite_rule:
       head ':-' body DOT;

constraint: 
       ':-' body DOT;

head: 
       rule_atoms (';' rule_atoms)*;
body: 
       rule_atoms (',' rule_atoms)*;

rule_atoms: literal | NOT? builtIn_atom | aggregate_atom | NOT? assignment | NOT? choice;

// Optimization statements
optimization: 
       '#minimize' '{' optimizationBody (';' optimizationBody)* '} DOT'
       | '#maximize' '{' optimizationBody (';' optimizationBody)* '}' DOT;

optimizationBody: (weight '@' priority ',')? aggregate_element;

// Weak Constraint
weak_constraint: 
       ':~' body '.' '[' (weight '@' priority ',')? ((CLASSICAL_NEGATION)? term (',' (CLASSICAL_NEGATION)? term)*) EOWC;

show:
       show_atoms DOT
       | show_terms DOT
       | show_nothing DOT;

show_atoms: '#show' CONSTANT '/' NUMBER;
show_terms: '#show' term ':' literal (',' literal)*;
show_nothing: '#show';

// Comments (line, block and unclosed)
block_comment: BLOCK_COMMENT;
unclosed_comment: UNCLOSED_COMMENT;
line_comment: LINE_COMMENT;

literal: NOT? classical_atom;
classical_atom: CLASSICAL_NEGATION? atom;
atom: CONSTANT ('(' term (',' term)* ')')?;

builtIn_atom: term COMPARATOR term;

aggregate_atom: AGGREGATE_FUNCTION '{' (aggregate_element (';' aggregate_element)*)? '}' (COMPARATOR term)?;
aggregate_element: term (',' term)* ':' aggregate_literal (',' aggregate_literal)*;
aggregate_literal: literal | NOT? builtIn_atom;

assignment: assignee '=' assigned_value;
assignee: term | aggregate_atom | literal;
assigned_value: term | classical_atom | aggregate_atom;

// Terms
term: simpleTerm | functionTerm | tuple;
simpleTerm: integer | CONSTANT | STRING | VARIABLE | UNDERSCORE | SUP | INF;
functionTerm: CONSTANT '(' term (',' term)* ')';
tuple: '(' (term (',' term)*)? ')';

constant_term: integer | CONSTANT | STRING | SUP | INF | constant_functionTerm | constant_tuple;
constant_functionTerm: CONSTANT '(' (constant_term (',' constant_term)*)? ')';
constant_tuple: '(' (constant_term (',' constant_term)* )? ')';

integer: NUMBER | INTERVAL;
weight: integer;
priority: integer;
lowerbound: integer;
upperbound: integer;

// Tokens
NOT: 'not';                      // ensures that 'not' is treated as a standalone word
BLOCK_COMMENT : '%*' .*? '*%';
UNCLOSED_COMMENT : '%*' ~[*]* ('*' ~[%])* EOF;
LINE_COMMENT: '%' ~[*\r\n] ~[\r\n]* [\r\n]?;
DOT: '.';
EOWC: ']';           // End of weak constraint
CONSTANT: (UNDERSCORE)*[a-z][a-zA-Z0-9_]*;
VARIABLE: (UNDERSCORE)*[A-Z][a-zA-Z0-9_]*;
UNDERSCORE: '_';
SUP: '#sup';
INF: '#inf';
NUMBER: ('0' | [1-9][0-9]*);
INTERVAL: (NUMBER '..' NUMBER);
STRING: '"' (~('"' | '\n' | '\r'))* '"';
COMPARATOR: '<' | '<=' | '==' | '!=' | '>=' | '>';
AGGREGATE_FUNCTION: '#count' | '#sum' | '#max' | '#min';
CLASSICAL_NEGATION: '-';
WS: [ \t\r\n]+ -> skip;