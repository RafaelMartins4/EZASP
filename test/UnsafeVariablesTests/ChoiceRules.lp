% Testing Variables Safety in Choice Rules.

{ q(X) : y(X) }.    % Safe

{ q(X) : y(X) } :- X == 2.  % Safe

{ q(X) : y(X) } :- X != 2.  % Safe

{ q(X) : y(X) ; r(Y) } :- a.    % Y unsafe

{ q(X) : y(X) ; r(Y) } :- X != 2.   % X, Y unsafe

{ q(X) : y(X) ; r(Y) } :- X == Y.   % X, Y unsafe

{ q(X) : y(X) ; r(Y) } :- X != Y.   % X, Y unsafe

{ q(X) : y(X) ; r(Y) } :- X == 2.   % Y unsafe

{ q(X) : y(X) ; r(Y) } :- X = 2.   % Y unsafe

{ q(X) : y(X) ; r(Y) } :- Y == 2.   % Safe

{ q(X) ; q(X) } :- X == 2.  % Safe

{ q(X) ; q(X) } :- X != 2.  % X unsafe

{ q(Y) : Y == 2 } :- #count {Y,Z,X : q()}.  % Safe

{ q(Y) : Y == 2 } :- #count {Y,Z,X : q()} > q(X).   % X, Y, Z unsafe

{ q(X) : y(X) } :- #count{X,Y,Z : q()} > 1.  % X, Y, Z unsafe

{ q(X) : y(X) } :- #count{X,Y,Z : q()} > q(X).  % Y, Z unsafe

% TODO: Testar este caso de novo quando os assignments forem retirados
%{ q(X) : y(X) } :- #count{X,Y,Z : q()} = q(Y).  % X, Z unsafe

{ q(X) : y(X) } :- #count{X,Y,Z : q()} == q(Y).  % X, Y, Z unsafe

{ q(X) : y(X) } :- #count{X,Y,Z : q()} == q(Z).  % X, Y, Z unsafe

{ q(X) : y(X) } :- #count{X,Y,Z : q()} == q(Y, Z).  % X, Y, Z unsafe

{ q(X) : y(X) } :- #count{X,Y,Z : q()} == q(Y,X).  % Y, Z unsafe

{ q(X) : y(X) } :- not #count{X,Y,Z : q()} == X.  % Y, Z unsafe

{ q(X) : y(X) } :- not #count{X,Y,Z : q()} == q(X).  % Y, Z unsafe

{ q(X) : y(X) } :- not #count{X,Y,Z : q()} == q(Y).  % X, Y, Z unsafe

{ q(X) : y(X) } :- not #count{X,Y,Z : q()} == q(Z).  % X, Y, Z unsafe

{ q(X) : y(X) } :- not #count{X,Y,Z : q()} == q(Y, Z).  % X, Y, Z unsafe

{ q(X) : y(X) } :- not #count{X,Y,Z : q()} == q(Y,X).  % Y, Z unsafe

{ q(X) : y(X) } :- q(Y).    % Safe

{ q(X) : y(X); t(Y)} :- q(Y).  % Safe

% Fix grammar to allow this atom
%{ q(X) : y(X, Y) } :- #count{X,Y,Z} > q(X), Y != 2.

{ f(X,Y) : p(X), q(Y) } :- X == Y.  % Safe

{ q(X) : p(X) } :- r(X).    % Safe

{ q(X) : y(X) } :- X != 2.  % Safe

{ q(X) : y(X) ; r(X) : t(X) } :- X != 2.    % X unsafe

{ q(X) : y(X) ; r(Y) : t(Y) } :- X != 2.    % X unsafe

{ q(X) : y(X) ; r(X) } :- X != 2.          % X unsafe

{ q(X) : y(X) ; r(Y) : t(Y) } :- X == 2.   % Safe

% Testing choice rule grounding and aggregate behaviour

{q(X) : q(X)} :- #count{X,Y,Z: q(X)}.   % Safe

{q(X) : q(X)} :- #count{X,Y,Z: q(X)} > 1. % Y, Z unsafe

{q(X) : q(X)} :- #count{X,Y,Z : q()} > 1.   % X,Y,Z unsafe

{q(X) : q(X)} :- #count{X,Y,Z : q()} > q(X). % Y, Z unsafe

{q(X) : q(X, Y)} :- #count{X,Y,Z : q()} > q(X). % Y, Z unsafe

{q(X) : q(X, Y)} :- #count{X,Y,Z : q()} > q(X), Y != 2. % Z unsafe

{q(X) : q(X, Y)} :- #count{X,Y,Z : q(Z)} > q(X), Y != 2. % Safe

% Testing negative literals that do not ground the variables

{ q(X) : not y(X) } :- X != 2.   % X unsafe

{ q(X) : y(X) } :- X != 2.   % Safe

{ q(X) : not y(X) } :- q(X).  % Safe

{ q(X) : not y(X) } :- not q(X).  % X unsafe

{ q(X) : not y(X) } :- not q(X), not q(Y).  % X, Y unsafe






