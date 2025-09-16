% Testing Ordering Warnings

% Constraints must be at the end of the program or between Definite Rules and either Weak Constraints, Optimization Statements or Show Statements

% Testing Constraint after Weak Constraint to trigger warning message

#const a = 4.

{}.

:~ b(). [q]

:- q().
