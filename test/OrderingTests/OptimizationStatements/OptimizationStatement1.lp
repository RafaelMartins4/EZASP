% Testing Ordering Warnings

% Optimization statements must appear after Constraints and before Show Statements.

% Testing the Optimization Statement after Show Statement to trigger warning message

b().

{} :- q().

#show.

#maximize{}.