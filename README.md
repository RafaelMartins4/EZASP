# EZASP - Making Answer Set Programming Easier

My name is Ramiro Henriques, a student in the final year of the Integrated Masters in Computer Science and Engineering in the NOVA School of Science and Technology. My dissertation consists of making an editing tool for Answer Set Programming, with the goal of assisting newcomers to ASP understanding it.

## Requirements

If you have not done it yet, it would be required for you to install [Visual Studio Code](https://code.visualstudio.com/), and then the extension called EZASP, which you can install by either searching for it directly on VS Code on the extension marketplace tab, or just go directly to the specific EZASP [marketplace website](https://marketplace.visualstudio.com/items?itemName=RamiroHenriques.ezasp).

## Dependencies
This extension was built on top of two other extensions:

- ["Answer Set Programming Language Support"](https://marketplace.visualstudio.com/items?itemName=ffrankreiter.answer-set-programming-language-support) by Florian Frankreiter

- ["asp-syntax-highlight"](https://marketplace.visualstudio.com/items?itemName=abelcour.asp-syntax-highlight) by Arnaud Belcour

When you install this VS Code extension, it will also install the other two automatically. However, if any issues arise during installation, be aware that certain funcionalities may only be fully functional when the other two extensions are active.

## Features

### Order Errors

Rules must be in the following order: constants, facts, choices, definitions, constraints, and show statements. The extension checks for line order and highlights any out-of-order lines with a red underline. Additionally, a hover message explains what is the error.

### Predicate Validation

The extension also highlights with a red underline if a predicate has not been defined in a previous line, and shows an hover message to explain which predicate has not been defined yet.

### On-Hover Predicate Information

When you hover over a predicate, the extension reveals a pop-up message containing the comment added by the user where the predicate was defined.

### Missing Comment Warning

It detects predicates defined without preceding comments and highlights them with a yellow underline, and on hover a message will appear explaining why is this line highlighted.

### Multi-File Support

As it has already been mentioned, this Visual Studio Code extension is created with base on other two extensions. In one of them, you can break your program into multiple files, as long as they are stored within the same directory and in that same directory includes a config.json file with an array containing the names of the additional files. In the EZASP extension, we added to this feature, by making it so that if the config file has the additional files, the predicate validation and on-hover predicate information features will keep their capabilities throughout the multiple files. Aditionally, if you create the config.json file using the command in the command pallete "EZASP - create config.json file" it will have an additional entry for disableFeatures. Here, by switching the values from false to true, you can disable the features and choose which ones are you interested in using.