:~ . [X]    % X unsafe

:~ q(X). [X]    % Safe

:~ q(X). [X,Y,Z]    % Y, Z unsafe

:~ q(X), Y == 1. [X,Y,Z]  % Z unsafe

:~ q(X), Y == X. [X,Y,Z]  % Z unsafe

:~ q(X), Y == X, Z == Y. [X,Y,Z]  % Safe

:~ q(X), #count{X,Y,Z}. [X]  % Safe

:~ q(X), #count{X,Y,Z} > 1. [X]  % Y, Z unsafe

:~ q(X), #count{X,Y,Z} > q(D). [X]  % Y, Z, D unsafe

:~ q(X), #count{X,Y,Z : q(Y), q(Z)} > q(D). [X]  % D unsafe

:~ q(X), #count{X,Y,Z : q(Y), q(Z), D == 1} > q(D). [X]  % D unsafe

:~ q(X), #count{X,Y,Z : q(Y), q(Z), D == 1} > q(D). [X,D]  % D unsafe

:~ q(X), Y == X, Z == Y, #count{X,Y,Z : q(Y), q(Z), D == 1} > q(D). [X]  % D unsafe
