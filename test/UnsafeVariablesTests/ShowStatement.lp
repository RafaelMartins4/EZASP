#show. % Safe

#show q/1.  % Safe

#show X : q.  % X unsafe

#show X : q(X).  % Safe

#show X : not q(X).  % X unsafe

#show X : not q(X), q(Y).  % X unsafe

#show X : not q(X), not q(Y).  % X, Y unsafe

#show X : q(X), not q(Y).  % Y unsafe

#show D/1.  % D unsafe

#show X.    % X unsafe

#show X : q(X), not q(Y), X == Y, #count{}.  % Safe

