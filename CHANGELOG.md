# Change Log

All notable changes to the "ezasp" extension will be documented in this file.

## 1.0.0
Inicial release with:
- Syntax checking;
- Warnings about order of rules errors;
- Predicate validation;
- On-hover predicate information;
- Missing comment warning;
- Feature disablement.

## 1.0.1
- Added copyright licence.

## 1.0.2
- Fixed bug where the absolute of an number (symbolised by |X|) was being read as an invalid rule.

## 1.0.3
- Adjusted `README.md` picture sizes.

## 1.0.4
- Fixed bug where while writing a new rule, the error messages were being shown on the previous rule.

## 1.0.5
- Added patch notes `CHANGELOG.md` file.

## 1.0.6
- Added the ability to disable syntax checking.

## 1.0.7
- Updated `README.md`;
- Added support to optimization statements.

## 1.0.8
- Fixed small bug where the operation "\" was not supported;
- Fixed small bug with the order error messages, where the messages were not all updated with the newly added optimization statements.

## 1.0.9
- Fixed bug where optimization statemets would get a warning stating that a predicate was being defined.

## 1.0.10
- Fixed bug where aggregates' order was not working properly (they can be defined everywhere without an error appearing).
- Fixed bug where aggregates were defining predicates.

## 1.0.11
- Adjusted version 1.0.10 as bugs weren't totally fixed.

## 1.0.12
- Fixed bug where some show statements where appearing as invalid rules.