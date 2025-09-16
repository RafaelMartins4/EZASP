% Testing Reorganization button with cycle dependencies: should throw a warning message after reorganizing 
% the code to warn the user that the final program will still have stratification issues

% Fact base
base(1).
base(2).

% Rule chain
p1(X) :- base(X).
p2(X) :- p1(X), base(X).
p3(X) :- p2(X).
t1(X) :- t2(X).
p15(X) :- p13(X), p14(X). % testing 
p5(X) :- p3(X), p4(X).
p6(X) :- p4(X), p5(X).
p7(X) :- p5(X), p6(X).
p8(X) :- p6(X), p7(X).

t2(X) :- t3(X).
p9(X) :- p7(X), p8(X). %* testing multi 
line 
comment *%

t3(X) :- t1(X).
p10(X) :- p8(X), p9(X).
p11(X) :- p9(X), p10(X).
p12(X) :- p10(X), p11(X).
p4(X) :- p2(X), p3(X). 
p13(X) :- p11(X), p12(X). %* block comment *% 
p14(X) :- p12(X), p13(X). %* another test *% % test

test3(test(X)).

test2(X).

test(test2(X)).



base(3).