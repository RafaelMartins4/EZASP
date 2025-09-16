% Testing No Comment Warnings - these should warnings appear when there is a predicate being defined without a comment in the previous line.

% ---------------------------------------------- Constants ----------------------------------------------

#const a = 5.

#const b = c().

#const c = "Test".

% Commenting Constant a
#const a = 5.
% Commenting Constant b
#const b = c().
% Commenting Constant c
#const c = "Test".


% ---------------------------------------------- Facts ----------------------------------------------

d().

g() == 1.

{}.

1{e() : q()}1.

{e()}.

{X == 1 : q()}.    % BuiltIn_Atoms do not define predicates

{f() == 1 : q()}.

#count {} > q().    % Aggregate functions never define predicates

q() > #count {}.

#count {q() : q()}.


% ---------------------------------------------- Choice Rules ----------------------------------------------

{} :- q().          % Atoms in the body of a rule never define a predicate

{q()} :- -X == 1.

{} :- X == 1.

{X == 1} :- q().

% Definite Rules

#count {} > q() :- q().

q() > #count {} :- X == 1.

#count {q() : q()} :- p().

q() :- p().

% Commenting a Fact
q() :- p().

q(); X == 1 :- p(X).

% Commenting a Fact
q(); X == 1 :- p(X).

Y == 1; X == 1 :- p(X,Y).

q(); p() :- p(X).

not X == 1 :- p().


% ---------------------------------------------- Constraints ----------------------------------------------

% Constraints never define predicates, so we only test cases where there should not be a warning

:- q().

:- X == 1.

:- {}.

:- {q(X) : p(X)}.

:- #count{q(X) : p(X)}.

% ---------------------------------------------- Optimization Statements ----------------------------------------------

% Optimization Statements never define predicates, so we only test cases where there should not be a warning

#maximize{}.

#maximize{X : q(X)}.

#maximize{q(X) : p(Y,X)}.

#minimize{q(X) : p(Y,X)}.

#minimize{q()}.

#minimize{q() : p()}.

% ---------------------------------------------- Weak Constraints ----------------------------------------------

% Weak Constraints never define predicates, so we only test cases where there should not be a warning

:~ p(X). [q(X)]

:~ p(X). [X]

:~ p(X). [q()]

:~ p(-X). [-X]

% ---------------------------------------------- Show Statements ----------------------------------------------

% Show Statements never define predicates, so we only test cases where there should not be a warning

#show q/1.

#show q() : q(X).

#show.
