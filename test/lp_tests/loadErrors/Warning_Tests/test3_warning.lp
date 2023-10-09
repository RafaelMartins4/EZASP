%positions
n(1..9).

% defining a subgrid
subgrid(X,Y,Z,W) :- n(X), n(Y), n(Z), n(W), (X-1)/3=(Z-1)/3,(Y-1)/3=(W-1)/3.

1{in(X,Y,N):n(N)}1 :- n(Y), n(X).

% for each subgrid, a number only occurs once
:- subgrid(X,Y,Z,W), in(X,Y,N), in(Z,W,N), X!=Z, Y!=W.

#show in/3.