% for each subgrid, a number only occurs once
:- subgrid(X,Y,Z,W), in(X,Y,N), in(Z,W,N), X!=Z, Y!=W.

#show in/3. 