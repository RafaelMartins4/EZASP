% Testing Predicate On Hover messages

% If a defined predicate has no comments before any of its defining locations, a 'No comment found where predicate is defined' message should appear
% If a predicate is defined and has only one comment before any of its defining locations, the comment must be showed when the user hovers the predicate
% If a predicate is defined and has multiple comments before its defining locations, these comments must be joined and showed whe the user hovers the predicate

% All hover messages should identify the lines where each predicate is commented. Additionally, if a predicate is defined and commented in a different file, 
% the final hover message must indicate which file defines it 


% Commenting predicate b
c().

d().

% Commenting predicate e
e().

f().