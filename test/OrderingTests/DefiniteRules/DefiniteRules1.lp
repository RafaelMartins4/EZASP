% Testing Ordering Warnings

% Definite Rules must be between Choice Rules and Constraints

% Testing Definite Rule after Constraint to trigger warning message

#const a = 4.

{}.

:- q().

p() :- q().