% Testing Ordering Warnings

% Definite Rules must be between Choice Rules and Constraints

% Testing Definite Rule after Optimization Statement to trigger the warning message

#const a = 4.

{}.

#maximize{}.

p() :- q().