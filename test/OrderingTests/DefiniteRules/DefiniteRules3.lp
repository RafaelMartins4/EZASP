% Testing Ordering Warnings

% Definite Rules must be between Choice Rules and Constraints

% Testing Definite Rule after Weak Constraint to trigger the warning message

#const a = 4.

{}.

:~ b(). [q]

p() :- q().