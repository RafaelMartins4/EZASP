% Testing Ordering Warnings

% Optimization statements must appear after Constraints and before Show Statements.

% Testing the Weak Constraint after Show Statement to trigger warning message

b().

{} :- q().

#show.

:~ b(). [q]