% positions
n(1..9).

% each position has exactly 1 number
1{in(X,Y,N):n(N)}1 :- n(Y), n(X).

% for each column, a number only occurs in one row
1{in(X,Y,N):n(Y)}1 :- n(X), n(N).

#show in/3.