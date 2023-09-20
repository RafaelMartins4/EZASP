
{ coloring(N, C) : node(N, C) } 1 :- color(C).

% A node has a conflict if it has neighbors with the same color
conflict(X) :- node(X, C), node(Y, C), edge(X, Y).

% Prevent conflicts by excluding nodes with the same color
:- conflict(N), coloring(N, C), coloring(M, C), N != M.

% Find a coloring without conflicts
#show coloring/2.

% Define the possible colors for nodes
color(red).

% Define the nodes and their colors
node(a, red).
% Define the edges between nodes
edge(a, b).