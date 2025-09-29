#minimize {q(Y)}.   % Y unsafe

#minimize {X,Y,Z}.  % X, Y, Z unsafe

#minimize {X,Y,Z: q(X)}.  % Y, Z unsafe

#minimize {X,Y,Z: q(X), q(Y)}.  % Z unsafe

#minimize {X,Y,Z: q(X,Z), q(Y)}. % Safe

#minimize {q(Y) : not Y != X, X == 1}. % Safe

#minimize {q(Y) : Y == X, X == 1}. % Safe

#minimize {q(Y) : not Y != X, X != 1}. % X, Y unsafe

#minimize {q(Y) : not Y != X, not X != 1}. % Safe

#minimize {q(Y) : q(X), X == Y}. % Safe

#minimize {q(Y) : q(X), not X == Y}. % Y unsafe

#minimize {q(X,Y) : q(X), not X == Y}. % Y unsafe

#minimize {q(X,Y,Z) : q(X), X == Y, Y == Z}. % Safe