// Generated from src/parser/grammar/ASP.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import ASPListener from './ASPListener.mjs';
const serializedATN = [4,1,36,490,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,26,7,26,2,27,
7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,2,32,7,32,2,33,7,33,2,34,7,
34,2,35,7,35,2,36,7,36,2,37,7,37,2,38,7,38,2,39,7,39,2,40,7,40,2,41,7,41,
2,42,7,42,2,43,7,43,2,44,7,44,2,45,7,45,1,0,1,0,1,0,1,0,5,0,97,8,0,10,0,
12,0,100,9,0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,3,1,112,8,1,1,2,1,2,
1,2,1,2,1,2,1,2,1,3,1,3,1,3,1,4,1,4,1,4,1,4,1,4,1,5,3,5,129,8,5,1,5,1,5,
3,5,133,8,5,1,5,1,5,3,5,137,8,5,1,6,1,6,1,6,5,6,142,8,6,10,6,12,6,145,9,
6,1,6,1,6,1,6,1,6,1,6,5,6,152,8,6,10,6,12,6,155,9,6,3,6,157,8,6,3,6,159,
8,6,1,7,1,7,3,7,163,8,7,1,7,1,7,3,7,167,8,7,1,7,3,7,170,8,7,1,8,1,8,3,8,
174,8,8,1,8,1,8,3,8,178,8,8,1,8,3,8,181,8,8,1,9,1,9,1,9,1,9,1,9,1,10,1,10,
1,10,1,10,1,11,1,11,1,11,5,11,195,8,11,10,11,12,11,198,9,11,1,12,1,12,1,
12,5,12,203,8,12,10,12,12,12,206,9,12,1,13,1,13,3,13,210,8,13,1,13,1,13,
1,13,3,13,215,8,13,1,13,1,13,3,13,219,8,13,1,13,3,13,222,8,13,1,14,1,14,
1,14,1,14,1,14,5,14,229,8,14,10,14,12,14,232,9,14,1,14,1,14,1,14,1,14,1,
14,1,14,1,14,5,14,241,8,14,10,14,12,14,244,9,14,1,14,1,14,1,14,3,14,249,
8,14,1,15,1,15,1,15,1,15,1,15,3,15,256,8,15,1,15,1,15,1,16,1,16,1,16,1,16,
1,16,1,16,1,16,1,16,1,16,3,16,269,8,16,1,16,3,16,272,8,16,1,16,1,16,1,16,
3,16,277,8,16,1,16,5,16,280,8,16,10,16,12,16,283,9,16,1,16,1,16,1,17,1,17,
1,17,1,17,1,17,1,17,1,17,1,17,1,17,3,17,296,8,17,1,18,1,18,1,18,1,18,1,18,
1,19,1,19,1,19,1,19,1,19,1,19,5,19,309,8,19,10,19,12,19,312,9,19,1,20,1,
20,1,21,1,21,1,22,1,22,1,23,1,23,1,24,3,24,323,8,24,1,24,1,24,1,25,3,25,
328,8,25,1,25,1,25,1,26,1,26,1,26,1,26,1,26,5,26,337,8,26,10,26,12,26,340,
9,26,1,26,1,26,3,26,344,8,26,1,27,1,27,1,27,1,27,1,28,1,28,1,28,1,28,1,28,
5,28,355,8,28,10,28,12,28,358,9,28,3,28,360,8,28,1,28,1,28,1,28,3,28,365,
8,28,1,29,1,29,1,29,5,29,370,8,29,10,29,12,29,373,9,29,1,29,1,29,1,29,1,
29,5,29,379,8,29,10,29,12,29,382,9,29,1,30,1,30,3,30,386,8,30,1,30,3,30,
389,8,30,1,31,1,31,1,31,1,31,1,32,1,32,1,32,3,32,398,8,32,1,33,1,33,1,33,
3,33,403,8,33,1,34,1,34,1,34,3,34,408,8,34,1,35,1,35,1,35,1,35,1,35,1,35,
1,35,3,35,417,8,35,1,36,1,36,1,36,1,36,1,36,5,36,424,8,36,10,36,12,36,427,
9,36,1,36,1,36,1,37,1,37,1,37,1,37,5,37,435,8,37,10,37,12,37,438,9,37,3,
37,440,8,37,1,37,1,37,1,38,1,38,1,38,1,38,1,38,1,38,1,38,3,38,451,8,38,1,
39,1,39,1,39,1,39,1,39,5,39,458,8,39,10,39,12,39,461,9,39,3,39,463,8,39,
1,39,1,39,1,40,1,40,1,40,1,40,5,40,471,8,40,10,40,12,40,474,9,40,3,40,476,
8,40,1,40,1,40,1,41,1,41,1,42,1,42,1,43,1,43,1,44,1,44,1,45,1,45,1,45,0,
0,46,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,
48,50,52,54,56,58,60,62,64,66,68,70,72,74,76,78,80,82,84,86,88,90,0,1,1,
0,30,31,526,0,98,1,0,0,0,2,111,1,0,0,0,4,113,1,0,0,0,6,119,1,0,0,0,8,122,
1,0,0,0,10,128,1,0,0,0,12,138,1,0,0,0,14,169,1,0,0,0,16,180,1,0,0,0,18,182,
1,0,0,0,20,187,1,0,0,0,22,191,1,0,0,0,24,199,1,0,0,0,26,221,1,0,0,0,28,248,
1,0,0,0,30,255,1,0,0,0,32,259,1,0,0,0,34,295,1,0,0,0,36,297,1,0,0,0,38,302,
1,0,0,0,40,313,1,0,0,0,42,315,1,0,0,0,44,317,1,0,0,0,46,319,1,0,0,0,48,322,
1,0,0,0,50,327,1,0,0,0,52,331,1,0,0,0,54,345,1,0,0,0,56,349,1,0,0,0,58,366,
1,0,0,0,60,388,1,0,0,0,62,390,1,0,0,0,64,397,1,0,0,0,66,402,1,0,0,0,68,407,
1,0,0,0,70,416,1,0,0,0,72,418,1,0,0,0,74,430,1,0,0,0,76,450,1,0,0,0,78,452,
1,0,0,0,80,466,1,0,0,0,82,479,1,0,0,0,84,481,1,0,0,0,86,483,1,0,0,0,88,485,
1,0,0,0,90,487,1,0,0,0,92,97,3,2,1,0,93,97,3,46,23,0,94,97,3,42,21,0,95,
97,3,44,22,0,96,92,1,0,0,0,96,93,1,0,0,0,96,94,1,0,0,0,96,95,1,0,0,0,97,
100,1,0,0,0,98,96,1,0,0,0,98,99,1,0,0,0,99,101,1,0,0,0,100,98,1,0,0,0,101,
102,5,0,0,1,102,1,1,0,0,0,103,112,3,4,2,0,104,112,3,6,3,0,105,112,3,8,4,
0,106,112,3,18,9,0,107,112,3,20,10,0,108,112,3,28,14,0,109,112,3,32,16,0,
110,112,3,34,17,0,111,103,1,0,0,0,111,104,1,0,0,0,111,105,1,0,0,0,111,106,
1,0,0,0,111,107,1,0,0,0,111,108,1,0,0,0,111,109,1,0,0,0,111,110,1,0,0,0,
112,3,1,0,0,0,113,114,5,1,0,0,114,115,5,25,0,0,115,116,5,2,0,0,116,117,3,
76,38,0,117,118,5,23,0,0,118,5,1,0,0,0,119,120,3,22,11,0,120,121,5,23,0,
0,121,7,1,0,0,0,122,123,3,10,5,0,123,124,5,3,0,0,124,125,3,24,12,0,125,126,
5,23,0,0,126,9,1,0,0,0,127,129,3,88,44,0,128,127,1,0,0,0,128,129,1,0,0,0,
129,130,1,0,0,0,130,132,5,4,0,0,131,133,3,12,6,0,132,131,1,0,0,0,132,133,
1,0,0,0,133,134,1,0,0,0,134,136,5,5,0,0,135,137,3,90,45,0,136,135,1,0,0,
0,136,137,1,0,0,0,137,11,1,0,0,0,138,143,3,14,7,0,139,140,5,6,0,0,140,142,
3,14,7,0,141,139,1,0,0,0,142,145,1,0,0,0,143,141,1,0,0,0,143,144,1,0,0,0,
144,158,1,0,0,0,145,143,1,0,0,0,146,156,5,7,0,0,147,153,3,16,8,0,148,152,
5,8,0,0,149,150,5,6,0,0,150,152,3,16,8,0,151,148,1,0,0,0,151,149,1,0,0,0,
152,155,1,0,0,0,153,151,1,0,0,0,153,154,1,0,0,0,154,157,1,0,0,0,155,153,
1,0,0,0,156,147,1,0,0,0,156,157,1,0,0,0,157,159,1,0,0,0,158,146,1,0,0,0,
158,159,1,0,0,0,159,13,1,0,0,0,160,170,3,48,24,0,161,163,5,19,0,0,162,161,
1,0,0,0,162,163,1,0,0,0,163,164,1,0,0,0,164,170,3,62,31,0,165,167,5,19,0,
0,166,165,1,0,0,0,166,167,1,0,0,0,167,168,1,0,0,0,168,170,3,54,27,0,169,
160,1,0,0,0,169,162,1,0,0,0,169,166,1,0,0,0,170,15,1,0,0,0,171,181,3,48,
24,0,172,174,5,19,0,0,173,172,1,0,0,0,173,174,1,0,0,0,174,175,1,0,0,0,175,
181,3,62,31,0,176,178,5,19,0,0,177,176,1,0,0,0,177,178,1,0,0,0,178,179,1,
0,0,0,179,181,3,54,27,0,180,171,1,0,0,0,180,173,1,0,0,0,180,177,1,0,0,0,
181,17,1,0,0,0,182,183,3,22,11,0,183,184,5,3,0,0,184,185,3,24,12,0,185,186,
5,23,0,0,186,19,1,0,0,0,187,188,5,3,0,0,188,189,3,24,12,0,189,190,5,23,0,
0,190,21,1,0,0,0,191,196,3,26,13,0,192,193,5,6,0,0,193,195,3,26,13,0,194,
192,1,0,0,0,195,198,1,0,0,0,196,194,1,0,0,0,196,197,1,0,0,0,197,23,1,0,0,
0,198,196,1,0,0,0,199,204,3,26,13,0,200,201,5,8,0,0,201,203,3,26,13,0,202,
200,1,0,0,0,203,206,1,0,0,0,204,202,1,0,0,0,204,205,1,0,0,0,205,25,1,0,0,
0,206,204,1,0,0,0,207,222,3,48,24,0,208,210,5,19,0,0,209,208,1,0,0,0,209,
210,1,0,0,0,210,211,1,0,0,0,211,222,3,54,27,0,212,222,3,56,28,0,213,215,
5,19,0,0,214,213,1,0,0,0,214,215,1,0,0,0,215,216,1,0,0,0,216,222,3,62,31,
0,217,219,5,19,0,0,218,217,1,0,0,0,218,219,1,0,0,0,219,220,1,0,0,0,220,222,
3,10,5,0,221,207,1,0,0,0,221,209,1,0,0,0,221,212,1,0,0,0,221,214,1,0,0,0,
221,218,1,0,0,0,222,27,1,0,0,0,223,224,5,9,0,0,224,225,5,4,0,0,225,230,3,
30,15,0,226,227,5,6,0,0,227,229,3,30,15,0,228,226,1,0,0,0,229,232,1,0,0,
0,230,228,1,0,0,0,230,231,1,0,0,0,231,233,1,0,0,0,232,230,1,0,0,0,233,234,
5,10,0,0,234,249,1,0,0,0,235,236,5,11,0,0,236,237,5,4,0,0,237,242,3,30,15,
0,238,239,5,6,0,0,239,241,3,30,15,0,240,238,1,0,0,0,241,244,1,0,0,0,242,
240,1,0,0,0,242,243,1,0,0,0,243,245,1,0,0,0,244,242,1,0,0,0,245,246,5,5,
0,0,246,247,5,23,0,0,247,249,1,0,0,0,248,223,1,0,0,0,248,235,1,0,0,0,249,
29,1,0,0,0,250,251,3,84,42,0,251,252,5,12,0,0,252,253,3,86,43,0,253,254,
5,8,0,0,254,256,1,0,0,0,255,250,1,0,0,0,255,256,1,0,0,0,256,257,1,0,0,0,
257,258,3,58,29,0,258,31,1,0,0,0,259,260,5,13,0,0,260,261,3,24,12,0,261,
262,5,23,0,0,262,268,5,14,0,0,263,264,3,84,42,0,264,265,5,12,0,0,265,266,
3,86,43,0,266,267,5,8,0,0,267,269,1,0,0,0,268,263,1,0,0,0,268,269,1,0,0,
0,269,271,1,0,0,0,270,272,5,35,0,0,271,270,1,0,0,0,271,272,1,0,0,0,272,273,
1,0,0,0,273,281,3,68,34,0,274,276,5,8,0,0,275,277,5,35,0,0,276,275,1,0,0,
0,276,277,1,0,0,0,277,278,1,0,0,0,278,280,3,68,34,0,279,274,1,0,0,0,280,
283,1,0,0,0,281,279,1,0,0,0,281,282,1,0,0,0,282,284,1,0,0,0,283,281,1,0,
0,0,284,285,5,24,0,0,285,33,1,0,0,0,286,287,3,36,18,0,287,288,5,23,0,0,288,
296,1,0,0,0,289,290,3,38,19,0,290,291,5,23,0,0,291,296,1,0,0,0,292,293,3,
40,20,0,293,294,5,23,0,0,294,296,1,0,0,0,295,286,1,0,0,0,295,289,1,0,0,0,
295,292,1,0,0,0,296,35,1,0,0,0,297,298,5,15,0,0,298,299,5,25,0,0,299,300,
5,16,0,0,300,301,5,30,0,0,301,37,1,0,0,0,302,303,5,15,0,0,303,304,3,68,34,
0,304,305,5,7,0,0,305,310,3,48,24,0,306,307,5,8,0,0,307,309,3,48,24,0,308,
306,1,0,0,0,309,312,1,0,0,0,310,308,1,0,0,0,310,311,1,0,0,0,311,39,1,0,0,
0,312,310,1,0,0,0,313,314,5,15,0,0,314,41,1,0,0,0,315,316,5,20,0,0,316,43,
1,0,0,0,317,318,5,21,0,0,318,45,1,0,0,0,319,320,5,22,0,0,320,47,1,0,0,0,
321,323,5,19,0,0,322,321,1,0,0,0,322,323,1,0,0,0,323,324,1,0,0,0,324,325,
3,50,25,0,325,49,1,0,0,0,326,328,5,35,0,0,327,326,1,0,0,0,327,328,1,0,0,
0,328,329,1,0,0,0,329,330,3,52,26,0,330,51,1,0,0,0,331,343,5,25,0,0,332,
333,5,17,0,0,333,338,3,68,34,0,334,335,5,8,0,0,335,337,3,68,34,0,336,334,
1,0,0,0,337,340,1,0,0,0,338,336,1,0,0,0,338,339,1,0,0,0,339,341,1,0,0,0,
340,338,1,0,0,0,341,342,5,18,0,0,342,344,1,0,0,0,343,332,1,0,0,0,343,344,
1,0,0,0,344,53,1,0,0,0,345,346,3,68,34,0,346,347,5,33,0,0,347,348,3,68,34,
0,348,55,1,0,0,0,349,350,5,34,0,0,350,359,5,4,0,0,351,356,3,58,29,0,352,
353,5,6,0,0,353,355,3,58,29,0,354,352,1,0,0,0,355,358,1,0,0,0,356,354,1,
0,0,0,356,357,1,0,0,0,357,360,1,0,0,0,358,356,1,0,0,0,359,351,1,0,0,0,359,
360,1,0,0,0,360,361,1,0,0,0,361,364,5,5,0,0,362,363,5,33,0,0,363,365,3,68,
34,0,364,362,1,0,0,0,364,365,1,0,0,0,365,57,1,0,0,0,366,371,3,68,34,0,367,
368,5,8,0,0,368,370,3,68,34,0,369,367,1,0,0,0,370,373,1,0,0,0,371,369,1,
0,0,0,371,372,1,0,0,0,372,374,1,0,0,0,373,371,1,0,0,0,374,375,5,7,0,0,375,
380,3,60,30,0,376,377,5,8,0,0,377,379,3,60,30,0,378,376,1,0,0,0,379,382,
1,0,0,0,380,378,1,0,0,0,380,381,1,0,0,0,381,59,1,0,0,0,382,380,1,0,0,0,383,
389,3,48,24,0,384,386,5,19,0,0,385,384,1,0,0,0,385,386,1,0,0,0,386,387,1,
0,0,0,387,389,3,54,27,0,388,383,1,0,0,0,388,385,1,0,0,0,389,61,1,0,0,0,390,
391,3,64,32,0,391,392,5,2,0,0,392,393,3,66,33,0,393,63,1,0,0,0,394,398,3,
68,34,0,395,398,3,56,28,0,396,398,3,48,24,0,397,394,1,0,0,0,397,395,1,0,
0,0,397,396,1,0,0,0,398,65,1,0,0,0,399,403,3,68,34,0,400,403,3,50,25,0,401,
403,3,56,28,0,402,399,1,0,0,0,402,400,1,0,0,0,402,401,1,0,0,0,403,67,1,0,
0,0,404,408,3,70,35,0,405,408,3,72,36,0,406,408,3,74,37,0,407,404,1,0,0,
0,407,405,1,0,0,0,407,406,1,0,0,0,408,69,1,0,0,0,409,417,3,82,41,0,410,417,
5,25,0,0,411,417,5,32,0,0,412,417,5,26,0,0,413,417,5,27,0,0,414,417,5,28,
0,0,415,417,5,29,0,0,416,409,1,0,0,0,416,410,1,0,0,0,416,411,1,0,0,0,416,
412,1,0,0,0,416,413,1,0,0,0,416,414,1,0,0,0,416,415,1,0,0,0,417,71,1,0,0,
0,418,419,5,25,0,0,419,420,5,17,0,0,420,425,3,68,34,0,421,422,5,8,0,0,422,
424,3,68,34,0,423,421,1,0,0,0,424,427,1,0,0,0,425,423,1,0,0,0,425,426,1,
0,0,0,426,428,1,0,0,0,427,425,1,0,0,0,428,429,5,18,0,0,429,73,1,0,0,0,430,
439,5,17,0,0,431,436,3,68,34,0,432,433,5,8,0,0,433,435,3,68,34,0,434,432,
1,0,0,0,435,438,1,0,0,0,436,434,1,0,0,0,436,437,1,0,0,0,437,440,1,0,0,0,
438,436,1,0,0,0,439,431,1,0,0,0,439,440,1,0,0,0,440,441,1,0,0,0,441,442,
5,18,0,0,442,75,1,0,0,0,443,451,3,82,41,0,444,451,5,25,0,0,445,451,5,32,
0,0,446,451,5,28,0,0,447,451,5,29,0,0,448,451,3,78,39,0,449,451,3,80,40,
0,450,443,1,0,0,0,450,444,1,0,0,0,450,445,1,0,0,0,450,446,1,0,0,0,450,447,
1,0,0,0,450,448,1,0,0,0,450,449,1,0,0,0,451,77,1,0,0,0,452,453,5,25,0,0,
453,462,5,17,0,0,454,459,3,76,38,0,455,456,5,8,0,0,456,458,3,76,38,0,457,
455,1,0,0,0,458,461,1,0,0,0,459,457,1,0,0,0,459,460,1,0,0,0,460,463,1,0,
0,0,461,459,1,0,0,0,462,454,1,0,0,0,462,463,1,0,0,0,463,464,1,0,0,0,464,
465,5,18,0,0,465,79,1,0,0,0,466,475,5,17,0,0,467,472,3,76,38,0,468,469,5,
8,0,0,469,471,3,76,38,0,470,468,1,0,0,0,471,474,1,0,0,0,472,470,1,0,0,0,
472,473,1,0,0,0,473,476,1,0,0,0,474,472,1,0,0,0,475,467,1,0,0,0,475,476,
1,0,0,0,476,477,1,0,0,0,477,478,5,18,0,0,478,81,1,0,0,0,479,480,7,0,0,0,
480,83,1,0,0,0,481,482,3,82,41,0,482,85,1,0,0,0,483,484,3,82,41,0,484,87,
1,0,0,0,485,486,3,82,41,0,486,89,1,0,0,0,487,488,3,82,41,0,488,91,1,0,0,
0,56,96,98,111,128,132,136,143,151,153,156,158,162,166,169,173,177,180,196,
204,209,214,218,221,230,242,248,255,268,271,276,281,295,310,322,327,338,
343,356,359,364,371,380,385,388,397,402,407,416,425,436,439,450,459,462,
472,475];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class ASPParser extends antlr4.Parser {

    static grammarFileName = "ASP.g4";
    static literalNames = [ null, "'#const'", "'='", "':-'", "'{'", "'}'", 
                            "';'", "':'", "','", "'#minimize'", "'} DOT'", 
                            "'#maximize'", "'@'", "':~'", "'['", "'#show'", 
                            "'/'", "'('", "')'", "'not'", null, null, null, 
                            "'.'", "']'", null, null, "'_'", "'#sup'", "'#inf'", 
                            null, null, null, null, null, "'-'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, "NOT", "BLOCK_COMMENT", "UNCLOSED_COMMENT", 
                             "LINE_COMMENT", "DOT", "EOWC", "CONSTANT", 
                             "VARIABLE", "UNDERSCORE", "SUP", "INF", "NUMBER", 
                             "INTERVAL", "STRING", "COMPARATOR", "AGGREGATE_FUNCTION", 
                             "CLASSICAL_NEGATION", "WS" ];
    static ruleNames = [ "program", "statement", "constant", "fact", "choice_rule", 
                         "choice", "choice_body", "choiceHead_atoms", "choiceBody_atoms", 
                         "definite_rule", "constraint", "head", "body", 
                         "rule_atoms", "optimization", "optimizationBody", 
                         "weak_constraint", "show", "show_atoms", "show_terms", 
                         "show_nothing", "block_comment", "unclosed_comment", 
                         "line_comment", "literal", "classical_atom", "atom", 
                         "builtIn_atom", "aggregate_atom", "aggregate_element", 
                         "aggregate_literal", "assignment", "assignee", 
                         "assigned_value", "term", "simpleTerm", "functionTerm", 
                         "tuple", "constant_term", "constant_functionTerm", 
                         "constant_tuple", "integer", "weight", "priority", 
                         "lowerbound", "upperbound" ];

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
	        this.state = 98;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 4269451802) !== 0) || ((((_la - 32)) & ~0x1f) === 0 && ((1 << (_la - 32)) & 13) !== 0)) {
	            this.state = 96;
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
	            case 19:
	            case 25:
	            case 26:
	            case 27:
	            case 28:
	            case 29:
	            case 30:
	            case 31:
	            case 32:
	            case 34:
	            case 35:
	                this.state = 92;
	                this.statement();
	                break;
	            case 22:
	                this.state = 93;
	                this.line_comment();
	                break;
	            case 20:
	                this.state = 94;
	                this.block_comment();
	                break;
	            case 21:
	                this.state = 95;
	                this.unclosed_comment();
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }
	            this.state = 100;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 101;
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
	        this.state = 111;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,2,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 103;
	            this.constant();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 104;
	            this.fact();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 105;
	            this.choice_rule();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 106;
	            this.definite_rule();
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 107;
	            this.constraint();
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 108;
	            this.optimization();
	            break;

	        case 7:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 109;
	            this.weak_constraint();
	            break;

	        case 8:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 110;
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
	        this.state = 113;
	        this.match(ASPParser.T__0);
	        this.state = 114;
	        this.match(ASPParser.CONSTANT);
	        this.state = 115;
	        this.match(ASPParser.T__1);
	        this.state = 116;
	        this.constant_term();
	        this.state = 117;
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
	        this.state = 119;
	        this.head();
	        this.state = 120;
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
	        this.state = 122;
	        this.choice();
	        this.state = 123;
	        this.match(ASPParser.T__2);
	        this.state = 124;
	        this.body();
	        this.state = 125;
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
	        this.state = 128;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===30 || _la===31) {
	            this.state = 127;
	            this.lowerbound();
	        }

	        this.state = 130;
	        this.match(ASPParser.T__3);
	        this.state = 132;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(((((_la - 17)) & ~0x1f) === 0 && ((1 << (_la - 17)) & 458501) !== 0)) {
	            this.state = 131;
	            this.choice_body();
	        }

	        this.state = 134;
	        this.match(ASPParser.T__4);
	        this.state = 136;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===30 || _la===31) {
	            this.state = 135;
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
	        this.state = 138;
	        this.choiceHead_atoms();
	        this.state = 143;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===6) {
	            this.state = 139;
	            this.match(ASPParser.T__5);
	            this.state = 140;
	            this.choiceHead_atoms();
	            this.state = 145;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 158;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===7) {
	            this.state = 146;
	            this.match(ASPParser.T__6);
	            this.state = 156;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(((((_la - 17)) & ~0x1f) === 0 && ((1 << (_la - 17)) & 458501) !== 0)) {
	                this.state = 147;
	                this.choiceBody_atoms();
	                this.state = 153;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                while(_la===6 || _la===8) {
	                    this.state = 151;
	                    this._errHandler.sync(this);
	                    switch(this._input.LA(1)) {
	                    case 8:
	                        this.state = 148;
	                        this.match(ASPParser.T__7);
	                        break;
	                    case 6:
	                        this.state = 149;
	                        this.match(ASPParser.T__5);
	                        this.state = 150;
	                        this.choiceBody_atoms();
	                        break;
	                    default:
	                        throw new antlr4.error.NoViableAltException(this);
	                    }
	                    this.state = 155;
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
	    this.enterRule(localctx, 14, ASPParser.RULE_choiceHead_atoms);
	    var _la = 0;
	    try {
	        this.state = 169;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,13,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 160;
	            this.literal();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 162;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,11,this._ctx);
	            if(la_===1) {
	                this.state = 161;
	                this.match(ASPParser.NOT);

	            }
	            this.state = 164;
	            this.assignment();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 166;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===19) {
	                this.state = 165;
	                this.match(ASPParser.NOT);
	            }

	            this.state = 168;
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
	    this.enterRule(localctx, 16, ASPParser.RULE_choiceBody_atoms);
	    var _la = 0;
	    try {
	        this.state = 180;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,16,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 171;
	            this.literal();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 173;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,14,this._ctx);
	            if(la_===1) {
	                this.state = 172;
	                this.match(ASPParser.NOT);

	            }
	            this.state = 175;
	            this.assignment();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 177;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===19) {
	                this.state = 176;
	                this.match(ASPParser.NOT);
	            }

	            this.state = 179;
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
	    this.enterRule(localctx, 18, ASPParser.RULE_definite_rule);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 182;
	        this.head();
	        this.state = 183;
	        this.match(ASPParser.T__2);
	        this.state = 184;
	        this.body();
	        this.state = 185;
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
	        this.state = 187;
	        this.match(ASPParser.T__2);
	        this.state = 188;
	        this.body();
	        this.state = 189;
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
	        this.state = 191;
	        this.rule_atoms();
	        this.state = 196;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===6) {
	            this.state = 192;
	            this.match(ASPParser.T__5);
	            this.state = 193;
	            this.rule_atoms();
	            this.state = 198;
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
	        this.state = 199;
	        this.rule_atoms();
	        this.state = 204;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===8) {
	            this.state = 200;
	            this.match(ASPParser.T__7);
	            this.state = 201;
	            this.rule_atoms();
	            this.state = 206;
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
	        this.state = 221;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,22,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 207;
	            this.literal();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 209;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===19) {
	                this.state = 208;
	                this.match(ASPParser.NOT);
	            }

	            this.state = 211;
	            this.builtIn_atom();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 212;
	            this.aggregate_atom();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 214;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,20,this._ctx);
	            if(la_===1) {
	                this.state = 213;
	                this.match(ASPParser.NOT);

	            }
	            this.state = 216;
	            this.assignment();
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 218;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===19) {
	                this.state = 217;
	                this.match(ASPParser.NOT);
	            }

	            this.state = 220;
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
	        this.state = 248;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 9:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 223;
	            this.match(ASPParser.T__8);
	            this.state = 224;
	            this.match(ASPParser.T__3);
	            this.state = 225;
	            this.optimizationBody();
	            this.state = 230;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===6) {
	                this.state = 226;
	                this.match(ASPParser.T__5);
	                this.state = 227;
	                this.optimizationBody();
	                this.state = 232;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 233;
	            this.match(ASPParser.T__9);
	            break;
	        case 11:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 235;
	            this.match(ASPParser.T__10);
	            this.state = 236;
	            this.match(ASPParser.T__3);
	            this.state = 237;
	            this.optimizationBody();
	            this.state = 242;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===6) {
	                this.state = 238;
	                this.match(ASPParser.T__5);
	                this.state = 239;
	                this.optimizationBody();
	                this.state = 244;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 245;
	            this.match(ASPParser.T__4);
	            this.state = 246;
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
	        this.state = 255;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,26,this._ctx);
	        if(la_===1) {
	            this.state = 250;
	            this.weight();
	            this.state = 251;
	            this.match(ASPParser.T__11);
	            this.state = 252;
	            this.priority();
	            this.state = 253;
	            this.match(ASPParser.T__7);

	        }
	        this.state = 257;
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
	        this.state = 259;
	        this.match(ASPParser.T__12);
	        this.state = 260;
	        this.body();
	        this.state = 261;
	        this.match(ASPParser.DOT);
	        this.state = 262;
	        this.match(ASPParser.T__13);
	        this.state = 268;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,27,this._ctx);
	        if(la_===1) {
	            this.state = 263;
	            this.weight();
	            this.state = 264;
	            this.match(ASPParser.T__11);
	            this.state = 265;
	            this.priority();
	            this.state = 266;
	            this.match(ASPParser.T__7);

	        }

	        this.state = 271;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===35) {
	            this.state = 270;
	            this.match(ASPParser.CLASSICAL_NEGATION);
	        }

	        this.state = 273;
	        this.term();
	        this.state = 281;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===8) {
	            this.state = 274;
	            this.match(ASPParser.T__7);
	            this.state = 276;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===35) {
	                this.state = 275;
	                this.match(ASPParser.CLASSICAL_NEGATION);
	            }

	            this.state = 278;
	            this.term();
	            this.state = 283;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 284;
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
	        this.state = 295;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,31,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 286;
	            this.show_atoms();
	            this.state = 287;
	            this.match(ASPParser.DOT);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 289;
	            this.show_terms();
	            this.state = 290;
	            this.match(ASPParser.DOT);
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 292;
	            this.show_nothing();
	            this.state = 293;
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
	        this.state = 297;
	        this.match(ASPParser.T__14);
	        this.state = 298;
	        this.match(ASPParser.CONSTANT);
	        this.state = 299;
	        this.match(ASPParser.T__15);
	        this.state = 300;
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
	        this.state = 302;
	        this.match(ASPParser.T__14);
	        this.state = 303;
	        this.term();
	        this.state = 304;
	        this.match(ASPParser.T__6);
	        this.state = 305;
	        this.literal();
	        this.state = 310;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===8) {
	            this.state = 306;
	            this.match(ASPParser.T__7);
	            this.state = 307;
	            this.literal();
	            this.state = 312;
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
	        this.state = 313;
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
	        this.state = 315;
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
	        this.state = 317;
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
	        this.state = 319;
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
	        this.state = 322;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===19) {
	            this.state = 321;
	            this.match(ASPParser.NOT);
	        }

	        this.state = 324;
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
	        this.state = 327;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===35) {
	            this.state = 326;
	            this.match(ASPParser.CLASSICAL_NEGATION);
	        }

	        this.state = 329;
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
	        this.state = 331;
	        this.match(ASPParser.CONSTANT);
	        this.state = 343;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===17) {
	            this.state = 332;
	            this.match(ASPParser.T__16);
	            this.state = 333;
	            this.term();
	            this.state = 338;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===8) {
	                this.state = 334;
	                this.match(ASPParser.T__7);
	                this.state = 335;
	                this.term();
	                this.state = 340;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 341;
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
	        this.state = 345;
	        this.term();
	        this.state = 346;
	        this.match(ASPParser.COMPARATOR);
	        this.state = 347;
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
	        this.state = 349;
	        this.match(ASPParser.AGGREGATE_FUNCTION);
	        this.state = 350;
	        this.match(ASPParser.T__3);
	        this.state = 359;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(((((_la - 17)) & ~0x1f) === 0 && ((1 << (_la - 17)) & 65281) !== 0)) {
	            this.state = 351;
	            this.aggregate_element();
	            this.state = 356;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===6) {
	                this.state = 352;
	                this.match(ASPParser.T__5);
	                this.state = 353;
	                this.aggregate_element();
	                this.state = 358;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	        }

	        this.state = 361;
	        this.match(ASPParser.T__4);
	        this.state = 364;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===33) {
	            this.state = 362;
	            this.match(ASPParser.COMPARATOR);
	            this.state = 363;
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
	        this.state = 366;
	        this.term();
	        this.state = 371;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===8) {
	            this.state = 367;
	            this.match(ASPParser.T__7);
	            this.state = 368;
	            this.term();
	            this.state = 373;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 374;
	        this.match(ASPParser.T__6);
	        this.state = 375;
	        this.aggregate_literal();
	        this.state = 380;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===8) {
	            this.state = 376;
	            this.match(ASPParser.T__7);
	            this.state = 377;
	            this.aggregate_literal();
	            this.state = 382;
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



	aggregate_literal() {
	    let localctx = new Aggregate_literalContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 60, ASPParser.RULE_aggregate_literal);
	    var _la = 0;
	    try {
	        this.state = 388;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,43,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 383;
	            this.literal();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 385;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===19) {
	                this.state = 384;
	                this.match(ASPParser.NOT);
	            }

	            this.state = 387;
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
	        this.state = 390;
	        this.assignee();
	        this.state = 391;
	        this.match(ASPParser.T__1);
	        this.state = 392;
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
	        this.state = 397;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,44,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 394;
	            this.term();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 395;
	            this.aggregate_atom();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 396;
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
	        this.state = 402;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,45,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 399;
	            this.term();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 400;
	            this.classical_atom();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 401;
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
	        this.state = 407;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,46,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 404;
	            this.simpleTerm();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 405;
	            this.functionTerm();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 406;
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
	        this.state = 416;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 30:
	        case 31:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 409;
	            this.integer();
	            break;
	        case 25:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 410;
	            this.match(ASPParser.CONSTANT);
	            break;
	        case 32:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 411;
	            this.match(ASPParser.STRING);
	            break;
	        case 26:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 412;
	            this.match(ASPParser.VARIABLE);
	            break;
	        case 27:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 413;
	            this.match(ASPParser.UNDERSCORE);
	            break;
	        case 28:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 414;
	            this.match(ASPParser.SUP);
	            break;
	        case 29:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 415;
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
	        this.state = 418;
	        this.match(ASPParser.CONSTANT);
	        this.state = 419;
	        this.match(ASPParser.T__16);
	        this.state = 420;
	        this.term();
	        this.state = 425;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===8) {
	            this.state = 421;
	            this.match(ASPParser.T__7);
	            this.state = 422;
	            this.term();
	            this.state = 427;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 428;
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
	        this.state = 430;
	        this.match(ASPParser.T__16);
	        this.state = 439;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(((((_la - 17)) & ~0x1f) === 0 && ((1 << (_la - 17)) & 65281) !== 0)) {
	            this.state = 431;
	            this.term();
	            this.state = 436;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===8) {
	                this.state = 432;
	                this.match(ASPParser.T__7);
	                this.state = 433;
	                this.term();
	                this.state = 438;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	        }

	        this.state = 441;
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



	constant_term() {
	    let localctx = new Constant_termContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 76, ASPParser.RULE_constant_term);
	    try {
	        this.state = 450;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,51,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 443;
	            this.integer();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 444;
	            this.match(ASPParser.CONSTANT);
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 445;
	            this.match(ASPParser.STRING);
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 446;
	            this.match(ASPParser.SUP);
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 447;
	            this.match(ASPParser.INF);
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 448;
	            this.constant_functionTerm();
	            break;

	        case 7:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 449;
	            this.constant_tuple();
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
	    this.enterRule(localctx, 78, ASPParser.RULE_constant_functionTerm);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 452;
	        this.match(ASPParser.CONSTANT);
	        this.state = 453;
	        this.match(ASPParser.T__16);
	        this.state = 462;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(((((_la - 17)) & ~0x1f) === 0 && ((1 << (_la - 17)) & 63745) !== 0)) {
	            this.state = 454;
	            this.constant_term();
	            this.state = 459;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===8) {
	                this.state = 455;
	                this.match(ASPParser.T__7);
	                this.state = 456;
	                this.constant_term();
	                this.state = 461;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	        }

	        this.state = 464;
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



	constant_tuple() {
	    let localctx = new Constant_tupleContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 80, ASPParser.RULE_constant_tuple);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 466;
	        this.match(ASPParser.T__16);
	        this.state = 475;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(((((_la - 17)) & ~0x1f) === 0 && ((1 << (_la - 17)) & 63745) !== 0)) {
	            this.state = 467;
	            this.constant_term();
	            this.state = 472;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===8) {
	                this.state = 468;
	                this.match(ASPParser.T__7);
	                this.state = 469;
	                this.constant_term();
	                this.state = 474;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	        }

	        this.state = 477;
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
	    this.enterRule(localctx, 82, ASPParser.RULE_integer);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 479;
	        _la = this._input.LA(1);
	        if(!(_la===30 || _la===31)) {
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
	    this.enterRule(localctx, 84, ASPParser.RULE_weight);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 481;
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
	    this.enterRule(localctx, 86, ASPParser.RULE_priority);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 483;
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
	    this.enterRule(localctx, 88, ASPParser.RULE_lowerbound);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 485;
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
	    this.enterRule(localctx, 90, ASPParser.RULE_upperbound);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 487;
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
ASPParser.NOT = 19;
ASPParser.BLOCK_COMMENT = 20;
ASPParser.UNCLOSED_COMMENT = 21;
ASPParser.LINE_COMMENT = 22;
ASPParser.DOT = 23;
ASPParser.EOWC = 24;
ASPParser.CONSTANT = 25;
ASPParser.VARIABLE = 26;
ASPParser.UNDERSCORE = 27;
ASPParser.SUP = 28;
ASPParser.INF = 29;
ASPParser.NUMBER = 30;
ASPParser.INTERVAL = 31;
ASPParser.STRING = 32;
ASPParser.COMPARATOR = 33;
ASPParser.AGGREGATE_FUNCTION = 34;
ASPParser.CLASSICAL_NEGATION = 35;
ASPParser.WS = 36;

ASPParser.RULE_program = 0;
ASPParser.RULE_statement = 1;
ASPParser.RULE_constant = 2;
ASPParser.RULE_fact = 3;
ASPParser.RULE_choice_rule = 4;
ASPParser.RULE_choice = 5;
ASPParser.RULE_choice_body = 6;
ASPParser.RULE_choiceHead_atoms = 7;
ASPParser.RULE_choiceBody_atoms = 8;
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
ASPParser.RULE_constant_term = 38;
ASPParser.RULE_constant_functionTerm = 39;
ASPParser.RULE_constant_tuple = 40;
ASPParser.RULE_integer = 41;
ASPParser.RULE_weight = 42;
ASPParser.RULE_priority = 43;
ASPParser.RULE_lowerbound = 44;
ASPParser.RULE_upperbound = 45;

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

	choiceHead_atoms = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ChoiceHead_atomsContext);
	    } else {
	        return this.getTypedRuleContext(ChoiceHead_atomsContext,i);
	    }
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
	        listener.enterChoice_body(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ASPListener ) {
	        listener.exitChoice_body(this);
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

	assignment() {
	    return this.getTypedRuleContext(AssignmentContext,0);
	};

	NOT() {
	    return this.getToken(ASPParser.NOT, 0);
	};

	builtIn_atom() {
	    return this.getTypedRuleContext(BuiltIn_atomContext,0);
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

	assignment() {
	    return this.getTypedRuleContext(AssignmentContext,0);
	};

	NOT() {
	    return this.getToken(ASPParser.NOT, 0);
	};

	builtIn_atom() {
	    return this.getTypedRuleContext(BuiltIn_atomContext,0);
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

	NOT() {
	    return this.getToken(ASPParser.NOT, 0);
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
ASPParser.ChoiceHead_atomsContext = ChoiceHead_atomsContext; 
ASPParser.ChoiceBody_atomsContext = ChoiceBody_atomsContext; 
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
ASPParser.Constant_termContext = Constant_termContext; 
ASPParser.Constant_functionTermContext = Constant_functionTermContext; 
ASPParser.Constant_tupleContext = Constant_tupleContext; 
ASPParser.IntegerContext = IntegerContext; 
ASPParser.WeightContext = WeightContext; 
ASPParser.PriorityContext = PriorityContext; 
ASPParser.LowerboundContext = LowerboundContext; 
ASPParser.UpperboundContext = UpperboundContext; 
