// Generated from src/parser/grammar/ASP.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import ASPListener from './ASPListener.mjs';
const serializedATN = [4,1,36,425,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,26,7,26,2,27,
7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,2,32,7,32,2,33,7,33,2,34,7,
34,2,35,7,35,2,36,7,36,2,37,7,37,2,38,7,38,2,39,7,39,2,40,7,40,2,41,7,41,
2,42,7,42,1,0,1,0,1,0,1,0,5,0,91,8,0,10,0,12,0,94,9,0,1,0,1,0,1,1,1,1,1,
1,1,1,1,1,1,1,1,1,1,1,3,1,106,8,1,1,2,1,2,1,2,1,2,1,2,1,2,1,3,1,3,1,3,1,
4,1,4,1,4,1,4,1,4,1,5,3,5,123,8,5,1,5,1,5,3,5,127,8,5,1,5,1,5,3,5,131,8,
5,1,6,1,6,1,6,5,6,136,8,6,10,6,12,6,139,9,6,1,6,1,6,1,6,1,6,1,6,5,6,146,
8,6,10,6,12,6,149,9,6,3,6,151,8,6,3,6,153,8,6,1,7,1,7,1,8,1,8,1,9,1,9,1,
9,1,9,1,9,1,10,1,10,1,10,1,10,1,11,1,11,1,11,5,11,171,8,11,10,11,12,11,174,
9,11,1,12,1,12,1,12,5,12,179,8,12,10,12,12,12,182,9,12,1,13,1,13,1,13,1,
13,1,13,3,13,189,8,13,1,13,3,13,192,8,13,1,14,1,14,1,14,1,14,1,14,5,14,199,
8,14,10,14,12,14,202,9,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,5,14,211,8,
14,10,14,12,14,214,9,14,1,14,1,14,1,14,3,14,219,8,14,1,15,1,15,1,15,1,15,
1,15,3,15,226,8,15,1,15,1,15,1,16,1,16,1,16,1,16,1,16,1,16,1,16,1,16,1,16,
3,16,239,8,16,1,16,3,16,242,8,16,1,16,1,16,1,16,3,16,247,8,16,1,16,5,16,
250,8,16,10,16,12,16,253,9,16,1,16,1,16,1,17,1,17,1,17,1,17,1,17,1,17,1,
17,1,17,1,17,3,17,266,8,17,1,18,1,18,1,18,1,18,1,18,1,19,1,19,1,19,1,19,
1,19,1,19,5,19,279,8,19,10,19,12,19,282,9,19,1,20,1,20,1,21,1,21,1,22,1,
22,1,23,1,23,1,24,3,24,293,8,24,1,24,1,24,1,25,3,25,298,8,25,1,25,1,25,1,
26,1,26,1,26,1,26,1,26,5,26,307,8,26,10,26,12,26,310,9,26,1,26,1,26,3,26,
314,8,26,1,27,1,27,1,27,1,27,1,28,1,28,1,28,1,28,1,28,5,28,325,8,28,10,28,
12,28,328,9,28,1,28,1,28,1,28,3,28,333,8,28,1,29,1,29,1,29,5,29,338,8,29,
10,29,12,29,341,9,29,3,29,343,8,29,1,29,1,29,1,29,1,29,5,29,349,8,29,10,
29,12,29,352,9,29,3,29,354,8,29,3,29,356,8,29,1,30,1,30,3,30,360,8,30,1,
31,1,31,1,31,1,31,1,32,1,32,1,32,3,32,369,8,32,1,33,1,33,1,33,3,33,374,8,
33,1,34,1,34,1,34,3,34,379,8,34,1,35,1,35,1,35,1,35,1,35,1,35,1,35,3,35,
388,8,35,1,36,1,36,1,36,1,36,1,36,5,36,395,8,36,10,36,12,36,398,9,36,1,36,
1,36,1,37,1,37,1,37,1,37,5,37,406,8,37,10,37,12,37,409,9,37,3,37,411,8,37,
1,37,1,37,1,38,1,38,1,39,1,39,1,40,1,40,1,41,1,41,1,42,1,42,1,42,0,0,43,
0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,
52,54,56,58,60,62,64,66,68,70,72,74,76,78,80,82,84,0,1,1,0,29,30,445,0,92,
1,0,0,0,2,105,1,0,0,0,4,107,1,0,0,0,6,113,1,0,0,0,8,116,1,0,0,0,10,122,1,
0,0,0,12,132,1,0,0,0,14,154,1,0,0,0,16,156,1,0,0,0,18,158,1,0,0,0,20,163,
1,0,0,0,22,167,1,0,0,0,24,175,1,0,0,0,26,191,1,0,0,0,28,218,1,0,0,0,30,225,
1,0,0,0,32,229,1,0,0,0,34,265,1,0,0,0,36,267,1,0,0,0,38,272,1,0,0,0,40,283,
1,0,0,0,42,285,1,0,0,0,44,287,1,0,0,0,46,289,1,0,0,0,48,292,1,0,0,0,50,297,
1,0,0,0,52,301,1,0,0,0,54,315,1,0,0,0,56,319,1,0,0,0,58,342,1,0,0,0,60,359,
1,0,0,0,62,361,1,0,0,0,64,368,1,0,0,0,66,373,1,0,0,0,68,378,1,0,0,0,70,387,
1,0,0,0,72,389,1,0,0,0,74,401,1,0,0,0,76,414,1,0,0,0,78,416,1,0,0,0,80,418,
1,0,0,0,82,420,1,0,0,0,84,422,1,0,0,0,86,91,3,2,1,0,87,91,3,46,23,0,88,91,
3,42,21,0,89,91,3,44,22,0,90,86,1,0,0,0,90,87,1,0,0,0,90,88,1,0,0,0,90,89,
1,0,0,0,91,94,1,0,0,0,92,90,1,0,0,0,92,93,1,0,0,0,93,95,1,0,0,0,94,92,1,
0,0,0,95,96,5,0,0,1,96,1,1,0,0,0,97,106,3,4,2,0,98,106,3,6,3,0,99,106,3,
8,4,0,100,106,3,18,9,0,101,106,3,20,10,0,102,106,3,28,14,0,103,106,3,32,
16,0,104,106,3,34,17,0,105,97,1,0,0,0,105,98,1,0,0,0,105,99,1,0,0,0,105,
100,1,0,0,0,105,101,1,0,0,0,105,102,1,0,0,0,105,103,1,0,0,0,105,104,1,0,
0,0,106,3,1,0,0,0,107,108,5,1,0,0,108,109,5,24,0,0,109,110,5,2,0,0,110,111,
3,68,34,0,111,112,5,22,0,0,112,5,1,0,0,0,113,114,3,22,11,0,114,115,5,22,
0,0,115,7,1,0,0,0,116,117,3,10,5,0,117,118,5,3,0,0,118,119,3,24,12,0,119,
120,5,22,0,0,120,9,1,0,0,0,121,123,3,82,41,0,122,121,1,0,0,0,122,123,1,0,
0,0,123,124,1,0,0,0,124,126,5,4,0,0,125,127,3,12,6,0,126,125,1,0,0,0,126,
127,1,0,0,0,127,128,1,0,0,0,128,130,5,5,0,0,129,131,3,84,42,0,130,129,1,
0,0,0,130,131,1,0,0,0,131,11,1,0,0,0,132,137,3,14,7,0,133,134,5,6,0,0,134,
136,3,14,7,0,135,133,1,0,0,0,136,139,1,0,0,0,137,135,1,0,0,0,137,138,1,0,
0,0,138,152,1,0,0,0,139,137,1,0,0,0,140,150,5,7,0,0,141,147,3,16,8,0,142,
146,5,8,0,0,143,144,5,6,0,0,144,146,3,16,8,0,145,142,1,0,0,0,145,143,1,0,
0,0,146,149,1,0,0,0,147,145,1,0,0,0,147,148,1,0,0,0,148,151,1,0,0,0,149,
147,1,0,0,0,150,141,1,0,0,0,150,151,1,0,0,0,151,153,1,0,0,0,152,140,1,0,
0,0,152,153,1,0,0,0,153,13,1,0,0,0,154,155,3,52,26,0,155,15,1,0,0,0,156,
157,3,52,26,0,157,17,1,0,0,0,158,159,3,22,11,0,159,160,5,3,0,0,160,161,3,
24,12,0,161,162,5,22,0,0,162,19,1,0,0,0,163,164,5,3,0,0,164,165,3,24,12,
0,165,166,5,22,0,0,166,21,1,0,0,0,167,172,3,26,13,0,168,169,5,6,0,0,169,
171,3,26,13,0,170,168,1,0,0,0,171,174,1,0,0,0,172,170,1,0,0,0,172,173,1,
0,0,0,173,23,1,0,0,0,174,172,1,0,0,0,175,180,3,26,13,0,176,177,5,8,0,0,177,
179,3,26,13,0,178,176,1,0,0,0,179,182,1,0,0,0,180,178,1,0,0,0,180,181,1,
0,0,0,181,25,1,0,0,0,182,180,1,0,0,0,183,192,3,48,24,0,184,192,3,54,27,0,
185,192,3,56,28,0,186,192,3,62,31,0,187,189,5,34,0,0,188,187,1,0,0,0,188,
189,1,0,0,0,189,190,1,0,0,0,190,192,3,10,5,0,191,183,1,0,0,0,191,184,1,0,
0,0,191,185,1,0,0,0,191,186,1,0,0,0,191,188,1,0,0,0,192,27,1,0,0,0,193,194,
5,9,0,0,194,195,5,4,0,0,195,200,3,30,15,0,196,197,5,6,0,0,197,199,3,30,15,
0,198,196,1,0,0,0,199,202,1,0,0,0,200,198,1,0,0,0,200,201,1,0,0,0,201,203,
1,0,0,0,202,200,1,0,0,0,203,204,5,10,0,0,204,219,1,0,0,0,205,206,5,11,0,
0,206,207,5,4,0,0,207,212,3,30,15,0,208,209,5,6,0,0,209,211,3,30,15,0,210,
208,1,0,0,0,211,214,1,0,0,0,212,210,1,0,0,0,212,213,1,0,0,0,213,215,1,0,
0,0,214,212,1,0,0,0,215,216,5,5,0,0,216,217,5,22,0,0,217,219,1,0,0,0,218,
193,1,0,0,0,218,205,1,0,0,0,219,29,1,0,0,0,220,221,3,78,39,0,221,222,5,12,
0,0,222,223,3,80,40,0,223,224,5,8,0,0,224,226,1,0,0,0,225,220,1,0,0,0,225,
226,1,0,0,0,226,227,1,0,0,0,227,228,3,58,29,0,228,31,1,0,0,0,229,230,5,13,
0,0,230,231,3,24,12,0,231,232,5,22,0,0,232,238,5,14,0,0,233,234,3,78,39,
0,234,235,5,12,0,0,235,236,3,80,40,0,236,237,5,8,0,0,237,239,1,0,0,0,238,
233,1,0,0,0,238,239,1,0,0,0,239,241,1,0,0,0,240,242,5,35,0,0,241,240,1,0,
0,0,241,242,1,0,0,0,242,243,1,0,0,0,243,251,3,68,34,0,244,246,5,8,0,0,245,
247,5,35,0,0,246,245,1,0,0,0,246,247,1,0,0,0,247,248,1,0,0,0,248,250,3,68,
34,0,249,244,1,0,0,0,250,253,1,0,0,0,251,249,1,0,0,0,251,252,1,0,0,0,252,
254,1,0,0,0,253,251,1,0,0,0,254,255,5,23,0,0,255,33,1,0,0,0,256,257,3,36,
18,0,257,258,5,22,0,0,258,266,1,0,0,0,259,260,3,38,19,0,260,261,5,22,0,0,
261,266,1,0,0,0,262,263,3,40,20,0,263,264,5,22,0,0,264,266,1,0,0,0,265,256,
1,0,0,0,265,259,1,0,0,0,265,262,1,0,0,0,266,35,1,0,0,0,267,268,5,15,0,0,
268,269,5,24,0,0,269,270,5,16,0,0,270,271,5,29,0,0,271,37,1,0,0,0,272,273,
5,15,0,0,273,274,3,68,34,0,274,275,5,7,0,0,275,280,3,48,24,0,276,277,5,8,
0,0,277,279,3,48,24,0,278,276,1,0,0,0,279,282,1,0,0,0,280,278,1,0,0,0,280,
281,1,0,0,0,281,39,1,0,0,0,282,280,1,0,0,0,283,284,5,15,0,0,284,41,1,0,0,
0,285,286,5,19,0,0,286,43,1,0,0,0,287,288,5,20,0,0,288,45,1,0,0,0,289,290,
5,21,0,0,290,47,1,0,0,0,291,293,5,34,0,0,292,291,1,0,0,0,292,293,1,0,0,0,
293,294,1,0,0,0,294,295,3,50,25,0,295,49,1,0,0,0,296,298,5,35,0,0,297,296,
1,0,0,0,297,298,1,0,0,0,298,299,1,0,0,0,299,300,3,52,26,0,300,51,1,0,0,0,
301,313,5,24,0,0,302,303,5,17,0,0,303,308,3,68,34,0,304,305,5,8,0,0,305,
307,3,68,34,0,306,304,1,0,0,0,307,310,1,0,0,0,308,306,1,0,0,0,308,309,1,
0,0,0,309,311,1,0,0,0,310,308,1,0,0,0,311,312,5,18,0,0,312,314,1,0,0,0,313,
302,1,0,0,0,313,314,1,0,0,0,314,53,1,0,0,0,315,316,3,68,34,0,316,317,5,32,
0,0,317,318,3,68,34,0,318,55,1,0,0,0,319,320,5,33,0,0,320,321,5,4,0,0,321,
326,3,58,29,0,322,323,5,6,0,0,323,325,3,58,29,0,324,322,1,0,0,0,325,328,
1,0,0,0,326,324,1,0,0,0,326,327,1,0,0,0,327,329,1,0,0,0,328,326,1,0,0,0,
329,332,5,5,0,0,330,331,5,32,0,0,331,333,3,68,34,0,332,330,1,0,0,0,332,333,
1,0,0,0,333,57,1,0,0,0,334,339,3,68,34,0,335,336,5,8,0,0,336,338,3,68,34,
0,337,335,1,0,0,0,338,341,1,0,0,0,339,337,1,0,0,0,339,340,1,0,0,0,340,343,
1,0,0,0,341,339,1,0,0,0,342,334,1,0,0,0,342,343,1,0,0,0,343,355,1,0,0,0,
344,353,5,7,0,0,345,350,3,60,30,0,346,347,5,8,0,0,347,349,3,60,30,0,348,
346,1,0,0,0,349,352,1,0,0,0,350,348,1,0,0,0,350,351,1,0,0,0,351,354,1,0,
0,0,352,350,1,0,0,0,353,345,1,0,0,0,353,354,1,0,0,0,354,356,1,0,0,0,355,
344,1,0,0,0,355,356,1,0,0,0,356,59,1,0,0,0,357,360,3,48,24,0,358,360,3,54,
27,0,359,357,1,0,0,0,359,358,1,0,0,0,360,61,1,0,0,0,361,362,3,64,32,0,362,
363,5,2,0,0,363,364,3,66,33,0,364,63,1,0,0,0,365,369,3,68,34,0,366,369,3,
56,28,0,367,369,3,48,24,0,368,365,1,0,0,0,368,366,1,0,0,0,368,367,1,0,0,
0,369,65,1,0,0,0,370,374,3,68,34,0,371,374,3,50,25,0,372,374,3,56,28,0,373,
370,1,0,0,0,373,371,1,0,0,0,373,372,1,0,0,0,374,67,1,0,0,0,375,379,3,70,
35,0,376,379,3,72,36,0,377,379,3,74,37,0,378,375,1,0,0,0,378,376,1,0,0,0,
378,377,1,0,0,0,379,69,1,0,0,0,380,388,3,76,38,0,381,388,5,24,0,0,382,388,
5,31,0,0,383,388,5,25,0,0,384,388,5,26,0,0,385,388,5,27,0,0,386,388,5,28,
0,0,387,380,1,0,0,0,387,381,1,0,0,0,387,382,1,0,0,0,387,383,1,0,0,0,387,
384,1,0,0,0,387,385,1,0,0,0,387,386,1,0,0,0,388,71,1,0,0,0,389,390,5,24,
0,0,390,391,5,17,0,0,391,396,3,68,34,0,392,393,5,8,0,0,393,395,3,68,34,0,
394,392,1,0,0,0,395,398,1,0,0,0,396,394,1,0,0,0,396,397,1,0,0,0,397,399,
1,0,0,0,398,396,1,0,0,0,399,400,5,18,0,0,400,73,1,0,0,0,401,410,5,17,0,0,
402,407,3,68,34,0,403,404,5,8,0,0,404,406,3,68,34,0,405,403,1,0,0,0,406,
409,1,0,0,0,407,405,1,0,0,0,407,408,1,0,0,0,408,411,1,0,0,0,409,407,1,0,
0,0,410,402,1,0,0,0,410,411,1,0,0,0,411,412,1,0,0,0,412,413,5,18,0,0,413,
75,1,0,0,0,414,415,7,0,0,0,415,77,1,0,0,0,416,417,3,76,38,0,417,79,1,0,0,
0,418,419,3,76,38,0,419,81,1,0,0,0,420,421,3,76,38,0,421,83,1,0,0,0,422,
423,3,76,38,0,423,85,1,0,0,0,44,90,92,105,122,126,130,137,145,147,150,152,
172,180,188,191,200,212,218,225,238,241,246,251,265,280,292,297,308,313,
326,332,339,342,350,353,355,359,368,373,378,387,396,407,410];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class ASPParser extends antlr4.Parser {

    static grammarFileName = "ASP.g4";
    static literalNames = [ null, "'#const'", "'='", "':-'", "'{'", "'}'", 
                            "';'", "':'", "','", "'#minimize'", "'} DOT'", 
                            "'#maximize'", "'@'", "':~'", "'['", "'#show'", 
                            "'/'", "'('", "')'", null, null, null, "'.'", 
                            "']'", null, null, "'_'", "'#sup'", "'#inf'", 
                            null, null, null, null, null, "' not '", "'-'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, "BLOCK_COMMENT", "UNCLOSED_COMMENT", 
                             "LINE_COMMENT", "DOT", "EOWC", "CONSTANT", 
                             "VARIABLE", "UNDERSCORE", "SUP", "INF", "NUMBER", 
                             "INTERVAL", "STRING", "COMPARATOR", "AGGREGATE_FUNCTION", 
                             "NOT", "CLASSICAL_NEGATION", "WS" ];
    static ruleNames = [ "program", "statement", "constant", "fact", "choice_rule", 
                         "choice", "choice_body", "defined_atom", "used_atom", 
                         "definite_rule", "constraint", "head", "body", 
                         "rule_atoms", "optimization", "optimizationBody", 
                         "weak_constraint", "show", "show_atoms", "show_terms", 
                         "show_nothing", "block_comment", "unclosed_comment", 
                         "line_comment", "literal", "classical_atom", "atom", 
                         "builtIn_atom", "aggregate_atom", "aggregate_element", 
                         "aggregate_literal", "assignment", "assignee", 
                         "assigned_value", "term", "simpleTerm", "functionTerm", 
                         "tuple", "integer", "weight", "priority", "lowerbound", 
                         "upperbound" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = ASPParser.ruleNames;
        this.literalNames = ASPParser.literalNames;
        this.symbolicNames = ASPParser.symbolicNames;
    }



	program() {
	    let localctx = new ProgramContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, ASPParser.RULE_program);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 92;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 4282034714) !== 0) || ((((_la - 33)) & ~0x1f) === 0 && ((1 << (_la - 33)) & 7) !== 0)) {
	            this.state = 90;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case 1:
	            case 3:
	            case 4:
	            case 9:
	            case 11:
	            case 13:
	            case 15:
	            case 17:
	            case 24:
	            case 25:
	            case 26:
	            case 27:
	            case 28:
	            case 29:
	            case 30:
	            case 31:
	            case 33:
	            case 34:
	            case 35:
	                this.state = 86;
	                this.statement();
	                break;
	            case 21:
	                this.state = 87;
	                this.line_comment();
	                break;
	            case 19:
	                this.state = 88;
	                this.block_comment();
	                break;
	            case 20:
	                this.state = 89;
	                this.unclosed_comment();
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }
	            this.state = 94;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 95;
	        this.match(ASPParser.EOF);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	statement() {
	    let localctx = new StatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, ASPParser.RULE_statement);
	    try {
	        this.state = 105;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,2,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 97;
	            this.constant();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 98;
	            this.fact();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 99;
	            this.choice_rule();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 100;
	            this.definite_rule();
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 101;
	            this.constraint();
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 102;
	            this.optimization();
	            break;

	        case 7:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 103;
	            this.weak_constraint();
	            break;

	        case 8:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 104;
	            this.show();
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	constant() {
	    let localctx = new ConstantContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, ASPParser.RULE_constant);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 107;
	        this.match(ASPParser.T__0);
	        this.state = 108;
	        this.match(ASPParser.CONSTANT);
	        this.state = 109;
	        this.match(ASPParser.T__1);
	        this.state = 110;
	        this.term();
	        this.state = 111;
	        this.match(ASPParser.DOT);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	fact() {
	    let localctx = new FactContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, ASPParser.RULE_fact);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 113;
	        this.head();
	        this.state = 114;
	        this.match(ASPParser.DOT);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	choice_rule() {
	    let localctx = new Choice_ruleContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, ASPParser.RULE_choice_rule);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 116;
	        this.choice();
	        this.state = 117;
	        this.match(ASPParser.T__2);
	        this.state = 118;
	        this.body();
	        this.state = 119;
	        this.match(ASPParser.DOT);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	choice() {
	    let localctx = new ChoiceContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, ASPParser.RULE_choice);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 122;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===29 || _la===30) {
	            this.state = 121;
	            this.lowerbound();
	        }

	        this.state = 124;
	        this.match(ASPParser.T__3);
	        this.state = 126;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===24) {
	            this.state = 125;
	            this.choice_body();
	        }

	        this.state = 128;
	        this.match(ASPParser.T__4);
	        this.state = 130;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===29 || _la===30) {
	            this.state = 129;
	            this.upperbound();
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	choice_body() {
	    let localctx = new Choice_bodyContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, ASPParser.RULE_choice_body);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 132;
	        this.defined_atom();
	        this.state = 137;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===6) {
	            this.state = 133;
	            this.match(ASPParser.T__5);
	            this.state = 134;
	            this.defined_atom();
	            this.state = 139;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 152;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===7) {
	            this.state = 140;
	            this.match(ASPParser.T__6);
	            this.state = 150;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===24) {
	                this.state = 141;
	                this.used_atom();
	                this.state = 147;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                while(_la===6 || _la===8) {
	                    this.state = 145;
	                    this._errHandler.sync(this);
	                    switch(this._input.LA(1)) {
	                    case 8:
	                        this.state = 142;
	                        this.match(ASPParser.T__7);
	                        break;
	                    case 6:
	                        this.state = 143;
	                        this.match(ASPParser.T__5);
	                        this.state = 144;
	                        this.used_atom();
	                        break;
	                    default:
	                        throw new antlr4.error.NoViableAltException(this);
	                    }
	                    this.state = 149;
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                }
	            }

	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	defined_atom() {
	    let localctx = new Defined_atomContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, ASPParser.RULE_defined_atom);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 154;
	        this.atom();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	used_atom() {
	    let localctx = new Used_atomContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, ASPParser.RULE_used_atom);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 156;
	        this.atom();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	definite_rule() {
	    let localctx = new Definite_ruleContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, ASPParser.RULE_definite_rule);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 158;
	        this.head();
	        this.state = 159;
	        this.match(ASPParser.T__2);
	        this.state = 160;
	        this.body();
	        this.state = 161;
	        this.match(ASPParser.DOT);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	constraint() {
	    let localctx = new ConstraintContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, ASPParser.RULE_constraint);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 163;
	        this.match(ASPParser.T__2);
	        this.state = 164;
	        this.body();
	        this.state = 165;
	        this.match(ASPParser.DOT);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	head() {
	    let localctx = new HeadContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, ASPParser.RULE_head);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 167;
	        this.rule_atoms();
	        this.state = 172;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===6) {
	            this.state = 168;
	            this.match(ASPParser.T__5);
	            this.state = 169;
	            this.rule_atoms();
	            this.state = 174;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	body() {
	    let localctx = new BodyContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, ASPParser.RULE_body);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 175;
	        this.rule_atoms();
	        this.state = 180;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===8) {
	            this.state = 176;
	            this.match(ASPParser.T__7);
	            this.state = 177;
	            this.rule_atoms();
	            this.state = 182;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	rule_atoms() {
	    let localctx = new Rule_atomsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, ASPParser.RULE_rule_atoms);
	    var _la = 0;
	    try {
	        this.state = 191;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,14,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 183;
	            this.literal();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 184;
	            this.builtIn_atom();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 185;
	            this.aggregate_atom();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 186;
	            this.assignment();
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 188;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===34) {
	                this.state = 187;
	                this.match(ASPParser.NOT);
	            }

	            this.state = 190;
	            this.choice();
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	optimization() {
	    let localctx = new OptimizationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 28, ASPParser.RULE_optimization);
	    var _la = 0;
	    try {
	        this.state = 218;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 9:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 193;
	            this.match(ASPParser.T__8);
	            this.state = 194;
	            this.match(ASPParser.T__3);
	            this.state = 195;
	            this.optimizationBody();
	            this.state = 200;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===6) {
	                this.state = 196;
	                this.match(ASPParser.T__5);
	                this.state = 197;
	                this.optimizationBody();
	                this.state = 202;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 203;
	            this.match(ASPParser.T__9);
	            break;
	        case 11:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 205;
	            this.match(ASPParser.T__10);
	            this.state = 206;
	            this.match(ASPParser.T__3);
	            this.state = 207;
	            this.optimizationBody();
	            this.state = 212;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===6) {
	                this.state = 208;
	                this.match(ASPParser.T__5);
	                this.state = 209;
	                this.optimizationBody();
	                this.state = 214;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 215;
	            this.match(ASPParser.T__4);
	            this.state = 216;
	            this.match(ASPParser.DOT);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	optimizationBody() {
	    let localctx = new OptimizationBodyContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 30, ASPParser.RULE_optimizationBody);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 225;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,18,this._ctx);
	        if(la_===1) {
	            this.state = 220;
	            this.weight();
	            this.state = 221;
	            this.match(ASPParser.T__11);
	            this.state = 222;
	            this.priority();
	            this.state = 223;
	            this.match(ASPParser.T__7);

	        }
	        this.state = 227;
	        this.aggregate_element();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	weak_constraint() {
	    let localctx = new Weak_constraintContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 32, ASPParser.RULE_weak_constraint);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 229;
	        this.match(ASPParser.T__12);
	        this.state = 230;
	        this.body();
	        this.state = 231;
	        this.match(ASPParser.DOT);
	        this.state = 232;
	        this.match(ASPParser.T__13);
	        this.state = 238;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,19,this._ctx);
	        if(la_===1) {
	            this.state = 233;
	            this.weight();
	            this.state = 234;
	            this.match(ASPParser.T__11);
	            this.state = 235;
	            this.priority();
	            this.state = 236;
	            this.match(ASPParser.T__7);

	        }

	        this.state = 241;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===35) {
	            this.state = 240;
	            this.match(ASPParser.CLASSICAL_NEGATION);
	        }

	        this.state = 243;
	        this.term();
	        this.state = 251;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===8) {
	            this.state = 244;
	            this.match(ASPParser.T__7);
	            this.state = 246;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===35) {
	                this.state = 245;
	                this.match(ASPParser.CLASSICAL_NEGATION);
	            }

	            this.state = 248;
	            this.term();
	            this.state = 253;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 254;
	        this.match(ASPParser.EOWC);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	show() {
	    let localctx = new ShowContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 34, ASPParser.RULE_show);
	    try {
	        this.state = 265;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,23,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 256;
	            this.show_atoms();
	            this.state = 257;
	            this.match(ASPParser.DOT);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 259;
	            this.show_terms();
	            this.state = 260;
	            this.match(ASPParser.DOT);
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 262;
	            this.show_nothing();
	            this.state = 263;
	            this.match(ASPParser.DOT);
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	show_atoms() {
	    let localctx = new Show_atomsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 36, ASPParser.RULE_show_atoms);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 267;
	        this.match(ASPParser.T__14);
	        this.state = 268;
	        this.match(ASPParser.CONSTANT);
	        this.state = 269;
	        this.match(ASPParser.T__15);
	        this.state = 270;
	        this.match(ASPParser.NUMBER);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	show_terms() {
	    let localctx = new Show_termsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 38, ASPParser.RULE_show_terms);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 272;
	        this.match(ASPParser.T__14);
	        this.state = 273;
	        this.term();
	        this.state = 274;
	        this.match(ASPParser.T__6);
	        this.state = 275;
	        this.literal();
	        this.state = 280;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===8) {
	            this.state = 276;
	            this.match(ASPParser.T__7);
	            this.state = 277;
	            this.literal();
	            this.state = 282;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	show_nothing() {
	    let localctx = new Show_nothingContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 40, ASPParser.RULE_show_nothing);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 283;
	        this.match(ASPParser.T__14);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	block_comment() {
	    let localctx = new Block_commentContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 42, ASPParser.RULE_block_comment);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 285;
	        this.match(ASPParser.BLOCK_COMMENT);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	unclosed_comment() {
	    let localctx = new Unclosed_commentContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 44, ASPParser.RULE_unclosed_comment);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 287;
	        this.match(ASPParser.UNCLOSED_COMMENT);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	line_comment() {
	    let localctx = new Line_commentContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 46, ASPParser.RULE_line_comment);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 289;
	        this.match(ASPParser.LINE_COMMENT);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	literal() {
	    let localctx = new LiteralContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 48, ASPParser.RULE_literal);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 292;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===34) {
	            this.state = 291;
	            this.match(ASPParser.NOT);
	        }

	        this.state = 294;
	        this.classical_atom();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	classical_atom() {
	    let localctx = new Classical_atomContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 50, ASPParser.RULE_classical_atom);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 297;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===35) {
	            this.state = 296;
	            this.match(ASPParser.CLASSICAL_NEGATION);
	        }

	        this.state = 299;
	        this.atom();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	atom() {
	    let localctx = new AtomContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 52, ASPParser.RULE_atom);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 301;
	        this.match(ASPParser.CONSTANT);
	        this.state = 313;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===17) {
	            this.state = 302;
	            this.match(ASPParser.T__16);
	            this.state = 303;
	            this.term();
	            this.state = 308;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===8) {
	                this.state = 304;
	                this.match(ASPParser.T__7);
	                this.state = 305;
	                this.term();
	                this.state = 310;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 311;
	            this.match(ASPParser.T__17);
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	builtIn_atom() {
	    let localctx = new BuiltIn_atomContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 54, ASPParser.RULE_builtIn_atom);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 315;
	        this.term();
	        this.state = 316;
	        this.match(ASPParser.COMPARATOR);
	        this.state = 317;
	        this.term();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	aggregate_atom() {
	    let localctx = new Aggregate_atomContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 56, ASPParser.RULE_aggregate_atom);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 319;
	        this.match(ASPParser.AGGREGATE_FUNCTION);
	        this.state = 320;
	        this.match(ASPParser.T__3);
	        this.state = 321;
	        this.aggregate_element();
	        this.state = 326;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===6) {
	            this.state = 322;
	            this.match(ASPParser.T__5);
	            this.state = 323;
	            this.aggregate_element();
	            this.state = 328;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 329;
	        this.match(ASPParser.T__4);
	        this.state = 332;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===32) {
	            this.state = 330;
	            this.match(ASPParser.COMPARATOR);
	            this.state = 331;
	            this.term();
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	aggregate_element() {
	    let localctx = new Aggregate_elementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 58, ASPParser.RULE_aggregate_element);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 342;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) === 0 && ((1 << _la) & 4278321152) !== 0)) {
	            this.state = 334;
	            this.term();
	            this.state = 339;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===8) {
	                this.state = 335;
	                this.match(ASPParser.T__7);
	                this.state = 336;
	                this.term();
	                this.state = 341;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	        }

	        this.state = 355;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===7) {
	            this.state = 344;
	            this.match(ASPParser.T__6);
	            this.state = 353;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(((((_la - 17)) & ~0x1f) === 0 && ((1 << (_la - 17)) & 425857) !== 0)) {
	                this.state = 345;
	                this.aggregate_literal();
	                this.state = 350;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                while(_la===8) {
	                    this.state = 346;
	                    this.match(ASPParser.T__7);
	                    this.state = 347;
	                    this.aggregate_literal();
	                    this.state = 352;
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                }
	            }

	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	aggregate_literal() {
	    let localctx = new Aggregate_literalContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 60, ASPParser.RULE_aggregate_literal);
	    try {
	        this.state = 359;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,36,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 357;
	            this.literal();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 358;
	            this.builtIn_atom();
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	assignment() {
	    let localctx = new AssignmentContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 62, ASPParser.RULE_assignment);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 361;
	        this.assignee();
	        this.state = 362;
	        this.match(ASPParser.T__1);
	        this.state = 363;
	        this.assigned_value();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	assignee() {
	    let localctx = new AssigneeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 64, ASPParser.RULE_assignee);
	    try {
	        this.state = 368;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,37,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 365;
	            this.term();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 366;
	            this.aggregate_atom();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 367;
	            this.literal();
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	assigned_value() {
	    let localctx = new Assigned_valueContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 66, ASPParser.RULE_assigned_value);
	    try {
	        this.state = 373;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,38,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 370;
	            this.term();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 371;
	            this.classical_atom();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 372;
	            this.aggregate_atom();
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	term() {
	    let localctx = new TermContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 68, ASPParser.RULE_term);
	    try {
	        this.state = 378;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,39,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 375;
	            this.simpleTerm();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 376;
	            this.functionTerm();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 377;
	            this.tuple();
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	simpleTerm() {
	    let localctx = new SimpleTermContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 70, ASPParser.RULE_simpleTerm);
	    try {
	        this.state = 387;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 29:
	        case 30:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 380;
	            this.integer();
	            break;
	        case 24:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 381;
	            this.match(ASPParser.CONSTANT);
	            break;
	        case 31:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 382;
	            this.match(ASPParser.STRING);
	            break;
	        case 25:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 383;
	            this.match(ASPParser.VARIABLE);
	            break;
	        case 26:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 384;
	            this.match(ASPParser.UNDERSCORE);
	            break;
	        case 27:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 385;
	            this.match(ASPParser.SUP);
	            break;
	        case 28:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 386;
	            this.match(ASPParser.INF);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	functionTerm() {
	    let localctx = new FunctionTermContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 72, ASPParser.RULE_functionTerm);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 389;
	        this.match(ASPParser.CONSTANT);
	        this.state = 390;
	        this.match(ASPParser.T__16);
	        this.state = 391;
	        this.term();
	        this.state = 396;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===8) {
	            this.state = 392;
	            this.match(ASPParser.T__7);
	            this.state = 393;
	            this.term();
	            this.state = 398;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 399;
	        this.match(ASPParser.T__17);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	tuple() {
	    let localctx = new TupleContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 74, ASPParser.RULE_tuple);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 401;
	        this.match(ASPParser.T__16);
	        this.state = 410;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) === 0 && ((1 << _la) & 4278321152) !== 0)) {
	            this.state = 402;
	            this.term();
	            this.state = 407;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===8) {
	                this.state = 403;
	                this.match(ASPParser.T__7);
	                this.state = 404;
	                this.term();
	                this.state = 409;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	        }

	        this.state = 412;
	        this.match(ASPParser.T__17);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	integer() {
	    let localctx = new IntegerContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 76, ASPParser.RULE_integer);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 414;
	        _la = this._input.LA(1);
	        if(!(_la===29 || _la===30)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	weight() {
	    let localctx = new WeightContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 78, ASPParser.RULE_weight);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 416;
	        this.integer();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	priority() {
	    let localctx = new PriorityContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 80, ASPParser.RULE_priority);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 418;
	        this.integer();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	lowerbound() {
	    let localctx = new LowerboundContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 82, ASPParser.RULE_lowerbound);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 420;
	        this.integer();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	upperbound() {
	    let localctx = new UpperboundContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 84, ASPParser.RULE_upperbound);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 422;
	        this.integer();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

ASPParser.EOF = antlr4.Token.EOF;
ASPParser.T__0 = 1;
ASPParser.T__1 = 2;
ASPParser.T__2 = 3;
ASPParser.T__3 = 4;
ASPParser.T__4 = 5;
ASPParser.T__5 = 6;
ASPParser.T__6 = 7;
ASPParser.T__7 = 8;
ASPParser.T__8 = 9;
ASPParser.T__9 = 10;
ASPParser.T__10 = 11;
ASPParser.T__11 = 12;
ASPParser.T__12 = 13;
ASPParser.T__13 = 14;
ASPParser.T__14 = 15;
ASPParser.T__15 = 16;
ASPParser.T__16 = 17;
ASPParser.T__17 = 18;
ASPParser.BLOCK_COMMENT = 19;
ASPParser.UNCLOSED_COMMENT = 20;
ASPParser.LINE_COMMENT = 21;
ASPParser.DOT = 22;
ASPParser.EOWC = 23;
ASPParser.CONSTANT = 24;
ASPParser.VARIABLE = 25;
ASPParser.UNDERSCORE = 26;
ASPParser.SUP = 27;
ASPParser.INF = 28;
ASPParser.NUMBER = 29;
ASPParser.INTERVAL = 30;
ASPParser.STRING = 31;
ASPParser.COMPARATOR = 32;
ASPParser.AGGREGATE_FUNCTION = 33;
ASPParser.NOT = 34;
ASPParser.CLASSICAL_NEGATION = 35;
ASPParser.WS = 36;

ASPParser.RULE_program = 0;
ASPParser.RULE_statement = 1;
ASPParser.RULE_constant = 2;
ASPParser.RULE_fact = 3;
ASPParser.RULE_choice_rule = 4;
ASPParser.RULE_choice = 5;
ASPParser.RULE_choice_body = 6;
ASPParser.RULE_defined_atom = 7;
ASPParser.RULE_used_atom = 8;
ASPParser.RULE_definite_rule = 9;
ASPParser.RULE_constraint = 10;
ASPParser.RULE_head = 11;
ASPParser.RULE_body = 12;
ASPParser.RULE_rule_atoms = 13;
ASPParser.RULE_optimization = 14;
ASPParser.RULE_optimizationBody = 15;
ASPParser.RULE_weak_constraint = 16;
ASPParser.RULE_show = 17;
ASPParser.RULE_show_atoms = 18;
ASPParser.RULE_show_terms = 19;
ASPParser.RULE_show_nothing = 20;
ASPParser.RULE_block_comment = 21;
ASPParser.RULE_unclosed_comment = 22;
ASPParser.RULE_line_comment = 23;
ASPParser.RULE_literal = 24;
ASPParser.RULE_classical_atom = 25;
ASPParser.RULE_atom = 26;
ASPParser.RULE_builtIn_atom = 27;
ASPParser.RULE_aggregate_atom = 28;
ASPParser.RULE_aggregate_element = 29;
ASPParser.RULE_aggregate_literal = 30;
ASPParser.RULE_assignment = 31;
ASPParser.RULE_assignee = 32;
ASPParser.RULE_assigned_value = 33;
ASPParser.RULE_term = 34;
ASPParser.RULE_simpleTerm = 35;
ASPParser.RULE_functionTerm = 36;
ASPParser.RULE_tuple = 37;
ASPParser.RULE_integer = 38;
ASPParser.RULE_weight = 39;
ASPParser.RULE_priority = 40;
ASPParser.RULE_lowerbound = 41;
ASPParser.RULE_upperbound = 42;

class ProgramContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ASPParser.RULE_program;
    }

	EOF() {
	    return this.getToken(ASPParser.EOF, 0);
	};

	statement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(StatementContext);
	    } else {
	        return this.getTypedRuleContext(StatementContext,i);
	    }
	};

	line_comment = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Line_commentContext);
	    } else {
	        return this.getTypedRuleContext(Line_commentContext,i);
	    }
	};

	block_comment = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Block_commentContext);
	    } else {
	        return this.getTypedRuleContext(Block_commentContext,i);
	    }
	};

	unclosed_comment = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Unclosed_commentContext);
	    } else {
	        return this.getTypedRuleContext(Unclosed_commentContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof ASPListener ) {
	        listener.enterProgram(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ASPListener ) {
	        listener.exitProgram(this);
		}
	}


}



class StatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ASPParser.RULE_statement;
    }

	constant() {
	    return this.getTypedRuleContext(ConstantContext,0);
	};

	fact() {
	    return this.getTypedRuleContext(FactContext,0);
	};

	choice_rule() {
	    return this.getTypedRuleContext(Choice_ruleContext,0);
	};

	definite_rule() {
	    return this.getTypedRuleContext(Definite_ruleContext,0);
	};

	constraint() {
	    return this.getTypedRuleContext(ConstraintContext,0);
	};

	optimization() {
	    return this.getTypedRuleContext(OptimizationContext,0);
	};

	weak_constraint() {
	    return this.getTypedRuleContext(Weak_constraintContext,0);
	};

	show() {
	    return this.getTypedRuleContext(ShowContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof ASPListener ) {
	        listener.enterStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ASPListener ) {
	        listener.exitStatement(this);
		}
	}


}



class ConstantContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ASPParser.RULE_constant;
    }

	CONSTANT() {
	    return this.getToken(ASPParser.CONSTANT, 0);
	};

	term() {
	    return this.getTypedRuleContext(TermContext,0);
	};

	DOT() {
	    return this.getToken(ASPParser.DOT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ASPListener ) {
	        listener.enterConstant(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ASPListener ) {
	        listener.exitConstant(this);
		}
	}


}



class FactContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ASPParser.RULE_fact;
    }

	head() {
	    return this.getTypedRuleContext(HeadContext,0);
	};

	DOT() {
	    return this.getToken(ASPParser.DOT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ASPListener ) {
	        listener.enterFact(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ASPListener ) {
	        listener.exitFact(this);
		}
	}


}



class Choice_ruleContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ASPParser.RULE_choice_rule;
    }

	choice() {
	    return this.getTypedRuleContext(ChoiceContext,0);
	};

	body() {
	    return this.getTypedRuleContext(BodyContext,0);
	};

	DOT() {
	    return this.getToken(ASPParser.DOT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ASPListener ) {
	        listener.enterChoice_rule(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ASPListener ) {
	        listener.exitChoice_rule(this);
		}
	}


}



class ChoiceContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ASPParser.RULE_choice;
    }

	lowerbound() {
	    return this.getTypedRuleContext(LowerboundContext,0);
	};

	choice_body() {
	    return this.getTypedRuleContext(Choice_bodyContext,0);
	};

	upperbound() {
	    return this.getTypedRuleContext(UpperboundContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof ASPListener ) {
	        listener.enterChoice(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ASPListener ) {
	        listener.exitChoice(this);
		}
	}


}



class Choice_bodyContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ASPParser.RULE_choice_body;
    }

	defined_atom = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Defined_atomContext);
	    } else {
	        return this.getTypedRuleContext(Defined_atomContext,i);
	    }
	};

	used_atom = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Used_atomContext);
	    } else {
	        return this.getTypedRuleContext(Used_atomContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof ASPListener ) {
	        listener.enterChoice_body(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ASPListener ) {
	        listener.exitChoice_body(this);
		}
	}


}



class Defined_atomContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ASPParser.RULE_defined_atom;
    }

	atom() {
	    return this.getTypedRuleContext(AtomContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof ASPListener ) {
	        listener.enterDefined_atom(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ASPListener ) {
	        listener.exitDefined_atom(this);
		}
	}


}



class Used_atomContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ASPParser.RULE_used_atom;
    }

	atom() {
	    return this.getTypedRuleContext(AtomContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof ASPListener ) {
	        listener.enterUsed_atom(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ASPListener ) {
	        listener.exitUsed_atom(this);
		}
	}


}



class Definite_ruleContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ASPParser.RULE_definite_rule;
    }

	head() {
	    return this.getTypedRuleContext(HeadContext,0);
	};

	body() {
	    return this.getTypedRuleContext(BodyContext,0);
	};

	DOT() {
	    return this.getToken(ASPParser.DOT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ASPListener ) {
	        listener.enterDefinite_rule(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ASPListener ) {
	        listener.exitDefinite_rule(this);
		}
	}


}



class ConstraintContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ASPParser.RULE_constraint;
    }

	body() {
	    return this.getTypedRuleContext(BodyContext,0);
	};

	DOT() {
	    return this.getToken(ASPParser.DOT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ASPListener ) {
	        listener.enterConstraint(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ASPListener ) {
	        listener.exitConstraint(this);
		}
	}


}



class HeadContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ASPParser.RULE_head;
    }

	rule_atoms = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Rule_atomsContext);
	    } else {
	        return this.getTypedRuleContext(Rule_atomsContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof ASPListener ) {
	        listener.enterHead(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ASPListener ) {
	        listener.exitHead(this);
		}
	}


}



class BodyContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ASPParser.RULE_body;
    }

	rule_atoms = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Rule_atomsContext);
	    } else {
	        return this.getTypedRuleContext(Rule_atomsContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof ASPListener ) {
	        listener.enterBody(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ASPListener ) {
	        listener.exitBody(this);
		}
	}


}



class Rule_atomsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ASPParser.RULE_rule_atoms;
    }

	literal() {
	    return this.getTypedRuleContext(LiteralContext,0);
	};

	builtIn_atom() {
	    return this.getTypedRuleContext(BuiltIn_atomContext,0);
	};

	aggregate_atom() {
	    return this.getTypedRuleContext(Aggregate_atomContext,0);
	};

	assignment() {
	    return this.getTypedRuleContext(AssignmentContext,0);
	};

	choice() {
	    return this.getTypedRuleContext(ChoiceContext,0);
	};

	NOT() {
	    return this.getToken(ASPParser.NOT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ASPListener ) {
	        listener.enterRule_atoms(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ASPListener ) {
	        listener.exitRule_atoms(this);
		}
	}


}



class OptimizationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ASPParser.RULE_optimization;
    }

	optimizationBody = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(OptimizationBodyContext);
	    } else {
	        return this.getTypedRuleContext(OptimizationBodyContext,i);
	    }
	};

	DOT() {
	    return this.getToken(ASPParser.DOT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ASPListener ) {
	        listener.enterOptimization(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ASPListener ) {
	        listener.exitOptimization(this);
		}
	}


}



class OptimizationBodyContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ASPParser.RULE_optimizationBody;
    }

	aggregate_element() {
	    return this.getTypedRuleContext(Aggregate_elementContext,0);
	};

	weight() {
	    return this.getTypedRuleContext(WeightContext,0);
	};

	priority() {
	    return this.getTypedRuleContext(PriorityContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof ASPListener ) {
	        listener.enterOptimizationBody(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ASPListener ) {
	        listener.exitOptimizationBody(this);
		}
	}


}



class Weak_constraintContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ASPParser.RULE_weak_constraint;
    }

	body() {
	    return this.getTypedRuleContext(BodyContext,0);
	};

	DOT() {
	    return this.getToken(ASPParser.DOT, 0);
	};

	EOWC() {
	    return this.getToken(ASPParser.EOWC, 0);
	};

	term = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(TermContext);
	    } else {
	        return this.getTypedRuleContext(TermContext,i);
	    }
	};

	weight() {
	    return this.getTypedRuleContext(WeightContext,0);
	};

	priority() {
	    return this.getTypedRuleContext(PriorityContext,0);
	};

	CLASSICAL_NEGATION = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(ASPParser.CLASSICAL_NEGATION);
	    } else {
	        return this.getToken(ASPParser.CLASSICAL_NEGATION, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof ASPListener ) {
	        listener.enterWeak_constraint(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ASPListener ) {
	        listener.exitWeak_constraint(this);
		}
	}


}



class ShowContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ASPParser.RULE_show;
    }

	show_atoms() {
	    return this.getTypedRuleContext(Show_atomsContext,0);
	};

	DOT() {
	    return this.getToken(ASPParser.DOT, 0);
	};

	show_terms() {
	    return this.getTypedRuleContext(Show_termsContext,0);
	};

	show_nothing() {
	    return this.getTypedRuleContext(Show_nothingContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof ASPListener ) {
	        listener.enterShow(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ASPListener ) {
	        listener.exitShow(this);
		}
	}


}



class Show_atomsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ASPParser.RULE_show_atoms;
    }

	CONSTANT() {
	    return this.getToken(ASPParser.CONSTANT, 0);
	};

	NUMBER() {
	    return this.getToken(ASPParser.NUMBER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ASPListener ) {
	        listener.enterShow_atoms(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ASPListener ) {
	        listener.exitShow_atoms(this);
		}
	}


}



class Show_termsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ASPParser.RULE_show_terms;
    }

	term() {
	    return this.getTypedRuleContext(TermContext,0);
	};

	literal = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(LiteralContext);
	    } else {
	        return this.getTypedRuleContext(LiteralContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof ASPListener ) {
	        listener.enterShow_terms(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ASPListener ) {
	        listener.exitShow_terms(this);
		}
	}


}



class Show_nothingContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ASPParser.RULE_show_nothing;
    }


	enterRule(listener) {
	    if(listener instanceof ASPListener ) {
	        listener.enterShow_nothing(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ASPListener ) {
	        listener.exitShow_nothing(this);
		}
	}


}



class Block_commentContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ASPParser.RULE_block_comment;
    }

	BLOCK_COMMENT() {
	    return this.getToken(ASPParser.BLOCK_COMMENT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ASPListener ) {
	        listener.enterBlock_comment(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ASPListener ) {
	        listener.exitBlock_comment(this);
		}
	}


}



class Unclosed_commentContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ASPParser.RULE_unclosed_comment;
    }

	UNCLOSED_COMMENT() {
	    return this.getToken(ASPParser.UNCLOSED_COMMENT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ASPListener ) {
	        listener.enterUnclosed_comment(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ASPListener ) {
	        listener.exitUnclosed_comment(this);
		}
	}


}



class Line_commentContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ASPParser.RULE_line_comment;
    }

	LINE_COMMENT() {
	    return this.getToken(ASPParser.LINE_COMMENT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ASPListener ) {
	        listener.enterLine_comment(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ASPListener ) {
	        listener.exitLine_comment(this);
		}
	}


}



class LiteralContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ASPParser.RULE_literal;
    }

	classical_atom() {
	    return this.getTypedRuleContext(Classical_atomContext,0);
	};

	NOT() {
	    return this.getToken(ASPParser.NOT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ASPListener ) {
	        listener.enterLiteral(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ASPListener ) {
	        listener.exitLiteral(this);
		}
	}


}



class Classical_atomContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ASPParser.RULE_classical_atom;
    }

	atom() {
	    return this.getTypedRuleContext(AtomContext,0);
	};

	CLASSICAL_NEGATION() {
	    return this.getToken(ASPParser.CLASSICAL_NEGATION, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ASPListener ) {
	        listener.enterClassical_atom(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ASPListener ) {
	        listener.exitClassical_atom(this);
		}
	}


}



class AtomContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ASPParser.RULE_atom;
    }

	CONSTANT() {
	    return this.getToken(ASPParser.CONSTANT, 0);
	};

	term = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(TermContext);
	    } else {
	        return this.getTypedRuleContext(TermContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof ASPListener ) {
	        listener.enterAtom(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ASPListener ) {
	        listener.exitAtom(this);
		}
	}


}



class BuiltIn_atomContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ASPParser.RULE_builtIn_atom;
    }

	term = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(TermContext);
	    } else {
	        return this.getTypedRuleContext(TermContext,i);
	    }
	};

	COMPARATOR() {
	    return this.getToken(ASPParser.COMPARATOR, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ASPListener ) {
	        listener.enterBuiltIn_atom(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ASPListener ) {
	        listener.exitBuiltIn_atom(this);
		}
	}


}



class Aggregate_atomContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ASPParser.RULE_aggregate_atom;
    }

	AGGREGATE_FUNCTION() {
	    return this.getToken(ASPParser.AGGREGATE_FUNCTION, 0);
	};

	aggregate_element = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Aggregate_elementContext);
	    } else {
	        return this.getTypedRuleContext(Aggregate_elementContext,i);
	    }
	};

	COMPARATOR() {
	    return this.getToken(ASPParser.COMPARATOR, 0);
	};

	term() {
	    return this.getTypedRuleContext(TermContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof ASPListener ) {
	        listener.enterAggregate_atom(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ASPListener ) {
	        listener.exitAggregate_atom(this);
		}
	}


}



class Aggregate_elementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ASPParser.RULE_aggregate_element;
    }

	term = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(TermContext);
	    } else {
	        return this.getTypedRuleContext(TermContext,i);
	    }
	};

	aggregate_literal = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Aggregate_literalContext);
	    } else {
	        return this.getTypedRuleContext(Aggregate_literalContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof ASPListener ) {
	        listener.enterAggregate_element(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ASPListener ) {
	        listener.exitAggregate_element(this);
		}
	}


}



class Aggregate_literalContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ASPParser.RULE_aggregate_literal;
    }

	literal() {
	    return this.getTypedRuleContext(LiteralContext,0);
	};

	builtIn_atom() {
	    return this.getTypedRuleContext(BuiltIn_atomContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof ASPListener ) {
	        listener.enterAggregate_literal(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ASPListener ) {
	        listener.exitAggregate_literal(this);
		}
	}


}



class AssignmentContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ASPParser.RULE_assignment;
    }

	assignee() {
	    return this.getTypedRuleContext(AssigneeContext,0);
	};

	assigned_value() {
	    return this.getTypedRuleContext(Assigned_valueContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof ASPListener ) {
	        listener.enterAssignment(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ASPListener ) {
	        listener.exitAssignment(this);
		}
	}


}



class AssigneeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ASPParser.RULE_assignee;
    }

	term() {
	    return this.getTypedRuleContext(TermContext,0);
	};

	aggregate_atom() {
	    return this.getTypedRuleContext(Aggregate_atomContext,0);
	};

	literal() {
	    return this.getTypedRuleContext(LiteralContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof ASPListener ) {
	        listener.enterAssignee(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ASPListener ) {
	        listener.exitAssignee(this);
		}
	}


}



class Assigned_valueContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ASPParser.RULE_assigned_value;
    }

	term() {
	    return this.getTypedRuleContext(TermContext,0);
	};

	classical_atom() {
	    return this.getTypedRuleContext(Classical_atomContext,0);
	};

	aggregate_atom() {
	    return this.getTypedRuleContext(Aggregate_atomContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof ASPListener ) {
	        listener.enterAssigned_value(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ASPListener ) {
	        listener.exitAssigned_value(this);
		}
	}


}



class TermContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ASPParser.RULE_term;
    }

	simpleTerm() {
	    return this.getTypedRuleContext(SimpleTermContext,0);
	};

	functionTerm() {
	    return this.getTypedRuleContext(FunctionTermContext,0);
	};

	tuple() {
	    return this.getTypedRuleContext(TupleContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof ASPListener ) {
	        listener.enterTerm(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ASPListener ) {
	        listener.exitTerm(this);
		}
	}


}



class SimpleTermContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ASPParser.RULE_simpleTerm;
    }

	integer() {
	    return this.getTypedRuleContext(IntegerContext,0);
	};

	CONSTANT() {
	    return this.getToken(ASPParser.CONSTANT, 0);
	};

	STRING() {
	    return this.getToken(ASPParser.STRING, 0);
	};

	VARIABLE() {
	    return this.getToken(ASPParser.VARIABLE, 0);
	};

	UNDERSCORE() {
	    return this.getToken(ASPParser.UNDERSCORE, 0);
	};

	SUP() {
	    return this.getToken(ASPParser.SUP, 0);
	};

	INF() {
	    return this.getToken(ASPParser.INF, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ASPListener ) {
	        listener.enterSimpleTerm(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ASPListener ) {
	        listener.exitSimpleTerm(this);
		}
	}


}



class FunctionTermContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ASPParser.RULE_functionTerm;
    }

	CONSTANT() {
	    return this.getToken(ASPParser.CONSTANT, 0);
	};

	term = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(TermContext);
	    } else {
	        return this.getTypedRuleContext(TermContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof ASPListener ) {
	        listener.enterFunctionTerm(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ASPListener ) {
	        listener.exitFunctionTerm(this);
		}
	}


}



class TupleContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ASPParser.RULE_tuple;
    }

	term = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(TermContext);
	    } else {
	        return this.getTypedRuleContext(TermContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof ASPListener ) {
	        listener.enterTuple(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ASPListener ) {
	        listener.exitTuple(this);
		}
	}


}



class IntegerContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ASPParser.RULE_integer;
    }

	NUMBER() {
	    return this.getToken(ASPParser.NUMBER, 0);
	};

	INTERVAL() {
	    return this.getToken(ASPParser.INTERVAL, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ASPListener ) {
	        listener.enterInteger(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ASPListener ) {
	        listener.exitInteger(this);
		}
	}


}



class WeightContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ASPParser.RULE_weight;
    }

	integer() {
	    return this.getTypedRuleContext(IntegerContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof ASPListener ) {
	        listener.enterWeight(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ASPListener ) {
	        listener.exitWeight(this);
		}
	}


}



class PriorityContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ASPParser.RULE_priority;
    }

	integer() {
	    return this.getTypedRuleContext(IntegerContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof ASPListener ) {
	        listener.enterPriority(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ASPListener ) {
	        listener.exitPriority(this);
		}
	}


}



class LowerboundContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ASPParser.RULE_lowerbound;
    }

	integer() {
	    return this.getTypedRuleContext(IntegerContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof ASPListener ) {
	        listener.enterLowerbound(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ASPListener ) {
	        listener.exitLowerbound(this);
		}
	}


}



class UpperboundContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ASPParser.RULE_upperbound;
    }

	integer() {
	    return this.getTypedRuleContext(IntegerContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof ASPListener ) {
	        listener.enterUpperbound(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ASPListener ) {
	        listener.exitUpperbound(this);
		}
	}


}




ASPParser.ProgramContext = ProgramContext; 
ASPParser.StatementContext = StatementContext; 
ASPParser.ConstantContext = ConstantContext; 
ASPParser.FactContext = FactContext; 
ASPParser.Choice_ruleContext = Choice_ruleContext; 
ASPParser.ChoiceContext = ChoiceContext; 
ASPParser.Choice_bodyContext = Choice_bodyContext; 
ASPParser.Defined_atomContext = Defined_atomContext; 
ASPParser.Used_atomContext = Used_atomContext; 
ASPParser.Definite_ruleContext = Definite_ruleContext; 
ASPParser.ConstraintContext = ConstraintContext; 
ASPParser.HeadContext = HeadContext; 
ASPParser.BodyContext = BodyContext; 
ASPParser.Rule_atomsContext = Rule_atomsContext; 
ASPParser.OptimizationContext = OptimizationContext; 
ASPParser.OptimizationBodyContext = OptimizationBodyContext; 
ASPParser.Weak_constraintContext = Weak_constraintContext; 
ASPParser.ShowContext = ShowContext; 
ASPParser.Show_atomsContext = Show_atomsContext; 
ASPParser.Show_termsContext = Show_termsContext; 
ASPParser.Show_nothingContext = Show_nothingContext; 
ASPParser.Block_commentContext = Block_commentContext; 
ASPParser.Unclosed_commentContext = Unclosed_commentContext; 
ASPParser.Line_commentContext = Line_commentContext; 
ASPParser.LiteralContext = LiteralContext; 
ASPParser.Classical_atomContext = Classical_atomContext; 
ASPParser.AtomContext = AtomContext; 
ASPParser.BuiltIn_atomContext = BuiltIn_atomContext; 
ASPParser.Aggregate_atomContext = Aggregate_atomContext; 
ASPParser.Aggregate_elementContext = Aggregate_elementContext; 
ASPParser.Aggregate_literalContext = Aggregate_literalContext; 
ASPParser.AssignmentContext = AssignmentContext; 
ASPParser.AssigneeContext = AssigneeContext; 
ASPParser.Assigned_valueContext = Assigned_valueContext; 
ASPParser.TermContext = TermContext; 
ASPParser.SimpleTermContext = SimpleTermContext; 
ASPParser.FunctionTermContext = FunctionTermContext; 
ASPParser.TupleContext = TupleContext; 
ASPParser.IntegerContext = IntegerContext; 
ASPParser.WeightContext = WeightContext; 
ASPParser.PriorityContext = PriorityContext; 
ASPParser.LowerboundContext = LowerboundContext; 
ASPParser.UpperboundContext = UpperboundContext; 
