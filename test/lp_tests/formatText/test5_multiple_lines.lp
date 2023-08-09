%* this is a comment until here*% n(1..9). % positions

1{in(X,Y,N):n(N)}1 :- n(Y), n(X). % each position has exactly 1 number

1{in(X,Y,N):n(Y)}1 :- n(X), n(N). % for each column, a number only occurs in one row

1{in(X,Y,N):n(X)}1 :- n(Y), n(N). % for each row, a number only occurs in one column

subgrid(X,Y,Z,W) :- n(X), n(Y), n(Z), n(W), (X-1)/3=(Z-1)/3,(Y-1)/3=(W-1)/3. % defining a subgrid

:- subgrid(X,Y,Z,W), in(X,Y,N), in(Z,W,N), X!=Z, Y!=W. % for each subgrid, a number only occurs once

#show in/3.