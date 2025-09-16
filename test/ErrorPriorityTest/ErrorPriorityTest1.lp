% Testing the Error priority system in EZASP
%* At the time of testing, EZASP implements the following priority for errors and warnings:
        - Syntax Errors
        - Unsafe Variables Errors
        - Stratification Errors
        - Stratification Warnings
        - Full Line Warnings: this includes Ordering Warnings, No Generator Warnings and No Comment Warnings. (note that in this cases, the messages of all warnings get concatenated in one)
*%

% No errors
q().    

% Only Syntax Error
q(.

% Syntax Error + Unsafe Variable
q(X) : .    

% Syntax Error + Stratification Error
:- p(), .

% Syntax Error + Stratification Error (with space between the two errors)
:- p(),   .

% Syntax Error + Stratification Warning
:- b(), .

:- b(),  .   % Syntax Error + Stratification Warning (with space between the two issues)

:- q(Y), X != 2.   % Unsafe Variable Error + Stratification Warning

q(X) :- test().  % Unsafe Variable + Stratification Error

:- b(), test().  % Stratification Error + Stratification Warning

b().

q(.     % Syntax Error + Ordering Warning + No Comment Warning

q(X).   % Unsafe Variable Error + Ordering Warning + No Comment Warning

q() :- test().  % Stratification Error + Ordering Warning + No Comment Warning
