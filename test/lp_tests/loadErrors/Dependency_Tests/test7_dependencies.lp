bot :- #min { #inf : a } -1000.
top :- 1000 #max { #sup : a }.

:- #sum { 1 : a; 2 : b; 3 : c } = 4.
:- #sum { 1 : a; 2 : b; 3 : c } > 3.


cnt(X) :- X = #count { 2 : a; 3 : a }.
sum(X) :- X = #sum { 2 : a; 3 : a }.
pos(X) :- X = #sum+ { 2 : a; 3 : a }.
min(X) :- X = #min { 2 : a; 3 : a }.
max(X) :- X = #max { 2 : a; 3 : a }.