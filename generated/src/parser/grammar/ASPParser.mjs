// Generated from src/parser/grammar/ASP.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import ASPListener from './ASPListener.mjs';
const serializedATN = [4,1,35,571,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,26,7,26,2,27,
7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,2,32,7,32,2,33,7,33,2,34,7,
34,2,35,7,35,2,36,7,36,2,37,7,37,2,38,7,38,2,39,7,39,2,40,7,40,2,41,7,41,
2,42,7,42,2,43,7,43,2,44,7,44,2,45,7,45,2,46,7,46,2,47,7,47,2,48,7,48,2,
49,7,49,1,0,1,0,1,0,1,0,5,0,105,8,0,10,0,12,0,108,9,0,1,0,1,0,1,1,1,1,1,
1,1,1,1,1,1,1,1,1,1,1,3,1,120,8,1,1,2,1,2,1,2,1,2,1,2,1,2,1,3,1,3,1,3,1,
4,1,4,1,4,1,4,1,4,1,5,3,5,137,8,5,1,5,1,5,1,5,1,5,5,5,143,8,5,10,5,12,5,
146,9,5,3,5,148,8,5,1,5,1,5,3,5,152,8,5,1,6,1,6,1,6,1,6,1,6,5,6,159,8,6,
10,6,12,6,162,9,6,3,6,164,8,6,3,6,166,8,6,1,7,1,7,3,7,170,8,7,1,7,1,7,3,
7,174,8,7,1,7,3,7,177,8,7,1,8,1,8,3,8,181,8,8,1,8,1,8,3,8,185,8,8,1,8,3,
8,188,8,8,1,9,1,9,1,9,1,9,1,9,1,10,1,10,1,10,1,10,1,11,1,11,1,11,5,11,202,
8,11,10,11,12,11,205,9,11,1,11,1,11,3,11,209,8,11,1,12,1,12,1,12,5,12,214,
8,12,10,12,12,12,217,9,12,1,13,1,13,3,13,221,8,13,1,13,1,13,3,13,225,8,13,
1,14,1,14,3,14,229,8,14,1,14,1,14,1,14,1,14,3,14,235,8,14,1,15,1,15,1,15,
1,15,1,15,5,15,242,8,15,10,15,12,15,245,9,15,3,15,247,8,15,1,15,1,15,1,15,
1,15,1,15,1,15,1,15,5,15,256,8,15,10,15,12,15,259,9,15,3,15,261,8,15,1,15,
1,15,3,15,265,8,15,1,16,1,16,1,16,1,16,1,16,3,16,272,8,16,1,16,1,16,1,17,
1,17,1,17,1,17,1,17,1,17,1,17,1,17,1,17,3,17,285,8,17,1,17,3,17,288,8,17,
1,17,1,17,1,17,3,17,293,8,17,1,17,5,17,296,8,17,10,17,12,17,299,9,17,1,17,
1,17,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,3,18,312,8,18,1,19,1,19,
1,19,1,19,1,19,1,20,1,20,1,20,1,20,1,20,1,20,5,20,325,8,20,10,20,12,20,328,
9,20,1,21,1,21,1,22,1,22,1,23,1,23,1,24,1,24,1,25,3,25,339,8,25,1,25,1,25,
1,26,3,26,344,8,26,1,26,1,26,1,27,1,27,1,27,1,27,1,27,5,27,353,8,27,10,27,
12,27,356,9,27,3,27,358,8,27,1,27,3,27,361,8,27,1,28,1,28,1,28,1,28,1,29,
1,29,1,29,1,29,1,29,5,29,372,8,29,10,29,12,29,375,9,29,3,29,377,8,29,1,29,
1,29,1,29,3,29,382,8,29,1,30,1,30,1,30,5,30,387,8,30,10,30,12,30,390,9,30,
1,30,1,30,1,30,1,30,5,30,396,8,30,10,30,12,30,399,9,30,1,31,1,31,1,31,1,
31,1,31,5,31,406,8,31,10,31,12,31,409,9,31,3,31,411,8,31,1,31,1,31,1,31,
3,31,416,8,31,1,32,1,32,1,32,5,32,421,8,32,10,32,12,32,424,9,32,3,32,426,
8,32,1,32,1,32,1,32,1,32,5,32,432,8,32,10,32,12,32,435,9,32,3,32,437,8,32,
3,32,439,8,32,1,33,1,33,1,33,5,33,444,8,33,10,33,12,33,447,9,33,1,33,1,33,
1,33,1,33,5,33,453,8,33,10,33,12,33,456,9,33,3,33,458,8,33,3,33,460,8,33,
1,34,1,34,3,34,464,8,34,1,34,3,34,467,8,34,1,35,1,35,1,35,1,35,1,36,3,36,
474,8,36,1,36,1,36,1,36,3,36,479,8,36,1,37,1,37,1,37,3,37,484,8,37,1,38,
1,38,1,38,3,38,489,8,38,1,39,1,39,1,39,1,39,1,39,1,39,1,39,3,39,498,8,39,
1,40,1,40,1,40,1,40,1,40,5,40,505,8,40,10,40,12,40,508,9,40,1,40,1,40,1,
41,1,41,1,41,1,41,5,41,516,8,41,10,41,12,41,519,9,41,3,41,521,8,41,1,41,
1,41,1,42,1,42,1,42,1,42,1,42,1,42,1,42,3,42,532,8,42,1,43,1,43,1,43,1,43,
1,43,5,43,539,8,43,10,43,12,43,542,9,43,3,43,544,8,43,1,43,1,43,1,44,1,44,
1,44,1,44,5,44,552,8,44,10,44,12,44,555,9,44,3,44,557,8,44,1,44,1,44,1,45,
1,45,1,46,1,46,1,47,1,47,1,48,1,48,1,49,1,49,1,49,0,0,50,0,2,4,6,8,10,12,
14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,56,58,60,
62,64,66,68,70,72,74,76,78,80,82,84,86,88,90,92,94,96,98,0,1,1,0,29,30,621,
0,106,1,0,0,0,2,119,1,0,0,0,4,121,1,0,0,0,6,127,1,0,0,0,8,130,1,0,0,0,10,
136,1,0,0,0,12,153,1,0,0,0,14,176,1,0,0,0,16,187,1,0,0,0,18,189,1,0,0,0,
20,194,1,0,0,0,22,208,1,0,0,0,24,210,1,0,0,0,26,224,1,0,0,0,28,234,1,0,0,
0,30,264,1,0,0,0,32,271,1,0,0,0,34,275,1,0,0,0,36,311,1,0,0,0,38,313,1,0,
0,0,40,318,1,0,0,0,42,329,1,0,0,0,44,331,1,0,0,0,46,333,1,0,0,0,48,335,1,
0,0,0,50,338,1,0,0,0,52,343,1,0,0,0,54,347,1,0,0,0,56,362,1,0,0,0,58,366,
1,0,0,0,60,383,1,0,0,0,62,400,1,0,0,0,64,425,1,0,0,0,66,440,1,0,0,0,68,466,
1,0,0,0,70,468,1,0,0,0,72,478,1,0,0,0,74,483,1,0,0,0,76,488,1,0,0,0,78,497,
1,0,0,0,80,499,1,0,0,0,82,511,1,0,0,0,84,531,1,0,0,0,86,533,1,0,0,0,88,547,
1,0,0,0,90,560,1,0,0,0,92,562,1,0,0,0,94,564,1,0,0,0,96,566,1,0,0,0,98,568,
1,0,0,0,100,105,3,2,1,0,101,105,3,48,24,0,102,105,3,44,22,0,103,105,3,46,
23,0,104,100,1,0,0,0,104,101,1,0,0,0,104,102,1,0,0,0,104,103,1,0,0,0,105,
108,1,0,0,0,106,104,1,0,0,0,106,107,1,0,0,0,107,109,1,0,0,0,108,106,1,0,
0,0,109,110,5,0,0,1,110,1,1,0,0,0,111,120,3,4,2,0,112,120,3,6,3,0,113,120,
3,8,4,0,114,120,3,18,9,0,115,120,3,20,10,0,116,120,3,30,15,0,117,120,3,34,
17,0,118,120,3,36,18,0,119,111,1,0,0,0,119,112,1,0,0,0,119,113,1,0,0,0,119,
114,1,0,0,0,119,115,1,0,0,0,119,116,1,0,0,0,119,117,1,0,0,0,119,118,1,0,
0,0,120,3,1,0,0,0,121,122,5,1,0,0,122,123,5,24,0,0,123,124,5,2,0,0,124,125,
3,84,42,0,125,126,5,22,0,0,126,5,1,0,0,0,127,128,3,22,11,0,128,129,5,22,
0,0,129,7,1,0,0,0,130,131,3,10,5,0,131,132,5,3,0,0,132,133,3,24,12,0,133,
134,5,22,0,0,134,9,1,0,0,0,135,137,3,96,48,0,136,135,1,0,0,0,136,137,1,0,
0,0,137,138,1,0,0,0,138,147,5,4,0,0,139,144,3,12,6,0,140,141,5,5,0,0,141,
143,3,12,6,0,142,140,1,0,0,0,143,146,1,0,0,0,144,142,1,0,0,0,144,145,1,0,
0,0,145,148,1,0,0,0,146,144,1,0,0,0,147,139,1,0,0,0,147,148,1,0,0,0,148,
149,1,0,0,0,149,151,5,6,0,0,150,152,3,98,49,0,151,150,1,0,0,0,151,152,1,
0,0,0,152,11,1,0,0,0,153,165,3,14,7,0,154,163,5,7,0,0,155,160,3,16,8,0,156,
157,5,8,0,0,157,159,3,16,8,0,158,156,1,0,0,0,159,162,1,0,0,0,160,158,1,0,
0,0,160,161,1,0,0,0,161,164,1,0,0,0,162,160,1,0,0,0,163,155,1,0,0,0,163,
164,1,0,0,0,164,166,1,0,0,0,165,154,1,0,0,0,165,166,1,0,0,0,166,13,1,0,0,
0,167,177,3,50,25,0,168,170,5,18,0,0,169,168,1,0,0,0,169,170,1,0,0,0,170,
171,1,0,0,0,171,177,3,70,35,0,172,174,5,18,0,0,173,172,1,0,0,0,173,174,1,
0,0,0,174,175,1,0,0,0,175,177,3,56,28,0,176,167,1,0,0,0,176,169,1,0,0,0,
176,173,1,0,0,0,177,15,1,0,0,0,178,188,3,50,25,0,179,181,5,18,0,0,180,179,
1,0,0,0,180,181,1,0,0,0,181,182,1,0,0,0,182,188,3,70,35,0,183,185,5,18,0,
0,184,183,1,0,0,0,184,185,1,0,0,0,185,186,1,0,0,0,186,188,3,56,28,0,187,
178,1,0,0,0,187,180,1,0,0,0,187,184,1,0,0,0,188,17,1,0,0,0,189,190,3,22,
11,0,190,191,5,3,0,0,191,192,3,24,12,0,192,193,5,22,0,0,193,19,1,0,0,0,194,
195,5,3,0,0,195,196,3,24,12,0,196,197,5,22,0,0,197,21,1,0,0,0,198,203,3,
26,13,0,199,200,5,5,0,0,200,202,3,26,13,0,201,199,1,0,0,0,202,205,1,0,0,
0,203,201,1,0,0,0,203,204,1,0,0,0,204,209,1,0,0,0,205,203,1,0,0,0,206,209,
3,10,5,0,207,209,3,58,29,0,208,198,1,0,0,0,208,206,1,0,0,0,208,207,1,0,0,
0,209,23,1,0,0,0,210,215,3,28,14,0,211,212,5,8,0,0,212,214,3,28,14,0,213,
211,1,0,0,0,214,217,1,0,0,0,215,213,1,0,0,0,215,216,1,0,0,0,216,25,1,0,0,
0,217,215,1,0,0,0,218,225,3,50,25,0,219,221,5,18,0,0,220,219,1,0,0,0,220,
221,1,0,0,0,221,222,1,0,0,0,222,225,3,56,28,0,223,225,3,70,35,0,224,218,
1,0,0,0,224,220,1,0,0,0,224,223,1,0,0,0,225,27,1,0,0,0,226,235,3,50,25,0,
227,229,5,18,0,0,228,227,1,0,0,0,228,229,1,0,0,0,229,230,1,0,0,0,230,235,
3,56,28,0,231,235,3,62,31,0,232,235,3,70,35,0,233,235,3,10,5,0,234,226,1,
0,0,0,234,228,1,0,0,0,234,231,1,0,0,0,234,232,1,0,0,0,234,233,1,0,0,0,235,
29,1,0,0,0,236,237,5,9,0,0,237,246,5,4,0,0,238,243,3,32,16,0,239,240,5,5,
0,0,240,242,3,32,16,0,241,239,1,0,0,0,242,245,1,0,0,0,243,241,1,0,0,0,243,
244,1,0,0,0,244,247,1,0,0,0,245,243,1,0,0,0,246,238,1,0,0,0,246,247,1,0,
0,0,247,248,1,0,0,0,248,249,5,6,0,0,249,265,5,22,0,0,250,251,5,10,0,0,251,
260,5,4,0,0,252,257,3,32,16,0,253,254,5,5,0,0,254,256,3,32,16,0,255,253,
1,0,0,0,256,259,1,0,0,0,257,255,1,0,0,0,257,258,1,0,0,0,258,261,1,0,0,0,
259,257,1,0,0,0,260,252,1,0,0,0,260,261,1,0,0,0,261,262,1,0,0,0,262,263,
5,6,0,0,263,265,5,22,0,0,264,236,1,0,0,0,264,250,1,0,0,0,265,31,1,0,0,0,
266,267,3,92,46,0,267,268,5,11,0,0,268,269,3,94,47,0,269,270,5,8,0,0,270,
272,1,0,0,0,271,266,1,0,0,0,271,272,1,0,0,0,272,273,1,0,0,0,273,274,3,66,
33,0,274,33,1,0,0,0,275,276,5,12,0,0,276,277,3,24,12,0,277,278,5,22,0,0,
278,284,5,13,0,0,279,280,3,92,46,0,280,281,5,11,0,0,281,282,3,94,47,0,282,
283,5,8,0,0,283,285,1,0,0,0,284,279,1,0,0,0,284,285,1,0,0,0,285,287,1,0,
0,0,286,288,5,34,0,0,287,286,1,0,0,0,287,288,1,0,0,0,288,289,1,0,0,0,289,
297,3,76,38,0,290,292,5,8,0,0,291,293,5,34,0,0,292,291,1,0,0,0,292,293,1,
0,0,0,293,294,1,0,0,0,294,296,3,76,38,0,295,290,1,0,0,0,296,299,1,0,0,0,
297,295,1,0,0,0,297,298,1,0,0,0,298,300,1,0,0,0,299,297,1,0,0,0,300,301,
5,23,0,0,301,35,1,0,0,0,302,303,3,38,19,0,303,304,5,22,0,0,304,312,1,0,0,
0,305,306,3,40,20,0,306,307,5,22,0,0,307,312,1,0,0,0,308,309,3,42,21,0,309,
310,5,22,0,0,310,312,1,0,0,0,311,302,1,0,0,0,311,305,1,0,0,0,311,308,1,0,
0,0,312,37,1,0,0,0,313,314,5,14,0,0,314,315,5,24,0,0,315,316,5,15,0,0,316,
317,5,29,0,0,317,39,1,0,0,0,318,319,5,14,0,0,319,320,3,76,38,0,320,321,5,
7,0,0,321,326,3,50,25,0,322,323,5,8,0,0,323,325,3,50,25,0,324,322,1,0,0,
0,325,328,1,0,0,0,326,324,1,0,0,0,326,327,1,0,0,0,327,41,1,0,0,0,328,326,
1,0,0,0,329,330,5,14,0,0,330,43,1,0,0,0,331,332,5,19,0,0,332,45,1,0,0,0,
333,334,5,20,0,0,334,47,1,0,0,0,335,336,5,21,0,0,336,49,1,0,0,0,337,339,
5,18,0,0,338,337,1,0,0,0,338,339,1,0,0,0,339,340,1,0,0,0,340,341,3,52,26,
0,341,51,1,0,0,0,342,344,5,34,0,0,343,342,1,0,0,0,343,344,1,0,0,0,344,345,
1,0,0,0,345,346,3,54,27,0,346,53,1,0,0,0,347,360,5,24,0,0,348,357,5,16,0,
0,349,354,3,76,38,0,350,351,5,8,0,0,351,353,3,76,38,0,352,350,1,0,0,0,353,
356,1,0,0,0,354,352,1,0,0,0,354,355,1,0,0,0,355,358,1,0,0,0,356,354,1,0,
0,0,357,349,1,0,0,0,357,358,1,0,0,0,358,359,1,0,0,0,359,361,5,17,0,0,360,
348,1,0,0,0,360,361,1,0,0,0,361,55,1,0,0,0,362,363,3,76,38,0,363,364,5,32,
0,0,364,365,3,76,38,0,365,57,1,0,0,0,366,367,5,33,0,0,367,376,5,4,0,0,368,
373,3,60,30,0,369,370,5,5,0,0,370,372,3,60,30,0,371,369,1,0,0,0,372,375,
1,0,0,0,373,371,1,0,0,0,373,374,1,0,0,0,374,377,1,0,0,0,375,373,1,0,0,0,
376,368,1,0,0,0,376,377,1,0,0,0,377,378,1,0,0,0,378,381,5,6,0,0,379,380,
5,32,0,0,380,382,3,76,38,0,381,379,1,0,0,0,381,382,1,0,0,0,382,59,1,0,0,
0,383,388,3,76,38,0,384,385,5,8,0,0,385,387,3,76,38,0,386,384,1,0,0,0,387,
390,1,0,0,0,388,386,1,0,0,0,388,389,1,0,0,0,389,391,1,0,0,0,390,388,1,0,
0,0,391,392,5,7,0,0,392,397,3,68,34,0,393,394,5,8,0,0,394,396,3,68,34,0,
395,393,1,0,0,0,396,399,1,0,0,0,397,395,1,0,0,0,397,398,1,0,0,0,398,61,1,
0,0,0,399,397,1,0,0,0,400,401,5,33,0,0,401,410,5,4,0,0,402,407,3,64,32,0,
403,404,5,5,0,0,404,406,3,64,32,0,405,403,1,0,0,0,406,409,1,0,0,0,407,405,
1,0,0,0,407,408,1,0,0,0,408,411,1,0,0,0,409,407,1,0,0,0,410,402,1,0,0,0,
410,411,1,0,0,0,411,412,1,0,0,0,412,415,5,6,0,0,413,414,5,32,0,0,414,416,
3,76,38,0,415,413,1,0,0,0,415,416,1,0,0,0,416,63,1,0,0,0,417,422,3,76,38,
0,418,419,5,8,0,0,419,421,3,76,38,0,420,418,1,0,0,0,421,424,1,0,0,0,422,
420,1,0,0,0,422,423,1,0,0,0,423,426,1,0,0,0,424,422,1,0,0,0,425,417,1,0,
0,0,425,426,1,0,0,0,426,438,1,0,0,0,427,436,5,7,0,0,428,433,3,68,34,0,429,
430,5,8,0,0,430,432,3,68,34,0,431,429,1,0,0,0,432,435,1,0,0,0,433,431,1,
0,0,0,433,434,1,0,0,0,434,437,1,0,0,0,435,433,1,0,0,0,436,428,1,0,0,0,436,
437,1,0,0,0,437,439,1,0,0,0,438,427,1,0,0,0,438,439,1,0,0,0,439,65,1,0,0,
0,440,445,3,76,38,0,441,442,5,8,0,0,442,444,3,76,38,0,443,441,1,0,0,0,444,
447,1,0,0,0,445,443,1,0,0,0,445,446,1,0,0,0,446,459,1,0,0,0,447,445,1,0,
0,0,448,457,5,7,0,0,449,454,3,68,34,0,450,451,5,8,0,0,451,453,3,68,34,0,
452,450,1,0,0,0,453,456,1,0,0,0,454,452,1,0,0,0,454,455,1,0,0,0,455,458,
1,0,0,0,456,454,1,0,0,0,457,449,1,0,0,0,457,458,1,0,0,0,458,460,1,0,0,0,
459,448,1,0,0,0,459,460,1,0,0,0,460,67,1,0,0,0,461,467,3,50,25,0,462,464,
5,18,0,0,463,462,1,0,0,0,463,464,1,0,0,0,464,465,1,0,0,0,465,467,3,56,28,
0,466,461,1,0,0,0,466,463,1,0,0,0,467,69,1,0,0,0,468,469,3,72,36,0,469,470,
5,2,0,0,470,471,3,74,37,0,471,71,1,0,0,0,472,474,5,18,0,0,473,472,1,0,0,
0,473,474,1,0,0,0,474,475,1,0,0,0,475,479,3,76,38,0,476,479,3,62,31,0,477,
479,3,50,25,0,478,473,1,0,0,0,478,476,1,0,0,0,478,477,1,0,0,0,479,73,1,0,
0,0,480,484,3,76,38,0,481,484,3,52,26,0,482,484,3,62,31,0,483,480,1,0,0,
0,483,481,1,0,0,0,483,482,1,0,0,0,484,75,1,0,0,0,485,489,3,78,39,0,486,489,
3,80,40,0,487,489,3,82,41,0,488,485,1,0,0,0,488,486,1,0,0,0,488,487,1,0,
0,0,489,77,1,0,0,0,490,498,3,90,45,0,491,498,5,24,0,0,492,498,5,31,0,0,493,
498,5,25,0,0,494,498,5,26,0,0,495,498,5,27,0,0,496,498,5,28,0,0,497,490,
1,0,0,0,497,491,1,0,0,0,497,492,1,0,0,0,497,493,1,0,0,0,497,494,1,0,0,0,
497,495,1,0,0,0,497,496,1,0,0,0,498,79,1,0,0,0,499,500,5,24,0,0,500,501,
5,16,0,0,501,506,3,76,38,0,502,503,5,8,0,0,503,505,3,76,38,0,504,502,1,0,
0,0,505,508,1,0,0,0,506,504,1,0,0,0,506,507,1,0,0,0,507,509,1,0,0,0,508,
506,1,0,0,0,509,510,5,17,0,0,510,81,1,0,0,0,511,520,5,16,0,0,512,517,3,76,
38,0,513,514,5,8,0,0,514,516,3,76,38,0,515,513,1,0,0,0,516,519,1,0,0,0,517,
515,1,0,0,0,517,518,1,0,0,0,518,521,1,0,0,0,519,517,1,0,0,0,520,512,1,0,
0,0,520,521,1,0,0,0,521,522,1,0,0,0,522,523,5,17,0,0,523,83,1,0,0,0,524,
532,3,90,45,0,525,532,5,24,0,0,526,532,5,31,0,0,527,532,5,27,0,0,528,532,
5,28,0,0,529,532,3,86,43,0,530,532,3,88,44,0,531,524,1,0,0,0,531,525,1,0,
0,0,531,526,1,0,0,0,531,527,1,0,0,0,531,528,1,0,0,0,531,529,1,0,0,0,531,
530,1,0,0,0,532,85,1,0,0,0,533,534,5,24,0,0,534,543,5,16,0,0,535,540,3,84,
42,0,536,537,5,8,0,0,537,539,3,84,42,0,538,536,1,0,0,0,539,542,1,0,0,0,540,
538,1,0,0,0,540,541,1,0,0,0,541,544,1,0,0,0,542,540,1,0,0,0,543,535,1,0,
0,0,543,544,1,0,0,0,544,545,1,0,0,0,545,546,5,17,0,0,546,87,1,0,0,0,547,
556,5,16,0,0,548,553,3,84,42,0,549,550,5,8,0,0,550,552,3,84,42,0,551,549,
1,0,0,0,552,555,1,0,0,0,553,551,1,0,0,0,553,554,1,0,0,0,554,557,1,0,0,0,
555,553,1,0,0,0,556,548,1,0,0,0,556,557,1,0,0,0,557,558,1,0,0,0,558,559,
5,17,0,0,559,89,1,0,0,0,560,561,7,0,0,0,561,91,1,0,0,0,562,563,3,90,45,0,
563,93,1,0,0,0,564,565,3,90,45,0,565,95,1,0,0,0,566,567,3,90,45,0,567,97,
1,0,0,0,568,569,3,90,45,0,569,99,1,0,0,0,72,104,106,119,136,144,147,151,
160,163,165,169,173,176,180,184,187,203,208,215,220,224,228,234,243,246,
257,260,264,271,284,287,292,297,311,326,338,343,354,357,360,373,376,381,
388,397,407,410,415,422,425,433,436,438,445,454,457,459,463,466,473,478,
483,488,497,506,517,520,531,540,543,553,556];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class ASPParser extends antlr4.Parser {

    static grammarFileName = "ASP.g4";
    static literalNames = [ null, "'#const'", "'='", "':-'", "'{'", "';'", 
                            "'}'", "':'", "','", "'#minimize'", "'#maximize'", 
                            "'@'", "':~'", "'['", "'#show'", "'/'", "'('", 
                            "')'", "'not'", null, null, null, "'.'", "']'", 
                            null, null, "'_'", "'#sup'", "'#inf'", null, 
                            null, null, null, null, "'-'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, "NOT", "BLOCK_COMMENT", "UNCLOSED_COMMENT", 
                             "LINE_COMMENT", "DOT", "EOWC", "CONSTANT", 
                             "VARIABLE", "UNDERSCORE", "SUP", "INF", "NUMBER", 
                             "INTERVAL", "STRING", "COMPARATOR", "AGGREGATE_FUNCTION", 
                             "CLASSICAL_NEGATION", "WS" ];
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
	        this.state = 106;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 4282209818) !== 0) || _la===33 || _la===34) {
	            this.state = 104;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case 1:
	            case 3:
	            case 4:
	            case 9:
	            case 10:
	            case 12:
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
	            case 31:
	            case 33:
	            case 34:
	                this.state = 100;
	                this.statement();
	                break;
	            case 21:
	                this.state = 101;
	                this.line_comment();
	                break;
	            case 19:
	                this.state = 102;
	                this.block_comment();
	                break;
	            case 20:
	                this.state = 103;
	                this.unclosed_comment();
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }
	            this.state = 108;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 109;
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
	        this.state = 119;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,2,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 111;
	            this.constant();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 112;
	            this.fact();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 113;
	            this.choice_rule();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 114;
	            this.definite_rule();
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 115;
	            this.constraint();
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 116;
	            this.optimization();
	            break;

	        case 7:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 117;
	            this.weak_constraint();
	            break;

	        case 8:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 118;
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
	        this.state = 121;
	        this.match(ASPParser.T__0);
	        this.state = 122;
	        this.match(ASPParser.CONSTANT);
	        this.state = 123;
	        this.match(ASPParser.T__1);
	        this.state = 124;
	        this.constant_term();
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



	fact() {
	    let localctx = new FactContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, ASPParser.RULE_fact);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 127;
	        this.head();
	        this.state = 128;
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
	        this.state = 130;
	        this.choice();
	        this.state = 131;
	        this.match(ASPParser.T__2);
	        this.state = 132;
	        this.body();
	        this.state = 133;
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
	        this.state = 136;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===29 || _la===30) {
	            this.state = 135;
	            this.lowerbound();
	        }

	        this.state = 138;
	        this.match(ASPParser.T__3);
	        this.state = 147;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(((((_la - 16)) & ~0x1f) === 0 && ((1 << (_la - 16)) & 458501) !== 0)) {
	            this.state = 139;
	            this.choice_element();
	            this.state = 144;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===5) {
	                this.state = 140;
	                this.match(ASPParser.T__4);
	                this.state = 141;
	                this.choice_element();
	                this.state = 146;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	        }

	        this.state = 149;
	        this.match(ASPParser.T__5);
	        this.state = 151;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===29 || _la===30) {
	            this.state = 150;
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
	        this.state = 153;
	        this.choiceHead_atoms();
	        this.state = 165;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===7) {
	            this.state = 154;
	            this.match(ASPParser.T__6);
	            this.state = 163;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(((((_la - 16)) & ~0x1f) === 0 && ((1 << (_la - 16)) & 458501) !== 0)) {
	                this.state = 155;
	                this.choiceBody_atoms();
	                this.state = 160;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                while(_la===8) {
	                    this.state = 156;
	                    this.match(ASPParser.T__7);
	                    this.state = 157;
	                    this.choiceBody_atoms();
	                    this.state = 162;
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
	        this.state = 176;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,12,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 167;
	            this.literal();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 169;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,10,this._ctx);
	            if(la_===1) {
	                this.state = 168;
	                this.match(ASPParser.NOT);

	            }
	            this.state = 171;
	            this.assignment();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 173;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===18) {
	                this.state = 172;
	                this.match(ASPParser.NOT);
	            }

	            this.state = 175;
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
	        this.state = 187;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,15,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 178;
	            this.literal();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 180;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,13,this._ctx);
	            if(la_===1) {
	                this.state = 179;
	                this.match(ASPParser.NOT);

	            }
	            this.state = 182;
	            this.assignment();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 184;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===18) {
	                this.state = 183;
	                this.match(ASPParser.NOT);
	            }

	            this.state = 186;
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
	        this.state = 189;
	        this.head();
	        this.state = 190;
	        this.match(ASPParser.T__2);
	        this.state = 191;
	        this.body();
	        this.state = 192;
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
	        this.state = 194;
	        this.match(ASPParser.T__2);
	        this.state = 195;
	        this.body();
	        this.state = 196;
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
	        this.state = 208;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,17,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 198;
	            this.head_atoms();
	            this.state = 203;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===5) {
	                this.state = 199;
	                this.match(ASPParser.T__4);
	                this.state = 200;
	                this.head_atoms();
	                this.state = 205;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 206;
	            this.choice();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 207;
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
	        this.state = 210;
	        this.body_atoms();
	        this.state = 215;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===8) {
	            this.state = 211;
	            this.match(ASPParser.T__7);
	            this.state = 212;
	            this.body_atoms();
	            this.state = 217;
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



	head_atoms() {
	    let localctx = new Head_atomsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, ASPParser.RULE_head_atoms);
	    var _la = 0;
	    try {
	        this.state = 224;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,20,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 218;
	            this.literal();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 220;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===18) {
	                this.state = 219;
	                this.match(ASPParser.NOT);
	            }

	            this.state = 222;
	            this.builtIn_atom();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 223;
	            this.assignment();
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
	        this.state = 234;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,22,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 226;
	            this.literal();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 228;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===18) {
	                this.state = 227;
	                this.match(ASPParser.NOT);
	            }

	            this.state = 230;
	            this.builtIn_atom();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 231;
	            this.aggregate_atom_body();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 232;
	            this.assignment();
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 233;
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
	        this.state = 264;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 9:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 236;
	            this.match(ASPParser.T__8);
	            this.state = 237;
	            this.match(ASPParser.T__3);
	            this.state = 246;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if((((_la) & ~0x1f) === 0 && ((1 << _la) & 4278255616) !== 0)) {
	                this.state = 238;
	                this.optimizationBody();
	                this.state = 243;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                while(_la===5) {
	                    this.state = 239;
	                    this.match(ASPParser.T__4);
	                    this.state = 240;
	                    this.optimizationBody();
	                    this.state = 245;
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                }
	            }

	            this.state = 248;
	            this.match(ASPParser.T__5);
	            this.state = 249;
	            this.match(ASPParser.DOT);
	            break;
	        case 10:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 250;
	            this.match(ASPParser.T__9);
	            this.state = 251;
	            this.match(ASPParser.T__3);
	            this.state = 260;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if((((_la) & ~0x1f) === 0 && ((1 << _la) & 4278255616) !== 0)) {
	                this.state = 252;
	                this.optimizationBody();
	                this.state = 257;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                while(_la===5) {
	                    this.state = 253;
	                    this.match(ASPParser.T__4);
	                    this.state = 254;
	                    this.optimizationBody();
	                    this.state = 259;
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                }
	            }

	            this.state = 262;
	            this.match(ASPParser.T__5);
	            this.state = 263;
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
	        this.state = 271;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,28,this._ctx);
	        if(la_===1) {
	            this.state = 266;
	            this.weight();
	            this.state = 267;
	            this.match(ASPParser.T__10);
	            this.state = 268;
	            this.priority();
	            this.state = 269;
	            this.match(ASPParser.T__7);

	        }
	        this.state = 273;
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
	        this.state = 275;
	        this.match(ASPParser.T__11);
	        this.state = 276;
	        this.body();
	        this.state = 277;
	        this.match(ASPParser.DOT);
	        this.state = 278;
	        this.match(ASPParser.T__12);
	        this.state = 284;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,29,this._ctx);
	        if(la_===1) {
	            this.state = 279;
	            this.weight();
	            this.state = 280;
	            this.match(ASPParser.T__10);
	            this.state = 281;
	            this.priority();
	            this.state = 282;
	            this.match(ASPParser.T__7);

	        }

	        this.state = 287;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===34) {
	            this.state = 286;
	            this.match(ASPParser.CLASSICAL_NEGATION);
	        }

	        this.state = 289;
	        this.term();
	        this.state = 297;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===8) {
	            this.state = 290;
	            this.match(ASPParser.T__7);
	            this.state = 292;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===34) {
	                this.state = 291;
	                this.match(ASPParser.CLASSICAL_NEGATION);
	            }

	            this.state = 294;
	            this.term();
	            this.state = 299;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 300;
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
	        this.state = 311;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,33,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 302;
	            this.show_atoms();
	            this.state = 303;
	            this.match(ASPParser.DOT);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 305;
	            this.show_terms();
	            this.state = 306;
	            this.match(ASPParser.DOT);
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 308;
	            this.show_nothing();
	            this.state = 309;
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
	        this.state = 313;
	        this.match(ASPParser.T__13);
	        this.state = 314;
	        this.match(ASPParser.CONSTANT);
	        this.state = 315;
	        this.match(ASPParser.T__14);
	        this.state = 316;
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
	        this.state = 318;
	        this.match(ASPParser.T__13);
	        this.state = 319;
	        this.term();
	        this.state = 320;
	        this.match(ASPParser.T__6);
	        this.state = 321;
	        this.literal();
	        this.state = 326;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===8) {
	            this.state = 322;
	            this.match(ASPParser.T__7);
	            this.state = 323;
	            this.literal();
	            this.state = 328;
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
	    this.enterRule(localctx, 42, ASPParser.RULE_show_nothing);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 329;
	        this.match(ASPParser.T__13);
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
	    this.enterRule(localctx, 46, ASPParser.RULE_unclosed_comment);
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
	    this.enterRule(localctx, 48, ASPParser.RULE_line_comment);
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
	    this.enterRule(localctx, 50, ASPParser.RULE_literal);
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
	    this.enterRule(localctx, 52, ASPParser.RULE_classical_atom);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 343;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===34) {
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
	    this.enterRule(localctx, 54, ASPParser.RULE_atom);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 347;
	        this.match(ASPParser.CONSTANT);
	        this.state = 360;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===16) {
	            this.state = 348;
	            this.match(ASPParser.T__15);
	            this.state = 357;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if((((_la) & ~0x1f) === 0 && ((1 << _la) & 4278255616) !== 0)) {
	                this.state = 349;
	                this.term();
	                this.state = 354;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                while(_la===8) {
	                    this.state = 350;
	                    this.match(ASPParser.T__7);
	                    this.state = 351;
	                    this.term();
	                    this.state = 356;
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                }
	            }

	            this.state = 359;
	            this.match(ASPParser.T__16);
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
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 362;
	        this.term();
	        this.state = 363;
	        this.match(ASPParser.COMPARATOR);
	        this.state = 364;
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
	        this.enterOuterAlt(localctx, 1);
	        this.state = 366;
	        this.match(ASPParser.AGGREGATE_FUNCTION);
	        this.state = 367;
	        this.match(ASPParser.T__3);
	        this.state = 376;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) === 0 && ((1 << _la) & 4278255616) !== 0)) {
	            this.state = 368;
	            this.aggregate_element_head();
	            this.state = 373;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===5) {
	                this.state = 369;
	                this.match(ASPParser.T__4);
	                this.state = 370;
	                this.aggregate_element_head();
	                this.state = 375;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	        }

	        this.state = 378;
	        this.match(ASPParser.T__5);
	        this.state = 381;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===32) {
	            this.state = 379;
	            this.match(ASPParser.COMPARATOR);
	            this.state = 380;
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



	aggregate_element_head() {
	    let localctx = new Aggregate_element_headContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 60, ASPParser.RULE_aggregate_element_head);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 383;
	        this.term();
	        this.state = 388;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===8) {
	            this.state = 384;
	            this.match(ASPParser.T__7);
	            this.state = 385;
	            this.term();
	            this.state = 390;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 391;
	        this.match(ASPParser.T__6);
	        this.state = 392;
	        this.aggregate_literal();
	        this.state = 397;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===8) {
	            this.state = 393;
	            this.match(ASPParser.T__7);
	            this.state = 394;
	            this.aggregate_literal();
	            this.state = 399;
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



	aggregate_atom_body() {
	    let localctx = new Aggregate_atom_bodyContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 62, ASPParser.RULE_aggregate_atom_body);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 400;
	        this.match(ASPParser.AGGREGATE_FUNCTION);
	        this.state = 401;
	        this.match(ASPParser.T__3);
	        this.state = 410;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,46,this._ctx);
	        if(la_===1) {
	            this.state = 402;
	            this.aggregate_element_body();
	            this.state = 407;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===5) {
	                this.state = 403;
	                this.match(ASPParser.T__4);
	                this.state = 404;
	                this.aggregate_element_body();
	                this.state = 409;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }

	        }
	        this.state = 412;
	        this.match(ASPParser.T__5);
	        this.state = 415;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===32) {
	            this.state = 413;
	            this.match(ASPParser.COMPARATOR);
	            this.state = 414;
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



	aggregate_element_body() {
	    let localctx = new Aggregate_element_bodyContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 64, ASPParser.RULE_aggregate_element_body);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 425;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) === 0 && ((1 << _la) & 4278255616) !== 0)) {
	            this.state = 417;
	            this.term();
	            this.state = 422;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===8) {
	                this.state = 418;
	                this.match(ASPParser.T__7);
	                this.state = 419;
	                this.term();
	                this.state = 424;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	        }

	        this.state = 438;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===7) {
	            this.state = 427;
	            this.match(ASPParser.T__6);
	            this.state = 436;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(((((_la - 16)) & ~0x1f) === 0 && ((1 << (_la - 16)) & 327429) !== 0)) {
	                this.state = 428;
	                this.aggregate_literal();
	                this.state = 433;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                while(_la===8) {
	                    this.state = 429;
	                    this.match(ASPParser.T__7);
	                    this.state = 430;
	                    this.aggregate_literal();
	                    this.state = 435;
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
	        this.state = 440;
	        this.term();
	        this.state = 445;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===8) {
	            this.state = 441;
	            this.match(ASPParser.T__7);
	            this.state = 442;
	            this.term();
	            this.state = 447;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 459;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===7) {
	            this.state = 448;
	            this.match(ASPParser.T__6);
	            this.state = 457;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(((((_la - 16)) & ~0x1f) === 0 && ((1 << (_la - 16)) & 327429) !== 0)) {
	                this.state = 449;
	                this.aggregate_literal();
	                this.state = 454;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                while(_la===8) {
	                    this.state = 450;
	                    this.match(ASPParser.T__7);
	                    this.state = 451;
	                    this.aggregate_literal();
	                    this.state = 456;
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
	        this.state = 466;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,58,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 461;
	            this.literal();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 463;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===18) {
	                this.state = 462;
	                this.match(ASPParser.NOT);
	            }

	            this.state = 465;
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
	    this.enterRule(localctx, 70, ASPParser.RULE_assignment);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 468;
	        this.assignee();
	        this.state = 469;
	        this.match(ASPParser.T__1);
	        this.state = 470;
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
	    this.enterRule(localctx, 72, ASPParser.RULE_assignee);
	    var _la = 0;
	    try {
	        this.state = 478;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,60,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 473;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===18) {
	                this.state = 472;
	                this.match(ASPParser.NOT);
	            }

	            this.state = 475;
	            this.term();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 476;
	            this.aggregate_atom_body();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 477;
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
	    this.enterRule(localctx, 74, ASPParser.RULE_assigned_value);
	    try {
	        this.state = 483;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,61,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 480;
	            this.term();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 481;
	            this.classical_atom();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 482;
	            this.aggregate_atom_body();
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
	    this.enterRule(localctx, 76, ASPParser.RULE_term);
	    try {
	        this.state = 488;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,62,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 485;
	            this.simpleTerm();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 486;
	            this.functionTerm();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 487;
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
	    this.enterRule(localctx, 78, ASPParser.RULE_simpleTerm);
	    try {
	        this.state = 497;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 29:
	        case 30:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 490;
	            this.integer();
	            break;
	        case 24:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 491;
	            this.match(ASPParser.CONSTANT);
	            break;
	        case 31:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 492;
	            this.match(ASPParser.STRING);
	            break;
	        case 25:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 493;
	            this.match(ASPParser.VARIABLE);
	            break;
	        case 26:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 494;
	            this.match(ASPParser.UNDERSCORE);
	            break;
	        case 27:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 495;
	            this.match(ASPParser.SUP);
	            break;
	        case 28:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 496;
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
	    this.enterRule(localctx, 80, ASPParser.RULE_functionTerm);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 499;
	        this.match(ASPParser.CONSTANT);
	        this.state = 500;
	        this.match(ASPParser.T__15);
	        this.state = 501;
	        this.term();
	        this.state = 506;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===8) {
	            this.state = 502;
	            this.match(ASPParser.T__7);
	            this.state = 503;
	            this.term();
	            this.state = 508;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 509;
	        this.match(ASPParser.T__16);
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
	    this.enterRule(localctx, 82, ASPParser.RULE_tuple);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 511;
	        this.match(ASPParser.T__15);
	        this.state = 520;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) === 0 && ((1 << _la) & 4278255616) !== 0)) {
	            this.state = 512;
	            this.term();
	            this.state = 517;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===8) {
	                this.state = 513;
	                this.match(ASPParser.T__7);
	                this.state = 514;
	                this.term();
	                this.state = 519;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	        }

	        this.state = 522;
	        this.match(ASPParser.T__16);
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
	    this.enterRule(localctx, 84, ASPParser.RULE_constant_term);
	    try {
	        this.state = 531;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,67,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 524;
	            this.integer();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 525;
	            this.match(ASPParser.CONSTANT);
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 526;
	            this.match(ASPParser.STRING);
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 527;
	            this.match(ASPParser.SUP);
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 528;
	            this.match(ASPParser.INF);
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 529;
	            this.constant_functionTerm();
	            break;

	        case 7:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 530;
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
	    this.enterRule(localctx, 86, ASPParser.RULE_constant_functionTerm);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 533;
	        this.match(ASPParser.CONSTANT);
	        this.state = 534;
	        this.match(ASPParser.T__15);
	        this.state = 543;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) === 0 && ((1 << _la) & 4177592320) !== 0)) {
	            this.state = 535;
	            this.constant_term();
	            this.state = 540;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===8) {
	                this.state = 536;
	                this.match(ASPParser.T__7);
	                this.state = 537;
	                this.constant_term();
	                this.state = 542;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	        }

	        this.state = 545;
	        this.match(ASPParser.T__16);
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
	    this.enterRule(localctx, 88, ASPParser.RULE_constant_tuple);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 547;
	        this.match(ASPParser.T__15);
	        this.state = 556;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) === 0 && ((1 << _la) & 4177592320) !== 0)) {
	            this.state = 548;
	            this.constant_term();
	            this.state = 553;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===8) {
	                this.state = 549;
	                this.match(ASPParser.T__7);
	                this.state = 550;
	                this.constant_term();
	                this.state = 555;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	        }

	        this.state = 558;
	        this.match(ASPParser.T__16);
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
	    this.enterRule(localctx, 90, ASPParser.RULE_integer);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 560;
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
	    this.enterRule(localctx, 92, ASPParser.RULE_weight);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 562;
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
	    this.enterRule(localctx, 94, ASPParser.RULE_priority);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 564;
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
	    this.enterRule(localctx, 96, ASPParser.RULE_lowerbound);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 566;
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
	    this.enterRule(localctx, 98, ASPParser.RULE_upperbound);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 568;
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
ASPParser.INTERVAL = 30;
ASPParser.STRING = 31;
ASPParser.COMPARATOR = 32;
ASPParser.AGGREGATE_FUNCTION = 33;
ASPParser.CLASSICAL_NEGATION = 34;
ASPParser.WS = 35;

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
ASPParser.RULE_assignment = 35;
ASPParser.RULE_assignee = 36;
ASPParser.RULE_assigned_value = 37;
ASPParser.RULE_term = 38;
ASPParser.RULE_simpleTerm = 39;
ASPParser.RULE_functionTerm = 40;
ASPParser.RULE_tuple = 41;
ASPParser.RULE_constant_term = 42;
ASPParser.RULE_constant_functionTerm = 43;
ASPParser.RULE_constant_tuple = 44;
ASPParser.RULE_integer = 45;
ASPParser.RULE_weight = 46;
ASPParser.RULE_priority = 47;
ASPParser.RULE_lowerbound = 48;
ASPParser.RULE_upperbound = 49;

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

	choice() {
	    return this.getTypedRuleContext(ChoiceContext,0);
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

	assignment() {
	    return this.getTypedRuleContext(AssignmentContext,0);
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

	assignment() {
	    return this.getTypedRuleContext(AssignmentContext,0);
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

	COMPARATOR() {
	    return this.getToken(ASPParser.COMPARATOR, 0);
	};

	term() {
	    return this.getTypedRuleContext(TermContext,0);
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

	COMPARATOR() {
	    return this.getToken(ASPParser.COMPARATOR, 0);
	};

	term() {
	    return this.getTypedRuleContext(TermContext,0);
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

	NOT() {
	    return this.getToken(ASPParser.NOT, 0);
	};

	aggregate_atom_body() {
	    return this.getTypedRuleContext(Aggregate_atom_bodyContext,0);
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

	aggregate_atom_body() {
	    return this.getTypedRuleContext(Aggregate_atom_bodyContext,0);
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
