% Testing Ordering Warnings

% Choice Rules must be at the beginning or between Facts and Definite Rules

% Testing Choice Rule after Definite Rule to trigger warning message

#const a = 4.

b() :- p().

{} :- q().

