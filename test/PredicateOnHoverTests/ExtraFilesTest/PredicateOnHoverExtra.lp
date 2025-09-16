% Testing Predicate On Hover messages

% If a defined predicate has no comments before any of its defining locations, a 'No comment found where predicate is defined' message should appear
% If a predicate is defined and has only one comment before any of its defining locations, the comment must be showed when the user hovers the predicate
% If a predicate is defined and has multiple comments before its defining locations, these comments must be joined and showed whe the user hovers the predicate

% All hover messages should identify the lines where each predicate is commented. Additionally, if the project includes extra files, the final hover message must indicate which file defines it

% In this file, we test defining predicates in multiple files to ensure that their comments are showed in the hover messages of the main file


% Testing a predicate without comment

a().

% Testing a predicate with a comment

% Commenting predicate b
b().


% Testing a predicate that is commented in another file

c().

% Testing a predicate that is defined in another file without comments

d().


% Testing a predicate that is defined in multiple other files with comments

e().

% Testing a predicate that is defined in multiple other files without comments

f().