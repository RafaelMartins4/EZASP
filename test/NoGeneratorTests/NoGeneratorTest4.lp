% Testing No Generator warning messages
% This message must be triggered when the program does not have any choice in the head of its rules (i.e. a choice rule or a fact with a choice in its head).

% Given that this program does not have constructs that would come after the Choice Rule zone according to Easy ASP ordering, the message is not triggered

skill(bob, 2, 1). skill(bob, 3, 3).
skill(charlie, 1, 2). skill(charlie, 3, 2).

required_skill(task1, 1).
required_skill(task2, 2).
required_skill(task3, 3).