const assert = require('chai').assert;

// @ts-ignore
const { getRuleType, EMPTY, COMMENT, FACT, CHOICE, DEFINITION, CONSTRAINT, SHOW_STATEMEMENT, INVALID_RULE } = require('../src/parser/getRuleType');

// @ts-ignore
const { formatText } = require('../src/parser/formatText');

// @ts-ignore
const { loadErrors } = require('../src/engine/loadErrors');

const { readFileSync } = require('fs');
const { getPredicates } = require('../src/parser/getPredicates');

const PATH = 'test/lp_tests';

const MAC_OS = 1;
const WINDOWS = 2;
const LINUX = 3;

function detectOS() {
  switch (process.platform) {
    case "darwin": return MAC_OS;
    case "win32": return WINDOWS;
    default: return LINUX;
  }
}

const OS = detectOS();

let SPLIT_CODE;

if (OS == MAC_OS || OS == LINUX)
  SPLIT_CODE = '\n';
else
  SPLIT_CODE = '\r\n';


describe('Extension', function () {

  describe('getRuleType', function () {
    it(' "a." must be a fact', function () {
      const result = getRuleType('a.');
      assert.equal(result, FACT);
    });

    it('"{a}." must be a choice.', function () {
      const result = getRuleType('{a}.');
      assert.equal(result, CHOICE);
    });

    it('"a :- b." must be a rule.', function () {
      const result = getRuleType('a :- b.');
      assert.equal(result, DEFINITION);
    });

    it('":- a." must be a constraint.', function () {
      const result = getRuleType(':- a.');
      assert.equal(result, CONSTRAINT);
    });

    it('" " must be empty.', function () {
      const result = getRuleType(' ');
      assert.equal(result, EMPTY);
    });

    it('"%a." must be a comment.', function () {
      const result = getRuleType('%a.');
      assert.equal(result, COMMENT);
    });

    it('"#show a/0." must be a view.', function () {
      const result = getRuleType('#show a/0.');
      assert.equal(result, SHOW_STATEMEMENT);
    });

    it('"xxxxx." must be a fact.', function () {
      const result = getRuleType('xxxxx.');
      assert.equal(result, FACT);
    });

    it('"#." must be an invalid rule.', function () {
      const result = getRuleType('#.');
      assert.equal(result, INVALID_RULE);
    });

    it('"aa{a}." must be an invalid rule.', function () {
      const result = getRuleType('aa{a}.');
      assert.equal(result, INVALID_RULE);
    });

    it('"" must be empty.', function () {
      const result = getRuleType('');
      assert.equal(result, EMPTY);
    });

    it('":-." must be an invalid rule.', function () {
      const result = getRuleType(':-.');
      assert.equal(result, INVALID_RULE);
    });

    it('"a:-." must be an invalid rule.', function () {
      const result = getRuleType('a:-.');
      assert.equal(result, INVALID_RULE);
    });

    it('"{a,a,a,a,}." must be an invalid rule.', function () {
      const result = getRuleType('{a,a,a,a,}.');
      assert.equal(result, INVALID_RULE);
    });

    it('"a(a,a,a,a,)." must be an invalid rule.', function () {
      const result = getRuleType('a(a,a,a,a,).');
      assert.equal(result, INVALID_RULE);
    });

    it('"a(a,a,a)." must be a fact.', function () {
      const result = getRuleType('a(a,a,a).');
      assert.equal(result, FACT);
    });

    it('"a(1..3)." must be a fact.', function () {
      const result = getRuleType('a(1..3).');
      assert.equal(result, FACT);
    });

    const result = getRuleType('...........');
    it('"..........." must be an invalid rule.', function () {
      assert.equal(result, INVALID_RULE);
    });

    it('"a(a..b)." must be an invalid rule.', function () {
      const result = getRuleType('a(a..b).');
      assert.equal(result, INVALID_RULE);
    });

    it('"1..2." must be an invalid rule.', function () {
      const result = getRuleType('1..2.');
      assert.equal(result, INVALID_RULE);
    });

    it('"a(1..2)." must be a fact.', function () {
      const result = getRuleType('a(1..2).');
      assert.equal(result, FACT);
    });

    it('"{}." must be an invalid rule.', function () {
      const result = getRuleType('{}.');
      assert.equal(result, INVALID_RULE);
    });

    it('"1{a}1." must be a choice.', function () {
      const result = getRuleType('1{a}1.');
      assert.equal(result, CHOICE);
    });

    it('"1{a}1 :- a." must be a choice.', function () {
      const result = getRuleType('1{a}1 :- a.');
      assert.equal(result, CHOICE);
    });

    it('"1{}1 :- a." must be an invalid rule.', function () {
      const result = getRuleType('1{}1 :- a.');
      assert.equal(result, INVALID_RULE);
    });

    it('"aa{a}aaa :- a." must be an invalid rule.', function () {
      const result = getRuleType('1{}1 :- a.');
      assert.equal(result, INVALID_RULE);
    });

    it('"a(1,2,3,4,5,56)." must be a fact.', function () {
      const result = getRuleType('a(1,2,3,4,5,56).');
      assert.equal(result, FACT);
    });



    it('"1{in(X,Y,N):n(N)}1 :- n(Y), n(X)." must be a choice.', function () {
      const result = getRuleType('1{in(X,Y,N):n(N)}1 :- n(Y), n(X).');
      assert.equal(result, CHOICE);
    });

    it('"this_is_a_fact." must be a fact.', function () {
      const result = getRuleType('this_is_a_fact.');
      assert.equal(result, FACT);
    });

    it('"this_is_a_fact(var_1,var_2,1..3)." must be a fact.', function () {
      const result = getRuleType('this_is_a_fact(var_1,var_2,1..3).');
      assert.equal(result, FACT);
    });

    it('"n(1..9). % positions" must be a fact.', function () {
      const result = getRuleType('n(1..9). % positions');
      assert.equal(result, FACT);
    });

    it('"{a(1..3)}." must be a choice.', function () {
      const result = getRuleType('{a(1..3)}.');
      assert.equal(result, CHOICE);
    });

    it('"{a(1..3),a(13),a(13),a(1..3)}." must be a choice.', function () {
      const result = getRuleType('{a(1..3),a(13),a(13),a(1..3)}.');
      assert.equal(result, CHOICE);
    });

    it('"a(3..1)." must be an invalid rule.', function () {
      const result = getRuleType('a(3..1).');
      assert.equal(result, INVALID_RULE);
    });

    it('"3{a}2." must be an invalid rule.', function () {
      const result = getRuleType('3{a}2.');
      assert.equal(result, INVALID_RULE);
    });

    it('"{a}2." must be a choice.', function () {
      const result = getRuleType('{a}2.');
      assert.equal(result, CHOICE);
    });

    it('"3{a}." must be a choice.', function () {
      const result = getRuleType('3{a}.');
      assert.equal(result, CHOICE);
    });

    it('"m(X..Y) :- n(X), n(Y), X<Y." must be a rule.', function () {
      const result = getRuleType('m(X..Y) :- n(X), n(Y), X<Y.');
      assert.equal(result, DEFINITION);
    });

    it('"n(1;3)." must be a fact.', function () {
      const result = getRuleType('n(1;3).');
      assert.equal(result, FACT);
    });

    it('"m(x..Y) :-  n(Y), x<Y.." must be a fact.', function () {
      const result = getRuleType('m(x..Y) :-  n(Y), x<Y.');
      assert.equal(result, DEFINITION);
    });


  });

  describe('formatText', function () {
    it('rules in multiple line testing 1', function () {

      let file = readFileSync(PATH + '/formatText/test1_multiple_lines.lp').toLocaleString();

      const result = formatText(file.trim().split(SPLIT_CODE));
      assert.deepEqual(result, {
        formattedText: [
          "n(1..9).",
          "% positions",
          "",
          "1{in(X,Y,N):n(N)}1 :- n(Y), n(X).",
          "% each position has exactly 1 number",
          "",
          "1{in(X,Y,N):n(Y)}1 :- n(X), n(N).",
          "% for each column, a number only occurs in one row",
          "",
          "1{in(X,Y,N):n(X)}1 :- n(Y), n(N).",
          "% for each row, a number only occurs in one column",
          "",
          "subgrid(X,Y,Z,W) :- n(X), n(Y), n(Z), n(W), (X-1)/3=(Z-1)/3,(Y-1)/3=(W-1)/3.",
          "% defining a subgrid",
          "",
          ":- subgrid(X,Y,Z,W), in(X,Y,N), in(Z,W,N), X!=Z, Y!=W.",
          "% for each subgrid, a number only occurs once",
          "",
          "#show in/3."
        ], lines: [{ lineStart: 0, lineEnd: 0, indexStart: 0, indexEnd: 8 },
        { lineStart: 0, lineEnd: 0, indexStart: 9, indexEnd: 20 },
        { lineStart: 1, lineEnd: 1, indexStart: 0, indexEnd: 0 },
        { lineStart: 2, lineEnd: 2, indexStart: 0, indexEnd: 33 },
        { lineStart: 2, lineEnd: 2, indexStart: 34, indexEnd: 70 },
        { lineStart: 3, lineEnd: 3, indexStart: 0, indexEnd: 0 },
        { lineStart: 4, lineEnd: 4, indexStart: 0, indexEnd: 33 },
        { lineStart: 4, lineEnd: 4, indexStart: 34, indexEnd: 84 },
        { lineStart: 5, lineEnd: 5, indexStart: 0, indexEnd: 0 },
        { lineStart: 6, lineEnd: 6, indexStart: 0, indexEnd: 33 },
        { lineStart: 6, lineEnd: 6, indexStart: 34, indexEnd: 84 },
        { lineStart: 7, lineEnd: 7, indexStart: 0, indexEnd: 0 },
        { lineStart: 8, lineEnd: 8, indexStart: 0, indexEnd: 76 },
        { lineStart: 8, lineEnd: 8, indexStart: 77, indexEnd: 97 },
        { lineStart: 9, lineEnd: 9, indexStart: 0, indexEnd: 0 },
        { lineStart: 10, lineEnd: 10, indexStart: 0, indexEnd: 54 },
        { lineStart: 10, lineEnd: 10, indexStart: 55, indexEnd: 100 },
        { lineStart: 11, lineEnd: 11, indexStart: 0, indexEnd: 0 },
        { lineStart: 12, lineEnd: 12, indexStart: 0, indexEnd: 11 }]
      });
    });

    it('rules in multiple line testing 2', function () {

      let file = readFileSync(PATH + '/formatText/test2_multiple_lines.lp').toLocaleString();

      const result = formatText(file.trim().split(SPLIT_CODE));
      assert.deepEqual(result, {
        formattedText: [
          "%* this is a commentuntil here*%",
          "n(1..9).",
          "% positions",
          "",
          "1{in(X,Y,N):n(N)}1 :- n(Y), n(X).",
          "% each position has exactly 1 number",
          "",
          "1{in(X,Y,N):n(Y)}1 :- n(X), n(N).",
          "% for each column, a number only occurs in one row",
          "",
          "1{in(X,Y,N):n(X)}1 :- n(Y), n(N).",
          "% for each row, a number only occurs in one column",
          "",
          "subgrid(X,Y,Z,W) :- n(X), n(Y), n(Z), n(W), (X-1)/3=(Z-1)/3,(Y-1)/3=(W-1)/3.",
          "% defining a subgrid",
          "",
          ":- subgrid(X,Y,Z,W), in(X,Y,N), in(Z,W,N), X!=Z, Y!=W.",
          "% for each subgrid, a number only occurs once",
          "",
          "#show in/3."
        ], lines: [{ lineStart: 0, lineEnd: 2, indexStart: 0, indexEnd: 12 },
        { lineStart: 4, lineEnd: 4, indexStart: 0, indexEnd: 8 },
        { lineStart: 4, lineEnd: 4, indexStart: 9, indexEnd: 20 },
        { lineStart: 5, lineEnd: 5, indexStart: 0, indexEnd: 0 },
        { lineStart: 6, lineEnd: 6, indexStart: 0, indexEnd: 33 },
        { lineStart: 6, lineEnd: 6, indexStart: 34, indexEnd: 70 },
        { lineStart: 7, lineEnd: 7, indexStart: 0, indexEnd: 0 },
        { lineStart: 8, lineEnd: 8, indexStart: 0, indexEnd: 33 },
        { lineStart: 8, lineEnd: 8, indexStart: 34, indexEnd: 84 },
        { lineStart: 9, lineEnd: 9, indexStart: 0, indexEnd: 0 },
        { lineStart: 10, lineEnd: 10, indexStart: 0, indexEnd: 33 },
        { lineStart: 10, lineEnd: 10, indexStart: 34, indexEnd: 84 },
        { lineStart: 11, lineEnd: 11, indexStart: 0, indexEnd: 0 },
        { lineStart: 12, lineEnd: 12, indexStart: 0, indexEnd: 76 },
        { lineStart: 12, lineEnd: 12, indexStart: 77, indexEnd: 97 },
        { lineStart: 13, lineEnd: 13, indexStart: 0, indexEnd: 0 },
        { lineStart: 14, lineEnd: 14, indexStart: 0, indexEnd: 54 },
        { lineStart: 14, lineEnd: 14, indexStart: 55, indexEnd: 100 },
        { lineStart: 15, lineEnd: 15, indexStart: 0, indexEnd: 0 },
        { lineStart: 16, lineEnd: 16, indexStart: 0, indexEnd: 11 }]
      });
    });

    it('rules in multiple line testing 3', function () {

      let file = readFileSync(PATH + '/formatText/test3_multiple_lines.lp').toLocaleString();

      const result = formatText(file.trim().split(SPLIT_CODE));
      assert.deepEqual(result, {
        formattedText: [
          "% positions",
          "n(1..4).",
          "n(5..9).",
          "",
          "1{in(X,Y,N):n(N)}1 :- n(Y), n(X).",
          "% each position has exactly 1 number",
          "",
          "1{in(X,Y,N):n(Y)}1 :- n(X), n(N).",
          "% for each column, a number only occurs in one row",
          "",
          "1{in(X,Y,N):n(X)}1 :- n(Y), n(N).",
          "% for each row, a number only occurs in one column",
          "",
          "subgrid(X,Y,Z,W) :- n(X), n(Y), n(Z), n(W), (X-1)/3=(Z-1)/3,(Y-1)/3=(W-1)/3.",
          "% defining a subgrid",
          "",
          ":- subgrid(X,Y,Z,W), in(X,Y,N), in(Z,W,N), X!=Z, Y!=W.",
          "% for each subgrid, a number only occurs once",
          "",
          "#show in/3."
        ], lines: [{ lineStart: 0, lineEnd: 0, indexStart: 0, indexEnd: 11 },
        { lineStart: 1, lineEnd: 1, indexStart: 0, indexEnd: 8 },
        { lineStart: 1, lineEnd: 1, indexStart: 9, indexEnd: 17 },
        { lineStart: 2, lineEnd: 2, indexStart: 0, indexEnd: 0 },
        { lineStart: 3, lineEnd: 3, indexStart: 0, indexEnd: 33 },
        { lineStart: 3, lineEnd: 3, indexStart: 34, indexEnd: 70 },
        { lineStart: 4, lineEnd: 4, indexStart: 0, indexEnd: 0 },
        { lineStart: 5, lineEnd: 5, indexStart: 0, indexEnd: 33 },
        { lineStart: 5, lineEnd: 5, indexStart: 34, indexEnd: 84 },
        { lineStart: 6, lineEnd: 6, indexStart: 0, indexEnd: 0 },
        { lineStart: 7, lineEnd: 7, indexStart: 0, indexEnd: 33 },
        { lineStart: 7, lineEnd: 7, indexStart: 34, indexEnd: 84 },
        { lineStart: 8, lineEnd: 8, indexStart: 0, indexEnd: 0 },
        { lineStart: 9, lineEnd: 9, indexStart: 0, indexEnd: 76 },
        { lineStart: 9, lineEnd: 9, indexStart: 77, indexEnd: 97 },
        { lineStart: 10, lineEnd: 10, indexStart: 0, indexEnd: 0 },
        { lineStart: 11, lineEnd: 11, indexStart: 0, indexEnd: 54 },
        { lineStart: 11, lineEnd: 11, indexStart: 55, indexEnd: 100 },
        { lineStart: 12, lineEnd: 12, indexStart: 0, indexEnd: 0 },
        { lineStart: 13, lineEnd: 13, indexStart: 0, indexEnd: 11 }]
      });
    });

    it('rules in multiple line testing 4', function () {

      let file = readFileSync(PATH + '/formatText/test4_multiple_lines.lp').toLocaleString();

      const result = formatText(file.trim().split(SPLIT_CODE));
      assert.deepEqual(result, {
        formattedText: [
          "n(1..4).",
          "n(5..9).",
          "% positions",
          "",
          "1{in(X,Y,N):n(N)}1 :- n(Y), n(X).",
          "% each position has exactly 1 number",
          "",
          "1{in(X,Y,N):n(Y)}1 :- n(X), n(N).",
          "% for each column, a number only occurs in one row",
          "",
          "1{in(X,Y,N):n(X)}1 :- n(Y), n(N).",
          "% for each row, a number only occurs in one column",
          "",
          "subgrid(X,Y,Z,W) :- n(X), n(Y), n(Z), n(W), (X-1)/3=(Z-1)/3,(Y-1)/3=(W-1)/3.",
          "% defining a subgrid",
          "",
          ":- subgrid(X,Y,Z,W), in(X,Y,N), in(Z,W,N), X!=Z, Y!=W.",
          "% for each subgrid, a number only occurs once",
          "",
          "#show in/3."
        ], lines: [{ lineStart: 0, lineEnd: 0, indexStart: 0, indexEnd: 8 },
        { lineStart: 0, lineEnd: 0, indexStart: 9, indexEnd: 17 },
        { lineStart: 0, lineEnd: 0, indexStart: 18, indexEnd: 29 },
        { lineStart: 1, lineEnd: 1, indexStart: 0, indexEnd: 0 },
        { lineStart: 2, lineEnd: 2, indexStart: 0, indexEnd: 33 },
        { lineStart: 2, lineEnd: 2, indexStart: 34, indexEnd: 70 },
        { lineStart: 3, lineEnd: 3, indexStart: 0, indexEnd: 0 },
        { lineStart: 4, lineEnd: 4, indexStart: 0, indexEnd: 33 },
        { lineStart: 4, lineEnd: 4, indexStart: 34, indexEnd: 84 },
        { lineStart: 5, lineEnd: 5, indexStart: 0, indexEnd: 0 },
        { lineStart: 6, lineEnd: 6, indexStart: 0, indexEnd: 33 },
        { lineStart: 6, lineEnd: 6, indexStart: 34, indexEnd: 84 },
        { lineStart: 7, lineEnd: 7, indexStart: 0, indexEnd: 0 },
        { lineStart: 8, lineEnd: 8, indexStart: 0, indexEnd: 76 },
        { lineStart: 8, lineEnd: 8, indexStart: 77, indexEnd: 97 },
        { lineStart: 9, lineEnd: 9, indexStart: 0, indexEnd: 0 },
        { lineStart: 10, lineEnd: 10, indexStart: 0, indexEnd: 54 },
        { lineStart: 10, lineEnd: 10, indexStart: 55, indexEnd: 100 },
        { lineStart: 11, lineEnd: 11, indexStart: 0, indexEnd: 0 },
        { lineStart: 12, lineEnd: 12, indexStart: 0, indexEnd: 11 }]
      });
    });

    it('rules in multiple line testing 5', function () {

      let file = readFileSync(PATH + '/formatText/test5_multiple_lines.lp').toLocaleString();


      const result = formatText(file.trim().split(SPLIT_CODE));
      assert.deepEqual(result, {
        formattedText: [
          "%* this is a comment until here*%",
          "n(1..9).",
          "% positions",
          "",
          "1{in(X,Y,N):n(N)}1 :- n(Y), n(X).",
          "% each position has exactly 1 number",
          "",
          "1{in(X,Y,N):n(Y)}1 :- n(X), n(N).",
          "% for each column, a number only occurs in one row",
          "",
          "1{in(X,Y,N):n(X)}1 :- n(Y), n(N).",
          "% for each row, a number only occurs in one column",
          "",
          "subgrid(X,Y,Z,W) :- n(X), n(Y), n(Z), n(W), (X-1)/3=(Z-1)/3,(Y-1)/3=(W-1)/3.",
          "% defining a subgrid",
          "",
          ":- subgrid(X,Y,Z,W), in(X,Y,N), in(Z,W,N), X!=Z, Y!=W.",
          "% for each subgrid, a number only occurs once",
          "",
          "#show in/3."
        ], lines: [{ lineStart: 0, lineEnd: 0, indexStart: 0, indexEnd: 33 },
        { lineStart: 0, lineEnd: 0, indexStart: 34, indexEnd: 42 },
        { lineStart: 0, lineEnd: 0, indexStart: 43, indexEnd: 54 },
        { lineStart: 1, lineEnd: 1, indexStart: 0, indexEnd: 0 },
        { lineStart: 2, lineEnd: 2, indexStart: 0, indexEnd: 33 },
        { lineStart: 2, lineEnd: 2, indexStart: 34, indexEnd: 70 },
        { lineStart: 3, lineEnd: 3, indexStart: 0, indexEnd: 0 },
        { lineStart: 4, lineEnd: 4, indexStart: 0, indexEnd: 33 },
        { lineStart: 4, lineEnd: 4, indexStart: 34, indexEnd: 84 },
        { lineStart: 5, lineEnd: 5, indexStart: 0, indexEnd: 0 },
        { lineStart: 6, lineEnd: 6, indexStart: 0, indexEnd: 33 },
        { lineStart: 6, lineEnd: 6, indexStart: 34, indexEnd: 84 },
        { lineStart: 7, lineEnd: 7, indexStart: 0, indexEnd: 0 },
        { lineStart: 8, lineEnd: 8, indexStart: 0, indexEnd: 76 },
        { lineStart: 8, lineEnd: 8, indexStart: 77, indexEnd: 97 },
        { lineStart: 9, lineEnd: 9, indexStart: 0, indexEnd: 0 },
        { lineStart: 10, lineEnd: 10, indexStart: 0, indexEnd: 54 },
        { lineStart: 10, lineEnd: 10, indexStart: 55, indexEnd: 100 },
        { lineStart: 11, lineEnd: 11, indexStart: 0, indexEnd: 0 },
        { lineStart: 12, lineEnd: 12, indexStart: 0, indexEnd: 11 }]
      });
    });

    it('rules in multiple line testing 6', function () {

      let file = readFileSync(PATH + '/formatText/test6_multiple_lines.lp').toLocaleString();

      const result = formatText(file.trim().split(SPLIT_CODE));
      assert.deepEqual(result, {
        formattedText: [
          "n(1..4).",
          "% positions",
          "n(5..9).",
          "",
          "1{in(X,Y,N):n(N)}1 :- n(Y), n(X).",
          "% each position has exactly 1 number",
          "",
          "1{in(X,Y,N):n(Y)}1 :- n(X), n(N).",
          "% for each column, a number only occurs in one row",
          "",
          "1{in(X,Y,N):n(X)}1 :- n(Y), n(N).",
          "% for each row, a number only occurs in one column",
          "",
          "subgrid(X,Y,Z,W) :- n(X), n(Y), n(Z), n(W), (X-1)/3=(Z-1)/3,(Y-1)/3=(W-1)/3.",
          "% defining a subgrid",
          "",
          ":- subgrid(X,Y,Z,W), in(X,Y,N), in(Z,W,N), X!=Z, Y!=W.",
          "% for each subgrid, a number only occurs once",
          "",
          "#show in/3."
        ], lines: [{ lineStart: 0, lineEnd: 0, indexStart: 0, indexEnd: 8 },
        { lineStart: 0, lineEnd: 0, indexStart: 16, indexEnd: 27 },
        { lineStart: 2, lineEnd: 2, indexStart: 0, indexEnd: 2 },
        { lineStart: 3, lineEnd: 3, indexStart: 0, indexEnd: 0 },
        { lineStart: 4, lineEnd: 4, indexStart: 0, indexEnd: 33 },
        { lineStart: 4, lineEnd: 4, indexStart: 34, indexEnd: 70 },
        { lineStart: 5, lineEnd: 5, indexStart: 0, indexEnd: 0 },
        { lineStart: 6, lineEnd: 6, indexStart: 0, indexEnd: 33 },
        { lineStart: 6, lineEnd: 6, indexStart: 34, indexEnd: 84 },
        { lineStart: 7, lineEnd: 7, indexStart: 0, indexEnd: 0 },
        { lineStart: 8, lineEnd: 8, indexStart: 0, indexEnd: 33 },
        { lineStart: 8, lineEnd: 8, indexStart: 34, indexEnd: 84 },
        { lineStart: 9, lineEnd: 9, indexStart: 0, indexEnd: 0 },
        { lineStart: 10, lineEnd: 10, indexStart: 0, indexEnd: 76 },
        { lineStart: 10, lineEnd: 10, indexStart: 77, indexEnd: 97 },
        { lineStart: 11, lineEnd: 11, indexStart: 0, indexEnd: 0 },
        { lineStart: 12, lineEnd: 12, indexStart: 0, indexEnd: 54 },
        { lineStart: 12, lineEnd: 12, indexStart: 55, indexEnd: 100 },
        { lineStart: 13, lineEnd: 13, indexStart: 0, indexEnd: 0 },
        { lineStart: 14, lineEnd: 14, indexStart: 0, indexEnd: 11 }]
      });
    });

    it('rules in multiple line testing 7', function () {

      let file = readFileSync(PATH + '/formatText/test7_multiple_lines.lp').toLocaleString();

      const result = formatText(file.trim().split(SPLIT_CODE));
      assert.deepEqual(result, {
        formattedText: [
          "n(1..4).",
          "% positions",
          "n(5..9",
        ], lines: [{ lineStart: 0, lineEnd: 0, indexStart: 0, indexEnd: 8 },
        { lineStart: 0, lineEnd: 0, indexStart: 16, indexEnd: 27 },
        { lineStart: 0, lineEnd: 0, indexStart: 9, indexEnd: 15 }]
      });
    });

    it('rules in multiple line testing 8', function () {

      let file = readFileSync(PATH + '/formatText/test8_multiple_lines.lp').toLocaleString();

      const result = formatText(file.trim().split(SPLIT_CODE));
      assert.deepEqual(result, {
        formattedText: [
          "n(1..4).",
          "% positions",
          "n(5..912345678",
        ], lines: [{ lineStart: 0, lineEnd: 0, indexStart: 0, indexEnd: 8 },
        { lineStart: 0, lineEnd: 0, indexStart: 16, indexEnd: 27 },
        { lineStart: 2, lineEnd: 12, indexStart: 0, indexEnd: 1 }]
      });
    });

    it('rules in multiple line testing 9', function () {

      let file = readFileSync(PATH + '/formatText/test9_multiple_lines.lp').toLocaleString();

      const result = formatText(file.trim().split(SPLIT_CODE));
      assert.deepEqual(result, {
        formattedText: [
          "%* ~~~ *%",
          "% ~~",
          "%* ... *%",
          "% ..",
          "n(1~~9).",
          "n(1~~9).",
          "n(1..9).",
          "n(1~~9).",
          "n(1~~9).",
          "n(1..9).",
          "n(1..9).",
          "n(1..9)."
        ], lines: [{ lineStart: 0, lineEnd: 0, indexStart: 0, indexEnd: 9 },
        { lineStart: 1, lineEnd: 1, indexStart: 0, indexEnd: 4 },
        { lineStart: 2, lineEnd: 2, indexStart: 0, indexEnd: 9 },
        { lineStart: 3, lineEnd: 3, indexStart: 0, indexEnd: 4 },
        { lineStart: 4, lineEnd: 4, indexStart: 0, indexEnd: 8 },
        { lineStart: 4, lineEnd: 4, indexStart: 9, indexEnd: 17 },
        { lineStart: 5, lineEnd: 5, indexStart: 0, indexEnd: 8 },
        { lineStart: 5, lineEnd: 5, indexStart: 9, indexEnd: 17 },
        { lineStart: 6, lineEnd: 6, indexStart: 0, indexEnd: 8 },
        { lineStart: 6, lineEnd: 6, indexStart: 9, indexEnd: 17 },
        { lineStart: 7, lineEnd: 7, indexStart: 0, indexEnd: 8 },
        { lineStart: 7, lineEnd: 7, indexStart: 9, indexEnd: 17 },]
      });
    });

    it('rules in multiple line testing 10', function () {

      let file = readFileSync(PATH + '/formatText/test10_multiple_lines.lp').toLocaleString();

      const result = formatText(file.trim().split(SPLIT_CODE));
      assert.deepEqual(result, {
        formattedText: [
          "%* ~~~~ *%",
          "% ~~~",
          "%* ... *%",
          "% ..",
          "n(1~~~9).",
          "n(1~~~9).",
          "n(1..9).",
          "n(1~~~9).",
          "n(1~~~9).",
          "n(1..9).",
          "n(1..9).",
          "n(1..9)."
        ], lines: [{ lineStart: 0, lineEnd: 0, indexStart: 0, indexEnd: 10 },
        { lineStart: 1, lineEnd: 1, indexStart: 0, indexEnd: 5 },
        { lineStart: 2, lineEnd: 2, indexStart: 0, indexEnd: 9 },
        { lineStart: 3, lineEnd: 3, indexStart: 0, indexEnd: 4 },
        { lineStart: 4, lineEnd: 4, indexStart: 0, indexEnd: 9 },
        { lineStart: 4, lineEnd: 4, indexStart: 10, indexEnd: 19 },
        { lineStart: 5, lineEnd: 5, indexStart: 0, indexEnd: 8 },
        { lineStart: 5, lineEnd: 5, indexStart: 9, indexEnd: 18 },
        { lineStart: 6, lineEnd: 6, indexStart: 0, indexEnd: 9 },
        { lineStart: 6, lineEnd: 6, indexStart: 10, indexEnd: 18 },
        { lineStart: 7, lineEnd: 7, indexStart: 0, indexEnd: 8 },
        { lineStart: 7, lineEnd: 7, indexStart: 9, indexEnd: 17 },]
      });
    });

    it('rules in multiple line testing 11', function () {

      let file = readFileSync(PATH + '/formatText/test11_multiple_lines.lp').toLocaleString();

      const result = formatText(file.trim().split(SPLIT_CODE));
      assert.deepEqual(result, {
        formattedText: [
          "%* positions*%",
          "n(1..9)."
        ], lines: [{ lineStart: 0, lineEnd: 0, indexStart: 5, indexEnd: 14 },
        { lineStart: 0, lineEnd: 0, indexStart: 0, indexEnd: 24 }]
      });
    });

    it('rules in multiple line testing 12', function () {

      let file = readFileSync(PATH + '/formatText/test12_multiple_lines.lp').toLocaleString();

      const result = formatText(file.trim().split(SPLIT_CODE));
      assert.deepEqual(result, {
        formattedText: [
          ":-abcdef.",
          "a.",
          "a.",
          "a.",
          "a.",
          "a.",
          "aaaaabc."
        ], lines: [{ lineStart: 0, lineEnd: 7, indexStart: 0, indexEnd: 1 },
        { lineStart: 9, lineEnd: 9, indexStart: 0, indexEnd: 2 },
        { lineStart: 9, lineEnd: 9, indexStart: 2, indexEnd: 4 },
        { lineStart: 9, lineEnd: 9, indexStart: 4, indexEnd: 6 },
        { lineStart: 9, lineEnd: 9, indexStart: 6, indexEnd: 8 },
        { lineStart: 9, lineEnd: 9, indexStart: 8, indexEnd: 10 },
        { lineStart: 9, lineEnd: 12, indexStart: 10, indexEnd: 1 }]
      });
    });
  })

  describe('getPredicates', function () {

    it('one fact without arguments', function () {

      const result = getPredicates(["rule."]).predicates;
      const expected = [{head:[{name:"rule",arguments:[]}], tail:[]}];
      assert.deepEqual(result, expected);
    });

    it('one fact with arguments', function () {

      const result = getPredicates(["rule(arg1,arg2)."]).predicates;
      const expected = [{head: [{ name: "rule", arguments: ["arg1", "arg2"]}], tail:[]}];
      assert.deepEqual(result, expected);
    });

    it('one fact with one argument (separated with a semicolon)', function () {

      const result = getPredicates(["rule(arg1;arg2;arg3)."]).predicates;
      const expected = [{head:[{ name: "rule", arguments: ["arg1"] },
                               { name: "rule", arguments: ["arg2"] },
                               { name: "rule", arguments: ["arg3"] }],
                        tail:[]}];
      assert.deepEqual(result, expected);
    });

    it('one fact with two arguments (separated with a semicolon)', function () {

      const result = getPredicates(["rule(arg1,arg2;arg3,arg4)."]).predicates;
      const expected = [{head: [{ name: "rule", arguments: ["arg1", "arg2"] },
                                { name: "rule", arguments: ["arg3", "arg4"] }],
                        tail:[]}];
      assert.deepEqual(result, expected);
    });

    it('one fact with numerical arguments (separated with two dots)', function () {

      const result = getPredicates(["rule(1..3)."]).predicates;
      const expected = [{head:[{ name: "rule", arguments: ["1..3"] }],
                         tail:[]}];
      assert.deepEqual(result, expected);
    });

    it('one choice with one predicate without arguments', function () {
      const result = getPredicates(["{rule}."]).predicates;
      const expected = [{head:[{ name: "rule", arguments: [] }], tail:[]}];
      assert.deepEqual(result, expected);
    });

    it('one choice with two predicates without arguments', function () {
      const result = getPredicates(["{rule1} :- rule2."]).predicates;
      const expected = [{head:[{ name: "rule1", arguments: [] }],
                         tail:[{ name: "rule2", arguments: [] }]}];
      assert.deepEqual(result, expected);
    });

    it('one choice with two predicates with arguments', function () {
      const result = getPredicates(["{rule1(arg1,arg2)} :- rule2(arg3,arg4)."]).predicates;
      const expected = [{head:[{ name: "rule1", arguments: ["arg1", "arg2"] }],
                         tail:[{ name: "rule2", arguments: ["arg3", "arg4"] }]}];
      assert.deepEqual(result, expected);
    });

    it('one choice with two predicates with arguments (one separated with a semicolon)', function () {
      const result = getPredicates(["{rule1(arg1,arg2;arg3,arg4)} :- rule2(arg5,arg6)."]).predicates;
      const expected = [{head:[{ name: "rule1", arguments: ["arg1", "arg2"] },
                               { name: "rule1", arguments: ["arg3", "arg4"] }],
                         tail:[{ name: "rule2", arguments: ["arg5", "arg6"] }]}];
      assert.deepEqual(result, expected);
    });

    it('one definition with two predicates without arguments', function () {
      const result = getPredicates(["rule2 :- rule1."]).predicates;
      const expected = [{head:[{ name: "rule2", arguments: [] }],
                         tail:[{ name: "rule1", arguments: [] }]}];
      assert.deepEqual(result, expected);
    });

    it('one definition with four predicates with arguments', function () {
      const result = getPredicates(["rule4(X,Y,Z) :- rule1(X), rule2(Y), rule3(Z)."]).predicates;
      const expected = [{head:[{ name: "rule4", arguments: ["X", "Y", "Z"] }],
                         tail:[{ name: "rule1", arguments: ["X"] },
                               { name: "rule2", arguments: ["Y"] },
                               { name: "rule3", arguments: ["Z"] }]}];
      assert.deepEqual(result, expected);
    });

    it('one constraint with one predicate without arguments', function () {
      const result = getPredicates([":- rule."]).predicates;
      const expected = [{head: [], tail: [{ name: "rule", arguments: [] }]}];
      assert.deepEqual(result, expected);
    });

    it('one constraint with 3 predicates with arguments', function () {
      const result = getPredicates([":- rule1(arg1,arg2), rule2(X), rule3(Y), X!=Y."]).predicates;
      const expected = [{head:[],
                         tail:[{ name: "rule1", arguments: ["arg1", "arg2"] },
                               { name: "rule2", arguments: ["X"] },
                               { name: "rule3", arguments: ["Y"] }]}];
      assert.deepEqual(result, expected);
    });

    it('one show statement with one predicate with 4 arguments', function () {
      const result = getPredicates(["#show rule/4."]).predicates;
      const expected = [{head:[{ name: "rule", arguments: [] }], tail: []}];
      assert.deepEqual(result, expected);
    });

    it('ASP program test 1', function () {
      const result = getPredicates(["rule1.",
        "{rule2}.",
        "rule3 :- rule1.",
        ":- rule4",
        "#show rule5/0."]).predicates;

      const expected = [{head:[{ name: "rule1", arguments: [] }], tail:[]},
                        {head:[{ name: "rule2", arguments: [] }], tail:[]},
                        {head:[{ name: "rule3", arguments: [] }], tail:[{ name: "rule1", arguments: [] }]},
                        {head:[], tail:[{ name: "rule4", arguments: [] }]},
                        {head:[{ name: "rule5", arguments: [] }], tail:[]}];
      assert.deepEqual(result, expected);
    });

    it('ASP program test 2', function () {
      const result = getPredicates(["n(1..9).",
        "1{in(X,Y,N):n(N)}1 :- n(Y), n(X).",
        "1{in(X,Y,N):n(Y)}1 :- n(X), n(N).",
        "1{in(X,Y,N):n(X)}1 :- n(Y), n(N).",
        "subgrid(X,Y,Z,W) :- n(X), n(Y), n(Z), n(W), (X-1)/3=(Z-1)/3,(Y-1)/3=(W-1)/3.",
        ":- subgrid(X,Y,Z,W), in(X,Y,N), in(Z,W,N), X!=Z, Y!=W.",
        "#show in/3."]).predicates;

      const expected = [{head:[{ name: "n", arguments: ["1..9"] }],
                         tail:[]},
                        {head:[{ name: "in", arguments: ["X", "Y", "N"] }, { name: "n", arguments: ["N"] }], 
                         tail:[{ name: "n", arguments: ["Y"] }, { name: "n", arguments: ["X"] }]},
                        {head:[{ name: "in", arguments: ["X", "Y", "N"] }, { name: "n", arguments: ["Y"] }], 
                        tail:[{ name: "n", arguments: ["X"] }, { name: "n", arguments: ["N"] }]},
                        {head:[{ name: "in", arguments: ["X", "Y", "N"] }, { name: "n", arguments: ["X"] }], 
                        tail: [{ name: "n", arguments: ["Y"] }, { name: "n", arguments: ["N"] }]},
                        {head:[{ name: "subgrid", arguments: ["X", "Y", "Z", "W"] }], 
                         tail:[{ name: "n", arguments: ["X"] }, { name: "n", arguments: ["Y"] }, { name: "n", arguments: ["Z"] }, { name: "n", arguments: ["W"] }]},
                        {head:[], 
                         tail:[{ name: "subgrid", arguments: ["X", "Y", "Z", "W"] }, { name: "in", arguments: ["X", "Y", "N"] }, { name: "in", arguments: ["Z", "W", "N"] }]},
                        {head:[{ name: "in", arguments: [] }], 
                         tail:[]}];
      assert.deepEqual(result, expected);
    });





  });

  describe('loadErrors', function () {

    describe('Order Tests', function () {
      it('test 1 - empty file should not underline anything', function () {

        let file = readFileSync(PATH + '/loadErrors/test1_empty.lp').toLocaleString();

        const result = loadErrors(file);
        assert.deepEqual(result, [[], []]);
      });

      it('test 2 - easy answer set program should not underline anything', function () {

        let file = readFileSync(PATH + '/loadErrors/test2_ezasp.lp').toLocaleString();

        const result = loadErrors(file);
        assert.deepEqual(result, [[], []]);
      });

      it('test 3 - facts should come only before choices 1', function () {

        let file = readFileSync(PATH + '/loadErrors/test3_facts.lp').toLocaleString();

        const result = loadErrors(file);
        assert.deepEqual(result, [[{ lineStart: 6, lineEnd: 6, indexStart: 0, indexEnd: 11 }], ["Error, all facts must be before choices."]]);
      });

      it('test 4 - facts should come only before choices 2', function () {

        let file = readFileSync(PATH + '/loadErrors/test4_facts.lp').toLocaleString();

        const result = loadErrors(file);
        assert.deepEqual(result, [[{ lineStart: 12, lineEnd: 12, indexStart: 0, indexEnd: 11 }], ["Error, all facts must be before choices."]]);
      });

      it('test 5 - facts should come only before choices 3', function () {

        let file = readFileSync(PATH + '/loadErrors/test5_facts.lp').toLocaleString();

        const result = loadErrors(file);
        assert.deepEqual(result, [[{ lineStart: 15, lineEnd: 15, indexStart: 0, indexEnd: 11 }], ["Error, all facts must be before choices."]]);
      });

      it('test 6 - facts should come only before choices 4', function () {

        let file = readFileSync(PATH + '/loadErrors/test6_facts.lp').toLocaleString();

        const result = loadErrors(file);
        assert.deepEqual(result, [[{ lineStart: 18, lineEnd: 18, indexStart: 0, indexEnd: 11 }], ["Error, all facts must be before choices."]]);
      });

      it('test 7 - facts should come only before choices 5', function () {

        let file = readFileSync(PATH + '/loadErrors/test7_facts.lp').toLocaleString();

        const result = loadErrors(file);
        assert.deepEqual(result, [[{ lineStart: 20, lineEnd: 20, indexStart: 0, indexEnd: 11 }], ["Error, all facts must be before choices."]]);
      });

      it('test 8 - choices should come only after facts 0', function () {

        let file = readFileSync(PATH + '/loadErrors/test8_choices.lp').toLocaleString();

        const result = loadErrors(file);
        assert.deepEqual(result, [[{ lineStart: 3, lineEnd: 3, indexStart: 0, indexEnd: 8 }], ["Error, all facts must be before choices."]]);
      });

      it('test 9 - choices should come only after facts 1', function () {

        let file = readFileSync(PATH + '/loadErrors/test9_choices.lp').toLocaleString();

        const result = loadErrors(file);
        assert.deepEqual(result, [[], []]);
      });

      it('test 10 - choices should come only after facts 2', function () {

        let file = readFileSync(PATH + '/loadErrors/test10_choices.lp').toLocaleString();

        const result = loadErrors(file);
        assert.deepEqual(result, [[{ lineStart: 15, lineEnd: 15, indexStart: 0, indexEnd: 15 }], ["Error, all choices must be between facts and rules."]]);
      });

      it('test 11 - choices should come only after facts 3', function () {

        let file = readFileSync(PATH + '/loadErrors/test11_choices.lp').toLocaleString();

        const result = loadErrors(file);
        assert.deepEqual(result, [[{ lineStart: 18, lineEnd: 18, indexStart: 0, indexEnd: 15 }], ["Error, all choices must be between facts and rules."]]);
      });

      it('test 12 - choices should come only after facts 4', function () {

        let file = readFileSync(PATH + '/loadErrors/test12_choices.lp').toLocaleString();

        const result = loadErrors(file);
        assert.deepEqual(result, [[{ lineStart: 20, lineEnd: 20, indexStart: 0, indexEnd: 15 }], ["Error, all choices must be between facts and rules."]]);
      });

      it('test 13 - rules should come only after choices 0', function () {

        let file = readFileSync(PATH + '/loadErrors/test13_rules.lp').toLocaleString();

        const result = loadErrors(file);
        assert.deepEqual(result, [[], ["//TODO"]]);
      });

      it('test 14 - rules should come only after choices 1', function () {

        let file = readFileSync(PATH + '/loadErrors/test14_rules.lp').toLocaleString();

        const result = loadErrors(file);
        assert.deepEqual(result, [[{ lineStart: 6, lineEnd: 6, indexStart: 0, indexEnd: 33 },
        { lineStart: 9, lineEnd: 9, indexStart: 0, indexEnd: 33 },
        { lineStart: 12, lineEnd: 12, indexStart: 0, indexEnd: 33 }
        ],
        ["Error, all choices must be between facts and rules.",
          "Error, all choices must be between facts and rules.",
          "Error, all choices must be between facts and rules."]]);
      });

      it('test 15 - rules should come only after choices 2', function () {

        let file = readFileSync(PATH + '/loadErrors/test15_rules.lp').toLocaleString();

        const result = loadErrors(file);
        assert.deepEqual(result, [[], []]);
      });

      it('test 16 - rules should come only after choices 3', function () {

        let file = readFileSync(PATH + '/loadErrors/test16_rules.lp').toLocaleString();

        const result = loadErrors(file);
        assert.deepEqual(result, [[{ lineStart: 18, lineEnd: 18, indexStart: 0, indexEnd: 25 }], ["Error, all rules must be between choices and constraints."]]);
      });

      it('test 17 - rules should come only after choices 4', function () {

        let file = readFileSync(PATH + '/loadErrors/test17_rules.lp').toLocaleString();

        const result = loadErrors(file);
        assert.deepEqual(result, [[{ lineStart: 20, lineEnd: 20, indexStart: 0, indexEnd: 25 }], ["Error, all rules must be between choices and constraints."]]);
      });

      it('test 18 - constraints should come only after rules 0', function () {

        let file = readFileSync(PATH + '/loadErrors/test18_constraints.lp').toLocaleString();

        const result = loadErrors(file);
        assert.deepEqual(result, [[], ["//TODO"]]);
      });

      it('test 19 - constraints should come only after rules 1', function () {

        let file = readFileSync(PATH + '/loadErrors/test19_constraints.lp').toLocaleString();

        const result = loadErrors(file);
        assert.deepEqual(result, [[{ lineStart: 6, lineEnd: 6, indexStart: 0, indexEnd: 33 },
        { lineStart: 9, lineEnd: 9, indexStart: 0, indexEnd: 33 },
        { lineStart: 12, lineEnd: 12, indexStart: 0, indexEnd: 33 },
        { lineStart: 15, lineEnd: 15, indexStart: 0, indexEnd: 76 }],
        ["Error, all choices must be between facts and rules.",
          "Error, all choices must be between facts and rules.",
          "Error, all choices must be between facts and rules.",
          "Error, all rules must be between choices and constraints."]]);
      });

      it('test 20 - constraints should come only after rules 2', function () {

        let file = readFileSync(PATH + '/loadErrors/test20_constraints.lp').toLocaleString();

        const result = loadErrors(file);
        assert.deepEqual(result, [[{ lineStart: 15, lineEnd: 15, indexStart: 0, indexEnd: 76 }], ["Error, all rules must be between choices and constraints."]]);
      });

      it('test 21 - constraints should come only after rules 3', function () {

        let file = readFileSync(PATH + '/loadErrors/test21_constraints.lp').toLocaleString();

        const result = loadErrors(file);
        assert.deepEqual(result, [[], []]);
      });

      it('test 22 - constraints should come only after rules 4', function () {

        let file = readFileSync(PATH + '/loadErrors/test22_constraints.lp').toLocaleString();

        const result = loadErrors(file);
        assert.deepEqual(result, [[{ lineStart: 20, lineEnd: 20, indexStart: 0, indexEnd: 14 }], ["Error, all constraints must be between rules and views."]]);
      });

      it('test 23 - views should come only after constraints 0', function () {

        let file = readFileSync(PATH + '/loadErrors/test23_views.lp').toLocaleString();

        const result = loadErrors(file);
        assert.deepEqual(result, [[], ["//TODO"]]);
      });

      it('test 24 - views should come only after constraints 1', function () {

        let file = readFileSync(PATH + '/loadErrors/test24_views.lp').toLocaleString();

        const result = loadErrors(file);
        assert.deepEqual(result, [[{ lineStart: 6, lineEnd: 6, indexStart: 0, indexEnd: 33 },
        { lineStart: 9, lineEnd: 9, indexStart: 0, indexEnd: 33 },
        { lineStart: 12, lineEnd: 12, indexStart: 0, indexEnd: 33 },
        { lineStart: 15, lineEnd: 15, indexStart: 0, indexEnd: 76 },
        { lineStart: 18, lineEnd: 18, indexStart: 0, indexEnd: 54 }],
        ["Error, all choices must be between facts and rules.",
          "Error, all choices must be between facts and rules.",
          "Error, all choices must be between facts and rules.",
          "Error, all rules must be between choices and constraints.",
          "Error, all constraints must be between rules and views."
        ]]);
      });

      it('test 25 - views should come only after constraints 2', function () {

        let file = readFileSync(PATH + '/loadErrors/test25_views.lp').toLocaleString();

        const result = loadErrors(file);
        assert.deepEqual(result, [[{ lineStart: 15, lineEnd: 15, indexStart: 0, indexEnd: 76 },
        { lineStart: 18, lineEnd: 18, indexStart: 0, indexEnd: 54 }],
        ["Error, all rules must be between choices and constraints.",
          "Error, all constraints must be between rules and views."]]);
      });

      it('test 26 - views should come only after constraints 3', function () {

        let file = readFileSync(PATH + '/loadErrors/test26_views.lp').toLocaleString();

        const result = loadErrors(file);
        assert.deepEqual(result, [[{ lineStart: 18, lineEnd: 18, indexStart: 0, indexEnd: 54 }], ["Error, all constraints must be between rules and views."]]);
      });

      it('test 27 - views should come only after constraints 4', function () {

        let file = readFileSync(PATH + '/loadErrors/test27_views.lp').toLocaleString();

        const result = loadErrors(file);
        assert.deepEqual(result, [[], []]);
      });

      it('test 28 - test on an ASP with multiple rules 0', function () {

        let file = readFileSync(PATH + '/loadErrors/test28_multiple.lp').toLocaleString();

        const result = loadErrors(file);
        assert.deepEqual(result, [[], []]);
      });

      it('test 29 -test on an ASP with multiple rules 1', function () {

        let file = readFileSync(PATH + '/loadErrors/test29_multiple.lp').toLocaleString();

        const result = loadErrors(file);
        assert.deepEqual(result, [[{ lineStart: 4, lineEnd: 4, indexStart: 0, indexEnd: 2 },
        { lineStart: 5, lineEnd: 5, indexStart: 0, indexEnd: 2 }],
        ["Error, all facts must be before choices.",
          "Error, all facts must be before choices."]]);
      });

      it('test 30 - test on an ASP with multiple rules 2', function () {

        let file = readFileSync(PATH + '/loadErrors/test30_multiple.lp').toLocaleString();

        const result = loadErrors(file);
        assert.deepEqual(result, [[{ lineStart: 10, lineEnd: 10, indexStart: 0, indexEnd: 4 },
        { lineStart: 11, lineEnd: 11, indexStart: 0, indexEnd: 4 }],
        ["Error, all choices must be between facts and rules.",
          "Error, all choices must be between facts and rules."]]);
      });

      it('test 31 - test on an ASP with multiple rules 3', function () {

        let file = readFileSync(PATH + '/loadErrors/test31_multiple.lp').toLocaleString();

        const result = loadErrors(file);
        assert.deepEqual(result, [[{ lineStart: 16, lineEnd: 16, indexStart: 0, indexEnd: 7 },
        { lineStart: 17, lineEnd: 17, indexStart: 0, indexEnd: 7 }],
        ["Error, all rules must be between choices and constraints.",
          "Error, all rules must be between choices and constraints."]]);
      });

      it('test 32 - test on an ASP with multiple rules 4', function () {

        let file = readFileSync(PATH + '/loadErrors/test32_multiple.lp').toLocaleString();

        const result = loadErrors(file);
        assert.deepEqual(result, [[{ lineStart: 5, lineEnd: 5, indexStart: 0, indexEnd: 2 },
        { lineStart: 6, lineEnd: 6, indexStart: 0, indexEnd: 2 },
        { lineStart: 13, lineEnd: 13, indexStart: 0, indexEnd: 4 },
        { lineStart: 14, lineEnd: 14, indexStart: 0, indexEnd: 4 },
        { lineStart: 21, lineEnd: 21, indexStart: 0, indexEnd: 7 },
        { lineStart: 22, lineEnd: 22, indexStart: 0, indexEnd: 7 }],
        ["Error, all facts must be before choices.",
          "Error, all facts must be before choices.",
          "Error, all choices must be between facts and rules.",
          "Error, all choices must be between facts and rules.",
          "Error, all rules must be between choices and constraints.",
          "Error, all rules must be between choices and constraints."]]);
      });

      it('test 33 - randomised test 1', function () {

        let file = readFileSync(PATH + '/loadErrors/test33_random.lp').toLocaleString();

        const result = loadErrors(file);
        assert.deepEqual(result, [[{ lineStart: 10, lineEnd: 10, indexStart: 0, indexEnd: 2 },
        { lineStart: 21, lineEnd: 21, indexStart: 0, indexEnd: 2 },
        { lineStart: 22, lineEnd: 22, indexStart: 0, indexEnd: 2 },
        { lineStart: 5, lineEnd: 5, indexStart: 0, indexEnd: 4 },
        { lineStart: 16, lineEnd: 16, indexStart: 0, indexEnd: 4 },
        { lineStart: 20, lineEnd: 20, indexStart: 0, indexEnd: 4 },
        { lineStart: 6, lineEnd: 6, indexStart: 0, indexEnd: 5 },
        { lineStart: 11, lineEnd: 11, indexStart: 0, indexEnd: 5 },
        { lineStart: 13, lineEnd: 13, indexStart: 0, indexEnd: 5 },
        { lineStart: 14, lineEnd: 14, indexStart: 0, indexEnd: 5 },
        { lineStart: 7, lineEnd: 7, indexStart: 0, indexEnd: 4 },
        { lineStart: 12, lineEnd: 12, indexStart: 0, indexEnd: 4 }],
        ["Invalid Rule.",
          "Invalid Rule.",
          "Error, all facts must be before choices.",
          "Error, all choices must be between facts and rules.",
          "Error, all choices must be between facts and rules.",
          "Error, all choices must be between facts and rules.",
          "Error, all rules must be between choices and constraints.",
          "Error, all rules must be between choices and constraints.",
          "Error, all rules must be between choices and constraints.",
          "Error, all rules must be between choices and constraints.",
          "Error, all constraints must be between rules and views.",
          "Error, all constraints must be between rules and views."]]);
      });



      it('test 34 - answer set programs testing 1', function () {

        let file = readFileSync(PATH + '/loadErrors/test34_program.lp').toLocaleString();

        const result = loadErrors(file);
        assert.deepEqual(result, [[], []]);
      });

      it('test 35 - answer set programs testing 2', function () {

        let file = readFileSync(PATH + '/loadErrors/test35_program.lp').toLocaleString();

        const result = loadErrors(file);
        assert.deepEqual(result, [[], []]);
      });

      it('test 36 - answer set programs testing 3', function () {

        let file = readFileSync(PATH + '/loadErrors/test36_program.lp').toLocaleString();

        const result = loadErrors(file);
        assert.deepEqual(result, [[], []]);
      });

      it('test 37 - answer set programs testing 4', function () {

        let file = readFileSync(PATH + '/loadErrors/test37_program.lp').toLocaleString();

        const result = loadErrors(file);
        assert.deepEqual(result, [[], []]);
      });

      it('test 38 - answer set programs testing 5', function () {

        let file = readFileSync(PATH + '/loadErrors/test38_program.lp').toLocaleString();

        const result = loadErrors(file);
        assert.deepEqual(result, [[], []]);
      });

      it('test 39 - formatText + range testing', function () {

        let file = readFileSync(PATH + '/loadErrors/test39_format.lp').toLocaleString();

        const result = loadErrors(file);
        assert.deepEqual(result, [[{ lineStart: 9, lineEnd: 9, indexStart: 0, indexEnd: 2 },
        { lineStart: 9, lineEnd: 9, indexStart: 2, indexEnd: 4 },
        { lineStart: 9, lineEnd: 9, indexStart: 4, indexEnd: 6 },
        { lineStart: 9, lineEnd: 9, indexStart: 6, indexEnd: 8 },
        { lineStart: 9, lineEnd: 9, indexStart: 8, indexEnd: 10 },
        { lineStart: 9, lineEnd: 12, indexStart: 10, indexEnd: 1 }],
        ["Error, all facts must be before choices.",
          "Error, all facts must be before choices.",
          "Error, all facts must be before choices.",
          "Error, all facts must be before choices.",
          "Error, all facts must be before choices.",
          "Error, all facts must be before choices."]]);
      });
    });

    describe('Dependencies Tests', function () {
      it('test 40 - program without facts', function () {

        let file = readFileSync(PATH + '/loadErrors/test40_dependencies.lp').toLocaleString();

        const result = loadErrors(file);
        assert.deepEqual(result, [[{ lineStart: 4, lineEnd: 4, indexStart: 0, indexEnd: 33 }], 
                                   ["Error, atoms n(N), n(Y) and n(Y) do not occur in any rule head"]]);
      });
    });
  });
});
