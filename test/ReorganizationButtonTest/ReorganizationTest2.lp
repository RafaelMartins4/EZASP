% Testing Reorganization button with cycle dependencies: should throw a warning message after reorganizing 
% the code to warn the user that the final program will still have stratification issues

% Fact base
base(1).
base(2).

% Rule chain
t1(X) :- t2(X).
t2(X) :- t3(X). %* testing multi 
line 
comment *%

t3(X) :- t1(X).

test3(test(X)).

test2(X).

test(test2(X)).

base(3).