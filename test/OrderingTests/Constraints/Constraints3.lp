% Testing Ordering Warnings

% Constraints must be at the end of the program or between Definite Rules and either Weak Constraints, Optimization Statements or Show Statements

% Testing Constraint after Show Statement to trigger the warning message

#const a = 4.

{}.

#show.

:- q().
