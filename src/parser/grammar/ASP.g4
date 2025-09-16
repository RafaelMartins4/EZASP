grammar ASP;

program: (statement | line_comment | block_comment | unclosed_comment)* EOF;

statement: constant | fact | choice_rule | definite_rule | constraint | optimization | weak_constraint | show;

constant: 
    '#const' CONSTANT '=' constant_term DOT;

// Types of Rules: Facts, Choice Rules, Definite Rules, Integrity Constraints
fact: 
       (head | choice) DOT;

choice_rule:
       choice ':-' body DOT;

choice: (lowerbound)? '{' (choice_element (';' choice_element)*)? '}' (upperbound)?;

choice_element: choiceHead_atoms (':' (choiceBody_atoms (',' choiceBody_atoms)* )? )?;

choiceHead_atoms: literal | (NOT? builtIn_atom);  // Used exclusively to separate the atoms before and after the colon. Useful for stratification errors
choiceBody_atoms: literal | (NOT? builtIn_atom);

definite_rule:
       head ':-' body DOT;

constraint: 
       ':-' body DOT;

head: 
       (head_atoms ((';' | ',') head_atoms)*) | aggregate_atom_head;
body: 
       (body_atoms ((';' | ',') body_atoms)*)?;

head_atoms: literal | NOT? builtIn_atom;

body_atoms: literal | NOT? builtIn_atom | NOT? aggregate_atom_body | NOT? choice;

// Optimization statements
optimization: 
       '#minimize' '{' (optimizationBody (';' optimizationBody)*)? '}' DOT
       | '#maximize' '{' (optimizationBody (';' optimizationBody)*)? '}' DOT;

optimizationBody: (weight '@' priority ',')? aggregate_element_optimization;

// Weak Constraint
weak_constraint: 
       ':~' body '.' '[' (weight '@' priority ',')? ((CLASSICAL_NEGATION)? term (',' (CLASSICAL_NEGATION)? term)*) EOWC;

show:
       (show_atoms DOT)
       | (show_terms DOT)
       | (show_nothing DOT);

show_atoms: '#show' CONSTANT '/' NUMBER;
show_terms: '#show' term (':' body)?;
show_nothing: '#show';

// Comments (line, block and unclosed)
block_comment: BLOCK_COMMENT;
unclosed_comment: UNCLOSED_COMMENT;
line_comment: LINE_COMMENT;

literal: NOT? classical_atom;
classical_atom: CLASSICAL_NEGATION? atom;
atom: CONSTANT ('(' (term (',' term)*)? ')')?;

builtIn_atom: term (COMPARATOR | EQ | EQEQ) term;

aggregate_atom_head:
       AGGREGATE_FUNCTION '{' (aggregate_element_head (';' aggregate_element_head)*)? '}' ((COMPARATOR | EQ | EQEQ) term)?
       | (term (COMPARATOR | EQ | EQEQ))? AGGREGATE_FUNCTION '{' (aggregate_element_head (';' aggregate_element_head)*)? '}';

aggregate_element_head: term (',' term)* ':' aggregate_literal;   // Separating aggregate elements because clingo accepts slightly different aggregates depending if it's placed on head or body

aggregate_atom_body: 
       AGGREGATE_FUNCTION '{' (aggregate_element_body (';' aggregate_element_body)*)? '}' ((COMPARATOR | EQ | EQEQ) term)?
       | (term (COMPARATOR | EQ | EQEQ))? AGGREGATE_FUNCTION '{' (aggregate_element_body (';' aggregate_element_body)*)? '}' ;

aggregate_element_body: (term (',' term)*)? (':' (aggregate_literal (',' aggregate_literal)*)?)?;

aggregate_element_optimization: term (',' term)* (':' (aggregate_literal (',' aggregate_literal)*)?)?;

aggregate_literal: literal | NOT? builtIn_atom;

// Terms
term: additiveTerm;

additiveTerm: CLASSICAL_NEGATION? multiplicativeTerm ((ADDITION | CLASSICAL_NEGATION | OR | EXCLUSIVE_OR) multiplicativeTerm)*;

multiplicativeTerm: powerTerm ((MULTIPLICATION| DIVISION | MODULO | AND) powerTerm)*;

powerTerm: unaryTerm (EXPONENTIATION unaryTerm)*;

unaryTerm: simpleTerm | functionTerm | tuple | '(' term ')';
simpleTerm: integer | CONSTANT | STRING | VARIABLE | UNDERSCORE | SUP | INF;
functionTerm: CONSTANT '(' (term (',' term)*)? ')';
tuple: '(' term ',' term (',' term)* ')';

// Constant rules utilize slightly different terms
constant_term: constant_additiveTerm;

constant_additiveTerm: constant_multiplicativeTerm ((ADDITION | CLASSICAL_NEGATION | OR | EXCLUSIVE_OR) constant_multiplicativeTerm)*;

constant_multiplicativeTerm: constant_powerTerm ((MULTIPLICATION | DIVISION | MODULO | AND) constant_powerTerm)*;

constant_powerTerm: constant_unaryTerm (EXPONENTIATION constant_unaryTerm)*;

constant_unaryTerm: integer | CONSTANT | STRING | SUP | INF | constant_functionTerm | constant_tuple | '(' constant_term ')';
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
EQ: '=';      // we separated both equality signs from the rest of the comparators to ensure that the program accepts both types of equality
EQEQ: '==';   // without this separation there seemed to be some ambiguity and the parser could not decide between accepting the '=' operator or looking ahead in hopes of finding a '==' operator.
COMPARATOR: '<' | '<=' | '!=' | '>=' | '>';
AGGREGATE_FUNCTION: '#count' | '#sum' | '#max' | '#min';
CLASSICAL_NEGATION: '-';
ADDITION: '+';
OR: '?';
EXCLUSIVE_OR: '^';
MULTIPLICATION: '*';
DIVISION: '/';
MODULO: '\\';
AND: '&';
EXPONENTIATION: '**';
WS: [ \t\r\n]+ -> skip;