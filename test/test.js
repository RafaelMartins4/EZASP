const assert = require('chai').assert;

// @ts-ignore
const { getRuleType, EMPTY, COMMENT, FACT, CHOICE, DEFINITION, CONSTRAINT, SHOW_STATEMEMENT, INVALID_RULE, CONSTANT } = require('../src/parser/getRuleType');

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

    it('"aa{a}." must be a choice.', function () {
      const result = getRuleType('aa{a}.');
      assert.equal(result, CHOICE);
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

    it('"a(a..b)." must be fact.', function () {
      const result = getRuleType('a(a..b).');
      assert.equal(result, FACT);
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

    it('"aa{a}aaa :- a." must be a choice.', function () {
      const result = getRuleType('aa{a}aaa :- a.');
      assert.equal(result, CHOICE);
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

    it('"a(3..1)." must be a fact.', function () {
      const result = getRuleType('a(3..1).');
      assert.equal(result, FACT);
    });

    it('"3{a}2." must be a choice.', function () {
      const result = getRuleType('3{a}2.');
      assert.equal(result, CHOICE);
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

    it('"init(on(b3,table))." must be a fact.', function () {
      const result = getRuleType('init(on(b3,table)).');
      assert.equal(result, FACT);
    });

    it('"{ move(D,P,T) : disk(D), peg(P) } = 1 :- moves(M),  T = 1..M." must be a choice.', function () {
      const result = getRuleType('{ move(D,P,T) : disk(D), peg(P) } = 1 :- moves(M),  T = 1..M.');
      assert.equal(result, CHOICE);
    });

    it('"1 { cycle(T,U) : task(U), U != T } 1 :- task(T)." must be a choice.', function () {
      const result = getRuleType('1 { cycle(T,U) : task(U), U != T } 1 :- task(T).');
      assert.equal(result, CHOICE);
    });

    it('"course( 1,1,5; 1,2,5               )." must be a fact.', function () {
      const result = getRuleType('course( 1,1,5; 1,2,5               ).');
      assert.equal(result, FACT);
    });

    it('":- { on(D,P,T) } != 1, disk(D), moves(M), T = 1..M." must be a constraint.', function () {
      const result = getRuleType(':- { on(D,P,T) } != 1, disk(D), moves(M), T = 1..M.');
      assert.equal(result, CONSTRAINT);
    });

    it('"{rule1} :- rule2." must be a choice.', function () {
      const result = getRuleType('{rule1} :- rule2.');
      assert.equal(result, CHOICE);
    });

    it('"&diff { T1-T2 } <= -D  :- seq(T1,T2,D)." must be an invalid rule.', function () {
      const result = getRuleType('&diff { T1-T2 } <= -D  :- seq(T1,T2,D).');
      assert.equal(result, INVALID_RULE);
    });

    it('":- {rule1(X,Y,Z)}." must be a constraint.', function () {
      const result = getRuleType(':- {rule1(X,Y,Z)}.');
      assert.equal(result, CONSTRAINT);
    });

    it('"a :- {rule1(X,Y,Z)}." must be a definition.', function () {
      const result = getRuleType('a :- {rule1(X,Y,Z)}.');
      assert.equal(result, DEFINITION);
    });
    
    it('"#show b/." must be an invalid rule.', function () {
      const result = getRuleType('#show b/.');
      assert.equal(result, INVALID_RULE);
    });

    it('"#const n = 1." must be a constant.', function () {
      const result = getRuleType('#const n = 1.');
      assert.equal(result, CONSTANT);
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

    it('bug correting test 1', function () {

      let file = readFileSync(PATH + '/formatText/test13_bug_found.lp').toLocaleString();

      const result = formatText(file.split(SPLIT_CODE));
      assert.deepEqual(result, {
        formattedText: [
          "a."
        ], lines: [{ lineStart: 1, lineEnd: 1, indexStart: 0, indexEnd: 2 }]
      });
    });

    it('bug correting test 2', function () {

      let file = readFileSync(PATH + '/formatText/test14_bug_found.lp').toLocaleString();

      const result = formatText(file.split(SPLIT_CODE));
      assert.deepEqual(result, {
        formattedText: [
          "a."
        ], lines: [{ lineStart: 1, lineEnd: 1, indexStart: 0, indexEnd: 2 }]
      });
    });

    it('bug correting test 3', function () {

      let file = readFileSync(PATH + '/formatText/test15_bug_found.lp').toLocaleString();

      const result = formatText(file.split(SPLIT_CODE));
      assert.deepEqual(result, {
        formattedText: [
          '%*a.b.*%',
          'c.',
          'd.'
        ], lines: [{lineStart: 0, lineEnd: 1, indexStart: 0, indexEnd: 4},
          {lineStart: 2, lineEnd: 2, indexStart: 0, indexEnd: 2},
          {lineStart: 3, lineEnd: 3, indexStart: 0, indexEnd: 2}]
      });
    });

    it('bug correting test 4', function () {

      let file = readFileSync(PATH + '/formatText/test16_bug_found.lp').toLocaleString();

      const result = formatText(file.split(SPLIT_CODE));
      assert.deepEqual(result, {
        formattedText: [
          '%*a.c.c'
        ], lines: []
      });
    });
  })

  describe('getPredicates', function () {

    it('one fact without arguments', function () {

      const result = getPredicates(["rule."]).predicates;
      const expected = [{ head: [{ name: "rule", arguments: 0 }], tail: [] }];
      assert.deepEqual(result, expected);
    });

    it('one fact with arguments', function () {

      const result = getPredicates(["rule(arg1,arg2)."]).predicates;
      const expected = [{ head: [{ name: "rule", arguments: 2 }], tail: [] }];
      assert.deepEqual(result, expected);
    });

    it('one fact with one argument (separated with a semicolon)', function () {

      const result = getPredicates(["rule(arg1;arg2;arg3)."]).predicates;
      const expected = [{
        head: [{ name: "rule", arguments: 1 }],
        tail: []
      }];
      assert.deepEqual(result, expected);
    });

    it('one fact with two arguments (separated with a semicolon)', function () {

      const result = getPredicates(["rule(arg1,arg2;arg3,arg4)."]).predicates;
      const expected = [{
        head: [{ name: "rule", arguments: 2 }],
        tail: []
      }];
      assert.deepEqual(result, expected);
    });

    it('one fact with numerical arguments (separated with two dots)', function () {

      const result = getPredicates(["rule(1..3)."]).predicates;
      const expected = [{
        head: [{ name: "rule", arguments: 1 }],
        tail: []
      }];
      assert.deepEqual(result, expected);
    });

    it('one choice with one predicate without arguments', function () {
      const result = getPredicates(["{rule}."]).predicates;
      const expected = [{ head: [{ name: "rule", arguments: 0 }], tail: [] }];
      assert.deepEqual(result, expected);
    });

    it('one choice with two predicates without arguments', function () {
      const result = getPredicates(["{rule1} :- rule2."]).predicates;
      const expected = [{
        head: [{ name: "rule1", arguments: 0 }],
        tail: [{ name: "rule2", arguments: 0 }]
      }];
      assert.deepEqual(result, expected);
    });

    it('one choice with two predicates with arguments', function () {
      const result = getPredicates(["{rule1(arg1,arg2)} :- rule2(arg3,arg4)."]).predicates;
      const expected = [{
        head: [{ name: "rule1", arguments: 2 }],
        tail: [{ name: "rule2", arguments: 2 }]
      }];
      assert.deepEqual(result, expected);
    });

    it('one choice with two predicates with arguments (one separated with a semicolon)', function () {
      const result = getPredicates(["{rule1(arg1,arg2;arg3,arg4)} :- rule2(arg5,arg6)."]).predicates;
      const expected = [{
        head: [{ name: "rule1", arguments: 2 }],
        tail: [{ name: "rule2", arguments: 2 }]
      }];
      assert.deepEqual(result, expected);
    });

    it('one definition with two predicates without arguments', function () {
      const result = getPredicates(["rule2 :- rule1."]).predicates;
      const expected = [{
        head: [{ name: "rule2", arguments: 0 }],
        tail: [{ name: "rule1", arguments: 0 }]
      }];
      assert.deepEqual(result, expected);
    });

    it('one definition with four predicates with arguments', function () {
      const result = getPredicates(["rule4(X,Y,Z) :- rule1(X), rule2(Y), rule3(Z)."]).predicates;
      const expected = [{
        head: [{ name: "rule4", arguments: 3 }],
        tail: [{ name: "rule1", arguments: 1 },
        { name: "rule2", arguments: 1 },
        { name: "rule3", arguments: 1 }]
      }];
      assert.deepEqual(result, expected);
    });

    it('one constraint with one predicate without arguments', function () {
      const result = getPredicates([":- rule."]).predicates;
      const expected = [{ head: [], tail: [{ name: "rule", arguments: 0 }] }];
      assert.deepEqual(result, expected);
    });

    it('one constraint with 3 predicates with arguments', function () {
      const result = getPredicates([":- rule1(arg1,arg2), rule2(X), rule3(Y), X!=Y."]).predicates;
      const expected = [{
        head: [],
        tail: [{ name: "rule1", arguments: 2 },
        { name: "rule2", arguments: 1 },
        { name: "rule3", arguments: 1 }]
      }];
      assert.deepEqual(result, expected);
    });

    it('one show statement with one predicate with 4 arguments', function () {
      const result = getPredicates(["#show rule/4."]).predicates;
      const expected = [{ head: [{ name: "rule", arguments: 4 }], tail: [] }];
      assert.deepEqual(result, expected);
    });

    it('one show statement with many predicates', function () {

      const result = getPredicates(["#show a/0, b/1, cdef/150, cABC_100/5."]).predicates;
      const expected = [{
        head: [{ name: "a", arguments: 0 },
        { name: "b", arguments: 1 },
        { name: "cdef", arguments: 150 },
        { name: "cABC_100", arguments: 5 }], tail: []
      }];
      assert.deepEqual(result, expected);
    });

    it('one definition with a not', function () {

      const result = getPredicates(["a :- not b."]).predicates;
      const expected = [{
        head: [{ name: "a", arguments: 0 }],
        tail: [{ name: "b", arguments: 0 }]
      }];
      assert.deepEqual(result, expected);
    });


    it('ASP program test 1', function () {
      const result = getPredicates(["rule1.",
        "{rule2}.",
        "rule3 :- rule1.",
        ":- rule4",
        "#show rule5/0."]).predicates;

      const expected = [{ head: [{ name: "rule1", arguments: 0 }], tail: [] },
      { head: [{ name: "rule2", arguments: 0 }], tail: [] },
      { head: [{ name: "rule3", arguments: 0 }], tail: [{ name: "rule1", arguments: 0 }] },
      { head: [], tail: [{ name: "rule4", arguments: 0 }] },
      { head: [{ name: "rule5", arguments: 0 }], tail: [] }];
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

      const expected = [{
        head: [{ name: "n", arguments: 1 }],
        tail: []
      },
      {
        head: [{ name: "in", arguments: 3 }, { name: "n", arguments: 1 }],
        tail: [{ name: "n", arguments: 1 }, { name: "n", arguments: 1 }]
      },
      {
        head: [{ name: "in", arguments: 3 }, { name: "n", arguments: 1 }],
        tail: [{ name: "n", arguments: 1 }, { name: "n", arguments: 1 }]
      },
      {
        head: [{ name: "in", arguments: 3 }, { name: "n", arguments: 1 }],
        tail: [{ name: "n", arguments: 1 }, { name: "n", arguments: 1 }]
      },
      {
        head: [{ name: "subgrid", arguments: 4 }],
        tail: [{ name: "n", arguments: 1 }, { name: "n", arguments: 1 }, { name: "n", arguments: 1 }, { name: "n", arguments: 1 }]
      },
      {
        head: [],
        tail: [{ name: "subgrid", arguments: 4 }, { name: "in", arguments: 3 }, { name: "in", arguments: 3 }]
      },
      {
        head: [{ name: "in", arguments: 3 }],
        tail: []
      }];
      assert.deepEqual(result, expected);
    });
  });

  describe('loadErrors', function () {

    describe('Order Tests', function () {
      it('test 1 - empty file should not underline anything', function () {

        let file = readFileSync(PATH + '/loadErrors/Order_Tests/test1_empty.lp').toLocaleString();

        const result = loadErrors(file,"");
        assert.deepEqual(result, [[], []]);
      });

      it('test 2 - easy answer set program should not underline anything', function () {

        let file = readFileSync(PATH + '/loadErrors/Order_Tests/test2_ezasp.lp').toLocaleString();

        const result = loadErrors(file,"");
        assert.deepEqual(result, [[], []]);
      });

      it('test 3 - facts should come only before choices 1', function () {

        let file = readFileSync(PATH + '/loadErrors/Order_Tests/test3_facts.lp').toLocaleString();

        const result = loadErrors(file,"");
        assert.deepEqual(result, [[{ lineStart: 6, lineEnd: 6, indexStart: 0, indexEnd: 11 }], ["Error, all facts must be at the beginning, or between constants and choices."]]);
      });

      it('test 4 - facts should come only before choices 2', function () {

        let file = readFileSync(PATH + '/loadErrors/Order_Tests/test4_facts.lp').toLocaleString();

        const result = loadErrors(file,"");
        assert.deepEqual(result, [[{ lineStart: 12, lineEnd: 12, indexStart: 0, indexEnd: 11 }], ["Error, all facts must be at the beginning, or between constants and choices."]]);
      });

      it('test 5 - facts should come only before choices 3', function () {

        let file = readFileSync(PATH + '/loadErrors/Order_Tests/test5_facts.lp').toLocaleString();

        const result = loadErrors(file,"");
        assert.deepEqual(result, [[{ lineStart: 15, lineEnd: 15, indexStart: 0, indexEnd: 11 }], ["Error, all facts must be at the beginning, or between constants and choices."]]);
      });

      it('test 6 - facts should come only before choices 4', function () {

        let file = readFileSync(PATH + '/loadErrors/Order_Tests/test6_facts.lp').toLocaleString();

        const result = loadErrors(file,"");
        assert.deepEqual(result, [[{ lineStart: 18, lineEnd: 18, indexStart: 0, indexEnd: 11 }], ["Error, all facts must be at the beginning, or between constants and choices."]]);
      });

      it('test 7 - facts should come only before choices 5', function () {

        let file = readFileSync(PATH + '/loadErrors/Order_Tests/test7_facts.lp').toLocaleString();

        const result = loadErrors(file,"");
        assert.deepEqual(result, [[{ lineStart: 20, lineEnd: 20, indexStart: 0, indexEnd: 11 }], ["Error, all facts must be at the beginning, or between constants and choices."]]);
      });

      it('test 8 - choices should come only after facts 0', function () {

        let file = readFileSync(PATH + '/loadErrors/Order_Tests/test8_choices.lp').toLocaleString();

        const result = loadErrors(file,"");
        assert.deepEqual(result, [[{ lineStart: 3, lineEnd: 3, indexStart: 0, indexEnd: 8 }], ["Error, all facts must be at the beginning, or between constants and choices."]]);
      });

      it('test 9 - choices should come only after facts 1', function () {

        let file = readFileSync(PATH + '/loadErrors/Order_Tests/test9_choices.lp').toLocaleString();

        const result = loadErrors(file,"");
        assert.deepEqual(result, [[], []]);
      });

      it('test 10 - choices should come only after facts 2', function () {

        let file = readFileSync(PATH + '/loadErrors/Order_Tests/test10_choices.lp').toLocaleString();

        const result = loadErrors(file,"");
        assert.deepEqual(result, [[{ lineStart: 15, lineEnd: 15, indexStart: 0, indexEnd: 15 }], ["Error, all choices must be at the beginning, or between facts and definitions."]]);
      });

      it('test 11 - choices should come only after facts 3', function () {

        let file = readFileSync(PATH + '/loadErrors/Order_Tests/test11_choices.lp').toLocaleString();

        const result = loadErrors(file,"");
        assert.deepEqual(result, [[{ lineStart: 18, lineEnd: 18, indexStart: 0, indexEnd: 15 }], ["Error, all choices must be at the beginning, or between facts and definitions."]]);
      });

      it('test 12 - choices should come only after facts 4', function () {

        let file = readFileSync(PATH + '/loadErrors/Order_Tests/test12_choices.lp').toLocaleString();

        const result = loadErrors(file,"");
        assert.deepEqual(result, [[{ lineStart: 20, lineEnd: 20, indexStart: 0, indexEnd: 15 }], ["Error, all choices must be at the beginning, or between facts and definitions."]]);
      });

      it('test 13 - rules should come only after choices 0', function () {

        let file = readFileSync(PATH + '/loadErrors/Order_Tests/test13_rules.lp').toLocaleString();

        const result = loadErrors(file,"");
        assert.deepEqual(result, [[{lineStart: 3, lineEnd: 3, indexStart: 0, indexEnd: 8},
          {lineStart: 6, lineEnd: 6, indexStart: 0, indexEnd: 33},
          {lineStart: 9, lineEnd: 9, indexStart: 0, indexEnd: 33},
          {lineStart: 12, lineEnd: 12, indexStart: 0, indexEnd: 33},
          {lineStart: 0, lineEnd: 0, indexStart: 0, indexEnd: 25}],
        ["Error, all facts must be at the beginning, or between constants and choices.",
        'Error, this block of choices is in between a block of other rules.',
        'Error, this block of choices is in between a block of other rules.',
        'Error, this block of choices is in between a block of other rules.',
        'Error, predicate dummy_fact/0 is not defined yet.']]);
      });

      it('test 14 - rules should come only after choices 1', function () {

        let file = readFileSync(PATH + '/loadErrors/Order_Tests/test14_rules.lp').toLocaleString();

        const result = loadErrors(file,"");
        assert.deepEqual(result, [[{ lineStart: 6, lineEnd: 6, indexStart: 0, indexEnd: 33 },
        { lineStart: 9, lineEnd: 9, indexStart: 0, indexEnd: 33 },
        { lineStart: 12, lineEnd: 12, indexStart: 0, indexEnd: 33 },
        { lineStart: 3, lineEnd: 3, indexStart: 0, indexEnd: 25 }
        ],
        ["Error, all choices must be at the beginning, or between facts and definitions.",
        "Error, all choices must be at the beginning, or between facts and definitions.",
        "Error, all choices must be at the beginning, or between facts and definitions.",
          'Error, predicate dummy_fact/0 is not defined yet.']]);
      });

      it('test 15 - rules should come only after choices 2', function () {

        let file = readFileSync(PATH + '/loadErrors/Order_Tests/test15_rules.lp').toLocaleString();

        const result = loadErrors(file,"");
        assert.deepEqual(result, [[{ lineStart: 12, lineEnd: 12, indexStart: 0, indexEnd: 25 }], ['Error, predicate dummy_fact/0 is not defined yet.']]);
      });

      it('test 16 - rules should come only after choices 3', function () {

        let file = readFileSync(PATH + '/loadErrors/Order_Tests/test16_rules.lp').toLocaleString();

        const result = loadErrors(file,"");
        assert.deepEqual(result, [[{ lineStart: 18, lineEnd: 18, indexStart: 0, indexEnd: 25 }], ["Error, all definitions must be between choices and constraints. Error, predicate dummy_fact/0 is not defined yet."]]);
      });

      it('test 17 - rules should come only after choices 4', function () {

        let file = readFileSync(PATH + '/loadErrors/Order_Tests/test17_rules.lp').toLocaleString();

        const result = loadErrors(file,"");
        assert.deepEqual(result, [[{ lineStart: 20, lineEnd: 20, indexStart: 0, indexEnd: 25 }], ["Error, all definitions must be between choices and constraints. Error, predicate dummy_fact/0 is not defined yet."]]);
      });

      it('test 18 - constraints should come only after rules 0', function () {

        let file = readFileSync(PATH + '/loadErrors/Order_Tests/test18_constraints.lp').toLocaleString();

        const result = loadErrors(file,"");
        assert.deepEqual(result, [[{lineStart: 3, lineEnd: 3, indexStart: 0, indexEnd: 8},
          {lineStart: 6, lineEnd: 6, indexStart: 0, indexEnd: 33},
          {lineStart: 9, lineEnd: 9, indexStart: 0, indexEnd: 33},
          {lineStart: 12, lineEnd: 12, indexStart: 0, indexEnd: 33},
          {lineStart: 15, lineEnd: 15, indexStart: 0, indexEnd: 76},
          {lineStart: 0, lineEnd: 0, indexStart: 0, indexEnd: 14}], 
          [ "Error, all facts must be at the beginning, or between constants and choices.",
          'Error, this block of choices is in between a block of other rules.',
          'Error, this block of choices is in between a block of other rules.',
          'Error, this block of choices is in between a block of other rules.',
          'Error, this block of definitions is in between a block of other rules.',
          'Error, predicate wrong_rule/0 is not defined yet.']]);
      });

      it('test 19 - constraints should come only after rules 1', function () {

        let file = readFileSync(PATH + '/loadErrors/Order_Tests/test19_constraints.lp').toLocaleString();

        const result = loadErrors(file,"");
        assert.deepEqual(result, [[{ lineStart: 6, lineEnd: 6, indexStart: 0, indexEnd: 33 },
        { lineStart: 9, lineEnd: 9, indexStart: 0, indexEnd: 33 },
        { lineStart: 12, lineEnd: 12, indexStart: 0, indexEnd: 33 },
        { lineStart: 15, lineEnd: 15, indexStart: 0, indexEnd: 76 },
        { lineStart: 3, lineEnd: 3, indexStart: 0, indexEnd: 14 }],
        ["Error, all choices must be at the beginning, or between facts and definitions.",
        "Error, all choices must be at the beginning, or between facts and definitions.",
        "Error, all choices must be at the beginning, or between facts and definitions.",
          "Error, this block of definitions is in between a block of other rules.",
          'Error, predicate wrong_rule/0 is not defined yet.']]);
      });

      it('test 20 - constraints should come only after rules 2', function () {

        let file = readFileSync(PATH + '/loadErrors/Order_Tests/test20_constraints.lp').toLocaleString();

        const result = loadErrors(file,"");
        assert.deepEqual(result, [[{ lineStart: 15, lineEnd: 15, indexStart: 0, indexEnd: 76 },
        { lineStart: 12, lineEnd: 12, indexStart: 0, indexEnd: 14 }],
        ["Error, all definitions must be between choices and constraints.",
          'Error, predicate wrong_rule/0 is not defined yet.']]);
      });

      it('test 21 - constraints should come only after rules 3', function () {

        let file = readFileSync(PATH + '/loadErrors/Order_Tests/test21_constraints.lp').toLocaleString();

        const result = loadErrors(file,"");
        assert.deepEqual(result, [[{ lineStart: 15, lineEnd: 15, indexStart: 0, indexEnd: 14 }], ['Error, predicate wrong_rule/0 is not defined yet.']]);
      });

      it('test 22 - constraints should come only after rules 4', function () {

        let file = readFileSync(PATH + '/loadErrors/Order_Tests/test22_constraints.lp').toLocaleString();

        const result = loadErrors(file,"");
        assert.deepEqual(result, [[{ lineStart: 20, lineEnd: 20, indexStart: 0, indexEnd: 14 }], ["Error, all constraints must be between definitions and show statements. Error, predicate wrong_rule/0 is not defined yet."]]);
      });

      it('test 23 - views should come only after constraints 0', function () {

        let file = readFileSync(PATH + '/loadErrors/Order_Tests/test23_views.lp').toLocaleString();

        const result = loadErrors(file,"");
        assert.deepEqual(result, [[{lineStart: 3, lineEnd: 3, indexStart: 0, indexEnd: 8},
          {lineStart: 6, lineEnd: 6, indexStart: 0, indexEnd: 33},
          {lineStart: 9, lineEnd: 9, indexStart: 0, indexEnd: 33},
          {lineStart: 12, lineEnd: 12, indexStart: 0, indexEnd: 33},
          {lineStart: 15, lineEnd: 15, indexStart: 0, indexEnd: 76},
          {lineStart: 18, lineEnd: 18, indexStart: 0, indexEnd: 54},
          {lineStart: 0, lineEnd: 0, indexStart: 0, indexEnd: 19}], 
          ["Error, all facts must be at the beginning, or between constants and choices.",
          'Error, this block of choices is in between a block of other rules.',
          'Error, this block of choices is in between a block of other rules.',
          'Error, this block of choices is in between a block of other rules.',
          'Error, this block of definitions is in between a block of other rules.',
          'Error, this block of constraints is in between a block of other rules.',
          'Error, predicate dummy_fact/0 is not defined yet.']]);
      });

      it('test 24 - views should come only after constraints 1', function () {

        let file = readFileSync(PATH + '/loadErrors/Order_Tests/test24_views.lp').toLocaleString();

        const result = loadErrors(file,"");
        assert.deepEqual(result, [[{ lineStart: 6, lineEnd: 6, indexStart: 0, indexEnd: 33 },
        { lineStart: 9, lineEnd: 9, indexStart: 0, indexEnd: 33 },
        { lineStart: 12, lineEnd: 12, indexStart: 0, indexEnd: 33 },
        { lineStart: 15, lineEnd: 15, indexStart: 0, indexEnd: 76 },
        { lineStart: 18, lineEnd: 18, indexStart: 0, indexEnd: 54 },
        {lineStart: 3, lineEnd: 3, indexStart: 0, indexEnd: 19}],
        ["Error, all choices must be at the beginning, or between facts and definitions.",
        "Error, all choices must be at the beginning, or between facts and definitions.",
        "Error, all choices must be at the beginning, or between facts and definitions.",
          'Error, this block of definitions is in between a block of other rules.',
          'Error, this block of constraints is in between a block of other rules.',
          'Error, predicate dummy_fact/0 is not defined yet.'
        ]]);
      });

      it('test 25 - views should come only after constraints 2', function () {

        let file = readFileSync(PATH + '/loadErrors/Order_Tests/test25_views.lp').toLocaleString();

        const result = loadErrors(file,"");
        assert.deepEqual(result, [[{ lineStart: 15, lineEnd: 15, indexStart: 0, indexEnd: 76 },
        { lineStart: 18, lineEnd: 18, indexStart: 0, indexEnd: 54 },
        {lineStart: 12, lineEnd: 12, indexStart: 0, indexEnd: 19}],
        ["Error, all definitions must be between choices and constraints.",
        'Error, this block of constraints is in between a block of other rules.',
        'Error, predicate dummy_fact/0 is not defined yet.']]);
      });

      it('test 26 - views should come only after constraints 3', function () {

        let file = readFileSync(PATH + '/loadErrors/Order_Tests/test26_views.lp').toLocaleString();

        const result = loadErrors(file,"");
        assert.deepEqual(result, [[{ lineStart: 18, lineEnd: 18, indexStart: 0, indexEnd: 54 },
        { lineStart: 15, lineEnd: 15, indexStart: 0, indexEnd: 19 }],
        ["Error, all constraints must be between definitions and show statements.",
          'Error, predicate dummy_fact/0 is not defined yet.']]);
      });

      it('test 27 - views should come only after constraints 4', function () {

        let file = readFileSync(PATH + '/loadErrors/Order_Tests/test27_views.lp').toLocaleString();

        const result = loadErrors(file,"");
        assert.deepEqual(result, [[{ lineStart: 18, lineEnd: 18, indexStart: 0, indexEnd: 19 }], ['Error, predicate dummy_fact/0 is not defined yet.']]);
      });

      it('test 28 - test on an ASP with multiple rules 0', function () {

        let file = readFileSync(PATH + '/loadErrors/Order_Tests/test28_multiple.lp').toLocaleString();

        const result = loadErrors(file,"");
        assert.deepEqual(result, [[], []]);
      });

      it('test 29 -test on an ASP with multiple rules 1', function () {

        let file = readFileSync(PATH + '/loadErrors/Order_Tests/test29_multiple.lp').toLocaleString();

        const result = loadErrors(file,"");
        assert.deepEqual(result, [[{ lineStart: 4, lineEnd: 4, indexStart: 0, indexEnd: 2 },
        { lineStart: 5, lineEnd: 5, indexStart: 0, indexEnd: 2 }],
        ["Error, all facts must be at the beginning, or between constants and choices.",
        "Error, all facts must be at the beginning, or between constants and choices."]]);
      });

      it('test 30 - test on an ASP with multiple rules 2', function () {

        let file = readFileSync(PATH + '/loadErrors/Order_Tests/test30_multiple.lp').toLocaleString();

        const result = loadErrors(file,"");
        assert.deepEqual(result, [[{ lineStart: 10, lineEnd: 10, indexStart: 0, indexEnd: 4 },
        { lineStart: 11, lineEnd: 11, indexStart: 0, indexEnd: 4 }],
        ["Error, all choices must be at the beginning, or between facts and definitions.",
        "Error, all choices must be at the beginning, or between facts and definitions."]]);
      });

      it('test 31 - test on an ASP with multiple rules 3', function () {

        let file = readFileSync(PATH + '/loadErrors/Order_Tests/test31_multiple.lp').toLocaleString();

        const result = loadErrors(file,"");
        assert.deepEqual(result, [[{ lineStart: 16, lineEnd: 16, indexStart: 0, indexEnd: 7 },
        { lineStart: 17, lineEnd: 17, indexStart: 0, indexEnd: 7 }],
        ["Error, all definitions must be between choices and constraints.",
          "Error, all definitions must be between choices and constraints."]]);
      });

      it('test 32 - test on an ASP with multiple rules 4', function () {

        let file = readFileSync(PATH + '/loadErrors/Order_Tests/test32_multiple.lp').toLocaleString();

        const result = loadErrors(file,"");
        assert.deepEqual(result, [[{ lineStart: 5, lineEnd: 5, indexStart: 0, indexEnd: 2 },
        { lineStart: 6, lineEnd: 6, indexStart: 0, indexEnd: 2 },
        { lineStart: 13, lineEnd: 13, indexStart: 0, indexEnd: 4 },
        { lineStart: 14, lineEnd: 14, indexStart: 0, indexEnd: 4 },
        { lineStart: 21, lineEnd: 21, indexStart: 0, indexEnd: 7 },
        { lineStart: 22, lineEnd: 22, indexStart: 0, indexEnd: 7 }],
        ["Error, all facts must be at the beginning, or between constants and choices.",
        "Error, all facts must be at the beginning, or between constants and choices.",
        "Error, all choices must be at the beginning, or between facts and definitions.",
        "Error, all choices must be at the beginning, or between facts and definitions.",
          "Error, all definitions must be between choices and constraints.",
          "Error, all definitions must be between choices and constraints."]]);
      });

      it('test 33 - randomised test 1', function () {

        let file = readFileSync(PATH + '/loadErrors/Order_Tests/test33_random.lp').toLocaleString();

        const result = loadErrors(file,"");
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
          "Error, all facts must be at the beginning, or between constants and choices.",
          "Error, all choices must be at the beginning, or between facts and definitions.",
          "Error, all choices must be at the beginning, or between facts and definitions.",
          "Error, all choices must be at the beginning, or between facts and definitions.",
          'Error, this block of definitions is in between a block of other rules.',
          "Error, all definitions must be between choices and constraints.",
          "Error, all definitions must be between choices and constraints.",
          "Error, all definitions must be between choices and constraints.",
          'Error, this block of constraints is in between a block of other rules.',
          'Error, this block of constraints is in between a block of other rules.']]);
      });



      it('test 34 - answer set programs testing 1', function () {

        let file = readFileSync(PATH + '/loadErrors/Order_Tests/test34_program.lp').toLocaleString();

        const result = loadErrors(file,"");
        assert.deepEqual(result, [[{ lineStart: 17, lineEnd: 17, indexStart: 0, indexEnd: 14 },
        { lineStart: 16, lineEnd: 16, indexStart: 0, indexEnd: 28 },
        { lineStart: 23, lineEnd: 23, indexStart: 0, indexEnd: 43 },
        { lineStart: 24, lineEnd: 24, indexStart: 0, indexEnd: 53 }],
        [ "Error, all facts must be at the beginning, or between constants and choices.",
          'Error, all definitions must be between choices and constraints.',
          'Error, all definitions must be between choices and constraints.',
          'Error, all definitions must be between choices and constraints.']]);
      });

      it('test 35 - answer set programs testing 2', function () {

        let file = readFileSync(PATH + '/loadErrors/Order_Tests/test35_program.lp').toLocaleString();

        const result = loadErrors(file,"");
        assert.deepEqual(result, [[], []]);
      });

      it('test 36 - answer set programs testing 3', function () {

        let file = readFileSync(PATH + '/loadErrors/Order_Tests/test36_program.lp').toLocaleString();

        const result = loadErrors(file,"");
        assert.deepEqual(result, [[{ lineStart: 31, lineEnd: 31, indexStart: 0, indexEnd: 39 },
        { lineStart: 32, lineEnd: 32, indexStart: 0, indexEnd: 42 },
        { lineStart: 22, lineEnd: 22, indexStart: 0, indexEnd: 27 },
        { lineStart: 25, lineEnd: 25, indexStart: 0, indexEnd: 38 },
        { lineStart: 28, lineEnd: 28, indexStart: 0, indexEnd: 63 },
        { lineStart: 29, lineEnd: 29, indexStart: 0, indexEnd: 54 },
        { lineStart: 34, lineEnd: 34, indexStart: 0, indexEnd: 13 }],
        ['Invalid Rule.',
          'Invalid Rule.',
          "Error, all choices must be at the beginning, or between facts and definitions.",
          "Error, this block of definitions is in between a block of other rules.",
          "Error, this block of definitions is in between a block of other rules.",
          "Error, this block of definitions is in between a block of other rules.",
          'Error, all show statements must be after constraints.']]);
      });

      it('test 37 - answer set programs testing 4', function () {

        let file = readFileSync(PATH + '/loadErrors/Order_Tests/test37_program.lp').toLocaleString();

        const result = loadErrors(file,"");
        assert.deepEqual(result, [[], []]);
      });

      it('test 38 - answer set programs testing 5', function () {

        let file = readFileSync(PATH + '/loadErrors/Order_Tests/test38_program.lp').toLocaleString();

        const result = loadErrors(file,"");
        assert.deepEqual(result, [[], []]);
      });

      it('test 39 - formatText + range testing', function () {

        let file = readFileSync(PATH + '/loadErrors/Order_Tests/test39_format.lp').toLocaleString();

        const result = loadErrors(file,"");
        assert.deepEqual(result, [[{ lineStart: 9, lineEnd: 9, indexStart: 0, indexEnd: 2 },
        { lineStart: 9, lineEnd: 9, indexStart: 2, indexEnd: 4 },
        { lineStart: 9, lineEnd: 9, indexStart: 4, indexEnd: 6 },
        { lineStart: 9, lineEnd: 9, indexStart: 6, indexEnd: 8 },
        { lineStart: 9, lineEnd: 9, indexStart: 8, indexEnd: 10 },
        { lineStart: 9, lineEnd: 12, indexStart: 10, indexEnd: 1 },
        { lineStart: 0, lineEnd: 7, indexStart: 0, indexEnd: 1 }],
        [ "Error, all facts must be at the beginning, or between constants and choices.",
        "Error, all facts must be at the beginning, or between constants and choices.",
        "Error, all facts must be at the beginning, or between constants and choices.",
        "Error, all facts must be at the beginning, or between constants and choices.",
        "Error, all facts must be at the beginning, or between constants and choices.",
        "Error, all facts must be at the beginning, or between constants and choices.",
          'Error, predicate abcdef/0 is not defined yet.']]);
      });

      it('test 40 - well placed constants', function () {

        let file = readFileSync(PATH + '/loadErrors/Order_Tests/test40_constants.lp').toLocaleString();

        const result = loadErrors(file,"");
        assert.deepEqual(result, [[],[]]);
      });

      it('test 41 - badly places constants 1', function () {

        let file = readFileSync(PATH + '/loadErrors/Order_Tests/test41_constants.lp').toLocaleString();

        const result = loadErrors(file,"");
        assert.deepEqual(result, [[{lineStart: 4, lineEnd: 4, indexStart: 0, indexEnd: 13},
          {lineStart: 5, lineEnd: 5, indexStart: 0, indexEnd: 13}],
          ['Error, all constants must be at the beginning.',
          'Error, all constants must be at the beginning.']]);
      });

      it('test 42 - badly places constants 2', function () {

        let file = readFileSync(PATH + '/loadErrors/Order_Tests/test42_constants.lp').toLocaleString();

        const result = loadErrors(file,"");
        assert.deepEqual(result, [[{lineStart: 13, lineEnd: 13, indexStart: 0, indexEnd: 13},
          {lineStart: 14, lineEnd: 14, indexStart: 0, indexEnd: 13}],
          ['Error, all constants must be at the beginning.',
          'Error, all constants must be at the beginning.']]);
      });

      it('test 43 - badly places constants 3', function () {

        let file = readFileSync(PATH + '/loadErrors/Order_Tests/test43_constants.lp').toLocaleString();

        const result = loadErrors(file,"");
        assert.deepEqual(result, [[{lineStart: 16, lineEnd: 16, indexStart: 0, indexEnd: 13},
          {lineStart: 17, lineEnd: 17, indexStart: 0, indexEnd: 13}],
          ['Error, all constants must be at the beginning.',
          'Error, all constants must be at the beginning.']]);
      });

      it('test 44 - badly places constants 4', function () {

        let file = readFileSync(PATH + '/loadErrors/Order_Tests/test44_constants.lp').toLocaleString();

        const result = loadErrors(file,"");
        assert.deepEqual(result, [[{lineStart: 19, lineEnd: 19, indexStart: 0, indexEnd: 13},
          {lineStart: 20, lineEnd: 20, indexStart: 0, indexEnd: 13}],
          ['Error, all constants must be at the beginning.',
          'Error, all constants must be at the beginning.']]);
      });

      it('test 45 - badly places constants 5', function () {

        let file = readFileSync(PATH + '/loadErrors/Order_Tests/test45_constants.lp').toLocaleString();

        const result = loadErrors(file,"");
        assert.deepEqual(result, [[{lineStart: 21, lineEnd: 21, indexStart: 0, indexEnd: 13},
          {lineStart: 22, lineEnd: 22, indexStart: 0, indexEnd: 13}],
          ['Error, all constants must be at the beginning.',
          'Error, all constants must be at the beginning.']]);
      });
    });

    describe('Dependency Tests', function () {
      it('test 1 - choice without facts', function () {

        let file = readFileSync(PATH + '/loadErrors/Dependency_Tests/test1_dependencies.lp').toLocaleString();

        const result = loadErrors(file,"");
        assert.deepEqual(result, [[{ lineStart: 0, lineEnd: 0, indexStart: 0, indexEnd: 44 }],
        ["Error, predicates n/1 and a/1 are not defined yet."]]);
      });

      it('test 2 - many rules without facts', function () {

        let file = readFileSync(PATH + '/loadErrors/Dependency_Tests/test2_dependencies.lp').toLocaleString();

        const result = loadErrors(file,"");
        assert.deepEqual(result, [[{ lineStart: 4, lineEnd: 4, indexStart: 0, indexEnd: 7 },
        { lineStart: 6, lineEnd: 6, indexStart: 0, indexEnd: 10 },
        { lineStart: 8, lineEnd: 8, indexStart: 0, indexEnd: 13 },
        { lineStart: 10, lineEnd: 10, indexStart: 0, indexEnd: 5 },
        { lineStart: 12, lineEnd: 12, indexStart: 0, indexEnd: 8 },
        { lineStart: 14, lineEnd: 14, indexStart: 0, indexEnd: 11 },
        { lineStart: 16, lineEnd: 16, indexStart: 0, indexEnd: 10 }
        ],
        ['Error, predicate c/0 is not defined yet.',
          'Error, predicate c/1 is not defined yet.',
          'Error, predicates g/0, h/0 and j/0 are not defined yet.',
          'Error, predicate b/0 is not defined yet.',
          'Error, predicate b/1 is not defined yet.',
          'Error, predicates d/0, e/0 and f/0 are not defined yet.',
          'Error, predicate a/1 is not defined yet.']]);
      });

      it('test 3 - predicate defined but in the wrong order', function () {

        let file = readFileSync(PATH + '/loadErrors/Dependency_Tests/test3_dependencies.lp').toLocaleString();

        const result = loadErrors(file,"");
        assert.deepEqual(result, [[{ lineStart: 2, lineEnd: 2, indexStart: 0, indexEnd: 5 },
        { lineStart: 0, lineEnd: 0, indexStart: 0, indexEnd: 10 }],
        [ "Error, all facts must be at the beginning, or between constants and choices.",
          'Error, predicate a/1 is not defined yet.']]);
      });

      it('test 4 - predicate defined but in the right order', function () {

        let file = readFileSync(PATH + '/loadErrors/Dependency_Tests/test4_dependencies.lp').toLocaleString();

        const result = loadErrors(file,"");
        assert.deepEqual(result, [[], []]);
      });

      it('test 5 - predicate defined but in the right order', function () {

        let file = readFileSync(PATH + '/loadErrors/Dependency_Tests/test5_dependencies.lp').toLocaleString();

        const result = loadErrors(file,"");
        assert.deepEqual(result, [[{lineStart: 0, lineEnd: 0, indexStart: 0, indexEnd: 9}], ["Invalid Rule."]]);
      });

      it('test 6 - big answer set program', function () {

        let file = readFileSync(PATH + '/loadErrors/Dependency_Tests/test6_dependencies.lp').toLocaleString();

        const result = loadErrors(file,"");
        assert.deepEqual(result, [[{lineStart: 13, lineEnd: 13, indexStart: 0, indexEnd: 11},
          {lineStart: 16, lineEnd: 16, indexStart: 0, indexEnd: 13},
          {lineStart: 18, lineEnd: 18, indexStart: 0, indexEnd: 11},
          {lineStart: 1, lineEnd: 1, indexStart: 0, indexEnd: 46},
          {lineStart: 4, lineEnd: 4, indexStart: 0, indexEnd: 50}], 
          ['Error, all facts must be at the beginning, or between constants and choices.',
          'Error, all facts must be at the beginning, or between constants and choices.',
          'Error, all facts must be at the beginning, or between constants and choices.',
          'Error, predicates node/2 and color/1 are not defined yet.',
          'Error, predicates node/2 and edge/2 are not defined yet.']]);
      });

      it('test 7 - big answer set program', function () {

        let file = readFileSync(PATH + '/loadErrors/Dependency_Tests/test7_dependencies.lp').toLocaleString();

        const result = loadErrors(file,"");
        assert.deepEqual(result, [[{lineStart: 7, lineEnd: 7, indexStart: 0, indexEnd: 38},
          {lineStart: 8, lineEnd: 8, indexStart: 0, indexEnd: 36},
          {lineStart: 9, lineEnd: 9, indexStart: 0, indexEnd: 37},
          {lineStart: 10, lineEnd: 10, indexStart: 0, indexEnd: 36},
          {lineStart: 11, lineEnd: 11, indexStart: 0, indexEnd: 36},
          {lineStart: 0, lineEnd: 0, indexStart: 0, indexEnd: 31},
          {lineStart: 1, lineEnd: 1, indexStart: 0, indexEnd: 30},
          {lineStart: 3, lineEnd: 3, indexStart: 0, indexEnd: 36},
          {lineStart: 4, lineEnd: 4, indexStart: 0, indexEnd: 36}], 
          ['Error, all definitions must be between choices and constraints. Error, predicate a/0 is not defined yet.',
          'Error, all definitions must be between choices and constraints. Error, predicate a/0 is not defined yet.',
          'Error, all definitions must be between choices and constraints. Error, predicate a/0 is not defined yet.',
          'Error, all definitions must be between choices and constraints. Error, predicate a/0 is not defined yet.',
          'Error, all definitions must be between choices and constraints. Error, predicate a/0 is not defined yet.',
          'Error, predicate a/0 is not defined yet.',
          'Error, predicate a/0 is not defined yet.',
          'Error, predicates a/0, b/0 and c/0 are not defined yet.',
          'Error, predicates a/0, b/0 and c/0 are not defined yet.']]);
      });
    });
  });

  describe('multipleFiles', function () {
    it('test 1 - multiple file program with no errors', function () {
      let file = readFileSync(PATH + '/multipleFiles/test1/root1.lp').toLocaleString();

      const result = loadErrors(file,"in(1,4,9).in(1,5,2).in(2,3,9).in(2,6,1).");
      assert.deepEqual(result, [[],[]]);
    });

    it('test 2 - multiple file program with one error', function () {
      let file = readFileSync(PATH + '/multipleFiles/test2/root2.lp').toLocaleString();

      const result = loadErrors(file,"in(1,4,9).in(1,5,2).in(2,3,9).in(2,6,1).");
      assert.deepEqual(result, 
        [[{lineStart: 17, lineEnd: 17, indexStart: 0, indexEnd: 76}]
        ,['Error, predicate n/1 is not defined yet.']]);
    });

    it('test 3 - multiple file program with a few error', function () {
      let file = readFileSync(PATH + '/multipleFiles/test3/root3.lp').toLocaleString();

      const result = loadErrors(file,"");
      assert.deepEqual(result, 
        [[{lineStart: 17, lineEnd: 17, indexStart: 0, indexEnd: 76},
          {lineStart: 20, lineEnd: 20, indexStart: 0, indexEnd: 54},
          {lineStart: 22, lineEnd: 22, indexStart: 0, indexEnd: 11}]
        ,['Error, predicate n/1 is not defined yet.',
        'Error, predicate in/3 is not defined yet.',
        'Error, predicate in/3 is not defined yet.']]);
    });

    it('test 4 - no config file', function () {
      let file = readFileSync(PATH + '/multipleFiles/test4/root4.lp').toLocaleString();

      const result = loadErrors(file,"");
      assert.deepEqual(result, 
        [[{lineStart: 14, lineEnd: 14, indexStart: 0, indexEnd: 76},
          {lineStart: 17, lineEnd: 17, indexStart: 0, indexEnd: 54},
          {lineStart: 19, lineEnd: 19, indexStart: 0, indexEnd: 11}]
        ,['Error, predicate n/1 is not defined yet.',
        'Error, predicate in/3 is not defined yet.',
        'Error, predicate in/3 is not defined yet.']]);
    });
  });
});
