% Testing Variable Safety on Definite Rules.

p(X) :- q(X).   % Safe

p(X,Y) :- q(X), r(Y).   % Safe

p(X) :- q(X), X > 2.    % Safe

p(X) :- X == 3.      % Safe     

p(X) :- q().    % X unsafe

p(X) :- X > 2.  % X unsafe

p(X,Y) :- r(X). % Y unsafe

p(X) :- not q(X).   % X unsafe

p(Y) :- #count{X : q(X)} > Y.   % Y unsafe

p(X); q(X) :- r(X).     % Safe

p(X) :- Y = 2, X = Y.   % Safe

p(Y) :- { q(Y) }.   % Y unsafe

p(X) :- #count{Y : r(Y)} > Z.   % X, Z unsafe

p(X) :- q(X), X != Y.  % Y unsafe

q(_) :- _ == 1.   % Anon0 unsafe

% Testing negative literals that do not ground variables

not q(X); q(X) :- not r(X).   % X unsafe

not q(X) :- q.   % X unsafe

q(X) :- not r(X).   % X unsafe

not q(X) :- r(X).   % Safe

not q(X); q(X) :- not r(X).   % X unsafe

q(X), q(X) :- not r(X).   % X unsafe
