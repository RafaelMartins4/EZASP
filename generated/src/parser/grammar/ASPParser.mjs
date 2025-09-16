// Generated from src/parser/grammar/ASP.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import ASPListener from './ASPListener.mjs';
const serializedATN = [4,1,43,658,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,26,7,26,2,27,
7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,2,32,7,32,2,33,7,33,2,34,7,
34,2,35,7,35,2,36,7,36,2,37,7,37,2,38,7,38,2,39,7,39,2,40,7,40,2,41,7,41,
2,42,7,42,2,43,7,43,2,44,7,44,2,45,7,45,2,46,7,46,2,47,7,47,2,48,7,48,2,
49,7,49,2,50,7,50,2,51,7,51,2,52,7,52,2,53,7,53,2,54,7,54,1,0,1,0,1,0,1,
0,5,0,115,8,0,10,0,12,0,118,9,0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
3,1,130,8,1,1,2,1,2,1,2,1,2,1,2,1,2,1,3,1,3,3,3,140,8,3,1,3,1,3,1,4,1,4,
1,4,1,4,1,4,1,5,3,5,150,8,5,1,5,1,5,1,5,1,5,5,5,156,8,5,10,5,12,5,159,9,
5,3,5,161,8,5,1,5,1,5,3,5,165,8,5,1,6,1,6,1,6,1,6,1,6,5,6,172,8,6,10,6,12,
6,175,9,6,3,6,177,8,6,3,6,179,8,6,1,7,1,7,3,7,183,8,7,1,7,3,7,186,8,7,1,
8,1,8,3,8,190,8,8,1,8,3,8,193,8,8,1,9,1,9,1,9,1,9,1,9,1,10,1,10,1,10,1,10,
1,11,1,11,1,11,5,11,207,8,11,10,11,12,11,210,9,11,1,11,3,11,213,8,11,1,12,
1,12,1,12,5,12,218,8,12,10,12,12,12,221,9,12,3,12,223,8,12,1,13,1,13,3,13,
227,8,13,1,13,3,13,230,8,13,1,14,1,14,3,14,234,8,14,1,14,1,14,3,14,238,8,
14,1,14,1,14,3,14,242,8,14,1,14,3,14,245,8,14,1,15,1,15,1,15,1,15,1,15,5,
15,252,8,15,10,15,12,15,255,9,15,3,15,257,8,15,1,15,1,15,1,15,1,15,1,15,
1,15,1,15,5,15,266,8,15,10,15,12,15,269,9,15,3,15,271,8,15,1,15,1,15,3,15,
275,8,15,1,16,1,16,1,16,1,16,1,16,3,16,282,8,16,1,16,1,16,1,17,1,17,1,17,
1,17,1,17,1,17,1,17,1,17,1,17,3,17,295,8,17,1,17,3,17,298,8,17,1,17,1,17,
1,17,3,17,303,8,17,1,17,5,17,306,8,17,10,17,12,17,309,9,17,1,17,1,17,1,18,
1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,3,18,322,8,18,1,19,1,19,1,19,1,19,
1,19,1,20,1,20,1,20,1,20,3,20,333,8,20,1,21,1,21,1,22,1,22,1,23,1,23,1,24,
1,24,1,25,3,25,344,8,25,1,25,1,25,1,26,3,26,349,8,26,1,26,1,26,1,27,1,27,
1,27,1,27,1,27,5,27,358,8,27,10,27,12,27,361,9,27,3,27,363,8,27,1,27,3,27,
366,8,27,1,28,1,28,1,28,1,28,1,29,1,29,1,29,1,29,1,29,5,29,377,8,29,10,29,
12,29,380,9,29,3,29,382,8,29,1,29,1,29,1,29,3,29,387,8,29,1,29,1,29,1,29,
3,29,392,8,29,1,29,1,29,1,29,1,29,1,29,5,29,399,8,29,10,29,12,29,402,9,29,
3,29,404,8,29,1,29,3,29,407,8,29,1,30,1,30,1,30,5,30,412,8,30,10,30,12,30,
415,9,30,1,30,1,30,1,30,1,31,1,31,1,31,1,31,1,31,5,31,425,8,31,10,31,12,
31,428,9,31,3,31,430,8,31,1,31,1,31,1,31,3,31,435,8,31,1,31,1,31,1,31,3,
31,440,8,31,1,31,1,31,1,31,1,31,1,31,5,31,447,8,31,10,31,12,31,450,9,31,
3,31,452,8,31,1,31,3,31,455,8,31,1,32,1,32,1,32,5,32,460,8,32,10,32,12,32,
463,9,32,3,32,465,8,32,1,32,1,32,1,32,1,32,5,32,471,8,32,10,32,12,32,474,
9,32,3,32,476,8,32,3,32,478,8,32,1,33,1,33,1,33,5,33,483,8,33,10,33,12,33,
486,9,33,1,33,1,33,1,33,1,33,5,33,492,8,33,10,33,12,33,495,9,33,3,33,497,
8,33,3,33,499,8,33,1,34,1,34,3,34,503,8,34,1,34,3,34,506,8,34,1,35,1,35,
1,36,3,36,511,8,36,1,36,1,36,1,36,5,36,516,8,36,10,36,12,36,519,9,36,1,37,
1,37,1,37,5,37,524,8,37,10,37,12,37,527,9,37,1,38,1,38,1,38,5,38,532,8,38,
10,38,12,38,535,9,38,1,39,1,39,1,39,1,39,1,39,1,39,1,39,3,39,544,8,39,1,
40,1,40,1,40,1,40,1,40,1,40,1,40,3,40,553,8,40,1,41,1,41,1,41,1,41,1,41,
5,41,560,8,41,10,41,12,41,563,9,41,3,41,565,8,41,1,41,1,41,1,42,1,42,1,42,
1,42,1,42,1,42,5,42,575,8,42,10,42,12,42,578,9,42,1,42,1,42,1,43,1,43,1,
44,1,44,1,44,5,44,587,8,44,10,44,12,44,590,9,44,1,45,1,45,1,45,5,45,595,
8,45,10,45,12,45,598,9,45,1,46,1,46,1,46,5,46,603,8,46,10,46,12,46,606,9,
46,1,47,1,47,1,47,1,47,1,47,1,47,1,47,1,47,1,47,1,47,1,47,3,47,619,8,47,
1,48,1,48,1,48,1,48,1,48,5,48,626,8,48,10,48,12,48,629,9,48,3,48,631,8,48,
1,48,1,48,1,49,1,49,1,49,1,49,5,49,639,8,49,10,49,12,49,642,9,49,3,49,644,
8,49,1,49,1,49,1,50,1,50,1,51,1,51,1,52,1,52,1,53,1,53,1,54,1,54,1,54,0,
0,55,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,
48,50,52,54,56,58,60,62,64,66,68,70,72,74,76,78,80,82,84,86,88,90,92,94,
96,98,100,102,104,106,108,0,5,2,0,4,4,7,7,1,0,30,32,1,0,34,37,1,0,38,41,
1,0,27,28,711,0,116,1,0,0,0,2,129,1,0,0,0,4,131,1,0,0,0,6,139,1,0,0,0,8,
143,1,0,0,0,10,149,1,0,0,0,12,166,1,0,0,0,14,185,1,0,0,0,16,192,1,0,0,0,
18,194,1,0,0,0,20,199,1,0,0,0,22,212,1,0,0,0,24,222,1,0,0,0,26,229,1,0,0,
0,28,244,1,0,0,0,30,274,1,0,0,0,32,281,1,0,0,0,34,285,1,0,0,0,36,321,1,0,
0,0,38,323,1,0,0,0,40,328,1,0,0,0,42,334,1,0,0,0,44,336,1,0,0,0,46,338,1,
0,0,0,48,340,1,0,0,0,50,343,1,0,0,0,52,348,1,0,0,0,54,352,1,0,0,0,56,367,
1,0,0,0,58,406,1,0,0,0,60,408,1,0,0,0,62,454,1,0,0,0,64,464,1,0,0,0,66,479,
1,0,0,0,68,505,1,0,0,0,70,507,1,0,0,0,72,510,1,0,0,0,74,520,1,0,0,0,76,528,
1,0,0,0,78,543,1,0,0,0,80,552,1,0,0,0,82,554,1,0,0,0,84,568,1,0,0,0,86,581,
1,0,0,0,88,583,1,0,0,0,90,591,1,0,0,0,92,599,1,0,0,0,94,618,1,0,0,0,96,620,
1,0,0,0,98,634,1,0,0,0,100,647,1,0,0,0,102,649,1,0,0,0,104,651,1,0,0,0,106,
653,1,0,0,0,108,655,1,0,0,0,110,115,3,2,1,0,111,115,3,48,24,0,112,115,3,
44,22,0,113,115,3,46,23,0,114,110,1,0,0,0,114,111,1,0,0,0,114,112,1,0,0,
0,114,113,1,0,0,0,115,118,1,0,0,0,116,114,1,0,0,0,116,117,1,0,0,0,117,119,
1,0,0,0,118,116,1,0,0,0,119,120,5,0,0,1,120,1,1,0,0,0,121,130,3,4,2,0,122,
130,3,6,3,0,123,130,3,8,4,0,124,130,3,18,9,0,125,130,3,20,10,0,126,130,3,
30,15,0,127,130,3,34,17,0,128,130,3,36,18,0,129,121,1,0,0,0,129,122,1,0,
0,0,129,123,1,0,0,0,129,124,1,0,0,0,129,125,1,0,0,0,129,126,1,0,0,0,129,
127,1,0,0,0,129,128,1,0,0,0,130,3,1,0,0,0,131,132,5,1,0,0,132,133,5,22,0,
0,133,134,5,30,0,0,134,135,3,86,43,0,135,136,5,20,0,0,136,5,1,0,0,0,137,
140,3,22,11,0,138,140,3,10,5,0,139,137,1,0,0,0,139,138,1,0,0,0,140,141,1,
0,0,0,141,142,5,20,0,0,142,7,1,0,0,0,143,144,3,10,5,0,144,145,5,2,0,0,145,
146,3,24,12,0,146,147,5,20,0,0,147,9,1,0,0,0,148,150,3,106,53,0,149,148,
1,0,0,0,149,150,1,0,0,0,150,151,1,0,0,0,151,160,5,3,0,0,152,157,3,12,6,0,
153,154,5,4,0,0,154,156,3,12,6,0,155,153,1,0,0,0,156,159,1,0,0,0,157,155,
1,0,0,0,157,158,1,0,0,0,158,161,1,0,0,0,159,157,1,0,0,0,160,152,1,0,0,0,
160,161,1,0,0,0,161,162,1,0,0,0,162,164,5,5,0,0,163,165,3,108,54,0,164,163,
1,0,0,0,164,165,1,0,0,0,165,11,1,0,0,0,166,178,3,14,7,0,167,176,5,6,0,0,
168,173,3,16,8,0,169,170,5,7,0,0,170,172,3,16,8,0,171,169,1,0,0,0,172,175,
1,0,0,0,173,171,1,0,0,0,173,174,1,0,0,0,174,177,1,0,0,0,175,173,1,0,0,0,
176,168,1,0,0,0,176,177,1,0,0,0,177,179,1,0,0,0,178,167,1,0,0,0,178,179,
1,0,0,0,179,13,1,0,0,0,180,186,3,50,25,0,181,183,5,16,0,0,182,181,1,0,0,
0,182,183,1,0,0,0,183,184,1,0,0,0,184,186,3,56,28,0,185,180,1,0,0,0,185,
182,1,0,0,0,186,15,1,0,0,0,187,193,3,50,25,0,188,190,5,16,0,0,189,188,1,
0,0,0,189,190,1,0,0,0,190,191,1,0,0,0,191,193,3,56,28,0,192,187,1,0,0,0,
192,189,1,0,0,0,193,17,1,0,0,0,194,195,3,22,11,0,195,196,5,2,0,0,196,197,
3,24,12,0,197,198,5,20,0,0,198,19,1,0,0,0,199,200,5,2,0,0,200,201,3,24,12,
0,201,202,5,20,0,0,202,21,1,0,0,0,203,208,3,26,13,0,204,205,7,0,0,0,205,
207,3,26,13,0,206,204,1,0,0,0,207,210,1,0,0,0,208,206,1,0,0,0,208,209,1,
0,0,0,209,213,1,0,0,0,210,208,1,0,0,0,211,213,3,58,29,0,212,203,1,0,0,0,
212,211,1,0,0,0,213,23,1,0,0,0,214,219,3,28,14,0,215,216,7,0,0,0,216,218,
3,28,14,0,217,215,1,0,0,0,218,221,1,0,0,0,219,217,1,0,0,0,219,220,1,0,0,
0,220,223,1,0,0,0,221,219,1,0,0,0,222,214,1,0,0,0,222,223,1,0,0,0,223,25,
1,0,0,0,224,230,3,50,25,0,225,227,5,16,0,0,226,225,1,0,0,0,226,227,1,0,0,
0,227,228,1,0,0,0,228,230,3,56,28,0,229,224,1,0,0,0,229,226,1,0,0,0,230,
27,1,0,0,0,231,245,3,50,25,0,232,234,5,16,0,0,233,232,1,0,0,0,233,234,1,
0,0,0,234,235,1,0,0,0,235,245,3,56,28,0,236,238,5,16,0,0,237,236,1,0,0,0,
237,238,1,0,0,0,238,239,1,0,0,0,239,245,3,62,31,0,240,242,5,16,0,0,241,240,
1,0,0,0,241,242,1,0,0,0,242,243,1,0,0,0,243,245,3,10,5,0,244,231,1,0,0,0,
244,233,1,0,0,0,244,237,1,0,0,0,244,241,1,0,0,0,245,29,1,0,0,0,246,247,5,
8,0,0,247,256,5,3,0,0,248,253,3,32,16,0,249,250,5,4,0,0,250,252,3,32,16,
0,251,249,1,0,0,0,252,255,1,0,0,0,253,251,1,0,0,0,253,254,1,0,0,0,254,257,
1,0,0,0,255,253,1,0,0,0,256,248,1,0,0,0,256,257,1,0,0,0,257,258,1,0,0,0,
258,259,5,5,0,0,259,275,5,20,0,0,260,261,5,9,0,0,261,270,5,3,0,0,262,267,
3,32,16,0,263,264,5,4,0,0,264,266,3,32,16,0,265,263,1,0,0,0,266,269,1,0,
0,0,267,265,1,0,0,0,267,268,1,0,0,0,268,271,1,0,0,0,269,267,1,0,0,0,270,
262,1,0,0,0,270,271,1,0,0,0,271,272,1,0,0,0,272,273,5,5,0,0,273,275,5,20,
0,0,274,246,1,0,0,0,274,260,1,0,0,0,275,31,1,0,0,0,276,277,3,102,51,0,277,
278,5,10,0,0,278,279,3,104,52,0,279,280,5,7,0,0,280,282,1,0,0,0,281,276,
1,0,0,0,281,282,1,0,0,0,282,283,1,0,0,0,283,284,3,66,33,0,284,33,1,0,0,0,
285,286,5,11,0,0,286,287,3,24,12,0,287,288,5,20,0,0,288,294,5,12,0,0,289,
290,3,102,51,0,290,291,5,10,0,0,291,292,3,104,52,0,292,293,5,7,0,0,293,295,
1,0,0,0,294,289,1,0,0,0,294,295,1,0,0,0,295,297,1,0,0,0,296,298,5,34,0,0,
297,296,1,0,0,0,297,298,1,0,0,0,298,299,1,0,0,0,299,307,3,70,35,0,300,302,
5,7,0,0,301,303,5,34,0,0,302,301,1,0,0,0,302,303,1,0,0,0,303,304,1,0,0,0,
304,306,3,70,35,0,305,300,1,0,0,0,306,309,1,0,0,0,307,305,1,0,0,0,307,308,
1,0,0,0,308,310,1,0,0,0,309,307,1,0,0,0,310,311,5,21,0,0,311,35,1,0,0,0,
312,313,3,38,19,0,313,314,5,20,0,0,314,322,1,0,0,0,315,316,3,40,20,0,316,
317,5,20,0,0,317,322,1,0,0,0,318,319,3,42,21,0,319,320,5,20,0,0,320,322,
1,0,0,0,321,312,1,0,0,0,321,315,1,0,0,0,321,318,1,0,0,0,322,37,1,0,0,0,323,
324,5,13,0,0,324,325,5,22,0,0,325,326,5,39,0,0,326,327,5,27,0,0,327,39,1,
0,0,0,328,329,5,13,0,0,329,332,3,70,35,0,330,331,5,6,0,0,331,333,3,24,12,
0,332,330,1,0,0,0,332,333,1,0,0,0,333,41,1,0,0,0,334,335,5,13,0,0,335,43,
1,0,0,0,336,337,5,17,0,0,337,45,1,0,0,0,338,339,5,18,0,0,339,47,1,0,0,0,
340,341,5,19,0,0,341,49,1,0,0,0,342,344,5,16,0,0,343,342,1,0,0,0,343,344,
1,0,0,0,344,345,1,0,0,0,345,346,3,52,26,0,346,51,1,0,0,0,347,349,5,34,0,
0,348,347,1,0,0,0,348,349,1,0,0,0,349,350,1,0,0,0,350,351,3,54,27,0,351,
53,1,0,0,0,352,365,5,22,0,0,353,362,5,14,0,0,354,359,3,70,35,0,355,356,5,
7,0,0,356,358,3,70,35,0,357,355,1,0,0,0,358,361,1,0,0,0,359,357,1,0,0,0,
359,360,1,0,0,0,360,363,1,0,0,0,361,359,1,0,0,0,362,354,1,0,0,0,362,363,
1,0,0,0,363,364,1,0,0,0,364,366,5,15,0,0,365,353,1,0,0,0,365,366,1,0,0,0,
366,55,1,0,0,0,367,368,3,70,35,0,368,369,7,1,0,0,369,370,3,70,35,0,370,57,
1,0,0,0,371,372,5,33,0,0,372,381,5,3,0,0,373,378,3,60,30,0,374,375,5,4,0,
0,375,377,3,60,30,0,376,374,1,0,0,0,377,380,1,0,0,0,378,376,1,0,0,0,378,
379,1,0,0,0,379,382,1,0,0,0,380,378,1,0,0,0,381,373,1,0,0,0,381,382,1,0,
0,0,382,383,1,0,0,0,383,386,5,5,0,0,384,385,7,1,0,0,385,387,3,70,35,0,386,
384,1,0,0,0,386,387,1,0,0,0,387,407,1,0,0,0,388,389,3,70,35,0,389,390,7,
1,0,0,390,392,1,0,0,0,391,388,1,0,0,0,391,392,1,0,0,0,392,393,1,0,0,0,393,
394,5,33,0,0,394,403,5,3,0,0,395,400,3,60,30,0,396,397,5,4,0,0,397,399,3,
60,30,0,398,396,1,0,0,0,399,402,1,0,0,0,400,398,1,0,0,0,400,401,1,0,0,0,
401,404,1,0,0,0,402,400,1,0,0,0,403,395,1,0,0,0,403,404,1,0,0,0,404,405,
1,0,0,0,405,407,5,5,0,0,406,371,1,0,0,0,406,391,1,0,0,0,407,59,1,0,0,0,408,
413,3,70,35,0,409,410,5,7,0,0,410,412,3,70,35,0,411,409,1,0,0,0,412,415,
1,0,0,0,413,411,1,0,0,0,413,414,1,0,0,0,414,416,1,0,0,0,415,413,1,0,0,0,
416,417,5,6,0,0,417,418,3,68,34,0,418,61,1,0,0,0,419,420,5,33,0,0,420,429,
5,3,0,0,421,426,3,64,32,0,422,423,5,4,0,0,423,425,3,64,32,0,424,422,1,0,
0,0,425,428,1,0,0,0,426,424,1,0,0,0,426,427,1,0,0,0,427,430,1,0,0,0,428,
426,1,0,0,0,429,421,1,0,0,0,429,430,1,0,0,0,430,431,1,0,0,0,431,434,5,5,
0,0,432,433,7,1,0,0,433,435,3,70,35,0,434,432,1,0,0,0,434,435,1,0,0,0,435,
455,1,0,0,0,436,437,3,70,35,0,437,438,7,1,0,0,438,440,1,0,0,0,439,436,1,
0,0,0,439,440,1,0,0,0,440,441,1,0,0,0,441,442,5,33,0,0,442,451,5,3,0,0,443,
448,3,64,32,0,444,445,5,4,0,0,445,447,3,64,32,0,446,444,1,0,0,0,447,450,
1,0,0,0,448,446,1,0,0,0,448,449,1,0,0,0,449,452,1,0,0,0,450,448,1,0,0,0,
451,443,1,0,0,0,451,452,1,0,0,0,452,453,1,0,0,0,453,455,5,5,0,0,454,419,
1,0,0,0,454,439,1,0,0,0,455,63,1,0,0,0,456,461,3,70,35,0,457,458,5,7,0,0,
458,460,3,70,35,0,459,457,1,0,0,0,460,463,1,0,0,0,461,459,1,0,0,0,461,462,
1,0,0,0,462,465,1,0,0,0,463,461,1,0,0,0,464,456,1,0,0,0,464,465,1,0,0,0,
465,477,1,0,0,0,466,475,5,6,0,0,467,472,3,68,34,0,468,469,5,7,0,0,469,471,
3,68,34,0,470,468,1,0,0,0,471,474,1,0,0,0,472,470,1,0,0,0,472,473,1,0,0,
0,473,476,1,0,0,0,474,472,1,0,0,0,475,467,1,0,0,0,475,476,1,0,0,0,476,478,
1,0,0,0,477,466,1,0,0,0,477,478,1,0,0,0,478,65,1,0,0,0,479,484,3,70,35,0,
480,481,5,7,0,0,481,483,3,70,35,0,482,480,1,0,0,0,483,486,1,0,0,0,484,482,
1,0,0,0,484,485,1,0,0,0,485,498,1,0,0,0,486,484,1,0,0,0,487,496,5,6,0,0,
488,493,3,68,34,0,489,490,5,7,0,0,490,492,3,68,34,0,491,489,1,0,0,0,492,
495,1,0,0,0,493,491,1,0,0,0,493,494,1,0,0,0,494,497,1,0,0,0,495,493,1,0,
0,0,496,488,1,0,0,0,496,497,1,0,0,0,497,499,1,0,0,0,498,487,1,0,0,0,498,
499,1,0,0,0,499,67,1,0,0,0,500,506,3,50,25,0,501,503,5,16,0,0,502,501,1,
0,0,0,502,503,1,0,0,0,503,504,1,0,0,0,504,506,3,56,28,0,505,500,1,0,0,0,
505,502,1,0,0,0,506,69,1,0,0,0,507,508,3,72,36,0,508,71,1,0,0,0,509,511,
5,34,0,0,510,509,1,0,0,0,510,511,1,0,0,0,511,512,1,0,0,0,512,517,3,74,37,
0,513,514,7,2,0,0,514,516,3,74,37,0,515,513,1,0,0,0,516,519,1,0,0,0,517,
515,1,0,0,0,517,518,1,0,0,0,518,73,1,0,0,0,519,517,1,0,0,0,520,525,3,76,
38,0,521,522,7,3,0,0,522,524,3,76,38,0,523,521,1,0,0,0,524,527,1,0,0,0,525,
523,1,0,0,0,525,526,1,0,0,0,526,75,1,0,0,0,527,525,1,0,0,0,528,533,3,78,
39,0,529,530,5,42,0,0,530,532,3,78,39,0,531,529,1,0,0,0,532,535,1,0,0,0,
533,531,1,0,0,0,533,534,1,0,0,0,534,77,1,0,0,0,535,533,1,0,0,0,536,544,3,
80,40,0,537,544,3,82,41,0,538,544,3,84,42,0,539,540,5,14,0,0,540,541,3,70,
35,0,541,542,5,15,0,0,542,544,1,0,0,0,543,536,1,0,0,0,543,537,1,0,0,0,543,
538,1,0,0,0,543,539,1,0,0,0,544,79,1,0,0,0,545,553,3,100,50,0,546,553,5,
22,0,0,547,553,5,29,0,0,548,553,5,23,0,0,549,553,5,24,0,0,550,553,5,25,0,
0,551,553,5,26,0,0,552,545,1,0,0,0,552,546,1,0,0,0,552,547,1,0,0,0,552,548,
1,0,0,0,552,549,1,0,0,0,552,550,1,0,0,0,552,551,1,0,0,0,553,81,1,0,0,0,554,
555,5,22,0,0,555,564,5,14,0,0,556,561,3,70,35,0,557,558,5,7,0,0,558,560,
3,70,35,0,559,557,1,0,0,0,560,563,1,0,0,0,561,559,1,0,0,0,561,562,1,0,0,
0,562,565,1,0,0,0,563,561,1,0,0,0,564,556,1,0,0,0,564,565,1,0,0,0,565,566,
1,0,0,0,566,567,5,15,0,0,567,83,1,0,0,0,568,569,5,14,0,0,569,570,3,70,35,
0,570,571,5,7,0,0,571,576,3,70,35,0,572,573,5,7,0,0,573,575,3,70,35,0,574,
572,1,0,0,0,575,578,1,0,0,0,576,574,1,0,0,0,576,577,1,0,0,0,577,579,1,0,
0,0,578,576,1,0,0,0,579,580,5,15,0,0,580,85,1,0,0,0,581,582,3,88,44,0,582,
87,1,0,0,0,583,588,3,90,45,0,584,585,7,2,0,0,585,587,3,90,45,0,586,584,1,
0,0,0,587,590,1,0,0,0,588,586,1,0,0,0,588,589,1,0,0,0,589,89,1,0,0,0,590,
588,1,0,0,0,591,596,3,92,46,0,592,593,7,3,0,0,593,595,3,92,46,0,594,592,
1,0,0,0,595,598,1,0,0,0,596,594,1,0,0,0,596,597,1,0,0,0,597,91,1,0,0,0,598,
596,1,0,0,0,599,604,3,94,47,0,600,601,5,42,0,0,601,603,3,94,47,0,602,600,
1,0,0,0,603,606,1,0,0,0,604,602,1,0,0,0,604,605,1,0,0,0,605,93,1,0,0,0,606,
604,1,0,0,0,607,619,3,100,50,0,608,619,5,22,0,0,609,619,5,29,0,0,610,619,
5,25,0,0,611,619,5,26,0,0,612,619,3,96,48,0,613,619,3,98,49,0,614,615,5,
14,0,0,615,616,3,86,43,0,616,617,5,15,0,0,617,619,1,0,0,0,618,607,1,0,0,
0,618,608,1,0,0,0,618,609,1,0,0,0,618,610,1,0,0,0,618,611,1,0,0,0,618,612,
1,0,0,0,618,613,1,0,0,0,618,614,1,0,0,0,619,95,1,0,0,0,620,621,5,22,0,0,
621,630,5,14,0,0,622,627,3,86,43,0,623,624,5,7,0,0,624,626,3,86,43,0,625,
623,1,0,0,0,626,629,1,0,0,0,627,625,1,0,0,0,627,628,1,0,0,0,628,631,1,0,
0,0,629,627,1,0,0,0,630,622,1,0,0,0,630,631,1,0,0,0,631,632,1,0,0,0,632,
633,5,15,0,0,633,97,1,0,0,0,634,643,5,14,0,0,635,640,3,86,43,0,636,637,5,
7,0,0,637,639,3,86,43,0,638,636,1,0,0,0,639,642,1,0,0,0,640,638,1,0,0,0,
640,641,1,0,0,0,641,644,1,0,0,0,642,640,1,0,0,0,643,635,1,0,0,0,643,644,
1,0,0,0,644,645,1,0,0,0,645,646,5,15,0,0,646,99,1,0,0,0,647,648,7,4,0,0,
648,101,1,0,0,0,649,650,3,100,50,0,650,103,1,0,0,0,651,652,3,100,50,0,652,
105,1,0,0,0,653,654,3,100,50,0,654,107,1,0,0,0,655,656,3,100,50,0,656,109,
1,0,0,0,85,114,116,129,139,149,157,160,164,173,176,178,182,185,189,192,208,
212,219,222,226,229,233,237,241,244,253,256,267,270,274,281,294,297,302,
307,321,332,343,348,359,362,365,378,381,386,391,400,403,406,413,426,429,
434,439,448,451,454,461,464,472,475,477,484,493,496,498,502,505,510,517,
525,533,543,552,561,564,576,588,596,604,618,627,630,640,643];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class ASPParser extends antlr4.Parser {

    static grammarFileName = "ASP.g4";
    static literalNames = [ null, "'#const'", "':-'", "'{'", "';'", "'}'", 
                            "':'", "','", "'#minimize'", "'#maximize'", 
                            "'@'", "':~'", "'['", "'#show'", "'('", "')'", 
                            "'not'", null, null, null, "'.'", "']'", null, 
                            null, "'_'", "'#sup'", "'#inf'", null, null, 
                            null, "'='", "'=='", null, null, "'-'", "'+'", 
                            "'?'", "'^'", "'*'", "'/'", "'\\'", "'&'", "'**'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             "NOT", "BLOCK_COMMENT", "UNCLOSED_COMMENT", 
                             "LINE_COMMENT", "DOT", "EOWC", "CONSTANT", 
                             "VARIABLE", "UNDERSCORE", "SUP", "INF", "NUMBER", 
                             "INTERVAL", "STRING", "EQ", "EQEQ", "COMPARATOR", 
                             "AGGREGATE_FUNCTION", "CLASSICAL_NEGATION", 
                             "ADDITION", "OR", "EXCLUSIVE_OR", "MULTIPLICATION", 
                             "DIVISION", "MODULO", "AND", "EXPONENTIATION", 
                             "WS" ];
    static ruleNames = [ "program", "statement", "constant", "fact", "choice_rule", 
                         "choice", "choice_element", "choiceHead_atoms", 
                         "choiceBody_atoms", "definite_rule", "constraint", 
                         "head", "body", "head_atoms", "body_atoms", "optimization", 
                         "optimizationBody", "weak_constraint", "show", 
                         "show_atoms", "show_terms", "show_nothing", "block_comment", 
                         "unclosed_comment", "line_comment", "literal", 
                         "classical_atom", "atom", "builtIn_atom", "aggregate_atom_head", 
                         "aggregate_element_head", "aggregate_atom_body", 
                         "aggregate_element_body", "aggregate_element_optimization", 
                         "aggregate_literal", "term", "additiveTerm", "multiplicativeTerm", 
                         "powerTerm", "unaryTerm", "simpleTerm", "functionTerm", 
                         "tuple", "constant_term", "constant_additiveTerm", 
                         "constant_multiplicativeTerm", "constant_powerTerm", 
                         "constant_unaryTerm", "constant_functionTerm", 
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
	        this.state = 116;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 1070557966) !== 0) || _la===33 || _la===34) {
	            this.state = 114;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case 1:
	            case 2:
	            case 3:
	            case 8:
	            case 9:
	            case 11:
	            case 13:
	            case 14:
	            case 16:
	            case 22:
	            case 23:
	            case 24:
	            case 25:
	            case 26:
	            case 27:
	            case 28:
	            case 29:
	            case 33:
	            case 34:
	                this.state = 110;
	                this.statement();
	                break;
	            case 19:
	                this.state = 111;
	                this.line_comment();
	                break;
	            case 17:
	                this.state = 112;
	                this.block_comment();
	                break;
	            case 18:
	                this.state = 113;
	                this.unclosed_comment();
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }
	            this.state = 118;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 119;
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
	        this.state = 129;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,2,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 121;
	            this.constant();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 122;
	            this.fact();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 123;
	            this.choice_rule();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 124;
	            this.definite_rule();
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 125;
	            this.constraint();
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 126;
	            this.optimization();
	            break;

	        case 7:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 127;
	            this.weak_constraint();
	            break;

	        case 8:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 128;
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
	        this.state = 131;
	        this.match(ASPParser.T__0);
	        this.state = 132;
	        this.match(ASPParser.CONSTANT);
	        this.state = 133;
	        this.match(ASPParser.EQ);
	        this.state = 134;
	        this.constant_term();
	        this.state = 135;
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
	        this.state = 139;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,3,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 137;
	            this.head();
	            break;

	        case 2:
	            this.state = 138;
	            this.choice();
	            break;

	        }
	        this.state = 141;
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
	        this.state = 143;
	        this.choice();
	        this.state = 144;
	        this.match(ASPParser.T__1);
	        this.state = 145;
	        this.body();
	        this.state = 146;
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
	        this.state = 149;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===27 || _la===28) {
	            this.state = 148;
	            this.lowerbound();
	        }

	        this.state = 151;
	        this.match(ASPParser.T__2);
	        this.state = 160;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(((((_la - 14)) & ~0x1f) === 0 && ((1 << (_la - 14)) & 1113861) !== 0)) {
	            this.state = 152;
	            this.choice_element();
	            this.state = 157;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===4) {
	                this.state = 153;
	                this.match(ASPParser.T__3);
	                this.state = 154;
	                this.choice_element();
	                this.state = 159;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	        }

	        this.state = 162;
	        this.match(ASPParser.T__4);
	        this.state = 164;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===27 || _la===28) {
	            this.state = 163;
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



	choice_element() {
	    let localctx = new Choice_elementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, ASPParser.RULE_choice_element);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 166;
	        this.choiceHead_atoms();
	        this.state = 178;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===6) {
	            this.state = 167;
	            this.match(ASPParser.T__5);
	            this.state = 176;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(((((_la - 14)) & ~0x1f) === 0 && ((1 << (_la - 14)) & 1113861) !== 0)) {
	                this.state = 168;
	                this.choiceBody_atoms();
	                this.state = 173;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                while(_la===7) {
	                    this.state = 169;
	                    this.match(ASPParser.T__6);
	                    this.state = 170;
	                    this.choiceBody_atoms();
	                    this.state = 175;
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
	        this.state = 185;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,12,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 180;
	            this.literal();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 182;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===16) {
	                this.state = 181;
	                this.match(ASPParser.NOT);
	            }

	            this.state = 184;
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
	        this.state = 192;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,14,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 187;
	            this.literal();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 189;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===16) {
	                this.state = 188;
	                this.match(ASPParser.NOT);
	            }

	            this.state = 191;
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
	        this.state = 194;
	        this.head();
	        this.state = 195;
	        this.match(ASPParser.T__1);
	        this.state = 196;
	        this.body();
	        this.state = 197;
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



	head() {
	    let localctx = new HeadContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, ASPParser.RULE_head);
	    var _la = 0;
	    try {
	        this.state = 212;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,16,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 203;
	            this.head_atoms();
	            this.state = 208;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===4 || _la===7) {
	                this.state = 204;
	                _la = this._input.LA(1);
	                if(!(_la===4 || _la===7)) {
	                this._errHandler.recoverInline(this);
	                }
	                else {
	                	this._errHandler.reportMatch(this);
	                    this.consume();
	                }
	                this.state = 205;
	                this.head_atoms();
	                this.state = 210;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 211;
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
	    this.enterRule(localctx, 24, ASPParser.RULE_body);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 222;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(((((_la - 3)) & ~0x1f) === 0 && ((1 << (_la - 3)) & 3354929153) !== 0)) {
	            this.state = 214;
	            this.body_atoms();
	            this.state = 219;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===4 || _la===7) {
	                this.state = 215;
	                _la = this._input.LA(1);
	                if(!(_la===4 || _la===7)) {
	                this._errHandler.recoverInline(this);
	                }
	                else {
	                	this._errHandler.reportMatch(this);
	                    this.consume();
	                }
	                this.state = 216;
	                this.body_atoms();
	                this.state = 221;
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
	    this.enterRule(localctx, 26, ASPParser.RULE_head_atoms);
	    var _la = 0;
	    try {
	        this.state = 229;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,20,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 224;
	            this.literal();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 226;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===16) {
	                this.state = 225;
	                this.match(ASPParser.NOT);
	            }

	            this.state = 228;
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
	    this.enterRule(localctx, 28, ASPParser.RULE_body_atoms);
	    var _la = 0;
	    try {
	        this.state = 244;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,24,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 231;
	            this.literal();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 233;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===16) {
	                this.state = 232;
	                this.match(ASPParser.NOT);
	            }

	            this.state = 235;
	            this.builtIn_atom();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 237;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===16) {
	                this.state = 236;
	                this.match(ASPParser.NOT);
	            }

	            this.state = 239;
	            this.aggregate_atom_body();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 241;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===16) {
	                this.state = 240;
	                this.match(ASPParser.NOT);
	            }

	            this.state = 243;
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
	    this.enterRule(localctx, 30, ASPParser.RULE_optimization);
	    var _la = 0;
	    try {
	        this.state = 274;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 8:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 246;
	            this.match(ASPParser.T__7);
	            this.state = 247;
	            this.match(ASPParser.T__2);
	            this.state = 256;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(((((_la - 14)) & ~0x1f) === 0 && ((1 << (_la - 14)) & 1113857) !== 0)) {
	                this.state = 248;
	                this.optimizationBody();
	                this.state = 253;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                while(_la===4) {
	                    this.state = 249;
	                    this.match(ASPParser.T__3);
	                    this.state = 250;
	                    this.optimizationBody();
	                    this.state = 255;
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                }
	            }

	            this.state = 258;
	            this.match(ASPParser.T__4);
	            this.state = 259;
	            this.match(ASPParser.DOT);
	            break;
	        case 9:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 260;
	            this.match(ASPParser.T__8);
	            this.state = 261;
	            this.match(ASPParser.T__2);
	            this.state = 270;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(((((_la - 14)) & ~0x1f) === 0 && ((1 << (_la - 14)) & 1113857) !== 0)) {
	                this.state = 262;
	                this.optimizationBody();
	                this.state = 267;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                while(_la===4) {
	                    this.state = 263;
	                    this.match(ASPParser.T__3);
	                    this.state = 264;
	                    this.optimizationBody();
	                    this.state = 269;
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                }
	            }

	            this.state = 272;
	            this.match(ASPParser.T__4);
	            this.state = 273;
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
	    this.enterRule(localctx, 32, ASPParser.RULE_optimizationBody);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 281;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,30,this._ctx);
	        if(la_===1) {
	            this.state = 276;
	            this.weight();
	            this.state = 277;
	            this.match(ASPParser.T__9);
	            this.state = 278;
	            this.priority();
	            this.state = 279;
	            this.match(ASPParser.T__6);

	        }
	        this.state = 283;
	        this.aggregate_element_optimization();
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
	    this.enterRule(localctx, 34, ASPParser.RULE_weak_constraint);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 285;
	        this.match(ASPParser.T__10);
	        this.state = 286;
	        this.body();
	        this.state = 287;
	        this.match(ASPParser.DOT);
	        this.state = 288;
	        this.match(ASPParser.T__11);
	        this.state = 294;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,31,this._ctx);
	        if(la_===1) {
	            this.state = 289;
	            this.weight();
	            this.state = 290;
	            this.match(ASPParser.T__9);
	            this.state = 291;
	            this.priority();
	            this.state = 292;
	            this.match(ASPParser.T__6);

	        }

	        this.state = 297;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,32,this._ctx);
	        if(la_===1) {
	            this.state = 296;
	            this.match(ASPParser.CLASSICAL_NEGATION);

	        }
	        this.state = 299;
	        this.term();
	        this.state = 307;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===7) {
	            this.state = 300;
	            this.match(ASPParser.T__6);
	            this.state = 302;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,33,this._ctx);
	            if(la_===1) {
	                this.state = 301;
	                this.match(ASPParser.CLASSICAL_NEGATION);

	            }
	            this.state = 304;
	            this.term();
	            this.state = 309;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 310;
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
	    this.enterRule(localctx, 36, ASPParser.RULE_show);
	    try {
	        this.state = 321;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,35,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 312;
	            this.show_atoms();
	            this.state = 313;
	            this.match(ASPParser.DOT);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 315;
	            this.show_terms();
	            this.state = 316;
	            this.match(ASPParser.DOT);
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 318;
	            this.show_nothing();
	            this.state = 319;
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
	    this.enterRule(localctx, 38, ASPParser.RULE_show_atoms);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 323;
	        this.match(ASPParser.T__12);
	        this.state = 324;
	        this.match(ASPParser.CONSTANT);
	        this.state = 325;
	        this.match(ASPParser.DIVISION);
	        this.state = 326;
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
	    this.enterRule(localctx, 40, ASPParser.RULE_show_terms);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 328;
	        this.match(ASPParser.T__12);
	        this.state = 329;
	        this.term();
	        this.state = 332;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===6) {
	            this.state = 330;
	            this.match(ASPParser.T__5);
	            this.state = 331;
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
	    this.enterRule(localctx, 42, ASPParser.RULE_show_nothing);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 334;
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
	    this.enterRule(localctx, 44, ASPParser.RULE_block_comment);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 336;
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
	    this.enterRule(localctx, 46, ASPParser.RULE_unclosed_comment);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 338;
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
	    this.enterRule(localctx, 48, ASPParser.RULE_line_comment);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 340;
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
	    this.enterRule(localctx, 50, ASPParser.RULE_literal);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 343;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===16) {
	            this.state = 342;
	            this.match(ASPParser.NOT);
	        }

	        this.state = 345;
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
	    this.enterRule(localctx, 52, ASPParser.RULE_classical_atom);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 348;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===34) {
	            this.state = 347;
	            this.match(ASPParser.CLASSICAL_NEGATION);
	        }

	        this.state = 350;
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
	    this.enterRule(localctx, 54, ASPParser.RULE_atom);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 352;
	        this.match(ASPParser.CONSTANT);
	        this.state = 365;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===14) {
	            this.state = 353;
	            this.match(ASPParser.T__13);
	            this.state = 362;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(((((_la - 14)) & ~0x1f) === 0 && ((1 << (_la - 14)) & 1113857) !== 0)) {
	                this.state = 354;
	                this.term();
	                this.state = 359;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                while(_la===7) {
	                    this.state = 355;
	                    this.match(ASPParser.T__6);
	                    this.state = 356;
	                    this.term();
	                    this.state = 361;
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                }
	            }

	            this.state = 364;
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
	    this.enterRule(localctx, 56, ASPParser.RULE_builtIn_atom);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 367;
	        this.term();
	        this.state = 368;
	        _la = this._input.LA(1);
	        if(!(((((_la - 30)) & ~0x1f) === 0 && ((1 << (_la - 30)) & 7) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	        this.state = 369;
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
	    this.enterRule(localctx, 58, ASPParser.RULE_aggregate_atom_head);
	    var _la = 0;
	    try {
	        this.state = 406;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,48,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 371;
	            this.match(ASPParser.AGGREGATE_FUNCTION);
	            this.state = 372;
	            this.match(ASPParser.T__2);
	            this.state = 381;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(((((_la - 14)) & ~0x1f) === 0 && ((1 << (_la - 14)) & 1113857) !== 0)) {
	                this.state = 373;
	                this.aggregate_element_head();
	                this.state = 378;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                while(_la===4) {
	                    this.state = 374;
	                    this.match(ASPParser.T__3);
	                    this.state = 375;
	                    this.aggregate_element_head();
	                    this.state = 380;
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                }
	            }

	            this.state = 383;
	            this.match(ASPParser.T__4);
	            this.state = 386;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(((((_la - 30)) & ~0x1f) === 0 && ((1 << (_la - 30)) & 7) !== 0)) {
	                this.state = 384;
	                _la = this._input.LA(1);
	                if(!(((((_la - 30)) & ~0x1f) === 0 && ((1 << (_la - 30)) & 7) !== 0))) {
	                this._errHandler.recoverInline(this);
	                }
	                else {
	                	this._errHandler.reportMatch(this);
	                    this.consume();
	                }
	                this.state = 385;
	                this.term();
	            }

	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 391;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(((((_la - 14)) & ~0x1f) === 0 && ((1 << (_la - 14)) & 1113857) !== 0)) {
	                this.state = 388;
	                this.term();
	                this.state = 389;
	                _la = this._input.LA(1);
	                if(!(((((_la - 30)) & ~0x1f) === 0 && ((1 << (_la - 30)) & 7) !== 0))) {
	                this._errHandler.recoverInline(this);
	                }
	                else {
	                	this._errHandler.reportMatch(this);
	                    this.consume();
	                }
	            }

	            this.state = 393;
	            this.match(ASPParser.AGGREGATE_FUNCTION);
	            this.state = 394;
	            this.match(ASPParser.T__2);
	            this.state = 403;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(((((_la - 14)) & ~0x1f) === 0 && ((1 << (_la - 14)) & 1113857) !== 0)) {
	                this.state = 395;
	                this.aggregate_element_head();
	                this.state = 400;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                while(_la===4) {
	                    this.state = 396;
	                    this.match(ASPParser.T__3);
	                    this.state = 397;
	                    this.aggregate_element_head();
	                    this.state = 402;
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                }
	            }

	            this.state = 405;
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
	    this.enterRule(localctx, 60, ASPParser.RULE_aggregate_element_head);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 408;
	        this.term();
	        this.state = 413;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===7) {
	            this.state = 409;
	            this.match(ASPParser.T__6);
	            this.state = 410;
	            this.term();
	            this.state = 415;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 416;
	        this.match(ASPParser.T__5);
	        this.state = 417;
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
	    this.enterRule(localctx, 62, ASPParser.RULE_aggregate_atom_body);
	    var _la = 0;
	    try {
	        this.state = 454;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,56,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 419;
	            this.match(ASPParser.AGGREGATE_FUNCTION);
	            this.state = 420;
	            this.match(ASPParser.T__2);
	            this.state = 429;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,51,this._ctx);
	            if(la_===1) {
	                this.state = 421;
	                this.aggregate_element_body();
	                this.state = 426;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                while(_la===4) {
	                    this.state = 422;
	                    this.match(ASPParser.T__3);
	                    this.state = 423;
	                    this.aggregate_element_body();
	                    this.state = 428;
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                }

	            }
	            this.state = 431;
	            this.match(ASPParser.T__4);
	            this.state = 434;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(((((_la - 30)) & ~0x1f) === 0 && ((1 << (_la - 30)) & 7) !== 0)) {
	                this.state = 432;
	                _la = this._input.LA(1);
	                if(!(((((_la - 30)) & ~0x1f) === 0 && ((1 << (_la - 30)) & 7) !== 0))) {
	                this._errHandler.recoverInline(this);
	                }
	                else {
	                	this._errHandler.reportMatch(this);
	                    this.consume();
	                }
	                this.state = 433;
	                this.term();
	            }

	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 439;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(((((_la - 14)) & ~0x1f) === 0 && ((1 << (_la - 14)) & 1113857) !== 0)) {
	                this.state = 436;
	                this.term();
	                this.state = 437;
	                _la = this._input.LA(1);
	                if(!(((((_la - 30)) & ~0x1f) === 0 && ((1 << (_la - 30)) & 7) !== 0))) {
	                this._errHandler.recoverInline(this);
	                }
	                else {
	                	this._errHandler.reportMatch(this);
	                    this.consume();
	                }
	            }

	            this.state = 441;
	            this.match(ASPParser.AGGREGATE_FUNCTION);
	            this.state = 442;
	            this.match(ASPParser.T__2);
	            this.state = 451;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,55,this._ctx);
	            if(la_===1) {
	                this.state = 443;
	                this.aggregate_element_body();
	                this.state = 448;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                while(_la===4) {
	                    this.state = 444;
	                    this.match(ASPParser.T__3);
	                    this.state = 445;
	                    this.aggregate_element_body();
	                    this.state = 450;
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                }

	            }
	            this.state = 453;
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
	    this.enterRule(localctx, 64, ASPParser.RULE_aggregate_element_body);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 464;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(((((_la - 14)) & ~0x1f) === 0 && ((1 << (_la - 14)) & 1113857) !== 0)) {
	            this.state = 456;
	            this.term();
	            this.state = 461;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===7) {
	                this.state = 457;
	                this.match(ASPParser.T__6);
	                this.state = 458;
	                this.term();
	                this.state = 463;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	        }

	        this.state = 477;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===6) {
	            this.state = 466;
	            this.match(ASPParser.T__5);
	            this.state = 475;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(((((_la - 14)) & ~0x1f) === 0 && ((1 << (_la - 14)) & 1113861) !== 0)) {
	                this.state = 467;
	                this.aggregate_literal();
	                this.state = 472;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                while(_la===7) {
	                    this.state = 468;
	                    this.match(ASPParser.T__6);
	                    this.state = 469;
	                    this.aggregate_literal();
	                    this.state = 474;
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
	    this.enterRule(localctx, 66, ASPParser.RULE_aggregate_element_optimization);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 479;
	        this.term();
	        this.state = 484;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===7) {
	            this.state = 480;
	            this.match(ASPParser.T__6);
	            this.state = 481;
	            this.term();
	            this.state = 486;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 498;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===6) {
	            this.state = 487;
	            this.match(ASPParser.T__5);
	            this.state = 496;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(((((_la - 14)) & ~0x1f) === 0 && ((1 << (_la - 14)) & 1113861) !== 0)) {
	                this.state = 488;
	                this.aggregate_literal();
	                this.state = 493;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                while(_la===7) {
	                    this.state = 489;
	                    this.match(ASPParser.T__6);
	                    this.state = 490;
	                    this.aggregate_literal();
	                    this.state = 495;
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
	    this.enterRule(localctx, 68, ASPParser.RULE_aggregate_literal);
	    var _la = 0;
	    try {
	        this.state = 505;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,67,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 500;
	            this.literal();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 502;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===16) {
	                this.state = 501;
	                this.match(ASPParser.NOT);
	            }

	            this.state = 504;
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
	    this.enterRule(localctx, 70, ASPParser.RULE_term);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 507;
	        this.additiveTerm();
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
	    this.enterRule(localctx, 72, ASPParser.RULE_additiveTerm);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 510;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===34) {
	            this.state = 509;
	            this.match(ASPParser.CLASSICAL_NEGATION);
	        }

	        this.state = 512;
	        this.multiplicativeTerm();
	        this.state = 517;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(((((_la - 34)) & ~0x1f) === 0 && ((1 << (_la - 34)) & 15) !== 0)) {
	            this.state = 513;
	            _la = this._input.LA(1);
	            if(!(((((_la - 34)) & ~0x1f) === 0 && ((1 << (_la - 34)) & 15) !== 0))) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 514;
	            this.multiplicativeTerm();
	            this.state = 519;
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
	    this.enterRule(localctx, 74, ASPParser.RULE_multiplicativeTerm);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 520;
	        this.powerTerm();
	        this.state = 525;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(((((_la - 38)) & ~0x1f) === 0 && ((1 << (_la - 38)) & 15) !== 0)) {
	            this.state = 521;
	            _la = this._input.LA(1);
	            if(!(((((_la - 38)) & ~0x1f) === 0 && ((1 << (_la - 38)) & 15) !== 0))) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 522;
	            this.powerTerm();
	            this.state = 527;
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
	    this.enterRule(localctx, 76, ASPParser.RULE_powerTerm);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 528;
	        this.unaryTerm();
	        this.state = 533;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===42) {
	            this.state = 529;
	            this.match(ASPParser.EXPONENTIATION);
	            this.state = 530;
	            this.unaryTerm();
	            this.state = 535;
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
	    this.enterRule(localctx, 78, ASPParser.RULE_unaryTerm);
	    try {
	        this.state = 543;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,72,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 536;
	            this.simpleTerm();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 537;
	            this.functionTerm();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 538;
	            this.tuple();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 539;
	            this.match(ASPParser.T__13);
	            this.state = 540;
	            this.term();
	            this.state = 541;
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
	    this.enterRule(localctx, 80, ASPParser.RULE_simpleTerm);
	    try {
	        this.state = 552;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 27:
	        case 28:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 545;
	            this.integer();
	            break;
	        case 22:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 546;
	            this.match(ASPParser.CONSTANT);
	            break;
	        case 29:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 547;
	            this.match(ASPParser.STRING);
	            break;
	        case 23:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 548;
	            this.match(ASPParser.VARIABLE);
	            break;
	        case 24:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 549;
	            this.match(ASPParser.UNDERSCORE);
	            break;
	        case 25:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 550;
	            this.match(ASPParser.SUP);
	            break;
	        case 26:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 551;
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
	    this.enterRule(localctx, 82, ASPParser.RULE_functionTerm);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 554;
	        this.match(ASPParser.CONSTANT);
	        this.state = 555;
	        this.match(ASPParser.T__13);
	        this.state = 564;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(((((_la - 14)) & ~0x1f) === 0 && ((1 << (_la - 14)) & 1113857) !== 0)) {
	            this.state = 556;
	            this.term();
	            this.state = 561;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===7) {
	                this.state = 557;
	                this.match(ASPParser.T__6);
	                this.state = 558;
	                this.term();
	                this.state = 563;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	        }

	        this.state = 566;
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



	tuple() {
	    let localctx = new TupleContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 84, ASPParser.RULE_tuple);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 568;
	        this.match(ASPParser.T__13);
	        this.state = 569;
	        this.term();
	        this.state = 570;
	        this.match(ASPParser.T__6);
	        this.state = 571;
	        this.term();
	        this.state = 576;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===7) {
	            this.state = 572;
	            this.match(ASPParser.T__6);
	            this.state = 573;
	            this.term();
	            this.state = 578;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 579;
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
	    this.enterRule(localctx, 86, ASPParser.RULE_constant_term);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 581;
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
	    this.enterRule(localctx, 88, ASPParser.RULE_constant_additiveTerm);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 583;
	        this.constant_multiplicativeTerm();
	        this.state = 588;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(((((_la - 34)) & ~0x1f) === 0 && ((1 << (_la - 34)) & 15) !== 0)) {
	            this.state = 584;
	            _la = this._input.LA(1);
	            if(!(((((_la - 34)) & ~0x1f) === 0 && ((1 << (_la - 34)) & 15) !== 0))) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 585;
	            this.constant_multiplicativeTerm();
	            this.state = 590;
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
	    this.enterRule(localctx, 90, ASPParser.RULE_constant_multiplicativeTerm);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 591;
	        this.constant_powerTerm();
	        this.state = 596;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(((((_la - 38)) & ~0x1f) === 0 && ((1 << (_la - 38)) & 15) !== 0)) {
	            this.state = 592;
	            _la = this._input.LA(1);
	            if(!(((((_la - 38)) & ~0x1f) === 0 && ((1 << (_la - 38)) & 15) !== 0))) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 593;
	            this.constant_powerTerm();
	            this.state = 598;
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
	    this.enterRule(localctx, 92, ASPParser.RULE_constant_powerTerm);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 599;
	        this.constant_unaryTerm();
	        this.state = 604;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===42) {
	            this.state = 600;
	            this.match(ASPParser.EXPONENTIATION);
	            this.state = 601;
	            this.constant_unaryTerm();
	            this.state = 606;
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
	    this.enterRule(localctx, 94, ASPParser.RULE_constant_unaryTerm);
	    try {
	        this.state = 618;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,80,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 607;
	            this.integer();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 608;
	            this.match(ASPParser.CONSTANT);
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 609;
	            this.match(ASPParser.STRING);
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 610;
	            this.match(ASPParser.SUP);
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 611;
	            this.match(ASPParser.INF);
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 612;
	            this.constant_functionTerm();
	            break;

	        case 7:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 613;
	            this.constant_tuple();
	            break;

	        case 8:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 614;
	            this.match(ASPParser.T__13);
	            this.state = 615;
	            this.constant_term();
	            this.state = 616;
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
	    this.enterRule(localctx, 96, ASPParser.RULE_constant_functionTerm);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 620;
	        this.match(ASPParser.CONSTANT);
	        this.state = 621;
	        this.match(ASPParser.T__13);
	        this.state = 630;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) === 0 && ((1 << _la) & 1044398080) !== 0)) {
	            this.state = 622;
	            this.constant_term();
	            this.state = 627;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===7) {
	                this.state = 623;
	                this.match(ASPParser.T__6);
	                this.state = 624;
	                this.constant_term();
	                this.state = 629;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	        }

	        this.state = 632;
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
	    this.enterRule(localctx, 98, ASPParser.RULE_constant_tuple);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 634;
	        this.match(ASPParser.T__13);
	        this.state = 643;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) === 0 && ((1 << _la) & 1044398080) !== 0)) {
	            this.state = 635;
	            this.constant_term();
	            this.state = 640;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===7) {
	                this.state = 636;
	                this.match(ASPParser.T__6);
	                this.state = 637;
	                this.constant_term();
	                this.state = 642;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	        }

	        this.state = 645;
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
	    this.enterRule(localctx, 100, ASPParser.RULE_integer);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 647;
	        _la = this._input.LA(1);
	        if(!(_la===27 || _la===28)) {
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
	    this.enterRule(localctx, 102, ASPParser.RULE_weight);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 649;
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
	    this.enterRule(localctx, 104, ASPParser.RULE_priority);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 651;
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
	    this.enterRule(localctx, 106, ASPParser.RULE_lowerbound);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 653;
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
	    this.enterRule(localctx, 108, ASPParser.RULE_upperbound);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 655;
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
ASPParser.NOT = 16;
ASPParser.BLOCK_COMMENT = 17;
ASPParser.UNCLOSED_COMMENT = 18;
ASPParser.LINE_COMMENT = 19;
ASPParser.DOT = 20;
ASPParser.EOWC = 21;
ASPParser.CONSTANT = 22;
ASPParser.VARIABLE = 23;
ASPParser.UNDERSCORE = 24;
ASPParser.SUP = 25;
ASPParser.INF = 26;
ASPParser.NUMBER = 27;
ASPParser.INTERVAL = 28;
ASPParser.STRING = 29;
ASPParser.EQ = 30;
ASPParser.EQEQ = 31;
ASPParser.COMPARATOR = 32;
ASPParser.AGGREGATE_FUNCTION = 33;
ASPParser.CLASSICAL_NEGATION = 34;
ASPParser.ADDITION = 35;
ASPParser.OR = 36;
ASPParser.EXCLUSIVE_OR = 37;
ASPParser.MULTIPLICATION = 38;
ASPParser.DIVISION = 39;
ASPParser.MODULO = 40;
ASPParser.AND = 41;
ASPParser.EXPONENTIATION = 42;
ASPParser.WS = 43;

ASPParser.RULE_program = 0;
ASPParser.RULE_statement = 1;
ASPParser.RULE_constant = 2;
ASPParser.RULE_fact = 3;
ASPParser.RULE_choice_rule = 4;
ASPParser.RULE_choice = 5;
ASPParser.RULE_choice_element = 6;
ASPParser.RULE_choiceHead_atoms = 7;
ASPParser.RULE_choiceBody_atoms = 8;
ASPParser.RULE_definite_rule = 9;
ASPParser.RULE_constraint = 10;
ASPParser.RULE_head = 11;
ASPParser.RULE_body = 12;
ASPParser.RULE_head_atoms = 13;
ASPParser.RULE_body_atoms = 14;
ASPParser.RULE_optimization = 15;
ASPParser.RULE_optimizationBody = 16;
ASPParser.RULE_weak_constraint = 17;
ASPParser.RULE_show = 18;
ASPParser.RULE_show_atoms = 19;
ASPParser.RULE_show_terms = 20;
ASPParser.RULE_show_nothing = 21;
ASPParser.RULE_block_comment = 22;
ASPParser.RULE_unclosed_comment = 23;
ASPParser.RULE_line_comment = 24;
ASPParser.RULE_literal = 25;
ASPParser.RULE_classical_atom = 26;
ASPParser.RULE_atom = 27;
ASPParser.RULE_builtIn_atom = 28;
ASPParser.RULE_aggregate_atom_head = 29;
ASPParser.RULE_aggregate_element_head = 30;
ASPParser.RULE_aggregate_atom_body = 31;
ASPParser.RULE_aggregate_element_body = 32;
ASPParser.RULE_aggregate_element_optimization = 33;
ASPParser.RULE_aggregate_literal = 34;
ASPParser.RULE_term = 35;
ASPParser.RULE_additiveTerm = 36;
ASPParser.RULE_multiplicativeTerm = 37;
ASPParser.RULE_powerTerm = 38;
ASPParser.RULE_unaryTerm = 39;
ASPParser.RULE_simpleTerm = 40;
ASPParser.RULE_functionTerm = 41;
ASPParser.RULE_tuple = 42;
ASPParser.RULE_constant_term = 43;
ASPParser.RULE_constant_additiveTerm = 44;
ASPParser.RULE_constant_multiplicativeTerm = 45;
ASPParser.RULE_constant_powerTerm = 46;
ASPParser.RULE_constant_unaryTerm = 47;
ASPParser.RULE_constant_functionTerm = 48;
ASPParser.RULE_constant_tuple = 49;
ASPParser.RULE_integer = 50;
ASPParser.RULE_weight = 51;
ASPParser.RULE_priority = 52;
ASPParser.RULE_lowerbound = 53;
ASPParser.RULE_upperbound = 54;

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

	lowerbound() {
	    return this.getTypedRuleContext(LowerboundContext,0);
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

	aggregate_element_optimization() {
	    return this.getTypedRuleContext(Aggregate_element_optimizationContext,0);
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
ASPParser.WeightContext = WeightContext; 
ASPParser.PriorityContext = PriorityContext; 
ASPParser.LowerboundContext = LowerboundContext; 
ASPParser.UpperboundContext = UpperboundContext; 
