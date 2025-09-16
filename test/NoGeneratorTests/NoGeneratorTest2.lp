% Testing No Generator warning messages
% This message must be triggered when the program does not have any choice in the head of its rules (i.e. a choice rule or a fact with a choice in its head).

% In this test, we utilize a fact with a choice. Given that this fact acts like a generator, the message is not triggered.

skill(bob, 2, 1). skill(bob, 3, 3).
skill(charlie, 1, 2). skill(charlie, 3, 2).

required_skill(task1, 1).
required_skill(task2, 2).
required_skill(task3, 3).

{}.

% Define which workers can handle which task, along with their proficiency level with that skill
qualification(W, T, P) :- worker(W), task(T), required_skill(T, S), skill(W, S, P).
