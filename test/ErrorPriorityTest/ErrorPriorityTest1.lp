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




% Syntax Error + Stratification Warning
:- b(), .

:- b(),  .   % Syntax Error + Stratification Warning (with space between the two issues)

% Stratification Error + Stratification Warning
:- b(), test(). 

% Syntax Error + Stratification Error (with space between the two errors)
:- p(),   .


% Syntax Error + Unsafe Variable
q(X) : .    

% Syntax Error + Stratification Error
:- p(), .

% Unsafe Variable + Stratification Error
q(X) :- test().  

% Unsafe Variable Error + Stratification Warning
:- q(Y), X != 2.   



% Defining b()
b().

q(.     % Syntax Error + Ordering Warning + No Comment Warning

q(X).   % Unsafe Variable Error + Ordering Warning + No Comment Warning

q() :- test().  % Stratification Error + Ordering Warning + No Comment Warning
