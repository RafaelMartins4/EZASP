% Testing Predicate On Hover messages

% If a defined predicate has no comments before one of its defining locations, a 'No comment found where predicate is defined' message should appear
% 'No Comment' hover messages must also show the arity of each predicate that is defined in the program. Predicates 'a()' and 'a(X)' will be treated as a different due to their different arity 
% If a predicate is defined in only one location and has a comment before it, the comment must be showed when the user hovers the predicate
% If a predicate is defined in multiple locations, the comments must be joined and showed when the user hovers the predicate (including 'No comment' messages when it applies)

% All hover messages should identify the lines where each predicate appears. Additionally, if the project includes extra files, the final hover message must indicate which file defines it


% Defining a predicate without comment

a().

a(X).


% Defining a predicate in multiple lines without comment

b().
#const b = 1.
b() :- a().

b(X).
b(X) :- a(X).

% Defining a predicate in one line with a comment

% Commenting predicate c
c().

% Commenting predicate c(X)
c(X).

% Defining a predicate in multiple lines with comments

% Commenting predicate d
d().
% Commenting predicate d aswell
{d()}.
{d()} :- a().

% Commenting predicate d(X)
d(X).
% Commenting predicate d(X) aswell
{d(X)}.
{d(X)} :- a(X).

