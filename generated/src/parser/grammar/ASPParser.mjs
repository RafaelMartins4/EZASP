// Generated from src/parser/grammar/ASP.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import ASPListener from './ASPListener.mjs';
const serializedATN = [4,1,44,746,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,26,7,26,2,27,
7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,2,32,7,32,2,33,7,33,2,34,7,
34,2,35,7,35,2,36,7,36,2,37,7,37,2,38,7,38,2,39,7,39,2,40,7,40,2,41,7,41,
2,42,7,42,2,43,7,43,2,44,7,44,2,45,7,45,2,46,7,46,2,47,7,47,2,48,7,48,2,
49,7,49,2,50,7,50,2,51,7,51,2,52,7,52,1,0,1,0,1,0,1,0,5,0,111,8,0,10,0,12,
0,114,9,0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,3,1,126,8,1,1,2,1,2,1,
2,1,2,1,2,1,2,1,3,1,3,3,3,136,8,3,1,3,1,3,1,4,1,4,1,4,1,4,1,4,1,5,1,5,3,
5,147,8,5,1,5,1,5,1,5,1,5,5,5,153,8,5,10,5,12,5,156,9,5,3,5,158,8,5,1,5,
1,5,1,5,3,5,163,8,5,1,6,1,6,1,6,1,7,1,7,1,7,1,8,1,8,1,8,1,8,1,8,5,8,176,
8,8,10,8,12,8,179,9,8,3,8,181,8,8,3,8,183,8,8,1,9,1,9,3,9,187,8,9,1,9,3,
9,190,8,9,1,10,1,10,3,10,194,8,10,1,10,3,10,197,8,10,1,11,1,11,1,11,1,11,
1,11,1,12,1,12,1,12,1,12,1,13,1,13,1,13,5,13,211,8,13,10,13,12,13,214,9,
13,1,13,3,13,217,8,13,1,14,1,14,1,14,5,14,222,8,14,10,14,12,14,225,9,14,
3,14,227,8,14,1,15,1,15,3,15,231,8,15,1,15,3,15,234,8,15,1,16,1,16,3,16,
238,8,16,1,16,1,16,3,16,242,8,16,1,16,1,16,3,16,246,8,16,1,16,3,16,249,8,
16,1,17,1,17,1,17,1,17,1,17,5,17,256,8,17,10,17,12,17,259,9,17,3,17,261,
8,17,1,17,1,17,1,17,1,17,1,17,1,17,1,17,5,17,270,8,17,10,17,12,17,273,9,
17,3,17,275,8,17,1,17,1,17,3,17,279,8,17,1,18,1,18,1,18,1,18,1,18,1,18,1,
18,1,18,1,18,1,18,5,18,291,8,18,10,18,12,18,294,9,18,1,18,1,18,1,18,5,18,
299,8,18,10,18,12,18,302,9,18,3,18,304,8,18,1,18,1,18,1,19,1,19,1,19,1,19,
1,19,1,19,1,19,1,19,1,19,3,19,317,8,19,1,20,1,20,1,20,1,20,1,20,1,21,1,21,
1,21,1,21,3,21,328,8,21,1,22,1,22,1,23,1,23,1,24,1,24,1,25,1,25,1,26,3,26,
339,8,26,1,26,1,26,1,27,3,27,344,8,27,1,27,1,27,1,28,1,28,1,28,1,28,1,28,
5,28,353,8,28,10,28,12,28,356,9,28,3,28,358,8,28,1,28,1,28,1,28,1,28,5,28,
364,8,28,10,28,12,28,367,9,28,3,28,369,8,28,5,28,371,8,28,10,28,12,28,374,
9,28,1,28,3,28,377,8,28,1,29,1,29,1,29,1,29,1,30,1,30,1,30,1,30,1,30,5,30,
388,8,30,10,30,12,30,391,9,30,3,30,393,8,30,1,30,1,30,1,30,1,30,1,30,1,30,
1,30,1,30,5,30,403,8,30,10,30,12,30,406,9,30,3,30,408,8,30,1,30,1,30,1,30,
1,30,1,30,1,30,1,30,1,30,5,30,418,8,30,10,30,12,30,421,9,30,3,30,423,8,30,
1,30,1,30,1,30,1,30,1,30,1,30,1,30,5,30,432,8,30,10,30,12,30,435,9,30,3,
30,437,8,30,1,30,3,30,440,8,30,1,31,1,31,1,31,5,31,445,8,31,10,31,12,31,
448,9,31,1,31,1,31,1,31,1,32,1,32,1,32,1,32,1,32,5,32,458,8,32,10,32,12,
32,461,9,32,3,32,463,8,32,1,32,1,32,1,32,1,32,1,32,1,32,1,32,1,32,5,32,473,
8,32,10,32,12,32,476,9,32,3,32,478,8,32,1,32,1,32,1,32,1,32,1,32,1,32,1,
32,1,32,5,32,488,8,32,10,32,12,32,491,9,32,3,32,493,8,32,1,32,1,32,1,32,
1,32,1,32,1,32,1,32,5,32,502,8,32,10,32,12,32,505,9,32,3,32,507,8,32,1,32,
3,32,510,8,32,1,33,1,33,1,33,5,33,515,8,33,10,33,12,33,518,9,33,3,33,520,
8,33,1,33,1,33,1,33,1,33,5,33,526,8,33,10,33,12,33,529,9,33,3,33,531,8,33,
3,33,533,8,33,1,34,1,34,1,34,1,34,1,34,1,34,5,34,541,8,34,10,34,12,34,544,
9,34,1,34,1,34,1,34,5,34,549,8,34,10,34,12,34,552,9,34,3,34,554,8,34,1,34,
1,34,1,34,1,34,5,34,560,8,34,10,34,12,34,563,9,34,3,34,565,8,34,3,34,567,
8,34,1,35,1,35,3,35,571,8,35,1,35,3,35,574,8,35,1,36,1,36,1,36,1,36,1,36,
3,36,581,8,36,1,37,3,37,584,8,37,1,37,1,37,1,37,5,37,589,8,37,10,37,12,37,
592,9,37,1,38,1,38,1,38,5,38,597,8,38,10,38,12,38,600,9,38,1,39,1,39,1,39,
5,39,605,8,39,10,39,12,39,608,9,39,1,40,1,40,1,40,1,40,1,40,1,40,1,40,3,
40,617,8,40,1,41,1,41,1,41,1,41,1,41,1,41,1,41,3,41,626,8,41,1,42,1,42,1,
42,1,42,1,42,5,42,633,8,42,10,42,12,42,636,9,42,3,42,638,8,42,1,42,1,42,
1,42,1,42,5,42,644,8,42,10,42,12,42,647,9,42,3,42,649,8,42,5,42,651,8,42,
10,42,12,42,654,9,42,1,42,3,42,657,8,42,1,43,1,43,1,43,1,43,1,43,1,43,5,
43,665,8,43,10,43,12,43,668,9,43,1,43,1,43,1,44,1,44,1,45,1,45,1,45,5,45,
677,8,45,10,45,12,45,680,9,45,1,46,1,46,1,46,5,46,685,8,46,10,46,12,46,688,
9,46,1,47,1,47,1,47,5,47,693,8,47,10,47,12,47,696,9,47,1,48,1,48,1,48,1,
48,1,48,1,48,1,48,1,48,1,48,1,48,1,48,3,48,709,8,48,1,49,1,49,1,49,1,49,
1,49,5,49,716,8,49,10,49,12,49,719,9,49,3,49,721,8,49,1,49,1,49,1,50,1,50,
1,50,1,50,5,50,729,8,50,10,50,12,50,732,9,50,3,50,734,8,50,1,50,1,50,1,51,
1,51,3,51,740,8,51,1,52,1,52,1,52,1,52,1,52,0,0,53,0,2,4,6,8,10,12,14,16,
18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,56,58,60,62,64,
66,68,70,72,74,76,78,80,82,84,86,88,90,92,94,96,98,100,102,104,0,5,1,0,31,
33,2,0,4,4,7,7,1,0,35,38,1,0,39,42,2,0,24,25,29,29,820,0,112,1,0,0,0,2,125,
1,0,0,0,4,127,1,0,0,0,6,135,1,0,0,0,8,139,1,0,0,0,10,146,1,0,0,0,12,164,
1,0,0,0,14,167,1,0,0,0,16,170,1,0,0,0,18,189,1,0,0,0,20,196,1,0,0,0,22,198,
1,0,0,0,24,203,1,0,0,0,26,216,1,0,0,0,28,226,1,0,0,0,30,233,1,0,0,0,32,248,
1,0,0,0,34,278,1,0,0,0,36,280,1,0,0,0,38,316,1,0,0,0,40,318,1,0,0,0,42,323,
1,0,0,0,44,329,1,0,0,0,46,331,1,0,0,0,48,333,1,0,0,0,50,335,1,0,0,0,52,338,
1,0,0,0,54,343,1,0,0,0,56,347,1,0,0,0,58,378,1,0,0,0,60,439,1,0,0,0,62,441,
1,0,0,0,64,509,1,0,0,0,66,519,1,0,0,0,68,553,1,0,0,0,70,573,1,0,0,0,72,580,
1,0,0,0,74,583,1,0,0,0,76,593,1,0,0,0,78,601,1,0,0,0,80,616,1,0,0,0,82,625,
1,0,0,0,84,627,1,0,0,0,86,658,1,0,0,0,88,671,1,0,0,0,90,673,1,0,0,0,92,681,
1,0,0,0,94,689,1,0,0,0,96,708,1,0,0,0,98,710,1,0,0,0,100,724,1,0,0,0,102,
739,1,0,0,0,104,741,1,0,0,0,106,111,3,2,1,0,107,111,3,50,25,0,108,111,3,
46,23,0,109,111,3,48,24,0,110,106,1,0,0,0,110,107,1,0,0,0,110,108,1,0,0,
0,110,109,1,0,0,0,111,114,1,0,0,0,112,110,1,0,0,0,112,113,1,0,0,0,113,115,
1,0,0,0,114,112,1,0,0,0,115,116,5,0,0,1,116,1,1,0,0,0,117,126,3,4,2,0,118,
126,3,6,3,0,119,126,3,8,4,0,120,126,3,22,11,0,121,126,3,24,12,0,122,126,
3,34,17,0,123,126,3,36,18,0,124,126,3,38,19,0,125,117,1,0,0,0,125,118,1,
0,0,0,125,119,1,0,0,0,125,120,1,0,0,0,125,121,1,0,0,0,125,122,1,0,0,0,125,
123,1,0,0,0,125,124,1,0,0,0,126,3,1,0,0,0,127,128,5,1,0,0,128,129,5,24,0,
0,129,130,5,31,0,0,130,131,3,88,44,0,131,132,5,22,0,0,132,5,1,0,0,0,133,
136,3,26,13,0,134,136,3,10,5,0,135,133,1,0,0,0,135,134,1,0,0,0,136,137,1,
0,0,0,137,138,5,22,0,0,138,7,1,0,0,0,139,140,3,10,5,0,140,141,5,2,0,0,141,
142,3,28,14,0,142,143,5,22,0,0,143,9,1,0,0,0,144,147,3,72,36,0,145,147,3,
12,6,0,146,144,1,0,0,0,146,145,1,0,0,0,146,147,1,0,0,0,147,148,1,0,0,0,148,
157,5,3,0,0,149,154,3,16,8,0,150,151,5,4,0,0,151,153,3,16,8,0,152,150,1,
0,0,0,153,156,1,0,0,0,154,152,1,0,0,0,154,155,1,0,0,0,155,158,1,0,0,0,156,
154,1,0,0,0,157,149,1,0,0,0,157,158,1,0,0,0,158,159,1,0,0,0,159,162,5,5,
0,0,160,163,3,14,7,0,161,163,3,72,36,0,162,160,1,0,0,0,162,161,1,0,0,0,162,
163,1,0,0,0,163,11,1,0,0,0,164,165,3,72,36,0,165,166,7,0,0,0,166,13,1,0,
0,0,167,168,7,0,0,0,168,169,3,72,36,0,169,15,1,0,0,0,170,182,3,18,9,0,171,
180,5,6,0,0,172,177,3,20,10,0,173,174,5,7,0,0,174,176,3,20,10,0,175,173,
1,0,0,0,176,179,1,0,0,0,177,175,1,0,0,0,177,178,1,0,0,0,178,181,1,0,0,0,
179,177,1,0,0,0,180,172,1,0,0,0,180,181,1,0,0,0,181,183,1,0,0,0,182,171,
1,0,0,0,182,183,1,0,0,0,183,17,1,0,0,0,184,190,3,52,26,0,185,187,5,18,0,
0,186,185,1,0,0,0,186,187,1,0,0,0,187,188,1,0,0,0,188,190,3,58,29,0,189,
184,1,0,0,0,189,186,1,0,0,0,190,19,1,0,0,0,191,197,3,52,26,0,192,194,5,18,
0,0,193,192,1,0,0,0,193,194,1,0,0,0,194,195,1,0,0,0,195,197,3,58,29,0,196,
191,1,0,0,0,196,193,1,0,0,0,197,21,1,0,0,0,198,199,3,26,13,0,199,200,5,2,
0,0,200,201,3,28,14,0,201,202,5,22,0,0,202,23,1,0,0,0,203,204,5,2,0,0,204,
205,3,28,14,0,205,206,5,22,0,0,206,25,1,0,0,0,207,212,3,30,15,0,208,209,
7,1,0,0,209,211,3,30,15,0,210,208,1,0,0,0,211,214,1,0,0,0,212,210,1,0,0,
0,212,213,1,0,0,0,213,217,1,0,0,0,214,212,1,0,0,0,215,217,3,60,30,0,216,
207,1,0,0,0,216,215,1,0,0,0,217,27,1,0,0,0,218,223,3,32,16,0,219,220,7,1,
0,0,220,222,3,32,16,0,221,219,1,0,0,0,222,225,1,0,0,0,223,221,1,0,0,0,223,
224,1,0,0,0,224,227,1,0,0,0,225,223,1,0,0,0,226,218,1,0,0,0,226,227,1,0,
0,0,227,29,1,0,0,0,228,234,3,52,26,0,229,231,5,18,0,0,230,229,1,0,0,0,230,
231,1,0,0,0,231,232,1,0,0,0,232,234,3,58,29,0,233,228,1,0,0,0,233,230,1,
0,0,0,234,31,1,0,0,0,235,249,3,52,26,0,236,238,5,18,0,0,237,236,1,0,0,0,
237,238,1,0,0,0,238,239,1,0,0,0,239,249,3,58,29,0,240,242,5,18,0,0,241,240,
1,0,0,0,241,242,1,0,0,0,242,243,1,0,0,0,243,249,3,64,32,0,244,246,5,18,0,
0,245,244,1,0,0,0,245,246,1,0,0,0,246,247,1,0,0,0,247,249,3,10,5,0,248,235,
1,0,0,0,248,237,1,0,0,0,248,241,1,0,0,0,248,245,1,0,0,0,249,33,1,0,0,0,250,
251,5,8,0,0,251,260,5,3,0,0,252,257,3,68,34,0,253,254,5,4,0,0,254,256,3,
68,34,0,255,253,1,0,0,0,256,259,1,0,0,0,257,255,1,0,0,0,257,258,1,0,0,0,
258,261,1,0,0,0,259,257,1,0,0,0,260,252,1,0,0,0,260,261,1,0,0,0,261,262,
1,0,0,0,262,263,5,5,0,0,263,279,5,22,0,0,264,265,5,9,0,0,265,274,5,3,0,0,
266,271,3,68,34,0,267,268,5,4,0,0,268,270,3,68,34,0,269,267,1,0,0,0,270,
273,1,0,0,0,271,269,1,0,0,0,271,272,1,0,0,0,272,275,1,0,0,0,273,271,1,0,
0,0,274,266,1,0,0,0,274,275,1,0,0,0,275,276,1,0,0,0,276,277,5,5,0,0,277,
279,5,22,0,0,278,250,1,0,0,0,278,264,1,0,0,0,279,35,1,0,0,0,280,281,5,10,
0,0,281,282,3,28,14,0,282,283,5,22,0,0,283,303,5,11,0,0,284,285,3,72,36,
0,285,286,5,12,0,0,286,287,3,72,36,0,287,292,1,0,0,0,288,289,5,7,0,0,289,
291,3,72,36,0,290,288,1,0,0,0,291,294,1,0,0,0,292,290,1,0,0,0,292,293,1,
0,0,0,293,304,1,0,0,0,294,292,1,0,0,0,295,300,3,72,36,0,296,297,5,7,0,0,
297,299,3,72,36,0,298,296,1,0,0,0,299,302,1,0,0,0,300,298,1,0,0,0,300,301,
1,0,0,0,301,304,1,0,0,0,302,300,1,0,0,0,303,284,1,0,0,0,303,295,1,0,0,0,
304,305,1,0,0,0,305,306,5,23,0,0,306,37,1,0,0,0,307,308,3,40,20,0,308,309,
5,22,0,0,309,317,1,0,0,0,310,311,3,42,21,0,311,312,5,22,0,0,312,317,1,0,
0,0,313,314,3,44,22,0,314,315,5,22,0,0,315,317,1,0,0,0,316,307,1,0,0,0,316,
310,1,0,0,0,316,313,1,0,0,0,317,39,1,0,0,0,318,319,5,13,0,0,319,320,5,24,
0,0,320,321,5,40,0,0,321,322,5,29,0,0,322,41,1,0,0,0,323,324,5,13,0,0,324,
327,3,72,36,0,325,326,5,6,0,0,326,328,3,28,14,0,327,325,1,0,0,0,327,328,
1,0,0,0,328,43,1,0,0,0,329,330,5,13,0,0,330,45,1,0,0,0,331,332,5,19,0,0,
332,47,1,0,0,0,333,334,5,20,0,0,334,49,1,0,0,0,335,336,5,21,0,0,336,51,1,
0,0,0,337,339,5,18,0,0,338,337,1,0,0,0,338,339,1,0,0,0,339,340,1,0,0,0,340,
341,3,54,27,0,341,53,1,0,0,0,342,344,5,35,0,0,343,342,1,0,0,0,343,344,1,
0,0,0,344,345,1,0,0,0,345,346,3,56,28,0,346,55,1,0,0,0,347,376,5,24,0,0,
348,357,5,14,0,0,349,354,3,72,36,0,350,351,5,7,0,0,351,353,3,72,36,0,352,
350,1,0,0,0,353,356,1,0,0,0,354,352,1,0,0,0,354,355,1,0,0,0,355,358,1,0,
0,0,356,354,1,0,0,0,357,349,1,0,0,0,357,358,1,0,0,0,358,372,1,0,0,0,359,
368,5,4,0,0,360,365,3,72,36,0,361,362,5,7,0,0,362,364,3,72,36,0,363,361,
1,0,0,0,364,367,1,0,0,0,365,363,1,0,0,0,365,366,1,0,0,0,366,369,1,0,0,0,
367,365,1,0,0,0,368,360,1,0,0,0,368,369,1,0,0,0,369,371,1,0,0,0,370,359,
1,0,0,0,371,374,1,0,0,0,372,370,1,0,0,0,372,373,1,0,0,0,373,375,1,0,0,0,
374,372,1,0,0,0,375,377,5,15,0,0,376,348,1,0,0,0,376,377,1,0,0,0,377,57,
1,0,0,0,378,379,3,72,36,0,379,380,7,0,0,0,380,381,3,72,36,0,381,59,1,0,0,
0,382,383,5,34,0,0,383,392,5,3,0,0,384,389,3,62,31,0,385,386,5,4,0,0,386,
388,3,62,31,0,387,385,1,0,0,0,388,391,1,0,0,0,389,387,1,0,0,0,389,390,1,
0,0,0,390,393,1,0,0,0,391,389,1,0,0,0,392,384,1,0,0,0,392,393,1,0,0,0,393,
394,1,0,0,0,394,395,5,5,0,0,395,396,7,0,0,0,396,440,3,72,36,0,397,398,5,
34,0,0,398,407,5,3,0,0,399,404,3,62,31,0,400,401,5,4,0,0,401,403,3,62,31,
0,402,400,1,0,0,0,403,406,1,0,0,0,404,402,1,0,0,0,404,405,1,0,0,0,405,408,
1,0,0,0,406,404,1,0,0,0,407,399,1,0,0,0,407,408,1,0,0,0,408,409,1,0,0,0,
409,440,5,5,0,0,410,411,3,72,36,0,411,412,7,0,0,0,412,413,5,34,0,0,413,422,
5,3,0,0,414,419,3,62,31,0,415,416,5,4,0,0,416,418,3,62,31,0,417,415,1,0,
0,0,418,421,1,0,0,0,419,417,1,0,0,0,419,420,1,0,0,0,420,423,1,0,0,0,421,
419,1,0,0,0,422,414,1,0,0,0,422,423,1,0,0,0,423,424,1,0,0,0,424,425,5,5,
0,0,425,440,1,0,0,0,426,427,5,34,0,0,427,436,5,3,0,0,428,433,3,62,31,0,429,
430,5,4,0,0,430,432,3,62,31,0,431,429,1,0,0,0,432,435,1,0,0,0,433,431,1,
0,0,0,433,434,1,0,0,0,434,437,1,0,0,0,435,433,1,0,0,0,436,428,1,0,0,0,436,
437,1,0,0,0,437,438,1,0,0,0,438,440,5,5,0,0,439,382,1,0,0,0,439,397,1,0,
0,0,439,410,1,0,0,0,439,426,1,0,0,0,440,61,1,0,0,0,441,446,3,72,36,0,442,
443,5,7,0,0,443,445,3,72,36,0,444,442,1,0,0,0,445,448,1,0,0,0,446,444,1,
0,0,0,446,447,1,0,0,0,447,449,1,0,0,0,448,446,1,0,0,0,449,450,5,6,0,0,450,
451,3,70,35,0,451,63,1,0,0,0,452,453,5,34,0,0,453,462,5,3,0,0,454,459,3,
66,33,0,455,456,5,4,0,0,456,458,3,66,33,0,457,455,1,0,0,0,458,461,1,0,0,
0,459,457,1,0,0,0,459,460,1,0,0,0,460,463,1,0,0,0,461,459,1,0,0,0,462,454,
1,0,0,0,462,463,1,0,0,0,463,464,1,0,0,0,464,465,5,5,0,0,465,466,7,0,0,0,
466,510,3,72,36,0,467,468,5,34,0,0,468,477,5,3,0,0,469,474,3,66,33,0,470,
471,5,4,0,0,471,473,3,66,33,0,472,470,1,0,0,0,473,476,1,0,0,0,474,472,1,
0,0,0,474,475,1,0,0,0,475,478,1,0,0,0,476,474,1,0,0,0,477,469,1,0,0,0,477,
478,1,0,0,0,478,479,1,0,0,0,479,510,5,5,0,0,480,481,3,72,36,0,481,482,7,
0,0,0,482,483,5,34,0,0,483,492,5,3,0,0,484,489,3,66,33,0,485,486,5,4,0,0,
486,488,3,66,33,0,487,485,1,0,0,0,488,491,1,0,0,0,489,487,1,0,0,0,489,490,
1,0,0,0,490,493,1,0,0,0,491,489,1,0,0,0,492,484,1,0,0,0,492,493,1,0,0,0,
493,494,1,0,0,0,494,495,5,5,0,0,495,510,1,0,0,0,496,497,5,34,0,0,497,506,
5,3,0,0,498,503,3,66,33,0,499,500,5,4,0,0,500,502,3,66,33,0,501,499,1,0,
0,0,502,505,1,0,0,0,503,501,1,0,0,0,503,504,1,0,0,0,504,507,1,0,0,0,505,
503,1,0,0,0,506,498,1,0,0,0,506,507,1,0,0,0,507,508,1,0,0,0,508,510,5,5,
0,0,509,452,1,0,0,0,509,467,1,0,0,0,509,480,1,0,0,0,509,496,1,0,0,0,510,
65,1,0,0,0,511,516,3,72,36,0,512,513,5,7,0,0,513,515,3,72,36,0,514,512,1,
0,0,0,515,518,1,0,0,0,516,514,1,0,0,0,516,517,1,0,0,0,517,520,1,0,0,0,518,
516,1,0,0,0,519,511,1,0,0,0,519,520,1,0,0,0,520,532,1,0,0,0,521,530,5,6,
0,0,522,527,3,70,35,0,523,524,5,7,0,0,524,526,3,70,35,0,525,523,1,0,0,0,
526,529,1,0,0,0,527,525,1,0,0,0,527,528,1,0,0,0,528,531,1,0,0,0,529,527,
1,0,0,0,530,522,1,0,0,0,530,531,1,0,0,0,531,533,1,0,0,0,532,521,1,0,0,0,
532,533,1,0,0,0,533,67,1,0,0,0,534,535,3,72,36,0,535,536,5,12,0,0,536,537,
3,72,36,0,537,542,1,0,0,0,538,539,5,7,0,0,539,541,3,72,36,0,540,538,1,0,
0,0,541,544,1,0,0,0,542,540,1,0,0,0,542,543,1,0,0,0,543,554,1,0,0,0,544,
542,1,0,0,0,545,550,3,72,36,0,546,547,5,7,0,0,547,549,3,72,36,0,548,546,
1,0,0,0,549,552,1,0,0,0,550,548,1,0,0,0,550,551,1,0,0,0,551,554,1,0,0,0,
552,550,1,0,0,0,553,534,1,0,0,0,553,545,1,0,0,0,554,566,1,0,0,0,555,564,
5,6,0,0,556,561,3,70,35,0,557,558,5,7,0,0,558,560,3,70,35,0,559,557,1,0,
0,0,560,563,1,0,0,0,561,559,1,0,0,0,561,562,1,0,0,0,562,565,1,0,0,0,563,
561,1,0,0,0,564,556,1,0,0,0,564,565,1,0,0,0,565,567,1,0,0,0,566,555,1,0,
0,0,566,567,1,0,0,0,567,69,1,0,0,0,568,574,3,52,26,0,569,571,5,18,0,0,570,
569,1,0,0,0,570,571,1,0,0,0,571,572,1,0,0,0,572,574,3,58,29,0,573,568,1,
0,0,0,573,570,1,0,0,0,574,71,1,0,0,0,575,576,5,16,0,0,576,577,3,74,37,0,
577,578,5,16,0,0,578,581,1,0,0,0,579,581,3,74,37,0,580,575,1,0,0,0,580,579,
1,0,0,0,581,73,1,0,0,0,582,584,5,35,0,0,583,582,1,0,0,0,583,584,1,0,0,0,
584,585,1,0,0,0,585,590,3,76,38,0,586,587,7,2,0,0,587,589,3,76,38,0,588,
586,1,0,0,0,589,592,1,0,0,0,590,588,1,0,0,0,590,591,1,0,0,0,591,75,1,0,0,
0,592,590,1,0,0,0,593,598,3,78,39,0,594,595,7,3,0,0,595,597,3,78,39,0,596,
594,1,0,0,0,597,600,1,0,0,0,598,596,1,0,0,0,598,599,1,0,0,0,599,77,1,0,0,
0,600,598,1,0,0,0,601,606,3,80,40,0,602,603,5,43,0,0,603,605,3,80,40,0,604,
602,1,0,0,0,605,608,1,0,0,0,606,604,1,0,0,0,606,607,1,0,0,0,607,79,1,0,0,
0,608,606,1,0,0,0,609,617,3,82,41,0,610,617,3,84,42,0,611,617,3,86,43,0,
612,613,5,14,0,0,613,614,3,72,36,0,614,615,5,15,0,0,615,617,1,0,0,0,616,
609,1,0,0,0,616,610,1,0,0,0,616,611,1,0,0,0,616,612,1,0,0,0,617,81,1,0,0,
0,618,626,3,102,51,0,619,626,5,24,0,0,620,626,5,30,0,0,621,626,5,25,0,0,
622,626,5,26,0,0,623,626,5,27,0,0,624,626,5,28,0,0,625,618,1,0,0,0,625,619,
1,0,0,0,625,620,1,0,0,0,625,621,1,0,0,0,625,622,1,0,0,0,625,623,1,0,0,0,
625,624,1,0,0,0,626,83,1,0,0,0,627,656,5,24,0,0,628,637,5,14,0,0,629,634,
3,72,36,0,630,631,5,7,0,0,631,633,3,72,36,0,632,630,1,0,0,0,633,636,1,0,
0,0,634,632,1,0,0,0,634,635,1,0,0,0,635,638,1,0,0,0,636,634,1,0,0,0,637,
629,1,0,0,0,637,638,1,0,0,0,638,652,1,0,0,0,639,648,5,4,0,0,640,645,3,72,
36,0,641,642,5,7,0,0,642,644,3,72,36,0,643,641,1,0,0,0,644,647,1,0,0,0,645,
643,1,0,0,0,645,646,1,0,0,0,646,649,1,0,0,0,647,645,1,0,0,0,648,640,1,0,
0,0,648,649,1,0,0,0,649,651,1,0,0,0,650,639,1,0,0,0,651,654,1,0,0,0,652,
650,1,0,0,0,652,653,1,0,0,0,653,655,1,0,0,0,654,652,1,0,0,0,655,657,5,15,
0,0,656,628,1,0,0,0,656,657,1,0,0,0,657,85,1,0,0,0,658,659,5,14,0,0,659,
660,3,72,36,0,660,661,5,7,0,0,661,666,3,72,36,0,662,663,5,7,0,0,663,665,
3,72,36,0,664,662,1,0,0,0,665,668,1,0,0,0,666,664,1,0,0,0,666,667,1,0,0,
0,667,669,1,0,0,0,668,666,1,0,0,0,669,670,5,15,0,0,670,87,1,0,0,0,671,672,
3,90,45,0,672,89,1,0,0,0,673,678,3,92,46,0,674,675,7,2,0,0,675,677,3,92,
46,0,676,674,1,0,0,0,677,680,1,0,0,0,678,676,1,0,0,0,678,679,1,0,0,0,679,
91,1,0,0,0,680,678,1,0,0,0,681,686,3,94,47,0,682,683,7,3,0,0,683,685,3,94,
47,0,684,682,1,0,0,0,685,688,1,0,0,0,686,684,1,0,0,0,686,687,1,0,0,0,687,
93,1,0,0,0,688,686,1,0,0,0,689,694,3,96,48,0,690,691,5,43,0,0,691,693,3,
96,48,0,692,690,1,0,0,0,693,696,1,0,0,0,694,692,1,0,0,0,694,695,1,0,0,0,
695,95,1,0,0,0,696,694,1,0,0,0,697,709,3,102,51,0,698,709,5,24,0,0,699,709,
5,30,0,0,700,709,5,27,0,0,701,709,5,28,0,0,702,709,3,98,49,0,703,709,3,100,
50,0,704,705,5,14,0,0,705,706,3,88,44,0,706,707,5,15,0,0,707,709,1,0,0,0,
708,697,1,0,0,0,708,698,1,0,0,0,708,699,1,0,0,0,708,700,1,0,0,0,708,701,
1,0,0,0,708,702,1,0,0,0,708,703,1,0,0,0,708,704,1,0,0,0,709,97,1,0,0,0,710,
711,5,24,0,0,711,720,5,14,0,0,712,717,3,88,44,0,713,714,5,7,0,0,714,716,
3,88,44,0,715,713,1,0,0,0,716,719,1,0,0,0,717,715,1,0,0,0,717,718,1,0,0,
0,718,721,1,0,0,0,719,717,1,0,0,0,720,712,1,0,0,0,720,721,1,0,0,0,721,722,
1,0,0,0,722,723,5,15,0,0,723,99,1,0,0,0,724,733,5,14,0,0,725,730,3,88,44,
0,726,727,5,7,0,0,727,729,3,88,44,0,728,726,1,0,0,0,729,732,1,0,0,0,730,
728,1,0,0,0,730,731,1,0,0,0,731,734,1,0,0,0,732,730,1,0,0,0,733,725,1,0,
0,0,733,734,1,0,0,0,734,735,1,0,0,0,735,736,5,15,0,0,736,101,1,0,0,0,737,
740,3,104,52,0,738,740,5,29,0,0,739,737,1,0,0,0,739,738,1,0,0,0,740,103,
1,0,0,0,741,742,7,4,0,0,742,743,5,17,0,0,743,744,7,4,0,0,744,105,1,0,0,0,
98,110,112,125,135,146,154,157,162,177,180,182,186,189,193,196,212,216,223,
226,230,233,237,241,245,248,257,260,271,274,278,292,300,303,316,327,338,
343,354,357,365,368,372,376,389,392,404,407,419,422,433,436,439,446,459,
462,474,477,489,492,503,506,509,516,519,527,530,532,542,550,553,561,564,
566,570,573,580,583,590,598,606,616,625,634,637,645,648,652,656,666,678,
686,694,708,717,720,730,733,739];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class ASPParser extends antlr4.Parser {

    static grammarFileName = "ASP.g4";
    static literalNames = [ null, "'#const'", "':-'", "'{'", "';'", "'}'", 
                            "':'", "','", "'#minimize'", "'#maximize'", 
                            "':~'", "'['", "'@'", "'#show'", "'('", "')'", 
                            "'|'", "'..'", "'not'", null, null, null, "'.'", 
                            "']'", null, null, "'_'", "'#sup'", "'#inf'", 
                            null, null, "'='", "'=='", null, null, "'-'", 
                            "'+'", "'?'", "'^'", "'*'", "'/'", "'\\'", "'&'", 
                            "'**'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, "NOT", "BLOCK_COMMENT", "UNCLOSED_COMMENT", 
                             "LINE_COMMENT", "DOT", "EOWC", "CONSTANT", 
                             "VARIABLE", "UNDERSCORE", "SUP", "INF", "NUMBER", 
                             "STRING", "EQ", "EQEQ", "COMPARATOR", "AGGREGATE_FUNCTION", 
                             "CLASSICAL_NEGATION", "ADDITION", "OR", "EXCLUSIVE_OR", 
                             "MULTIPLICATION", "DIVISION", "MODULO", "AND", 
                             "EXPONENTIATION", "WS" ];
    static ruleNames = [ "program", "statement", "constant", "fact", "choice_rule", 
                         "choice", "comparatorTerm1", "comparatorTerm2", 
                         "choice_element", "choiceHead_atoms", "choiceBody_atoms", 
                         "definite_rule", "constraint", "head", "body", 
                         "head_atoms", "body_atoms", "optimization", "weak_constraint", 
                         "show", "show_atoms", "show_terms", "show_nothing", 
                         "block_comment", "unclosed_comment", "line_comment", 
                         "literal", "classical_atom", "atom", "builtIn_atom", 
                         "aggregate_atom_head", "aggregate_element_head", 
                         "aggregate_atom_body", "aggregate_element_body", 
                         "aggregate_element_optimization", "aggregate_literal", 
                         "term", "additiveTerm", "multiplicativeTerm", "powerTerm", 
                         "unaryTerm", "simpleTerm", "functionTerm", "tuple", 
                         "constant_term", "constant_additiveTerm", "constant_multiplicativeTerm", 
                         "constant_powerTerm", "constant_unaryTerm", "constant_functionTerm", 
                         "constant_tuple", "integer", "interval" ];

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
	        this.state = 112;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 2134730510) !== 0) || _la===34 || _la===35) {
	            this.state = 110;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case 1:
	            case 2:
	            case 3:
	            case 8:
	            case 9:
	            case 10:
	            case 13:
	            case 14:
	            case 16:
	            case 18:
	            case 24:
	            case 25:
	            case 26:
	            case 27:
	            case 28:
	            case 29:
	            case 30:
	            case 34:
	            case 35:
	                this.state = 106;
	                this.statement();
	                break;
	            case 21:
	                this.state = 107;
	                this.line_comment();
	                break;
	            case 19:
	                this.state = 108;
	                this.block_comment();
	                break;
	            case 20:
	                this.state = 109;
	                this.unclosed_comment();
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }
	            this.state = 114;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 115;
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
	        this.state = 125;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,2,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 117;
	            this.constant();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 118;
	            this.fact();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 119;
	            this.choice_rule();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 120;
	            this.definite_rule();
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 121;
	            this.constraint();
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 122;
	            this.optimization();
	            break;

	        case 7:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 123;
	            this.weak_constraint();
	            break;

	        case 8:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 124;
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
	        this.state = 127;
	        this.match(ASPParser.T__0);
	        this.state = 128;
	        this.match(ASPParser.CONSTANT);
	        this.state = 129;
	        this.match(ASPParser.EQ);
	        this.state = 130;
	        this.constant_term();
	        this.state = 131;
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
	        this.state = 135;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,3,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 133;
	            this.head();
	            break;

	        case 2:
	            this.state = 134;
	            this.choice();
	            break;

	        }
	        this.state = 137;
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
	        this.state = 139;
	        this.choice();
	        this.state = 140;
	        this.match(ASPParser.T__1);
	        this.state = 141;
	        this.body();
	        this.state = 142;
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
	        this.state = 146;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,4,this._ctx);
	        if(la_===1) {
	            this.state = 144;
	            this.term();

	        } else if(la_===2) {
	            this.state = 145;
	            this.comparatorTerm1();

	        }
	        this.state = 148;
	        this.match(ASPParser.T__2);
	        this.state = 157;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(((((_la - 14)) & ~0x1f) === 0 && ((1 << (_la - 14)) & 2227221) !== 0)) {
	            this.state = 149;
	            this.choice_element();
	            this.state = 154;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===4) {
	                this.state = 150;
	                this.match(ASPParser.T__3);
	                this.state = 151;
	                this.choice_element();
	                this.state = 156;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	        }

	        this.state = 159;
	        this.match(ASPParser.T__4);
	        this.state = 162;
	        this._errHandler.sync(this);
	        switch (this._input.LA(1)) {
	        case 31:
	        case 32:
	        case 33:
	        	this.state = 160;
	        	this.comparatorTerm2();
	        	break;
	        case 14:
	        case 16:
	        case 24:
	        case 25:
	        case 26:
	        case 27:
	        case 28:
	        case 29:
	        case 30:
	        case 35:
	        	this.state = 161;
	        	this.term();
	        	break;
	        case 2:
	        case 4:
	        case 7:
	        case 22:
	        	break;
	        default:
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



	comparatorTerm1() {
	    let localctx = new ComparatorTerm1Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, ASPParser.RULE_comparatorTerm1);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 164;
	        this.term();
	        this.state = 165;
	        _la = this._input.LA(1);
	        if(!(((((_la - 31)) & ~0x1f) === 0 && ((1 << (_la - 31)) & 7) !== 0))) {
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



	comparatorTerm2() {
	    let localctx = new ComparatorTerm2Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, ASPParser.RULE_comparatorTerm2);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 167;
	        _la = this._input.LA(1);
	        if(!(((((_la - 31)) & ~0x1f) === 0 && ((1 << (_la - 31)) & 7) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	        this.state = 168;
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



	choice_element() {
	    let localctx = new Choice_elementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, ASPParser.RULE_choice_element);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 170;
	        this.choiceHead_atoms();
	        this.state = 182;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===6) {
	            this.state = 171;
	            this.match(ASPParser.T__5);
	            this.state = 180;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(((((_la - 14)) & ~0x1f) === 0 && ((1 << (_la - 14)) & 2227221) !== 0)) {
	                this.state = 172;
	                this.choiceBody_atoms();
	                this.state = 177;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                while(_la===7) {
	                    this.state = 173;
	                    this.match(ASPParser.T__6);
	                    this.state = 174;
	                    this.choiceBody_atoms();
	                    this.state = 179;
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



	choiceHead_atoms() {
	    let localctx = new ChoiceHead_atomsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, ASPParser.RULE_choiceHead_atoms);
	    var _la = 0;
	    try {
	        this.state = 189;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,12,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 184;
	            this.literal();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 186;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===18) {
	                this.state = 185;
	                this.match(ASPParser.NOT);
	            }

	            this.state = 188;
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



	choiceBody_atoms() {
	    let localctx = new ChoiceBody_atomsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, ASPParser.RULE_choiceBody_atoms);
	    var _la = 0;
	    try {
	        this.state = 196;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,14,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 191;
	            this.literal();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 193;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===18) {
	                this.state = 192;
	                this.match(ASPParser.NOT);
	            }

	            this.state = 195;
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



	definite_rule() {
	    let localctx = new Definite_ruleContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, ASPParser.RULE_definite_rule);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 198;
	        this.head();
	        this.state = 199;
	        this.match(ASPParser.T__1);
	        this.state = 200;
	        this.body();
	        this.state = 201;
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
	    this.enterRule(localctx, 24, ASPParser.RULE_constraint);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 203;
	        this.match(ASPParser.T__1);
	        this.state = 204;
	        this.body();
	        this.state = 205;
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
	    this.enterRule(localctx, 26, ASPParser.RULE_head);
	    var _la = 0;
	    try {
	        this.state = 216;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,16,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 207;
	            this.head_atoms();
	            this.state = 212;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===4 || _la===7) {
	                this.state = 208;
	                _la = this._input.LA(1);
	                if(!(_la===4 || _la===7)) {
	                this._errHandler.recoverInline(this);
	                }
	                else {
	                	this._errHandler.reportMatch(this);
	                    this.consume();
	                }
	                this.state = 209;
	                this.head_atoms();
	                this.state = 214;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 215;
	            this.aggregate_atom_head();
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



	body() {
	    let localctx = new BodyContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 28, ASPParser.RULE_body);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 226;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) === 0 && ((1 << _la) & 2131050504) !== 0) || _la===34 || _la===35) {
	            this.state = 218;
	            this.body_atoms();
	            this.state = 223;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===4 || _la===7) {
	                this.state = 219;
	                _la = this._input.LA(1);
	                if(!(_la===4 || _la===7)) {
	                this._errHandler.recoverInline(this);
	                }
	                else {
	                	this._errHandler.reportMatch(this);
	                    this.consume();
	                }
	                this.state = 220;
	                this.body_atoms();
	                this.state = 225;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
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



	head_atoms() {
	    let localctx = new Head_atomsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 30, ASPParser.RULE_head_atoms);
	    var _la = 0;
	    try {
	        this.state = 233;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,20,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 228;
	            this.literal();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 230;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===18) {
	                this.state = 229;
	                this.match(ASPParser.NOT);
	            }

	            this.state = 232;
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



	body_atoms() {
	    let localctx = new Body_atomsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 32, ASPParser.RULE_body_atoms);
	    var _la = 0;
	    try {
	        this.state = 248;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,24,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 235;
	            this.literal();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 237;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===18) {
	                this.state = 236;
	                this.match(ASPParser.NOT);
	            }

	            this.state = 239;
	            this.builtIn_atom();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 241;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===18) {
	                this.state = 240;
	                this.match(ASPParser.NOT);
	            }

	            this.state = 243;
	            this.aggregate_atom_body();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 245;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===18) {
	                this.state = 244;
	                this.match(ASPParser.NOT);
	            }

	            this.state = 247;
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
	    this.enterRule(localctx, 34, ASPParser.RULE_optimization);
	    var _la = 0;
	    try {
	        this.state = 278;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 8:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 250;
	            this.match(ASPParser.T__7);
	            this.state = 251;
	            this.match(ASPParser.T__2);
	            this.state = 260;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(((((_la - 14)) & ~0x1f) === 0 && ((1 << (_la - 14)) & 2227205) !== 0)) {
	                this.state = 252;
	                this.aggregate_element_optimization();
	                this.state = 257;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                while(_la===4) {
	                    this.state = 253;
	                    this.match(ASPParser.T__3);
	                    this.state = 254;
	                    this.aggregate_element_optimization();
	                    this.state = 259;
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                }
	            }

	            this.state = 262;
	            this.match(ASPParser.T__4);
	            this.state = 263;
	            this.match(ASPParser.DOT);
	            break;
	        case 9:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 264;
	            this.match(ASPParser.T__8);
	            this.state = 265;
	            this.match(ASPParser.T__2);
	            this.state = 274;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(((((_la - 14)) & ~0x1f) === 0 && ((1 << (_la - 14)) & 2227205) !== 0)) {
	                this.state = 266;
	                this.aggregate_element_optimization();
	                this.state = 271;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                while(_la===4) {
	                    this.state = 267;
	                    this.match(ASPParser.T__3);
	                    this.state = 268;
	                    this.aggregate_element_optimization();
	                    this.state = 273;
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                }
	            }

	            this.state = 276;
	            this.match(ASPParser.T__4);
	            this.state = 277;
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



	weak_constraint() {
	    let localctx = new Weak_constraintContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 36, ASPParser.RULE_weak_constraint);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 280;
	        this.match(ASPParser.T__9);
	        this.state = 281;
	        this.body();
	        this.state = 282;
	        this.match(ASPParser.DOT);
	        this.state = 283;
	        this.match(ASPParser.T__10);
	        this.state = 303;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,32,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 284;
	            this.term();
	            this.state = 285;
	            this.match(ASPParser.T__11);
	            this.state = 286;
	            this.term();
	            this.state = 292;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===7) {
	                this.state = 288;
	                this.match(ASPParser.T__6);
	                this.state = 289;
	                this.term();
	                this.state = 294;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            break;

	        case 2:
	            this.state = 295;
	            this.term();
	            this.state = 300;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===7) {
	                this.state = 296;
	                this.match(ASPParser.T__6);
	                this.state = 297;
	                this.term();
	                this.state = 302;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            break;

	        }
	        this.state = 305;
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
	    this.enterRule(localctx, 38, ASPParser.RULE_show);
	    try {
	        this.state = 316;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,33,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 307;
	            this.show_atoms();
	            this.state = 308;
	            this.match(ASPParser.DOT);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 310;
	            this.show_terms();
	            this.state = 311;
	            this.match(ASPParser.DOT);
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 313;
	            this.show_nothing();
	            this.state = 314;
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
	    this.enterRule(localctx, 40, ASPParser.RULE_show_atoms);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 318;
	        this.match(ASPParser.T__12);
	        this.state = 319;
	        this.match(ASPParser.CONSTANT);
	        this.state = 320;
	        this.match(ASPParser.DIVISION);
	        this.state = 321;
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
	    this.enterRule(localctx, 42, ASPParser.RULE_show_terms);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 323;
	        this.match(ASPParser.T__12);
	        this.state = 324;
	        this.term();
	        this.state = 327;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===6) {
	            this.state = 325;
	            this.match(ASPParser.T__5);
	            this.state = 326;
	            this.body();
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
	    this.enterRule(localctx, 44, ASPParser.RULE_show_nothing);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 329;
	        this.match(ASPParser.T__12);
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
	    this.enterRule(localctx, 46, ASPParser.RULE_block_comment);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 331;
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
	    this.enterRule(localctx, 48, ASPParser.RULE_unclosed_comment);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 333;
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
	    this.enterRule(localctx, 50, ASPParser.RULE_line_comment);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 335;
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
	    this.enterRule(localctx, 52, ASPParser.RULE_literal);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 338;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===18) {
	            this.state = 337;
	            this.match(ASPParser.NOT);
	        }

	        this.state = 340;
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
	    this.enterRule(localctx, 54, ASPParser.RULE_classical_atom);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 343;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===35) {
	            this.state = 342;
	            this.match(ASPParser.CLASSICAL_NEGATION);
	        }

	        this.state = 345;
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
	    this.enterRule(localctx, 56, ASPParser.RULE_atom);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 347;
	        this.match(ASPParser.CONSTANT);
	        this.state = 376;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===14) {
	            this.state = 348;
	            this.match(ASPParser.T__13);
	            this.state = 357;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(((((_la - 14)) & ~0x1f) === 0 && ((1 << (_la - 14)) & 2227205) !== 0)) {
	                this.state = 349;
	                this.term();
	                this.state = 354;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                while(_la===7) {
	                    this.state = 350;
	                    this.match(ASPParser.T__6);
	                    this.state = 351;
	                    this.term();
	                    this.state = 356;
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                }
	            }

	            this.state = 372;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===4) {
	                this.state = 359;
	                this.match(ASPParser.T__3);
	                this.state = 368;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                if(((((_la - 14)) & ~0x1f) === 0 && ((1 << (_la - 14)) & 2227205) !== 0)) {
	                    this.state = 360;
	                    this.term();
	                    this.state = 365;
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                    while(_la===7) {
	                        this.state = 361;
	                        this.match(ASPParser.T__6);
	                        this.state = 362;
	                        this.term();
	                        this.state = 367;
	                        this._errHandler.sync(this);
	                        _la = this._input.LA(1);
	                    }
	                }

	                this.state = 374;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 375;
	            this.match(ASPParser.T__14);
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
	    this.enterRule(localctx, 58, ASPParser.RULE_builtIn_atom);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 378;
	        this.term();
	        this.state = 379;
	        _la = this._input.LA(1);
	        if(!(((((_la - 31)) & ~0x1f) === 0 && ((1 << (_la - 31)) & 7) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	        this.state = 380;
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



	aggregate_atom_head() {
	    let localctx = new Aggregate_atom_headContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 60, ASPParser.RULE_aggregate_atom_head);
	    var _la = 0;
	    try {
	        this.state = 439;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,51,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 382;
	            this.match(ASPParser.AGGREGATE_FUNCTION);
	            this.state = 383;
	            this.match(ASPParser.T__2);
	            this.state = 392;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(((((_la - 14)) & ~0x1f) === 0 && ((1 << (_la - 14)) & 2227205) !== 0)) {
	                this.state = 384;
	                this.aggregate_element_head();
	                this.state = 389;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                while(_la===4) {
	                    this.state = 385;
	                    this.match(ASPParser.T__3);
	                    this.state = 386;
	                    this.aggregate_element_head();
	                    this.state = 391;
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                }
	            }

	            this.state = 394;
	            this.match(ASPParser.T__4);
	            this.state = 395;
	            _la = this._input.LA(1);
	            if(!(((((_la - 31)) & ~0x1f) === 0 && ((1 << (_la - 31)) & 7) !== 0))) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 396;
	            this.term();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 397;
	            this.match(ASPParser.AGGREGATE_FUNCTION);
	            this.state = 398;
	            this.match(ASPParser.T__2);
	            this.state = 407;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(((((_la - 14)) & ~0x1f) === 0 && ((1 << (_la - 14)) & 2227205) !== 0)) {
	                this.state = 399;
	                this.aggregate_element_head();
	                this.state = 404;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                while(_la===4) {
	                    this.state = 400;
	                    this.match(ASPParser.T__3);
	                    this.state = 401;
	                    this.aggregate_element_head();
	                    this.state = 406;
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                }
	            }

	            this.state = 409;
	            this.match(ASPParser.T__4);
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 410;
	            this.term();
	            this.state = 411;
	            _la = this._input.LA(1);
	            if(!(((((_la - 31)) & ~0x1f) === 0 && ((1 << (_la - 31)) & 7) !== 0))) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 412;
	            this.match(ASPParser.AGGREGATE_FUNCTION);
	            this.state = 413;
	            this.match(ASPParser.T__2);
	            this.state = 422;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(((((_la - 14)) & ~0x1f) === 0 && ((1 << (_la - 14)) & 2227205) !== 0)) {
	                this.state = 414;
	                this.aggregate_element_head();
	                this.state = 419;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                while(_la===4) {
	                    this.state = 415;
	                    this.match(ASPParser.T__3);
	                    this.state = 416;
	                    this.aggregate_element_head();
	                    this.state = 421;
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                }
	            }

	            this.state = 424;
	            this.match(ASPParser.T__4);
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 426;
	            this.match(ASPParser.AGGREGATE_FUNCTION);
	            this.state = 427;
	            this.match(ASPParser.T__2);
	            this.state = 436;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(((((_la - 14)) & ~0x1f) === 0 && ((1 << (_la - 14)) & 2227205) !== 0)) {
	                this.state = 428;
	                this.aggregate_element_head();
	                this.state = 433;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                while(_la===4) {
	                    this.state = 429;
	                    this.match(ASPParser.T__3);
	                    this.state = 430;
	                    this.aggregate_element_head();
	                    this.state = 435;
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                }
	            }

	            this.state = 438;
	            this.match(ASPParser.T__4);
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



	aggregate_element_head() {
	    let localctx = new Aggregate_element_headContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 62, ASPParser.RULE_aggregate_element_head);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 441;
	        this.term();
	        this.state = 446;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===7) {
	            this.state = 442;
	            this.match(ASPParser.T__6);
	            this.state = 443;
	            this.term();
	            this.state = 448;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 449;
	        this.match(ASPParser.T__5);
	        this.state = 450;
	        this.aggregate_literal();
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



	aggregate_atom_body() {
	    let localctx = new Aggregate_atom_bodyContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 64, ASPParser.RULE_aggregate_atom_body);
	    var _la = 0;
	    try {
	        this.state = 509;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,61,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 452;
	            this.match(ASPParser.AGGREGATE_FUNCTION);
	            this.state = 453;
	            this.match(ASPParser.T__2);
	            this.state = 462;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,54,this._ctx);
	            if(la_===1) {
	                this.state = 454;
	                this.aggregate_element_body();
	                this.state = 459;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                while(_la===4) {
	                    this.state = 455;
	                    this.match(ASPParser.T__3);
	                    this.state = 456;
	                    this.aggregate_element_body();
	                    this.state = 461;
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                }

	            }
	            this.state = 464;
	            this.match(ASPParser.T__4);
	            this.state = 465;
	            _la = this._input.LA(1);
	            if(!(((((_la - 31)) & ~0x1f) === 0 && ((1 << (_la - 31)) & 7) !== 0))) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 466;
	            this.term();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 467;
	            this.match(ASPParser.AGGREGATE_FUNCTION);
	            this.state = 468;
	            this.match(ASPParser.T__2);
	            this.state = 477;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,56,this._ctx);
	            if(la_===1) {
	                this.state = 469;
	                this.aggregate_element_body();
	                this.state = 474;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                while(_la===4) {
	                    this.state = 470;
	                    this.match(ASPParser.T__3);
	                    this.state = 471;
	                    this.aggregate_element_body();
	                    this.state = 476;
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                }

	            }
	            this.state = 479;
	            this.match(ASPParser.T__4);
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 480;
	            this.term();
	            this.state = 481;
	            _la = this._input.LA(1);
	            if(!(((((_la - 31)) & ~0x1f) === 0 && ((1 << (_la - 31)) & 7) !== 0))) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 482;
	            this.match(ASPParser.AGGREGATE_FUNCTION);
	            this.state = 483;
	            this.match(ASPParser.T__2);
	            this.state = 492;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,58,this._ctx);
	            if(la_===1) {
	                this.state = 484;
	                this.aggregate_element_body();
	                this.state = 489;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                while(_la===4) {
	                    this.state = 485;
	                    this.match(ASPParser.T__3);
	                    this.state = 486;
	                    this.aggregate_element_body();
	                    this.state = 491;
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                }

	            }
	            this.state = 494;
	            this.match(ASPParser.T__4);
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 496;
	            this.match(ASPParser.AGGREGATE_FUNCTION);
	            this.state = 497;
	            this.match(ASPParser.T__2);
	            this.state = 506;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,60,this._ctx);
	            if(la_===1) {
	                this.state = 498;
	                this.aggregate_element_body();
	                this.state = 503;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                while(_la===4) {
	                    this.state = 499;
	                    this.match(ASPParser.T__3);
	                    this.state = 500;
	                    this.aggregate_element_body();
	                    this.state = 505;
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                }

	            }
	            this.state = 508;
	            this.match(ASPParser.T__4);
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



	aggregate_element_body() {
	    let localctx = new Aggregate_element_bodyContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 66, ASPParser.RULE_aggregate_element_body);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 519;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(((((_la - 14)) & ~0x1f) === 0 && ((1 << (_la - 14)) & 2227205) !== 0)) {
	            this.state = 511;
	            this.term();
	            this.state = 516;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===7) {
	                this.state = 512;
	                this.match(ASPParser.T__6);
	                this.state = 513;
	                this.term();
	                this.state = 518;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	        }

	        this.state = 532;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===6) {
	            this.state = 521;
	            this.match(ASPParser.T__5);
	            this.state = 530;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(((((_la - 14)) & ~0x1f) === 0 && ((1 << (_la - 14)) & 2227221) !== 0)) {
	                this.state = 522;
	                this.aggregate_literal();
	                this.state = 527;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                while(_la===7) {
	                    this.state = 523;
	                    this.match(ASPParser.T__6);
	                    this.state = 524;
	                    this.aggregate_literal();
	                    this.state = 529;
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



	aggregate_element_optimization() {
	    let localctx = new Aggregate_element_optimizationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 68, ASPParser.RULE_aggregate_element_optimization);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 553;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,69,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 534;
	            this.term();
	            this.state = 535;
	            this.match(ASPParser.T__11);
	            this.state = 536;
	            this.term();
	            this.state = 542;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===7) {
	                this.state = 538;
	                this.match(ASPParser.T__6);
	                this.state = 539;
	                this.term();
	                this.state = 544;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            break;

	        case 2:
	            this.state = 545;
	            this.term();
	            this.state = 550;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===7) {
	                this.state = 546;
	                this.match(ASPParser.T__6);
	                this.state = 547;
	                this.term();
	                this.state = 552;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            break;

	        }
	        this.state = 566;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===6) {
	            this.state = 555;
	            this.match(ASPParser.T__5);
	            this.state = 564;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(((((_la - 14)) & ~0x1f) === 0 && ((1 << (_la - 14)) & 2227221) !== 0)) {
	                this.state = 556;
	                this.aggregate_literal();
	                this.state = 561;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                while(_la===7) {
	                    this.state = 557;
	                    this.match(ASPParser.T__6);
	                    this.state = 558;
	                    this.aggregate_literal();
	                    this.state = 563;
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
	    this.enterRule(localctx, 70, ASPParser.RULE_aggregate_literal);
	    var _la = 0;
	    try {
	        this.state = 573;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,74,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 568;
	            this.literal();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 570;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===18) {
	                this.state = 569;
	                this.match(ASPParser.NOT);
	            }

	            this.state = 572;
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



	term() {
	    let localctx = new TermContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 72, ASPParser.RULE_term);
	    try {
	        this.state = 580;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 16:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 575;
	            this.match(ASPParser.T__15);
	            this.state = 576;
	            this.additiveTerm();
	            this.state = 577;
	            this.match(ASPParser.T__15);
	            break;
	        case 14:
	        case 24:
	        case 25:
	        case 26:
	        case 27:
	        case 28:
	        case 29:
	        case 30:
	        case 35:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 579;
	            this.additiveTerm();
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



	additiveTerm() {
	    let localctx = new AdditiveTermContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 74, ASPParser.RULE_additiveTerm);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 583;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===35) {
	            this.state = 582;
	            this.match(ASPParser.CLASSICAL_NEGATION);
	        }

	        this.state = 585;
	        this.multiplicativeTerm();
	        this.state = 590;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(((((_la - 35)) & ~0x1f) === 0 && ((1 << (_la - 35)) & 15) !== 0)) {
	            this.state = 586;
	            _la = this._input.LA(1);
	            if(!(((((_la - 35)) & ~0x1f) === 0 && ((1 << (_la - 35)) & 15) !== 0))) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 587;
	            this.multiplicativeTerm();
	            this.state = 592;
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



	multiplicativeTerm() {
	    let localctx = new MultiplicativeTermContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 76, ASPParser.RULE_multiplicativeTerm);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 593;
	        this.powerTerm();
	        this.state = 598;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(((((_la - 39)) & ~0x1f) === 0 && ((1 << (_la - 39)) & 15) !== 0)) {
	            this.state = 594;
	            _la = this._input.LA(1);
	            if(!(((((_la - 39)) & ~0x1f) === 0 && ((1 << (_la - 39)) & 15) !== 0))) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 595;
	            this.powerTerm();
	            this.state = 600;
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



	powerTerm() {
	    let localctx = new PowerTermContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 78, ASPParser.RULE_powerTerm);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 601;
	        this.unaryTerm();
	        this.state = 606;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===43) {
	            this.state = 602;
	            this.match(ASPParser.EXPONENTIATION);
	            this.state = 603;
	            this.unaryTerm();
	            this.state = 608;
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



	unaryTerm() {
	    let localctx = new UnaryTermContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 80, ASPParser.RULE_unaryTerm);
	    try {
	        this.state = 616;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,80,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 609;
	            this.simpleTerm();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 610;
	            this.functionTerm();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 611;
	            this.tuple();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 612;
	            this.match(ASPParser.T__13);
	            this.state = 613;
	            this.term();
	            this.state = 614;
	            this.match(ASPParser.T__14);
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
	    this.enterRule(localctx, 82, ASPParser.RULE_simpleTerm);
	    try {
	        this.state = 625;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,81,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 618;
	            this.integer();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 619;
	            this.match(ASPParser.CONSTANT);
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 620;
	            this.match(ASPParser.STRING);
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 621;
	            this.match(ASPParser.VARIABLE);
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 622;
	            this.match(ASPParser.UNDERSCORE);
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 623;
	            this.match(ASPParser.SUP);
	            break;

	        case 7:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 624;
	            this.match(ASPParser.INF);
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



	functionTerm() {
	    let localctx = new FunctionTermContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 84, ASPParser.RULE_functionTerm);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 627;
	        this.match(ASPParser.CONSTANT);
	        this.state = 656;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===14) {
	            this.state = 628;
	            this.match(ASPParser.T__13);
	            this.state = 637;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(((((_la - 14)) & ~0x1f) === 0 && ((1 << (_la - 14)) & 2227205) !== 0)) {
	                this.state = 629;
	                this.term();
	                this.state = 634;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                while(_la===7) {
	                    this.state = 630;
	                    this.match(ASPParser.T__6);
	                    this.state = 631;
	                    this.term();
	                    this.state = 636;
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                }
	            }

	            this.state = 652;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===4) {
	                this.state = 639;
	                this.match(ASPParser.T__3);
	                this.state = 648;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                if(((((_la - 14)) & ~0x1f) === 0 && ((1 << (_la - 14)) & 2227205) !== 0)) {
	                    this.state = 640;
	                    this.term();
	                    this.state = 645;
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                    while(_la===7) {
	                        this.state = 641;
	                        this.match(ASPParser.T__6);
	                        this.state = 642;
	                        this.term();
	                        this.state = 647;
	                        this._errHandler.sync(this);
	                        _la = this._input.LA(1);
	                    }
	                }

	                this.state = 654;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 655;
	            this.match(ASPParser.T__14);
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



	tuple() {
	    let localctx = new TupleContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 86, ASPParser.RULE_tuple);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 658;
	        this.match(ASPParser.T__13);
	        this.state = 659;
	        this.term();
	        this.state = 660;
	        this.match(ASPParser.T__6);
	        this.state = 661;
	        this.term();
	        this.state = 666;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===7) {
	            this.state = 662;
	            this.match(ASPParser.T__6);
	            this.state = 663;
	            this.term();
	            this.state = 668;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 669;
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



	constant_term() {
	    let localctx = new Constant_termContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 88, ASPParser.RULE_constant_term);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 671;
	        this.constant_additiveTerm();
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



	constant_additiveTerm() {
	    let localctx = new Constant_additiveTermContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 90, ASPParser.RULE_constant_additiveTerm);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 673;
	        this.constant_multiplicativeTerm();
	        this.state = 678;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(((((_la - 35)) & ~0x1f) === 0 && ((1 << (_la - 35)) & 15) !== 0)) {
	            this.state = 674;
	            _la = this._input.LA(1);
	            if(!(((((_la - 35)) & ~0x1f) === 0 && ((1 << (_la - 35)) & 15) !== 0))) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 675;
	            this.constant_multiplicativeTerm();
	            this.state = 680;
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



	constant_multiplicativeTerm() {
	    let localctx = new Constant_multiplicativeTermContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 92, ASPParser.RULE_constant_multiplicativeTerm);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 681;
	        this.constant_powerTerm();
	        this.state = 686;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(((((_la - 39)) & ~0x1f) === 0 && ((1 << (_la - 39)) & 15) !== 0)) {
	            this.state = 682;
	            _la = this._input.LA(1);
	            if(!(((((_la - 39)) & ~0x1f) === 0 && ((1 << (_la - 39)) & 15) !== 0))) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 683;
	            this.constant_powerTerm();
	            this.state = 688;
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



	constant_powerTerm() {
	    let localctx = new Constant_powerTermContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 94, ASPParser.RULE_constant_powerTerm);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 689;
	        this.constant_unaryTerm();
	        this.state = 694;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===43) {
	            this.state = 690;
	            this.match(ASPParser.EXPONENTIATION);
	            this.state = 691;
	            this.constant_unaryTerm();
	            this.state = 696;
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



	constant_unaryTerm() {
	    let localctx = new Constant_unaryTermContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 96, ASPParser.RULE_constant_unaryTerm);
	    try {
	        this.state = 708;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,92,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 697;
	            this.integer();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 698;
	            this.match(ASPParser.CONSTANT);
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 699;
	            this.match(ASPParser.STRING);
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 700;
	            this.match(ASPParser.SUP);
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 701;
	            this.match(ASPParser.INF);
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 702;
	            this.constant_functionTerm();
	            break;

	        case 7:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 703;
	            this.constant_tuple();
	            break;

	        case 8:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 704;
	            this.match(ASPParser.T__13);
	            this.state = 705;
	            this.constant_term();
	            this.state = 706;
	            this.match(ASPParser.T__14);
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



	constant_functionTerm() {
	    let localctx = new Constant_functionTermContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 98, ASPParser.RULE_constant_functionTerm);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 710;
	        this.match(ASPParser.CONSTANT);
	        this.state = 711;
	        this.match(ASPParser.T__13);
	        this.state = 720;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) === 0 && ((1 << _la) & 2063613952) !== 0)) {
	            this.state = 712;
	            this.constant_term();
	            this.state = 717;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===7) {
	                this.state = 713;
	                this.match(ASPParser.T__6);
	                this.state = 714;
	                this.constant_term();
	                this.state = 719;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	        }

	        this.state = 722;
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



	constant_tuple() {
	    let localctx = new Constant_tupleContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 100, ASPParser.RULE_constant_tuple);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 724;
	        this.match(ASPParser.T__13);
	        this.state = 733;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) === 0 && ((1 << _la) & 2063613952) !== 0)) {
	            this.state = 725;
	            this.constant_term();
	            this.state = 730;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===7) {
	                this.state = 726;
	                this.match(ASPParser.T__6);
	                this.state = 727;
	                this.constant_term();
	                this.state = 732;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	        }

	        this.state = 735;
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



	integer() {
	    let localctx = new IntegerContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 102, ASPParser.RULE_integer);
	    try {
	        this.state = 739;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,97,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 737;
	            this.interval();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 738;
	            this.match(ASPParser.NUMBER);
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



	interval() {
	    let localctx = new IntervalContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 104, ASPParser.RULE_interval);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 741;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 587202560) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	        this.state = 742;
	        this.match(ASPParser.T__16);
	        this.state = 743;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 587202560) !== 0))) {
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
ASPParser.NOT = 18;
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
ASPParser.STRING = 30;
ASPParser.EQ = 31;
ASPParser.EQEQ = 32;
ASPParser.COMPARATOR = 33;
ASPParser.AGGREGATE_FUNCTION = 34;
ASPParser.CLASSICAL_NEGATION = 35;
ASPParser.ADDITION = 36;
ASPParser.OR = 37;
ASPParser.EXCLUSIVE_OR = 38;
ASPParser.MULTIPLICATION = 39;
ASPParser.DIVISION = 40;
ASPParser.MODULO = 41;
ASPParser.AND = 42;
ASPParser.EXPONENTIATION = 43;
ASPParser.WS = 44;

ASPParser.RULE_program = 0;
ASPParser.RULE_statement = 1;
ASPParser.RULE_constant = 2;
ASPParser.RULE_fact = 3;
ASPParser.RULE_choice_rule = 4;
ASPParser.RULE_choice = 5;
ASPParser.RULE_comparatorTerm1 = 6;
ASPParser.RULE_comparatorTerm2 = 7;
ASPParser.RULE_choice_element = 8;
ASPParser.RULE_choiceHead_atoms = 9;
ASPParser.RULE_choiceBody_atoms = 10;
ASPParser.RULE_definite_rule = 11;
ASPParser.RULE_constraint = 12;
ASPParser.RULE_head = 13;
ASPParser.RULE_body = 14;
ASPParser.RULE_head_atoms = 15;
ASPParser.RULE_body_atoms = 16;
ASPParser.RULE_optimization = 17;
ASPParser.RULE_weak_constraint = 18;
ASPParser.RULE_show = 19;
ASPParser.RULE_show_atoms = 20;
ASPParser.RULE_show_terms = 21;
ASPParser.RULE_show_nothing = 22;
ASPParser.RULE_block_comment = 23;
ASPParser.RULE_unclosed_comment = 24;
ASPParser.RULE_line_comment = 25;
ASPParser.RULE_literal = 26;
ASPParser.RULE_classical_atom = 27;
ASPParser.RULE_atom = 28;
ASPParser.RULE_builtIn_atom = 29;
ASPParser.RULE_aggregate_atom_head = 30;
ASPParser.RULE_aggregate_element_head = 31;
ASPParser.RULE_aggregate_atom_body = 32;
ASPParser.RULE_aggregate_element_body = 33;
ASPParser.RULE_aggregate_element_optimization = 34;
ASPParser.RULE_aggregate_literal = 35;
ASPParser.RULE_term = 36;
ASPParser.RULE_additiveTerm = 37;
ASPParser.RULE_multiplicativeTerm = 38;
ASPParser.RULE_powerTerm = 39;
ASPParser.RULE_unaryTerm = 40;
ASPParser.RULE_simpleTerm = 41;
ASPParser.RULE_functionTerm = 42;
ASPParser.RULE_tuple = 43;
ASPParser.RULE_constant_term = 44;
ASPParser.RULE_constant_additiveTerm = 45;
ASPParser.RULE_constant_multiplicativeTerm = 46;
ASPParser.RULE_constant_powerTerm = 47;
ASPParser.RULE_constant_unaryTerm = 48;
ASPParser.RULE_constant_functionTerm = 49;
ASPParser.RULE_constant_tuple = 50;
ASPParser.RULE_integer = 51;
ASPParser.RULE_interval = 52;

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

	EQ() {
	    return this.getToken(ASPParser.EQ, 0);
	};

	constant_term() {
	    return this.getTypedRuleContext(Constant_termContext,0);
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

	DOT() {
	    return this.getToken(ASPParser.DOT, 0);
	};

	head() {
	    return this.getTypedRuleContext(HeadContext,0);
	};

	choice() {
	    return this.getTypedRuleContext(ChoiceContext,0);
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

	comparatorTerm1() {
	    return this.getTypedRuleContext(ComparatorTerm1Context,0);
	};

	choice_element = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Choice_elementContext);
	    } else {
	        return this.getTypedRuleContext(Choice_elementContext,i);
	    }
	};

	comparatorTerm2() {
	    return this.getTypedRuleContext(ComparatorTerm2Context,0);
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



class ComparatorTerm1Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ASPParser.RULE_comparatorTerm1;
    }

	term() {
	    return this.getTypedRuleContext(TermContext,0);
	};

	COMPARATOR() {
	    return this.getToken(ASPParser.COMPARATOR, 0);
	};

	EQ() {
	    return this.getToken(ASPParser.EQ, 0);
	};

	EQEQ() {
	    return this.getToken(ASPParser.EQEQ, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ASPListener ) {
	        listener.enterComparatorTerm1(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ASPListener ) {
	        listener.exitComparatorTerm1(this);
		}
	}


}



class ComparatorTerm2Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ASPParser.RULE_comparatorTerm2;
    }

	term() {
	    return this.getTypedRuleContext(TermContext,0);
	};

	COMPARATOR() {
	    return this.getToken(ASPParser.COMPARATOR, 0);
	};

	EQ() {
	    return this.getToken(ASPParser.EQ, 0);
	};

	EQEQ() {
	    return this.getToken(ASPParser.EQEQ, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ASPListener ) {
	        listener.enterComparatorTerm2(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ASPListener ) {
	        listener.exitComparatorTerm2(this);
		}
	}


}



class Choice_elementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ASPParser.RULE_choice_element;
    }

	choiceHead_atoms() {
	    return this.getTypedRuleContext(ChoiceHead_atomsContext,0);
	};

	choiceBody_atoms = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ChoiceBody_atomsContext);
	    } else {
	        return this.getTypedRuleContext(ChoiceBody_atomsContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof ASPListener ) {
	        listener.enterChoice_element(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ASPListener ) {
	        listener.exitChoice_element(this);
		}
	}


}



class ChoiceHead_atomsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ASPParser.RULE_choiceHead_atoms;
    }

	literal() {
	    return this.getTypedRuleContext(LiteralContext,0);
	};

	builtIn_atom() {
	    return this.getTypedRuleContext(BuiltIn_atomContext,0);
	};

	NOT() {
	    return this.getToken(ASPParser.NOT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ASPListener ) {
	        listener.enterChoiceHead_atoms(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ASPListener ) {
	        listener.exitChoiceHead_atoms(this);
		}
	}


}



class ChoiceBody_atomsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ASPParser.RULE_choiceBody_atoms;
    }

	literal() {
	    return this.getTypedRuleContext(LiteralContext,0);
	};

	builtIn_atom() {
	    return this.getTypedRuleContext(BuiltIn_atomContext,0);
	};

	NOT() {
	    return this.getToken(ASPParser.NOT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ASPListener ) {
	        listener.enterChoiceBody_atoms(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ASPListener ) {
	        listener.exitChoiceBody_atoms(this);
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

	head_atoms = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Head_atomsContext);
	    } else {
	        return this.getTypedRuleContext(Head_atomsContext,i);
	    }
	};

	aggregate_atom_head() {
	    return this.getTypedRuleContext(Aggregate_atom_headContext,0);
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

	body_atoms = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Body_atomsContext);
	    } else {
	        return this.getTypedRuleContext(Body_atomsContext,i);
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



class Head_atomsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ASPParser.RULE_head_atoms;
    }

	literal() {
	    return this.getTypedRuleContext(LiteralContext,0);
	};

	builtIn_atom() {
	    return this.getTypedRuleContext(BuiltIn_atomContext,0);
	};

	NOT() {
	    return this.getToken(ASPParser.NOT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ASPListener ) {
	        listener.enterHead_atoms(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ASPListener ) {
	        listener.exitHead_atoms(this);
		}
	}


}



class Body_atomsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ASPParser.RULE_body_atoms;
    }

	literal() {
	    return this.getTypedRuleContext(LiteralContext,0);
	};

	builtIn_atom() {
	    return this.getTypedRuleContext(BuiltIn_atomContext,0);
	};

	NOT() {
	    return this.getToken(ASPParser.NOT, 0);
	};

	aggregate_atom_body() {
	    return this.getTypedRuleContext(Aggregate_atom_bodyContext,0);
	};

	choice() {
	    return this.getTypedRuleContext(ChoiceContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof ASPListener ) {
	        listener.enterBody_atoms(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ASPListener ) {
	        listener.exitBody_atoms(this);
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

	DOT() {
	    return this.getToken(ASPParser.DOT, 0);
	};

	aggregate_element_optimization = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Aggregate_element_optimizationContext);
	    } else {
	        return this.getTypedRuleContext(Aggregate_element_optimizationContext,i);
	    }
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

	DIVISION() {
	    return this.getToken(ASPParser.DIVISION, 0);
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

	body() {
	    return this.getTypedRuleContext(BodyContext,0);
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

	EQ() {
	    return this.getToken(ASPParser.EQ, 0);
	};

	EQEQ() {
	    return this.getToken(ASPParser.EQEQ, 0);
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



class Aggregate_atom_headContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ASPParser.RULE_aggregate_atom_head;
    }

	AGGREGATE_FUNCTION() {
	    return this.getToken(ASPParser.AGGREGATE_FUNCTION, 0);
	};

	term() {
	    return this.getTypedRuleContext(TermContext,0);
	};

	COMPARATOR() {
	    return this.getToken(ASPParser.COMPARATOR, 0);
	};

	EQ() {
	    return this.getToken(ASPParser.EQ, 0);
	};

	EQEQ() {
	    return this.getToken(ASPParser.EQEQ, 0);
	};

	aggregate_element_head = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Aggregate_element_headContext);
	    } else {
	        return this.getTypedRuleContext(Aggregate_element_headContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof ASPListener ) {
	        listener.enterAggregate_atom_head(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ASPListener ) {
	        listener.exitAggregate_atom_head(this);
		}
	}


}



class Aggregate_element_headContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ASPParser.RULE_aggregate_element_head;
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

	aggregate_literal() {
	    return this.getTypedRuleContext(Aggregate_literalContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof ASPListener ) {
	        listener.enterAggregate_element_head(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ASPListener ) {
	        listener.exitAggregate_element_head(this);
		}
	}


}



class Aggregate_atom_bodyContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ASPParser.RULE_aggregate_atom_body;
    }

	AGGREGATE_FUNCTION() {
	    return this.getToken(ASPParser.AGGREGATE_FUNCTION, 0);
	};

	term() {
	    return this.getTypedRuleContext(TermContext,0);
	};

	COMPARATOR() {
	    return this.getToken(ASPParser.COMPARATOR, 0);
	};

	EQ() {
	    return this.getToken(ASPParser.EQ, 0);
	};

	EQEQ() {
	    return this.getToken(ASPParser.EQEQ, 0);
	};

	aggregate_element_body = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Aggregate_element_bodyContext);
	    } else {
	        return this.getTypedRuleContext(Aggregate_element_bodyContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof ASPListener ) {
	        listener.enterAggregate_atom_body(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ASPListener ) {
	        listener.exitAggregate_atom_body(this);
		}
	}


}



class Aggregate_element_bodyContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ASPParser.RULE_aggregate_element_body;
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
	        listener.enterAggregate_element_body(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ASPListener ) {
	        listener.exitAggregate_element_body(this);
		}
	}


}



class Aggregate_element_optimizationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ASPParser.RULE_aggregate_element_optimization;
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
	        listener.enterAggregate_element_optimization(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ASPListener ) {
	        listener.exitAggregate_element_optimization(this);
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

	NOT() {
	    return this.getToken(ASPParser.NOT, 0);
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

	additiveTerm() {
	    return this.getTypedRuleContext(AdditiveTermContext,0);
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



class AdditiveTermContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ASPParser.RULE_additiveTerm;
    }

	multiplicativeTerm = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(MultiplicativeTermContext);
	    } else {
	        return this.getTypedRuleContext(MultiplicativeTermContext,i);
	    }
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


	ADDITION = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(ASPParser.ADDITION);
	    } else {
	        return this.getToken(ASPParser.ADDITION, i);
	    }
	};


	OR = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(ASPParser.OR);
	    } else {
	        return this.getToken(ASPParser.OR, i);
	    }
	};


	EXCLUSIVE_OR = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(ASPParser.EXCLUSIVE_OR);
	    } else {
	        return this.getToken(ASPParser.EXCLUSIVE_OR, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof ASPListener ) {
	        listener.enterAdditiveTerm(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ASPListener ) {
	        listener.exitAdditiveTerm(this);
		}
	}


}



class MultiplicativeTermContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ASPParser.RULE_multiplicativeTerm;
    }

	powerTerm = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(PowerTermContext);
	    } else {
	        return this.getTypedRuleContext(PowerTermContext,i);
	    }
	};

	MULTIPLICATION = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(ASPParser.MULTIPLICATION);
	    } else {
	        return this.getToken(ASPParser.MULTIPLICATION, i);
	    }
	};


	DIVISION = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(ASPParser.DIVISION);
	    } else {
	        return this.getToken(ASPParser.DIVISION, i);
	    }
	};


	MODULO = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(ASPParser.MODULO);
	    } else {
	        return this.getToken(ASPParser.MODULO, i);
	    }
	};


	AND = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(ASPParser.AND);
	    } else {
	        return this.getToken(ASPParser.AND, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof ASPListener ) {
	        listener.enterMultiplicativeTerm(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ASPListener ) {
	        listener.exitMultiplicativeTerm(this);
		}
	}


}



class PowerTermContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ASPParser.RULE_powerTerm;
    }

	unaryTerm = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(UnaryTermContext);
	    } else {
	        return this.getTypedRuleContext(UnaryTermContext,i);
	    }
	};

	EXPONENTIATION = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(ASPParser.EXPONENTIATION);
	    } else {
	        return this.getToken(ASPParser.EXPONENTIATION, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof ASPListener ) {
	        listener.enterPowerTerm(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ASPListener ) {
	        listener.exitPowerTerm(this);
		}
	}


}



class UnaryTermContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ASPParser.RULE_unaryTerm;
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

	term() {
	    return this.getTypedRuleContext(TermContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof ASPListener ) {
	        listener.enterUnaryTerm(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ASPListener ) {
	        listener.exitUnaryTerm(this);
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



class Constant_termContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ASPParser.RULE_constant_term;
    }

	constant_additiveTerm() {
	    return this.getTypedRuleContext(Constant_additiveTermContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof ASPListener ) {
	        listener.enterConstant_term(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ASPListener ) {
	        listener.exitConstant_term(this);
		}
	}


}



class Constant_additiveTermContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ASPParser.RULE_constant_additiveTerm;
    }

	constant_multiplicativeTerm = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Constant_multiplicativeTermContext);
	    } else {
	        return this.getTypedRuleContext(Constant_multiplicativeTermContext,i);
	    }
	};

	ADDITION = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(ASPParser.ADDITION);
	    } else {
	        return this.getToken(ASPParser.ADDITION, i);
	    }
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


	OR = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(ASPParser.OR);
	    } else {
	        return this.getToken(ASPParser.OR, i);
	    }
	};


	EXCLUSIVE_OR = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(ASPParser.EXCLUSIVE_OR);
	    } else {
	        return this.getToken(ASPParser.EXCLUSIVE_OR, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof ASPListener ) {
	        listener.enterConstant_additiveTerm(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ASPListener ) {
	        listener.exitConstant_additiveTerm(this);
		}
	}


}



class Constant_multiplicativeTermContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ASPParser.RULE_constant_multiplicativeTerm;
    }

	constant_powerTerm = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Constant_powerTermContext);
	    } else {
	        return this.getTypedRuleContext(Constant_powerTermContext,i);
	    }
	};

	MULTIPLICATION = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(ASPParser.MULTIPLICATION);
	    } else {
	        return this.getToken(ASPParser.MULTIPLICATION, i);
	    }
	};


	DIVISION = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(ASPParser.DIVISION);
	    } else {
	        return this.getToken(ASPParser.DIVISION, i);
	    }
	};


	MODULO = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(ASPParser.MODULO);
	    } else {
	        return this.getToken(ASPParser.MODULO, i);
	    }
	};


	AND = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(ASPParser.AND);
	    } else {
	        return this.getToken(ASPParser.AND, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof ASPListener ) {
	        listener.enterConstant_multiplicativeTerm(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ASPListener ) {
	        listener.exitConstant_multiplicativeTerm(this);
		}
	}


}



class Constant_powerTermContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ASPParser.RULE_constant_powerTerm;
    }

	constant_unaryTerm = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Constant_unaryTermContext);
	    } else {
	        return this.getTypedRuleContext(Constant_unaryTermContext,i);
	    }
	};

	EXPONENTIATION = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(ASPParser.EXPONENTIATION);
	    } else {
	        return this.getToken(ASPParser.EXPONENTIATION, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof ASPListener ) {
	        listener.enterConstant_powerTerm(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ASPListener ) {
	        listener.exitConstant_powerTerm(this);
		}
	}


}



class Constant_unaryTermContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ASPParser.RULE_constant_unaryTerm;
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

	SUP() {
	    return this.getToken(ASPParser.SUP, 0);
	};

	INF() {
	    return this.getToken(ASPParser.INF, 0);
	};

	constant_functionTerm() {
	    return this.getTypedRuleContext(Constant_functionTermContext,0);
	};

	constant_tuple() {
	    return this.getTypedRuleContext(Constant_tupleContext,0);
	};

	constant_term() {
	    return this.getTypedRuleContext(Constant_termContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof ASPListener ) {
	        listener.enterConstant_unaryTerm(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ASPListener ) {
	        listener.exitConstant_unaryTerm(this);
		}
	}


}



class Constant_functionTermContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ASPParser.RULE_constant_functionTerm;
    }

	CONSTANT() {
	    return this.getToken(ASPParser.CONSTANT, 0);
	};

	constant_term = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Constant_termContext);
	    } else {
	        return this.getTypedRuleContext(Constant_termContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof ASPListener ) {
	        listener.enterConstant_functionTerm(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ASPListener ) {
	        listener.exitConstant_functionTerm(this);
		}
	}


}



class Constant_tupleContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ASPParser.RULE_constant_tuple;
    }

	constant_term = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Constant_termContext);
	    } else {
	        return this.getTypedRuleContext(Constant_termContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof ASPListener ) {
	        listener.enterConstant_tuple(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ASPListener ) {
	        listener.exitConstant_tuple(this);
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

	interval() {
	    return this.getTypedRuleContext(IntervalContext,0);
	};

	NUMBER() {
	    return this.getToken(ASPParser.NUMBER, 0);
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



class IntervalContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ASPParser.RULE_interval;
    }

	NUMBER = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(ASPParser.NUMBER);
	    } else {
	        return this.getToken(ASPParser.NUMBER, i);
	    }
	};


	CONSTANT = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(ASPParser.CONSTANT);
	    } else {
	        return this.getToken(ASPParser.CONSTANT, i);
	    }
	};


	VARIABLE = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(ASPParser.VARIABLE);
	    } else {
	        return this.getToken(ASPParser.VARIABLE, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof ASPListener ) {
	        listener.enterInterval(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ASPListener ) {
	        listener.exitInterval(this);
		}
	}


}




ASPParser.ProgramContext = ProgramContext; 
ASPParser.StatementContext = StatementContext; 
ASPParser.ConstantContext = ConstantContext; 
ASPParser.FactContext = FactContext; 
ASPParser.Choice_ruleContext = Choice_ruleContext; 
ASPParser.ChoiceContext = ChoiceContext; 
ASPParser.ComparatorTerm1Context = ComparatorTerm1Context; 
ASPParser.ComparatorTerm2Context = ComparatorTerm2Context; 
ASPParser.Choice_elementContext = Choice_elementContext; 
ASPParser.ChoiceHead_atomsContext = ChoiceHead_atomsContext; 
ASPParser.ChoiceBody_atomsContext = ChoiceBody_atomsContext; 
ASPParser.Definite_ruleContext = Definite_ruleContext; 
ASPParser.ConstraintContext = ConstraintContext; 
ASPParser.HeadContext = HeadContext; 
ASPParser.BodyContext = BodyContext; 
ASPParser.Head_atomsContext = Head_atomsContext; 
ASPParser.Body_atomsContext = Body_atomsContext; 
ASPParser.OptimizationContext = OptimizationContext; 
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
ASPParser.Aggregate_atom_headContext = Aggregate_atom_headContext; 
ASPParser.Aggregate_element_headContext = Aggregate_element_headContext; 
ASPParser.Aggregate_atom_bodyContext = Aggregate_atom_bodyContext; 
ASPParser.Aggregate_element_bodyContext = Aggregate_element_bodyContext; 
ASPParser.Aggregate_element_optimizationContext = Aggregate_element_optimizationContext; 
ASPParser.Aggregate_literalContext = Aggregate_literalContext; 
ASPParser.TermContext = TermContext; 
ASPParser.AdditiveTermContext = AdditiveTermContext; 
ASPParser.MultiplicativeTermContext = MultiplicativeTermContext; 
ASPParser.PowerTermContext = PowerTermContext; 
ASPParser.UnaryTermContext = UnaryTermContext; 
ASPParser.SimpleTermContext = SimpleTermContext; 
ASPParser.FunctionTermContext = FunctionTermContext; 
ASPParser.TupleContext = TupleContext; 
ASPParser.Constant_termContext = Constant_termContext; 
ASPParser.Constant_additiveTermContext = Constant_additiveTermContext; 
ASPParser.Constant_multiplicativeTermContext = Constant_multiplicativeTermContext; 
ASPParser.Constant_powerTermContext = Constant_powerTermContext; 
ASPParser.Constant_unaryTermContext = Constant_unaryTermContext; 
ASPParser.Constant_functionTermContext = Constant_functionTermContext; 
ASPParser.Constant_tupleContext = Constant_tupleContext; 
ASPParser.IntegerContext = IntegerContext; 
ASPParser.IntervalContext = IntervalContext; 
