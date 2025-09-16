% Testing different kinds of syntax errors.

% -------------------------------- Constants --------------------------------

% Missing '.'
#const a = 2    % This error will extend past the rule

% Invalid use of construct in a position not allowed by the grammar
#const a = X.

#const X = 1.


% -------------------------------- Facts ------------------------------------

% Missing '.'
p()   % This error will extend past the rule

% Missing parenthesis
p(.   

