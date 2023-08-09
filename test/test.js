const assert = require('chai').assert;

// @ts-ignore
const { getRuleType, EMPTY, COMMENT, FACT, CHOICE, DEFINITION, CONSTRAINT, SHOW_STATEMEMENT, INVALID_RULE } = require('../src/parser/getRuleType');

// @ts-ignore
const { formatText } = require('../src/parser/formatText');

// @ts-ignore
const { loadUnderlineDummy } = require('../src/engine/loadUnderline');

const { readFileSync } = require('fs');

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

if(OS == MAC_OS || OS == LINUX)
  SPLIT_CODE = '\n';
else
  SPLIT_CODE = '\r\n';


describe('Extension', function() {

  describe('getRuleType', function() {
    it(' "a." must be a fact', function() {
      const result = getRuleType('a.');
      assert.equal(result, FACT);
    });

    it('"{a}." must be a choice.', function() {
      const result = getRuleType('{a}.');
      assert.equal(result, CHOICE);
    });

    it('"a :- b." must be a rule.', function() {
      const result = getRuleType('a :- b.');
      assert.equal(result, DEFINITION);
    });

    it('":- a." must be a constraint.', function() {
      const result = getRuleType(':- a.');
      assert.equal(result, CONSTRAINT);
    });

    it('" " must be empty.', function() {
      const result = getRuleType(' ');
      assert.equal(result, EMPTY);
    });

    it('"%a." must be a comment.', function() {
      const result = getRuleType('%a.');
      assert.equal(result, COMMENT);
    }); 
    
    it('"#show a/0." must be a view.', function() {
      const result = getRuleType('#show a/0.');
      assert.equal(result, SHOW_STATEMEMENT);
    });

      it('"xxxxx." must be a fact.', function() {
      const result = getRuleType('xxxxx.');
      assert.equal(result, FACT);
    });

    it('"#." must be an invalid rule.', function() {
      const result = getRuleType('#.');
      assert.equal(result, INVALID_RULE);
    });

    it('"aa{a}." must be an invalid rule.', function() {
      const result = getRuleType('aa{a}.');
      assert.equal(result, INVALID_RULE);
    });

    it('"" must be empty.', function() {
      const result = getRuleType('');
      assert.equal(result, EMPTY);
    });

    it('":-." must be an invalid rule.', function() {
      const result = getRuleType(':-.');
      assert.equal(result, INVALID_RULE);
    });

    it('"a:-." must be an invalid rule.', function() {
      const result = getRuleType('a:-.');
      assert.equal(result, INVALID_RULE);
    });

    it('"{a,a,a,a,}." must be an invalid rule.', function() {
      const result = getRuleType('{a,a,a,a,}.');
      assert.equal(result, INVALID_RULE);
    });

    it('"a(a,a,a,a,)." must be an invalid rule.', function() {
      const result = getRuleType('a(a,a,a,a,).');
      assert.equal(result, INVALID_RULE);
    });

    it('"a(a,a,a)." must be a fact.', function() {
      const result = getRuleType('a(a,a,a).');
      assert.equal(result, FACT);
    });

    it('"a(1..3)." must be a fact.', function() {
      const result = getRuleType('a(1..3).');
      assert.equal(result, FACT);
    });

      const result = getRuleType('...........');
    it('"..........." must be an invalid rule.', function() {
      assert.equal(result, INVALID_RULE);
    });

    it('"a(a..b)." must be an invalid rule.', function() {
      const result = getRuleType('a(a..b).');
      assert.equal(result, INVALID_RULE);
    });

    it('"1..2." must be an invalid rule.', function() {
      const result = getRuleType('1..2.');
      assert.equal(result, INVALID_RULE);
    });

    it('"a(1..2)." must be a fact.', function() {
      const result = getRuleType('a(1..2).');
      assert.equal(result, FACT);
    });

    it('"{}." must be an invalid rule.', function() {
      const result = getRuleType('{}.');
      assert.equal(result, INVALID_RULE);
    });

    it('"1{a}1." must be a choice.', function() {
      const result = getRuleType('1{a}1.');
      assert.equal(result, CHOICE);
    });

    it('"1{a}1 :- a." must be a choice.', function() {
      const result = getRuleType('1{a}1 :- a.');
      assert.equal(result, CHOICE);
    });

    it('"1{}1 :- a." must be an invalid rule.', function() {
      const result = getRuleType('1{}1 :- a.');
      assert.equal(result, INVALID_RULE);
    });

    it('"aa{a}aaa :- a." must be an invalid rule.', function() {
      const result = getRuleType('1{}1 :- a.');
      assert.equal(result, INVALID_RULE);
    });
    
    it('"a(1,2,3,4,5,56)." must be a fact.', function() {
      const result = getRuleType('a(1,2,3,4,5,56).');
      assert.equal(result, FACT);
    });

    

    it('"1{in(X,Y,N):n(N)}1 :- n(Y), n(X)." must be a choice.', function() {
      const result = getRuleType('1{in(X,Y,N):n(N)}1 :- n(Y), n(X).');
      assert.equal(result, CHOICE);
    });

    it('"this_is_a_fact." must be a fact.', function() {
      const result = getRuleType('this_is_a_fact.');
      assert.equal(result, FACT);
    });

    it('"this_is_a_fact(var_1,var_2,1..3)." must be a fact.', function() {
      const result = getRuleType('this_is_a_fact(var_1,var_2,1..3).');
      assert.equal(result, FACT);
    });

    it('"n(1..9). % positions" must be a fact.', function() {
      const result = getRuleType('n(1..9). % positions');
      assert.equal(result, FACT);
    });

    it('"{a(1..3)}." must be a choice.', function() {
      const result = getRuleType('{a(1..3)}.');
      assert.equal(result, CHOICE);
    });

    it('"{a(1..3),a(13),a(13),a(1..3)}." must be a choice.', function() {
      const result = getRuleType('{a(1..3),a(13),a(13),a(1..3)}.');
      assert.equal(result, CHOICE);
    });

    it('"a(3..1)." must be an invalid rule.', function() {
      const result = getRuleType('a(3..1).');
      assert.equal(result, INVALID_RULE);
    });

    it('"3{a}2." must be an invalid rule.', function() {
      const result = getRuleType('3{a}2.');
      assert.equal(result, INVALID_RULE);
    });

    it('"{a}2." must be a choice.', function() {
      const result = getRuleType('{a}2.');
      assert.equal(result, CHOICE);
    });
    
    it('"3{a}." must be a choice.', function() {
      const result = getRuleType('3{a}.');
      assert.equal(result, CHOICE);
    });

    it('"m(X..Y) :- n(X), n(Y), X<Y." must be a rule.', function() {
      const result = getRuleType('m(X..Y) :- n(X), n(Y), X<Y.');
      assert.equal(result, DEFINITION);
    });

    it('"n(1;3)." must be a fact.', function() {
      const result = getRuleType('n(1;3).');
      assert.equal(result, FACT);
    });

    it('"m(x..Y) :-  n(Y), x<Y.." must be a fact.', function() {
      const result = getRuleType('m(x..Y) :-  n(Y), x<Y.');
      assert.equal(result, DEFINITION);
    });

    
  });

  describe('formatText',function(){
    it('rules in multiple line testing 1', function() {

      let file = readFileSync(PATH+'/formatText/test1_multiple_lines.lp').toLocaleString();

      const result = formatText(file.trim().split(SPLIT_CODE));
      assert.deepEqual(result,[
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
    ]); 
    });

    it('rules in multiple line testing 2', function() {

      let file = readFileSync(PATH+'/formatText/test2_multiple_lines.lp').toLocaleString();

      const result = formatText(file.trim().split(SPLIT_CODE));
      assert.deepEqual(result,[
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
    ]); 
    });

    it('rules in multiple line testing 3', function() {

      let file = readFileSync(PATH+'/formatText/test3_multiple_lines.lp').toLocaleString();

      const result = formatText(file.trim().split(SPLIT_CODE));
      assert.deepEqual(result,[
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
    ]); 
    });

    it('rules in multiple line testing 4', function() {

      let file = readFileSync(PATH+'/formatText/test4_multiple_lines.lp').toLocaleString();

      const result = formatText(file.trim().split(SPLIT_CODE));
      assert.deepEqual(result,[
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
    ]); 
    });

    it('rules in multiple line testing 5', function() {

      let file = readFileSync(PATH+'/formatText/test5_multiple_lines.lp').toLocaleString();

   
      const result = formatText(file.trim().split(SPLIT_CODE));
      assert.deepEqual(result,[
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
    ]); 
    });

    it('rules in multiple line testing 6', function() {

      let file = readFileSync(PATH+'/formatText/test6_multiple_lines.lp').toLocaleString();

      const result = formatText(file.trim().split(SPLIT_CODE));
      assert.deepEqual(result,[
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
    ]); 
    });

    it('rules in multiple line testing 7', function() {

      let file = readFileSync(PATH+'/formatText/test7_multiple_lines.lp').toLocaleString();

      const result = formatText(file.trim().split(SPLIT_CODE));
      assert.deepEqual(result,[
        "n(1..4).",
        "% positions",
        "n(5..9",
    ]); 
    });

    it('rules in multiple line testing 8', function() {

      let file = readFileSync(PATH+'/formatText/test8_multiple_lines.lp').toLocaleString();

      const result = formatText(file.trim().split(SPLIT_CODE));
      assert.deepEqual(result,[
        "n(1..4).",
        "% positions",
        "n(5..912345678",
    ]); 
    });

    it('rules in multiple line testing 9', function() {

      let file = readFileSync(PATH+'/formatText/test9_multiple_lines.lp').toLocaleString();

      const result = formatText(file.trim().split(SPLIT_CODE));
      assert.deepEqual(result,[
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
    ]); 
    });

    it('rules in multiple line testing 10', function() {

      let file = readFileSync(PATH+'/formatText/test10_multiple_lines.lp').toLocaleString();

      const result = formatText(file.trim().split(SPLIT_CODE));
      assert.deepEqual(result,[
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
    ]); 
    });

    it('rules in multiple line testing 11', function() {

      let file = readFileSync(PATH+'/formatText/test11_multiple_lines.lp').toLocaleString();

      const result = formatText(file.trim().split(SPLIT_CODE));
      assert.deepEqual(result,[
        "%* positions*%",
        "n(1..9)."
    ]); 
    });
  })

  describe('loadUnderlineDummy', function() {
    it('test 1 - empty file should not underline anything', function() {

      let file = readFileSync(PATH+'/loadUnderline/test1_empty.lp').toLocaleString();

      const result = loadUnderlineDummy(file);
      assert.deepEqual(result,[[],[]]);
    });

    it('test 2 - easy answer set program should not underline anything', function() {

      let file = readFileSync(PATH+'/loadUnderline/test2_ezasp.lp').toLocaleString();

      const result = loadUnderlineDummy(file);
      assert.deepEqual(result,[[],[]]);
    });

      it('test 3 - facts should come only before choices 1', function() {

      let file = readFileSync(PATH+'/loadUnderline/test3_facts.lp').toLocaleString();

      const result = loadUnderlineDummy(file);
      assert.deepEqual(result,[[6], ["Error, all facts must be before choices."]]); 
    });

    it('test 4 - facts should come only before choices 2', function() {

      let file = readFileSync(PATH+'/loadUnderline/test4_facts.lp').toLocaleString();

      const result = loadUnderlineDummy(file);
      assert.deepEqual(result,[[12],[ "Error, all facts must be before choices."]]); 
    });

    it('test 5 - facts should come only before choices 3', function() {

      let file = readFileSync(PATH+'/loadUnderline/test5_facts.lp').toLocaleString();

      const result = loadUnderlineDummy(file);
      assert.deepEqual(result,[[15],["Error, all facts must be before choices."]]); 
    });

    it('test 6 - facts should come only before choices 4', function() {

      let file = readFileSync(PATH+'/loadUnderline/test6_facts.lp').toLocaleString();

      const result = loadUnderlineDummy(file);
      assert.deepEqual(result,[[18],[ "Error, all facts must be before choices."]]); 
    });

    it('test 7 - facts should come only before choices 5', function() {

      let file = readFileSync(PATH+'/loadUnderline/test7_facts.lp').toLocaleString();

      const result = loadUnderlineDummy(file);
      assert.deepEqual(result,[[20],["Error, all facts must be before choices."]]); 
    });

    it('test 8 - choices should come only after facts 0', function() {

      let file = readFileSync(PATH+'/loadUnderline/test8_choices.lp').toLocaleString();

      const result = loadUnderlineDummy(file);
      assert.deepEqual(result,[[3],["Error, all facts must be before choices."]]); 
    });

    it('test 9 - choices should come only after facts 1', function() {

      let file = readFileSync(PATH+'/loadUnderline/test9_choices.lp').toLocaleString();

      const result = loadUnderlineDummy(file);
      assert.deepEqual(result,[[],[]]); 
    });

    it('test 10 - choices should come only after facts 2', function() {

      let file = readFileSync(PATH+'/loadUnderline/test10_choices.lp').toLocaleString();

      const result = loadUnderlineDummy(file);
      assert.deepEqual(result,[[15],[ "Error, all choices must be between facts and rules."]]); 
    });

    it('test 11 - choices should come only after facts 3', function() {

      let file = readFileSync(PATH+'/loadUnderline/test11_choices.lp').toLocaleString();

      const result = loadUnderlineDummy(file);
      assert.deepEqual(result,[[18],["Error, all choices must be between facts and rules."]]); 
    });

    it('test 12 - choices should come only after facts 4', function() {

      let file = readFileSync(PATH+'/loadUnderline/test12_choices.lp').toLocaleString();

      const result = loadUnderlineDummy(file);
      assert.deepEqual(result[0],[20]); 
    });

    it('test 13 - rules should come only after choices 0', function() {

      let file = readFileSync(PATH+'/loadUnderline/test13_rules.lp').toLocaleString();

      const result = loadUnderlineDummy(file);
      assert.deepEqual(result,[[0],["//TODO"]]); 
    });

    it('test 14 - rules should come only after choices 1', function() {

      let file = readFileSync(PATH+'/loadUnderline/test14_rules.lp').toLocaleString();

      const result = loadUnderlineDummy(file);
      assert.deepEqual(result,[[6,9,12],["Error, all choices must be between facts and rules.","Error, all choices must be between facts and rules.","Error, all choices must be between facts and rules."]]); 
    });

    it('test 15 - rules should come only after choices 2', function() {

      let file = readFileSync(PATH+'/loadUnderline/test15_rules.lp').toLocaleString();

      const result = loadUnderlineDummy(file);
      assert.deepEqual(result,[[],[]]); 
    });

    it('test 16 - rules should come only after choices 3', function() {

      let file = readFileSync(PATH+'/loadUnderline/test16_rules.lp').toLocaleString();

      const result = loadUnderlineDummy(file);
      assert.deepEqual(result,[[18],[ "Error, all rules must be between choices and constraints."]]); 
    });

    it('test 17 - rules should come only after choices 4', function() {

      let file = readFileSync(PATH+'/loadUnderline/test17_rules.lp').toLocaleString();

      const result = loadUnderlineDummy(file);
      assert.deepEqual(result,[[20],[ "Error, all rules must be between choices and constraints."]]); 
    });

    it('test 18 - constraints should come only after rules 0', function() {

      let file = readFileSync(PATH+'/loadUnderline/test18_constraints.lp').toLocaleString();

      const result = loadUnderlineDummy(file);
      assert.deepEqual(result,[[0],["//TODO"]]); 
    });

    it('test 19 - constraints should come only after rules 1', function() {

      let file = readFileSync(PATH+'/loadUnderline/test19_constraints.lp').toLocaleString();

      const result = loadUnderlineDummy(file);
      assert.deepEqual(result,[[3],["Error, constraint after a fact detected."]]); 
    });

    it('test 20 - constraints should come only after rules 2', function() {

      let file = readFileSync(PATH+'/loadUnderline/test20_constraints.lp').toLocaleString();

      const result = loadUnderlineDummy(file);
      assert.deepEqual(result,[[12],["Error, constraint after a choice detected."]]); 
    });

    it('test 21 - constraints should come only after rules 3', function() {

      let file = readFileSync(PATH+'/loadUnderline/test21_constraints.lp').toLocaleString();

      const result = loadUnderlineDummy(file);
      assert.deepEqual(result,[[],[]]); 
    });

    it('test 22 - constraints should come only after rules 4', function() {

      let file = readFileSync(PATH+'/loadUnderline/test22_constraints.lp').toLocaleString();

      const result = loadUnderlineDummy(file);
      assert.deepEqual(result,[[20],["Error, all constraints must be between rules and views."]]); 
    });

    it('test 23 - views should come only after constraints 0', function() {

      let file = readFileSync(PATH+'/loadUnderline/test23_views.lp').toLocaleString();

      const result = loadUnderlineDummy(file);
      assert.deepEqual(result,[[0],["//TODO"]]); 
    });

    it('test 24 - views should come only after constraints 1', function() {

      let file = readFileSync(PATH+'/loadUnderline/test24_views.lp').toLocaleString();

      const result = loadUnderlineDummy(file);
      assert.deepEqual(result,[[3],["Error, view after a fact detected."]]); 
    });

    it('test 25 - views should come only after constraints 2', function() {

      let file = readFileSync(PATH+'/loadUnderline/test25_views.lp').toLocaleString();

      const result = loadUnderlineDummy(file);
      assert.deepEqual(result,[[12],["Error, view after a choice detected."]]); 
    });

    it('test 26 - views should come only after constraints 3', function() {

      let file = readFileSync(PATH+'/loadUnderline/test26_views.lp').toLocaleString();

      const result = loadUnderlineDummy(file);
      assert.deepEqual(result,[[15],["Error, view after a rule was detected."]]); 
    });

    it('test 27 - views should come only after constraints 4', function() {

      let file = readFileSync(PATH+'/loadUnderline/test27_views.lp').toLocaleString();

      const result = loadUnderlineDummy(file);
      assert.deepEqual(result,[[],[]]); 
    });

    it('test 28 - test on an ASP with multiple rules 0', function() {

      let file = readFileSync(PATH+'/loadUnderline/test28_multiple.lp').toLocaleString();

      const result = loadUnderlineDummy(file);
      assert.deepEqual(result,[[],[]]); 
    });

    it('test 29 -test on an ASP with multiple rules 1', function() {

      let file = readFileSync(PATH+'/loadUnderline/test29_multiple.lp').toLocaleString();

      const result = loadUnderlineDummy(file);
      assert.deepEqual(result,[[3,4,5],["Error, fact after a choice was detected.","Error, fact after a choice was detected.","Error, fact after a choice was detected."]]); 
    });

    it('test 30 - test on an ASP with multiple rules 2', function() {

      let file = readFileSync(PATH+'/loadUnderline/test30_multiple.lp').toLocaleString();

      const result = loadUnderlineDummy(file);
      assert.deepEqual(result,[[9,10,11],["Error, choice after a rule was detected.","Error, choice after a rule was detected.","Error, choice after a rule was detected."]]); 
    });

    it('test 31 - test on an ASP with multiple rules 3', function() {

      let file = readFileSync(PATH+'/loadUnderline/test31_multiple.lp').toLocaleString();

      const result = loadUnderlineDummy(file);
      assert.deepEqual(result,[[15,16,17],["Error, rule after a constraint was detected.","Error, rule after a constraint was detected.","Error, rule after a constraint was detected."]]); 
    });

    it('test 32 - test on an ASP with multiple rules 4', function() {

      let file = readFileSync(PATH+'/loadUnderline/test32_multiple.lp').toLocaleString();

      const result = loadUnderlineDummy(file);
      assert.deepEqual(result,[[3,4,5,6,11,12,13,14,19,20,21,22],["Error, fact after a choice was detected.","Error, fact after a choice was detected.","Error, fact after a choice was detected.","Error, fact after a choice was detected.","Error, choice after a rule was detected.","Error, choice after a rule was detected.","Error, choice after a rule was detected.","Error, choice after a rule was detected.","Error, rule after a constraint was detected.","Error, rule after a constraint was detected.","Error, rule after a constraint was detected.","Error, rule after a constraint was detected."]]); 
    });

    it('test 33 - randomised test 1', function() {

      let file = readFileSync(PATH+'/loadUnderline/test33_random.lp').toLocaleString();

      const result = loadUnderlineDummy(file);
      assert.deepEqual(result[0],[0,1,2,3,4,5,6,7,10,11,12,13,14,16,20,21,22]); 
    });

    it('test 34 - answer set programs testing 1', function() {

      let file = readFileSync(PATH+'/loadUnderline/test34_program.lp').toLocaleString();

      const result = loadUnderlineDummy(file);
      assert.deepEqual(result,[[12,13,14,17,19,20,21,23,24],["Error, constraint after a choice detected.","Error, constraint after a choice detected.","Error, constraint after a choice detected.","Error, fact after a rule was detected.","Error, rule after a constraint was detected.","Error, rule after a constraint was detected.","Error, rule after a constraint was detected.","Error, rule after a constraint was detected.","Error, rule after a constraint was detected."]]); 
    });

    it('test 35 - answer set programs testing 2', function() {

      let file = readFileSync(PATH+'/loadUnderline/test35_program.lp').toLocaleString();

      const result = loadUnderlineDummy(file);
      assert.deepEqual(result,[[2,3,4,5,6,7,8,9],[]]); 
    });

    it('test 36 - answer set programs testing 3', function() {

      let file = readFileSync(PATH+'/loadUnderline/test36_program.lp').toLocaleString();

      const result = loadUnderlineDummy(file);
      assert.deepEqual(result[0],[22,25,28,29,31,32]); 
    });

    it('test 37 - answer set programs testing 4', function() {

      let file = readFileSync(PATH+'/loadUnderline/test37_program.lp').toLocaleString();

      const result = loadUnderlineDummy(file);
      assert.deepEqual(result[0],[]); 
    });

    it('test 38 - answer set programs testing 5', function() {

      let file = readFileSync(PATH+'/loadUnderline/test38_program.lp').toLocaleString();

      const result = loadUnderlineDummy(file);
      assert.deepEqual(result[0],[]); 
    });
  });
});
