// Generated from src/parser/grammar/ASP.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import ASPListener from './ASPListener.mjs';
const serializedATN = [4,1,44,707,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,26,7,26,2,27,
7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,2,32,7,32,2,33,7,33,2,34,7,
34,2,35,7,35,2,36,7,36,2,37,7,37,2,38,7,38,2,39,7,39,2,40,7,40,2,41,7,41,
2,42,7,42,2,43,7,43,2,44,7,44,2,45,7,45,2,46,7,46,2,47,7,47,2,48,7,48,2,
49,7,49,2,50,7,50,2,51,7,51,2,52,7,52,2,53,7,53,1,0,1,0,1,0,1,0,5,0,113,
8,0,10,0,12,0,116,9,0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,3,1,128,8,
1,1,2,1,2,1,2,1,2,1,2,1,2,1,3,1,3,3,3,138,8,3,1,3,1,3,1,4,1,4,1,4,1,4,1,
4,1,5,3,5,148,8,5,1,5,1,5,1,5,1,5,5,5,154,8,5,10,5,12,5,157,9,5,3,5,159,
8,5,1,5,1,5,3,5,163,8,5,1,6,1,6,1,6,1,6,1,6,5,6,170,8,6,10,6,12,6,173,9,
6,3,6,175,8,6,3,6,177,8,6,1,7,1,7,3,7,181,8,7,1,7,3,7,184,8,7,1,8,1,8,3,
8,188,8,8,1,8,3,8,191,8,8,1,9,1,9,1,9,1,9,1,9,1,10,1,10,1,10,1,10,1,11,1,
11,1,11,5,11,205,8,11,10,11,12,11,208,9,11,1,11,3,11,211,8,11,1,12,1,12,
1,12,5,12,216,8,12,10,12,12,12,219,9,12,3,12,221,8,12,1,13,1,13,3,13,225,
8,13,1,13,3,13,228,8,13,1,14,1,14,3,14,232,8,14,1,14,1,14,3,14,236,8,14,
1,14,1,14,3,14,240,8,14,1,14,3,14,243,8,14,1,15,1,15,1,15,1,15,1,15,5,15,
250,8,15,10,15,12,15,253,9,15,3,15,255,8,15,1,15,1,15,1,15,1,15,1,15,1,15,
1,15,5,15,264,8,15,10,15,12,15,267,9,15,3,15,269,8,15,1,15,1,15,3,15,273,
8,15,1,16,1,16,1,16,1,16,1,16,3,16,280,8,16,1,16,1,16,1,17,1,17,1,17,1,17,
1,17,1,17,1,17,1,17,1,17,3,17,293,8,17,1,17,3,17,296,8,17,1,17,1,17,1,17,
3,17,301,8,17,1,17,5,17,304,8,17,10,17,12,17,307,9,17,1,17,1,17,1,18,1,18,
1,18,1,18,1,18,1,18,1,18,1,18,1,18,3,18,320,8,18,1,19,1,19,1,19,1,19,1,19,
1,20,1,20,1,20,1,20,3,20,331,8,20,1,21,1,21,1,22,1,22,1,23,1,23,1,24,1,24,
1,25,3,25,342,8,25,1,25,1,25,1,26,3,26,347,8,26,1,26,1,26,1,27,1,27,1,27,
1,27,1,27,5,27,356,8,27,10,27,12,27,359,9,27,3,27,361,8,27,1,27,3,27,364,
8,27,1,28,1,28,1,28,1,28,1,29,1,29,1,29,1,29,1,29,5,29,375,8,29,10,29,12,
29,378,9,29,3,29,380,8,29,1,29,1,29,1,29,1,29,1,29,1,29,1,29,1,29,5,29,390,
8,29,10,29,12,29,393,9,29,3,29,395,8,29,1,29,1,29,1,29,1,29,1,29,1,29,1,
29,1,29,5,29,405,8,29,10,29,12,29,408,9,29,3,29,410,8,29,1,29,1,29,1,29,
1,29,1,29,1,29,1,29,5,29,419,8,29,10,29,12,29,422,9,29,3,29,424,8,29,1,29,
3,29,427,8,29,1,30,1,30,1,30,5,30,432,8,30,10,30,12,30,435,9,30,1,30,1,30,
1,30,1,31,1,31,1,31,1,31,1,31,5,31,445,8,31,10,31,12,31,448,9,31,3,31,450,
8,31,1,31,1,31,1,31,1,31,1,31,1,31,1,31,1,31,5,31,460,8,31,10,31,12,31,463,
9,31,3,31,465,8,31,1,31,1,31,1,31,1,31,1,31,1,31,1,31,1,31,5,31,475,8,31,
10,31,12,31,478,9,31,3,31,480,8,31,1,31,1,31,1,31,1,31,1,31,1,31,1,31,5,
31,489,8,31,10,31,12,31,492,9,31,3,31,494,8,31,1,31,3,31,497,8,31,1,32,1,
32,1,32,5,32,502,8,32,10,32,12,32,505,9,32,3,32,507,8,32,1,32,1,32,1,32,
1,32,5,32,513,8,32,10,32,12,32,516,9,32,3,32,518,8,32,3,32,520,8,32,1,33,
1,33,1,33,5,33,525,8,33,10,33,12,33,528,9,33,1,33,1,33,1,33,1,33,5,33,534,
8,33,10,33,12,33,537,9,33,3,33,539,8,33,3,33,541,8,33,1,34,1,34,3,34,545,
8,34,1,34,3,34,548,8,34,1,35,1,35,1,35,1,35,1,35,3,35,555,8,35,1,36,3,36,
558,8,36,1,36,1,36,1,36,5,36,563,8,36,10,36,12,36,566,9,36,1,37,1,37,1,37,
5,37,571,8,37,10,37,12,37,574,9,37,1,38,1,38,1,38,5,38,579,8,38,10,38,12,
38,582,9,38,1,39,1,39,1,39,1,39,1,39,1,39,1,39,3,39,591,8,39,1,40,1,40,1,
40,1,40,1,40,1,40,1,40,3,40,600,8,40,1,41,1,41,1,41,1,41,1,41,5,41,607,8,
41,10,41,12,41,610,9,41,3,41,612,8,41,1,41,1,41,1,42,1,42,1,42,1,42,1,42,
1,42,5,42,622,8,42,10,42,12,42,625,9,42,1,42,1,42,1,43,1,43,1,44,1,44,1,
44,5,44,634,8,44,10,44,12,44,637,9,44,1,45,1,45,1,45,5,45,642,8,45,10,45,
12,45,645,9,45,1,46,1,46,1,46,5,46,650,8,46,10,46,12,46,653,9,46,1,47,1,
47,1,47,1,47,1,47,1,47,1,47,1,47,1,47,1,47,1,47,3,47,666,8,47,1,48,1,48,
1,48,1,48,1,48,5,48,673,8,48,10,48,12,48,676,9,48,3,48,678,8,48,1,48,1,48,
1,49,1,49,1,49,1,49,5,49,686,8,49,10,49,12,49,689,9,49,3,49,691,8,49,1,49,
1,49,1,50,1,50,3,50,697,8,50,1,51,1,51,1,51,1,51,1,52,1,52,1,53,1,53,1,53,
0,0,54,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,
48,50,52,54,56,58,60,62,64,66,68,70,72,74,76,78,80,82,84,86,88,90,92,94,
96,98,100,102,104,106,0,5,2,0,4,4,7,7,1,0,31,33,1,0,35,38,1,0,39,42,2,0,
24,25,29,29,771,0,114,1,0,0,0,2,127,1,0,0,0,4,129,1,0,0,0,6,137,1,0,0,0,
8,141,1,0,0,0,10,147,1,0,0,0,12,164,1,0,0,0,14,183,1,0,0,0,16,190,1,0,0,
0,18,192,1,0,0,0,20,197,1,0,0,0,22,210,1,0,0,0,24,220,1,0,0,0,26,227,1,0,
0,0,28,242,1,0,0,0,30,272,1,0,0,0,32,279,1,0,0,0,34,283,1,0,0,0,36,319,1,
0,0,0,38,321,1,0,0,0,40,326,1,0,0,0,42,332,1,0,0,0,44,334,1,0,0,0,46,336,
1,0,0,0,48,338,1,0,0,0,50,341,1,0,0,0,52,346,1,0,0,0,54,350,1,0,0,0,56,365,
1,0,0,0,58,426,1,0,0,0,60,428,1,0,0,0,62,496,1,0,0,0,64,506,1,0,0,0,66,521,
1,0,0,0,68,547,1,0,0,0,70,554,1,0,0,0,72,557,1,0,0,0,74,567,1,0,0,0,76,575,
1,0,0,0,78,590,1,0,0,0,80,599,1,0,0,0,82,601,1,0,0,0,84,615,1,0,0,0,86,628,
1,0,0,0,88,630,1,0,0,0,90,638,1,0,0,0,92,646,1,0,0,0,94,665,1,0,0,0,96,667,
1,0,0,0,98,681,1,0,0,0,100,696,1,0,0,0,102,698,1,0,0,0,104,702,1,0,0,0,106,
704,1,0,0,0,108,113,3,2,1,0,109,113,3,48,24,0,110,113,3,44,22,0,111,113,
3,46,23,0,112,108,1,0,0,0,112,109,1,0,0,0,112,110,1,0,0,0,112,111,1,0,0,
0,113,116,1,0,0,0,114,112,1,0,0,0,114,115,1,0,0,0,115,117,1,0,0,0,116,114,
1,0,0,0,117,118,5,0,0,1,118,1,1,0,0,0,119,128,3,4,2,0,120,128,3,6,3,0,121,
128,3,8,4,0,122,128,3,18,9,0,123,128,3,20,10,0,124,128,3,30,15,0,125,128,
3,34,17,0,126,128,3,36,18,0,127,119,1,0,0,0,127,120,1,0,0,0,127,121,1,0,
0,0,127,122,1,0,0,0,127,123,1,0,0,0,127,124,1,0,0,0,127,125,1,0,0,0,127,
126,1,0,0,0,128,3,1,0,0,0,129,130,5,1,0,0,130,131,5,24,0,0,131,132,5,31,
0,0,132,133,3,86,43,0,133,134,5,22,0,0,134,5,1,0,0,0,135,138,3,22,11,0,136,
138,3,10,5,0,137,135,1,0,0,0,137,136,1,0,0,0,138,139,1,0,0,0,139,140,5,22,
0,0,140,7,1,0,0,0,141,142,3,10,5,0,142,143,5,2,0,0,143,144,3,24,12,0,144,
145,5,22,0,0,145,9,1,0,0,0,146,148,3,70,35,0,147,146,1,0,0,0,147,148,1,0,
0,0,148,149,1,0,0,0,149,158,5,3,0,0,150,155,3,12,6,0,151,152,5,4,0,0,152,
154,3,12,6,0,153,151,1,0,0,0,154,157,1,0,0,0,155,153,1,0,0,0,155,156,1,0,
0,0,156,159,1,0,0,0,157,155,1,0,0,0,158,150,1,0,0,0,158,159,1,0,0,0,159,
160,1,0,0,0,160,162,5,5,0,0,161,163,3,70,35,0,162,161,1,0,0,0,162,163,1,
0,0,0,163,11,1,0,0,0,164,176,3,14,7,0,165,174,5,6,0,0,166,171,3,16,8,0,167,
168,5,7,0,0,168,170,3,16,8,0,169,167,1,0,0,0,170,173,1,0,0,0,171,169,1,0,
0,0,171,172,1,0,0,0,172,175,1,0,0,0,173,171,1,0,0,0,174,166,1,0,0,0,174,
175,1,0,0,0,175,177,1,0,0,0,176,165,1,0,0,0,176,177,1,0,0,0,177,13,1,0,0,
0,178,184,3,50,25,0,179,181,5,18,0,0,180,179,1,0,0,0,180,181,1,0,0,0,181,
182,1,0,0,0,182,184,3,56,28,0,183,178,1,0,0,0,183,180,1,0,0,0,184,15,1,0,
0,0,185,191,3,50,25,0,186,188,5,18,0,0,187,186,1,0,0,0,187,188,1,0,0,0,188,
189,1,0,0,0,189,191,3,56,28,0,190,185,1,0,0,0,190,187,1,0,0,0,191,17,1,0,
0,0,192,193,3,22,11,0,193,194,5,2,0,0,194,195,3,24,12,0,195,196,5,22,0,0,
196,19,1,0,0,0,197,198,5,2,0,0,198,199,3,24,12,0,199,200,5,22,0,0,200,21,
1,0,0,0,201,206,3,26,13,0,202,203,7,0,0,0,203,205,3,26,13,0,204,202,1,0,
0,0,205,208,1,0,0,0,206,204,1,0,0,0,206,207,1,0,0,0,207,211,1,0,0,0,208,
206,1,0,0,0,209,211,3,58,29,0,210,201,1,0,0,0,210,209,1,0,0,0,211,23,1,0,
0,0,212,217,3,28,14,0,213,214,7,0,0,0,214,216,3,28,14,0,215,213,1,0,0,0,
216,219,1,0,0,0,217,215,1,0,0,0,217,218,1,0,0,0,218,221,1,0,0,0,219,217,
1,0,0,0,220,212,1,0,0,0,220,221,1,0,0,0,221,25,1,0,0,0,222,228,3,50,25,0,
223,225,5,18,0,0,224,223,1,0,0,0,224,225,1,0,0,0,225,226,1,0,0,0,226,228,
3,56,28,0,227,222,1,0,0,0,227,224,1,0,0,0,228,27,1,0,0,0,229,243,3,50,25,
0,230,232,5,18,0,0,231,230,1,0,0,0,231,232,1,0,0,0,232,233,1,0,0,0,233,243,
3,56,28,0,234,236,5,18,0,0,235,234,1,0,0,0,235,236,1,0,0,0,236,237,1,0,0,
0,237,243,3,62,31,0,238,240,5,18,0,0,239,238,1,0,0,0,239,240,1,0,0,0,240,
241,1,0,0,0,241,243,3,10,5,0,242,229,1,0,0,0,242,231,1,0,0,0,242,235,1,0,
0,0,242,239,1,0,0,0,243,29,1,0,0,0,244,245,5,8,0,0,245,254,5,3,0,0,246,251,
3,32,16,0,247,248,5,4,0,0,248,250,3,32,16,0,249,247,1,0,0,0,250,253,1,0,
0,0,251,249,1,0,0,0,251,252,1,0,0,0,252,255,1,0,0,0,253,251,1,0,0,0,254,
246,1,0,0,0,254,255,1,0,0,0,255,256,1,0,0,0,256,257,5,5,0,0,257,273,5,22,
0,0,258,259,5,9,0,0,259,268,5,3,0,0,260,265,3,32,16,0,261,262,5,4,0,0,262,
264,3,32,16,0,263,261,1,0,0,0,264,267,1,0,0,0,265,263,1,0,0,0,265,266,1,
0,0,0,266,269,1,0,0,0,267,265,1,0,0,0,268,260,1,0,0,0,268,269,1,0,0,0,269,
270,1,0,0,0,270,271,5,5,0,0,271,273,5,22,0,0,272,244,1,0,0,0,272,258,1,0,
0,0,273,31,1,0,0,0,274,275,3,104,52,0,275,276,5,10,0,0,276,277,3,106,53,
0,277,278,5,7,0,0,278,280,1,0,0,0,279,274,1,0,0,0,279,280,1,0,0,0,280,281,
1,0,0,0,281,282,3,66,33,0,282,33,1,0,0,0,283,284,5,11,0,0,284,285,3,24,12,
0,285,286,5,22,0,0,286,292,5,12,0,0,287,288,3,104,52,0,288,289,5,10,0,0,
289,290,3,106,53,0,290,291,5,7,0,0,291,293,1,0,0,0,292,287,1,0,0,0,292,293,
1,0,0,0,293,295,1,0,0,0,294,296,5,35,0,0,295,294,1,0,0,0,295,296,1,0,0,0,
296,297,1,0,0,0,297,305,3,70,35,0,298,300,5,7,0,0,299,301,5,35,0,0,300,299,
1,0,0,0,300,301,1,0,0,0,301,302,1,0,0,0,302,304,3,70,35,0,303,298,1,0,0,
0,304,307,1,0,0,0,305,303,1,0,0,0,305,306,1,0,0,0,306,308,1,0,0,0,307,305,
1,0,0,0,308,309,5,23,0,0,309,35,1,0,0,0,310,311,3,38,19,0,311,312,5,22,0,
0,312,320,1,0,0,0,313,314,3,40,20,0,314,315,5,22,0,0,315,320,1,0,0,0,316,
317,3,42,21,0,317,318,5,22,0,0,318,320,1,0,0,0,319,310,1,0,0,0,319,313,1,
0,0,0,319,316,1,0,0,0,320,37,1,0,0,0,321,322,5,13,0,0,322,323,5,24,0,0,323,
324,5,40,0,0,324,325,5,29,0,0,325,39,1,0,0,0,326,327,5,13,0,0,327,330,3,
70,35,0,328,329,5,6,0,0,329,331,3,24,12,0,330,328,1,0,0,0,330,331,1,0,0,
0,331,41,1,0,0,0,332,333,5,13,0,0,333,43,1,0,0,0,334,335,5,19,0,0,335,45,
1,0,0,0,336,337,5,20,0,0,337,47,1,0,0,0,338,339,5,21,0,0,339,49,1,0,0,0,
340,342,5,18,0,0,341,340,1,0,0,0,341,342,1,0,0,0,342,343,1,0,0,0,343,344,
3,52,26,0,344,51,1,0,0,0,345,347,5,35,0,0,346,345,1,0,0,0,346,347,1,0,0,
0,347,348,1,0,0,0,348,349,3,54,27,0,349,53,1,0,0,0,350,363,5,24,0,0,351,
360,5,14,0,0,352,357,3,70,35,0,353,354,5,7,0,0,354,356,3,70,35,0,355,353,
1,0,0,0,356,359,1,0,0,0,357,355,1,0,0,0,357,358,1,0,0,0,358,361,1,0,0,0,
359,357,1,0,0,0,360,352,1,0,0,0,360,361,1,0,0,0,361,362,1,0,0,0,362,364,
5,15,0,0,363,351,1,0,0,0,363,364,1,0,0,0,364,55,1,0,0,0,365,366,3,70,35,
0,366,367,7,1,0,0,367,368,3,70,35,0,368,57,1,0,0,0,369,370,5,34,0,0,370,
379,5,3,0,0,371,376,3,60,30,0,372,373,5,4,0,0,373,375,3,60,30,0,374,372,
1,0,0,0,375,378,1,0,0,0,376,374,1,0,0,0,376,377,1,0,0,0,377,380,1,0,0,0,
378,376,1,0,0,0,379,371,1,0,0,0,379,380,1,0,0,0,380,381,1,0,0,0,381,382,
5,5,0,0,382,383,7,1,0,0,383,427,3,70,35,0,384,385,5,34,0,0,385,394,5,3,0,
0,386,391,3,60,30,0,387,388,5,4,0,0,388,390,3,60,30,0,389,387,1,0,0,0,390,
393,1,0,0,0,391,389,1,0,0,0,391,392,1,0,0,0,392,395,1,0,0,0,393,391,1,0,
0,0,394,386,1,0,0,0,394,395,1,0,0,0,395,396,1,0,0,0,396,427,5,5,0,0,397,
398,3,70,35,0,398,399,7,1,0,0,399,400,5,34,0,0,400,409,5,3,0,0,401,406,3,
60,30,0,402,403,5,4,0,0,403,405,3,60,30,0,404,402,1,0,0,0,405,408,1,0,0,
0,406,404,1,0,0,0,406,407,1,0,0,0,407,410,1,0,0,0,408,406,1,0,0,0,409,401,
1,0,0,0,409,410,1,0,0,0,410,411,1,0,0,0,411,412,5,5,0,0,412,427,1,0,0,0,
413,414,5,34,0,0,414,423,5,3,0,0,415,420,3,60,30,0,416,417,5,4,0,0,417,419,
3,60,30,0,418,416,1,0,0,0,419,422,1,0,0,0,420,418,1,0,0,0,420,421,1,0,0,
0,421,424,1,0,0,0,422,420,1,0,0,0,423,415,1,0,0,0,423,424,1,0,0,0,424,425,
1,0,0,0,425,427,5,5,0,0,426,369,1,0,0,0,426,384,1,0,0,0,426,397,1,0,0,0,
426,413,1,0,0,0,427,59,1,0,0,0,428,433,3,70,35,0,429,430,5,7,0,0,430,432,
3,70,35,0,431,429,1,0,0,0,432,435,1,0,0,0,433,431,1,0,0,0,433,434,1,0,0,
0,434,436,1,0,0,0,435,433,1,0,0,0,436,437,5,6,0,0,437,438,3,68,34,0,438,
61,1,0,0,0,439,440,5,34,0,0,440,449,5,3,0,0,441,446,3,64,32,0,442,443,5,
4,0,0,443,445,3,64,32,0,444,442,1,0,0,0,445,448,1,0,0,0,446,444,1,0,0,0,
446,447,1,0,0,0,447,450,1,0,0,0,448,446,1,0,0,0,449,441,1,0,0,0,449,450,
1,0,0,0,450,451,1,0,0,0,451,452,5,5,0,0,452,453,7,1,0,0,453,497,3,70,35,
0,454,455,5,34,0,0,455,464,5,3,0,0,456,461,3,64,32,0,457,458,5,4,0,0,458,
460,3,64,32,0,459,457,1,0,0,0,460,463,1,0,0,0,461,459,1,0,0,0,461,462,1,
0,0,0,462,465,1,0,0,0,463,461,1,0,0,0,464,456,1,0,0,0,464,465,1,0,0,0,465,
466,1,0,0,0,466,497,5,5,0,0,467,468,3,70,35,0,468,469,7,1,0,0,469,470,5,
34,0,0,470,479,5,3,0,0,471,476,3,64,32,0,472,473,5,4,0,0,473,475,3,64,32,
0,474,472,1,0,0,0,475,478,1,0,0,0,476,474,1,0,0,0,476,477,1,0,0,0,477,480,
1,0,0,0,478,476,1,0,0,0,479,471,1,0,0,0,479,480,1,0,0,0,480,481,1,0,0,0,
481,482,5,5,0,0,482,497,1,0,0,0,483,484,5,34,0,0,484,493,5,3,0,0,485,490,
3,64,32,0,486,487,5,4,0,0,487,489,3,64,32,0,488,486,1,0,0,0,489,492,1,0,
0,0,490,488,1,0,0,0,490,491,1,0,0,0,491,494,1,0,0,0,492,490,1,0,0,0,493,
485,1,0,0,0,493,494,1,0,0,0,494,495,1,0,0,0,495,497,5,5,0,0,496,439,1,0,
0,0,496,454,1,0,0,0,496,467,1,0,0,0,496,483,1,0,0,0,497,63,1,0,0,0,498,503,
3,70,35,0,499,500,5,7,0,0,500,502,3,70,35,0,501,499,1,0,0,0,502,505,1,0,
0,0,503,501,1,0,0,0,503,504,1,0,0,0,504,507,1,0,0,0,505,503,1,0,0,0,506,
498,1,0,0,0,506,507,1,0,0,0,507,519,1,0,0,0,508,517,5,6,0,0,509,514,3,68,
34,0,510,511,5,7,0,0,511,513,3,68,34,0,512,510,1,0,0,0,513,516,1,0,0,0,514,
512,1,0,0,0,514,515,1,0,0,0,515,518,1,0,0,0,516,514,1,0,0,0,517,509,1,0,
0,0,517,518,1,0,0,0,518,520,1,0,0,0,519,508,1,0,0,0,519,520,1,0,0,0,520,
65,1,0,0,0,521,526,3,70,35,0,522,523,5,7,0,0,523,525,3,70,35,0,524,522,1,
0,0,0,525,528,1,0,0,0,526,524,1,0,0,0,526,527,1,0,0,0,527,540,1,0,0,0,528,
526,1,0,0,0,529,538,5,6,0,0,530,535,3,68,34,0,531,532,5,7,0,0,532,534,3,
68,34,0,533,531,1,0,0,0,534,537,1,0,0,0,535,533,1,0,0,0,535,536,1,0,0,0,
536,539,1,0,0,0,537,535,1,0,0,0,538,530,1,0,0,0,538,539,1,0,0,0,539,541,
1,0,0,0,540,529,1,0,0,0,540,541,1,0,0,0,541,67,1,0,0,0,542,548,3,50,25,0,
543,545,5,18,0,0,544,543,1,0,0,0,544,545,1,0,0,0,545,546,1,0,0,0,546,548,
3,56,28,0,547,542,1,0,0,0,547,544,1,0,0,0,548,69,1,0,0,0,549,550,5,16,0,
0,550,551,3,72,36,0,551,552,5,16,0,0,552,555,1,0,0,0,553,555,3,72,36,0,554,
549,1,0,0,0,554,553,1,0,0,0,555,71,1,0,0,0,556,558,5,35,0,0,557,556,1,0,
0,0,557,558,1,0,0,0,558,559,1,0,0,0,559,564,3,74,37,0,560,561,7,2,0,0,561,
563,3,74,37,0,562,560,1,0,0,0,563,566,1,0,0,0,564,562,1,0,0,0,564,565,1,
0,0,0,565,73,1,0,0,0,566,564,1,0,0,0,567,572,3,76,38,0,568,569,7,3,0,0,569,
571,3,76,38,0,570,568,1,0,0,0,571,574,1,0,0,0,572,570,1,0,0,0,572,573,1,
0,0,0,573,75,1,0,0,0,574,572,1,0,0,0,575,580,3,78,39,0,576,577,5,43,0,0,
577,579,3,78,39,0,578,576,1,0,0,0,579,582,1,0,0,0,580,578,1,0,0,0,580,581,
1,0,0,0,581,77,1,0,0,0,582,580,1,0,0,0,583,591,3,80,40,0,584,591,3,82,41,
0,585,591,3,84,42,0,586,587,5,14,0,0,587,588,3,70,35,0,588,589,5,15,0,0,
589,591,1,0,0,0,590,583,1,0,0,0,590,584,1,0,0,0,590,585,1,0,0,0,590,586,
1,0,0,0,591,79,1,0,0,0,592,600,3,100,50,0,593,600,5,24,0,0,594,600,5,30,
0,0,595,600,5,25,0,0,596,600,5,26,0,0,597,600,5,27,0,0,598,600,5,28,0,0,
599,592,1,0,0,0,599,593,1,0,0,0,599,594,1,0,0,0,599,595,1,0,0,0,599,596,
1,0,0,0,599,597,1,0,0,0,599,598,1,0,0,0,600,81,1,0,0,0,601,602,5,24,0,0,
602,611,5,14,0,0,603,608,3,70,35,0,604,605,5,7,0,0,605,607,3,70,35,0,606,
604,1,0,0,0,607,610,1,0,0,0,608,606,1,0,0,0,608,609,1,0,0,0,609,612,1,0,
0,0,610,608,1,0,0,0,611,603,1,0,0,0,611,612,1,0,0,0,612,613,1,0,0,0,613,
614,5,15,0,0,614,83,1,0,0,0,615,616,5,14,0,0,616,617,3,70,35,0,617,618,5,
7,0,0,618,623,3,70,35,0,619,620,5,7,0,0,620,622,3,70,35,0,621,619,1,0,0,
0,622,625,1,0,0,0,623,621,1,0,0,0,623,624,1,0,0,0,624,626,1,0,0,0,625,623,
1,0,0,0,626,627,5,15,0,0,627,85,1,0,0,0,628,629,3,88,44,0,629,87,1,0,0,0,
630,635,3,90,45,0,631,632,7,2,0,0,632,634,3,90,45,0,633,631,1,0,0,0,634,
637,1,0,0,0,635,633,1,0,0,0,635,636,1,0,0,0,636,89,1,0,0,0,637,635,1,0,0,
0,638,643,3,92,46,0,639,640,7,3,0,0,640,642,3,92,46,0,641,639,1,0,0,0,642,
645,1,0,0,0,643,641,1,0,0,0,643,644,1,0,0,0,644,91,1,0,0,0,645,643,1,0,0,
0,646,651,3,94,47,0,647,648,5,43,0,0,648,650,3,94,47,0,649,647,1,0,0,0,650,
653,1,0,0,0,651,649,1,0,0,0,651,652,1,0,0,0,652,93,1,0,0,0,653,651,1,0,0,
0,654,666,3,100,50,0,655,666,5,24,0,0,656,666,5,30,0,0,657,666,5,27,0,0,
658,666,5,28,0,0,659,666,3,96,48,0,660,666,3,98,49,0,661,662,5,14,0,0,662,
663,3,86,43,0,663,664,5,15,0,0,664,666,1,0,0,0,665,654,1,0,0,0,665,655,1,
0,0,0,665,656,1,0,0,0,665,657,1,0,0,0,665,658,1,0,0,0,665,659,1,0,0,0,665,
660,1,0,0,0,665,661,1,0,0,0,666,95,1,0,0,0,667,668,5,24,0,0,668,677,5,14,
0,0,669,674,3,86,43,0,670,671,5,7,0,0,671,673,3,86,43,0,672,670,1,0,0,0,
673,676,1,0,0,0,674,672,1,0,0,0,674,675,1,0,0,0,675,678,1,0,0,0,676,674,
1,0,0,0,677,669,1,0,0,0,677,678,1,0,0,0,678,679,1,0,0,0,679,680,5,15,0,0,
680,97,1,0,0,0,681,690,5,14,0,0,682,687,3,86,43,0,683,684,5,7,0,0,684,686,
3,86,43,0,685,683,1,0,0,0,686,689,1,0,0,0,687,685,1,0,0,0,687,688,1,0,0,
0,688,691,1,0,0,0,689,687,1,0,0,0,690,682,1,0,0,0,690,691,1,0,0,0,691,692,
1,0,0,0,692,693,5,15,0,0,693,99,1,0,0,0,694,697,3,102,51,0,695,697,5,29,
0,0,696,694,1,0,0,0,696,695,1,0,0,0,697,101,1,0,0,0,698,699,7,4,0,0,699,
700,5,17,0,0,700,701,7,4,0,0,701,103,1,0,0,0,702,703,3,100,50,0,703,105,
1,0,0,0,704,705,3,100,50,0,705,107,1,0,0,0,91,112,114,127,137,147,155,158,
162,171,174,176,180,183,187,190,206,210,217,220,224,227,231,235,239,242,
251,254,265,268,272,279,292,295,300,305,319,330,341,346,357,360,363,376,
379,391,394,406,409,420,423,426,433,446,449,461,464,476,479,490,493,496,
503,506,514,517,519,526,535,538,540,544,547,554,557,564,572,580,590,599,
608,611,623,635,643,651,665,674,677,687,690,696];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class ASPParser extends antlr4.Parser {

    static grammarFileName = "ASP.g4";
    static literalNames = [ null, "'#const'", "':-'", "'{'", "';'", "'}'", 
                            "':'", "','", "'#minimize'", "'#maximize'", 
                            "'@'", "':~'", "'['", "'#show'", "'('", "')'", 
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
                         "constant_tuple", "integer", "interval", "weight", 
                         "priority" ];

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
	        this.state = 114;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 2134731534) !== 0) || _la===34 || _la===35) {
	            this.state = 112;
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
	                this.state = 108;
	                this.statement();
	                break;
	            case 21:
	                this.state = 109;
	                this.line_comment();
	                break;
	            case 19:
	                this.state = 110;
	                this.block_comment();
	                break;
	            case 20:
	                this.state = 111;
	                this.unclosed_comment();
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }
	            this.state = 116;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 117;
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
	        this.state = 127;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,2,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 119;
	            this.constant();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 120;
	            this.fact();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 121;
	            this.choice_rule();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 122;
	            this.definite_rule();
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 123;
	            this.constraint();
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 124;
	            this.optimization();
	            break;

	        case 7:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 125;
	            this.weak_constraint();
	            break;

	        case 8:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 126;
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
	        this.state = 129;
	        this.match(ASPParser.T__0);
	        this.state = 130;
	        this.match(ASPParser.CONSTANT);
	        this.state = 131;
	        this.match(ASPParser.EQ);
	        this.state = 132;
	        this.constant_term();
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



	fact() {
	    let localctx = new FactContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, ASPParser.RULE_fact);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 137;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,3,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 135;
	            this.head();
	            break;

	        case 2:
	            this.state = 136;
	            this.choice();
	            break;

	        }
	        this.state = 139;
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
	        this.state = 141;
	        this.choice();
	        this.state = 142;
	        this.match(ASPParser.T__1);
	        this.state = 143;
	        this.body();
	        this.state = 144;
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
	        this.state = 147;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(((((_la - 14)) & ~0x1f) === 0 && ((1 << (_la - 14)) & 2227205) !== 0)) {
	            this.state = 146;
	            this.term();
	        }

	        this.state = 149;
	        this.match(ASPParser.T__2);
	        this.state = 158;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(((((_la - 14)) & ~0x1f) === 0 && ((1 << (_la - 14)) & 2227221) !== 0)) {
	            this.state = 150;
	            this.choice_element();
	            this.state = 155;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===4) {
	                this.state = 151;
	                this.match(ASPParser.T__3);
	                this.state = 152;
	                this.choice_element();
	                this.state = 157;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	        }

	        this.state = 160;
	        this.match(ASPParser.T__4);
	        this.state = 162;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(((((_la - 14)) & ~0x1f) === 0 && ((1 << (_la - 14)) & 2227205) !== 0)) {
	            this.state = 161;
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



	choice_element() {
	    let localctx = new Choice_elementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, ASPParser.RULE_choice_element);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 164;
	        this.choiceHead_atoms();
	        this.state = 176;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===6) {
	            this.state = 165;
	            this.match(ASPParser.T__5);
	            this.state = 174;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(((((_la - 14)) & ~0x1f) === 0 && ((1 << (_la - 14)) & 2227221) !== 0)) {
	                this.state = 166;
	                this.choiceBody_atoms();
	                this.state = 171;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                while(_la===7) {
	                    this.state = 167;
	                    this.match(ASPParser.T__6);
	                    this.state = 168;
	                    this.choiceBody_atoms();
	                    this.state = 173;
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
	        this.state = 183;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,12,this._ctx);
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
	            _la = this._input.LA(1);
	            if(_la===18) {
	                this.state = 179;
	                this.match(ASPParser.NOT);
	            }

	            this.state = 182;
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
	        this.state = 190;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,14,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 185;
	            this.literal();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 187;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===18) {
	                this.state = 186;
	                this.match(ASPParser.NOT);
	            }

	            this.state = 189;
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
	        this.state = 192;
	        this.head();
	        this.state = 193;
	        this.match(ASPParser.T__1);
	        this.state = 194;
	        this.body();
	        this.state = 195;
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
	        this.state = 197;
	        this.match(ASPParser.T__1);
	        this.state = 198;
	        this.body();
	        this.state = 199;
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
	        this.state = 210;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,16,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 201;
	            this.head_atoms();
	            this.state = 206;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===4 || _la===7) {
	                this.state = 202;
	                _la = this._input.LA(1);
	                if(!(_la===4 || _la===7)) {
	                this._errHandler.recoverInline(this);
	                }
	                else {
	                	this._errHandler.reportMatch(this);
	                    this.consume();
	                }
	                this.state = 203;
	                this.head_atoms();
	                this.state = 208;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 209;
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
	        this.state = 220;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) === 0 && ((1 << _la) & 2131050504) !== 0) || _la===34 || _la===35) {
	            this.state = 212;
	            this.body_atoms();
	            this.state = 217;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===4 || _la===7) {
	                this.state = 213;
	                _la = this._input.LA(1);
	                if(!(_la===4 || _la===7)) {
	                this._errHandler.recoverInline(this);
	                }
	                else {
	                	this._errHandler.reportMatch(this);
	                    this.consume();
	                }
	                this.state = 214;
	                this.body_atoms();
	                this.state = 219;
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
	        this.state = 227;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,20,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 222;
	            this.literal();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 224;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===18) {
	                this.state = 223;
	                this.match(ASPParser.NOT);
	            }

	            this.state = 226;
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
	        this.state = 242;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,24,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 229;
	            this.literal();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 231;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===18) {
	                this.state = 230;
	                this.match(ASPParser.NOT);
	            }

	            this.state = 233;
	            this.builtIn_atom();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 235;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===18) {
	                this.state = 234;
	                this.match(ASPParser.NOT);
	            }

	            this.state = 237;
	            this.aggregate_atom_body();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 239;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===18) {
	                this.state = 238;
	                this.match(ASPParser.NOT);
	            }

	            this.state = 241;
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
	        this.state = 272;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 8:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 244;
	            this.match(ASPParser.T__7);
	            this.state = 245;
	            this.match(ASPParser.T__2);
	            this.state = 254;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(((((_la - 14)) & ~0x1f) === 0 && ((1 << (_la - 14)) & 2227205) !== 0)) {
	                this.state = 246;
	                this.optimizationBody();
	                this.state = 251;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                while(_la===4) {
	                    this.state = 247;
	                    this.match(ASPParser.T__3);
	                    this.state = 248;
	                    this.optimizationBody();
	                    this.state = 253;
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                }
	            }

	            this.state = 256;
	            this.match(ASPParser.T__4);
	            this.state = 257;
	            this.match(ASPParser.DOT);
	            break;
	        case 9:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 258;
	            this.match(ASPParser.T__8);
	            this.state = 259;
	            this.match(ASPParser.T__2);
	            this.state = 268;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(((((_la - 14)) & ~0x1f) === 0 && ((1 << (_la - 14)) & 2227205) !== 0)) {
	                this.state = 260;
	                this.optimizationBody();
	                this.state = 265;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                while(_la===4) {
	                    this.state = 261;
	                    this.match(ASPParser.T__3);
	                    this.state = 262;
	                    this.optimizationBody();
	                    this.state = 267;
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                }
	            }

	            this.state = 270;
	            this.match(ASPParser.T__4);
	            this.state = 271;
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
	        this.state = 279;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,30,this._ctx);
	        if(la_===1) {
	            this.state = 274;
	            this.weight();
	            this.state = 275;
	            this.match(ASPParser.T__9);
	            this.state = 276;
	            this.priority();
	            this.state = 277;
	            this.match(ASPParser.T__6);

	        }
	        this.state = 281;
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
	        this.state = 283;
	        this.match(ASPParser.T__10);
	        this.state = 284;
	        this.body();
	        this.state = 285;
	        this.match(ASPParser.DOT);
	        this.state = 286;
	        this.match(ASPParser.T__11);
	        this.state = 292;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,31,this._ctx);
	        if(la_===1) {
	            this.state = 287;
	            this.weight();
	            this.state = 288;
	            this.match(ASPParser.T__9);
	            this.state = 289;
	            this.priority();
	            this.state = 290;
	            this.match(ASPParser.T__6);

	        }

	        this.state = 295;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,32,this._ctx);
	        if(la_===1) {
	            this.state = 294;
	            this.match(ASPParser.CLASSICAL_NEGATION);

	        }
	        this.state = 297;
	        this.term();
	        this.state = 305;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===7) {
	            this.state = 298;
	            this.match(ASPParser.T__6);
	            this.state = 300;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,33,this._ctx);
	            if(la_===1) {
	                this.state = 299;
	                this.match(ASPParser.CLASSICAL_NEGATION);

	            }
	            this.state = 302;
	            this.term();
	            this.state = 307;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 308;
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
	        this.state = 319;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,35,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 310;
	            this.show_atoms();
	            this.state = 311;
	            this.match(ASPParser.DOT);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 313;
	            this.show_terms();
	            this.state = 314;
	            this.match(ASPParser.DOT);
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 316;
	            this.show_nothing();
	            this.state = 317;
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
	        this.state = 321;
	        this.match(ASPParser.T__12);
	        this.state = 322;
	        this.match(ASPParser.CONSTANT);
	        this.state = 323;
	        this.match(ASPParser.DIVISION);
	        this.state = 324;
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
	        this.state = 326;
	        this.match(ASPParser.T__12);
	        this.state = 327;
	        this.term();
	        this.state = 330;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===6) {
	            this.state = 328;
	            this.match(ASPParser.T__5);
	            this.state = 329;
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
	        this.state = 332;
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
	        this.state = 334;
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
	        this.state = 336;
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
	        this.state = 338;
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
	        this.state = 341;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===18) {
	            this.state = 340;
	            this.match(ASPParser.NOT);
	        }

	        this.state = 343;
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
	        this.state = 346;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===35) {
	            this.state = 345;
	            this.match(ASPParser.CLASSICAL_NEGATION);
	        }

	        this.state = 348;
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
	        this.state = 350;
	        this.match(ASPParser.CONSTANT);
	        this.state = 363;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===14) {
	            this.state = 351;
	            this.match(ASPParser.T__13);
	            this.state = 360;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(((((_la - 14)) & ~0x1f) === 0 && ((1 << (_la - 14)) & 2227205) !== 0)) {
	                this.state = 352;
	                this.term();
	                this.state = 357;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                while(_la===7) {
	                    this.state = 353;
	                    this.match(ASPParser.T__6);
	                    this.state = 354;
	                    this.term();
	                    this.state = 359;
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                }
	            }

	            this.state = 362;
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
	        this.state = 365;
	        this.term();
	        this.state = 366;
	        _la = this._input.LA(1);
	        if(!(((((_la - 31)) & ~0x1f) === 0 && ((1 << (_la - 31)) & 7) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	        this.state = 367;
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
	        this.state = 426;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,50,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 369;
	            this.match(ASPParser.AGGREGATE_FUNCTION);
	            this.state = 370;
	            this.match(ASPParser.T__2);
	            this.state = 379;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(((((_la - 14)) & ~0x1f) === 0 && ((1 << (_la - 14)) & 2227205) !== 0)) {
	                this.state = 371;
	                this.aggregate_element_head();
	                this.state = 376;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                while(_la===4) {
	                    this.state = 372;
	                    this.match(ASPParser.T__3);
	                    this.state = 373;
	                    this.aggregate_element_head();
	                    this.state = 378;
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                }
	            }

	            this.state = 381;
	            this.match(ASPParser.T__4);
	            this.state = 382;
	            _la = this._input.LA(1);
	            if(!(((((_la - 31)) & ~0x1f) === 0 && ((1 << (_la - 31)) & 7) !== 0))) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 383;
	            this.term();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 384;
	            this.match(ASPParser.AGGREGATE_FUNCTION);
	            this.state = 385;
	            this.match(ASPParser.T__2);
	            this.state = 394;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(((((_la - 14)) & ~0x1f) === 0 && ((1 << (_la - 14)) & 2227205) !== 0)) {
	                this.state = 386;
	                this.aggregate_element_head();
	                this.state = 391;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                while(_la===4) {
	                    this.state = 387;
	                    this.match(ASPParser.T__3);
	                    this.state = 388;
	                    this.aggregate_element_head();
	                    this.state = 393;
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                }
	            }

	            this.state = 396;
	            this.match(ASPParser.T__4);
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 397;
	            this.term();
	            this.state = 398;
	            _la = this._input.LA(1);
	            if(!(((((_la - 31)) & ~0x1f) === 0 && ((1 << (_la - 31)) & 7) !== 0))) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 399;
	            this.match(ASPParser.AGGREGATE_FUNCTION);
	            this.state = 400;
	            this.match(ASPParser.T__2);
	            this.state = 409;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(((((_la - 14)) & ~0x1f) === 0 && ((1 << (_la - 14)) & 2227205) !== 0)) {
	                this.state = 401;
	                this.aggregate_element_head();
	                this.state = 406;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                while(_la===4) {
	                    this.state = 402;
	                    this.match(ASPParser.T__3);
	                    this.state = 403;
	                    this.aggregate_element_head();
	                    this.state = 408;
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                }
	            }

	            this.state = 411;
	            this.match(ASPParser.T__4);
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 413;
	            this.match(ASPParser.AGGREGATE_FUNCTION);
	            this.state = 414;
	            this.match(ASPParser.T__2);
	            this.state = 423;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(((((_la - 14)) & ~0x1f) === 0 && ((1 << (_la - 14)) & 2227205) !== 0)) {
	                this.state = 415;
	                this.aggregate_element_head();
	                this.state = 420;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                while(_la===4) {
	                    this.state = 416;
	                    this.match(ASPParser.T__3);
	                    this.state = 417;
	                    this.aggregate_element_head();
	                    this.state = 422;
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                }
	            }

	            this.state = 425;
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
	        this.state = 428;
	        this.term();
	        this.state = 433;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===7) {
	            this.state = 429;
	            this.match(ASPParser.T__6);
	            this.state = 430;
	            this.term();
	            this.state = 435;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 436;
	        this.match(ASPParser.T__5);
	        this.state = 437;
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
	        this.state = 496;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,60,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 439;
	            this.match(ASPParser.AGGREGATE_FUNCTION);
	            this.state = 440;
	            this.match(ASPParser.T__2);
	            this.state = 449;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,53,this._ctx);
	            if(la_===1) {
	                this.state = 441;
	                this.aggregate_element_body();
	                this.state = 446;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                while(_la===4) {
	                    this.state = 442;
	                    this.match(ASPParser.T__3);
	                    this.state = 443;
	                    this.aggregate_element_body();
	                    this.state = 448;
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                }

	            }
	            this.state = 451;
	            this.match(ASPParser.T__4);
	            this.state = 452;
	            _la = this._input.LA(1);
	            if(!(((((_la - 31)) & ~0x1f) === 0 && ((1 << (_la - 31)) & 7) !== 0))) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 453;
	            this.term();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 454;
	            this.match(ASPParser.AGGREGATE_FUNCTION);
	            this.state = 455;
	            this.match(ASPParser.T__2);
	            this.state = 464;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,55,this._ctx);
	            if(la_===1) {
	                this.state = 456;
	                this.aggregate_element_body();
	                this.state = 461;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                while(_la===4) {
	                    this.state = 457;
	                    this.match(ASPParser.T__3);
	                    this.state = 458;
	                    this.aggregate_element_body();
	                    this.state = 463;
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                }

	            }
	            this.state = 466;
	            this.match(ASPParser.T__4);
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 467;
	            this.term();
	            this.state = 468;
	            _la = this._input.LA(1);
	            if(!(((((_la - 31)) & ~0x1f) === 0 && ((1 << (_la - 31)) & 7) !== 0))) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 469;
	            this.match(ASPParser.AGGREGATE_FUNCTION);
	            this.state = 470;
	            this.match(ASPParser.T__2);
	            this.state = 479;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,57,this._ctx);
	            if(la_===1) {
	                this.state = 471;
	                this.aggregate_element_body();
	                this.state = 476;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                while(_la===4) {
	                    this.state = 472;
	                    this.match(ASPParser.T__3);
	                    this.state = 473;
	                    this.aggregate_element_body();
	                    this.state = 478;
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                }

	            }
	            this.state = 481;
	            this.match(ASPParser.T__4);
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 483;
	            this.match(ASPParser.AGGREGATE_FUNCTION);
	            this.state = 484;
	            this.match(ASPParser.T__2);
	            this.state = 493;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,59,this._ctx);
	            if(la_===1) {
	                this.state = 485;
	                this.aggregate_element_body();
	                this.state = 490;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                while(_la===4) {
	                    this.state = 486;
	                    this.match(ASPParser.T__3);
	                    this.state = 487;
	                    this.aggregate_element_body();
	                    this.state = 492;
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                }

	            }
	            this.state = 495;
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
	        this.state = 506;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(((((_la - 14)) & ~0x1f) === 0 && ((1 << (_la - 14)) & 2227205) !== 0)) {
	            this.state = 498;
	            this.term();
	            this.state = 503;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===7) {
	                this.state = 499;
	                this.match(ASPParser.T__6);
	                this.state = 500;
	                this.term();
	                this.state = 505;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	        }

	        this.state = 519;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===6) {
	            this.state = 508;
	            this.match(ASPParser.T__5);
	            this.state = 517;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(((((_la - 14)) & ~0x1f) === 0 && ((1 << (_la - 14)) & 2227221) !== 0)) {
	                this.state = 509;
	                this.aggregate_literal();
	                this.state = 514;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                while(_la===7) {
	                    this.state = 510;
	                    this.match(ASPParser.T__6);
	                    this.state = 511;
	                    this.aggregate_literal();
	                    this.state = 516;
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
	        this.state = 521;
	        this.term();
	        this.state = 526;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===7) {
	            this.state = 522;
	            this.match(ASPParser.T__6);
	            this.state = 523;
	            this.term();
	            this.state = 528;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 540;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===6) {
	            this.state = 529;
	            this.match(ASPParser.T__5);
	            this.state = 538;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(((((_la - 14)) & ~0x1f) === 0 && ((1 << (_la - 14)) & 2227221) !== 0)) {
	                this.state = 530;
	                this.aggregate_literal();
	                this.state = 535;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                while(_la===7) {
	                    this.state = 531;
	                    this.match(ASPParser.T__6);
	                    this.state = 532;
	                    this.aggregate_literal();
	                    this.state = 537;
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
	        this.state = 547;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,71,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 542;
	            this.literal();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 544;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===18) {
	                this.state = 543;
	                this.match(ASPParser.NOT);
	            }

	            this.state = 546;
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
	        this.state = 554;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 16:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 549;
	            this.match(ASPParser.T__15);
	            this.state = 550;
	            this.additiveTerm();
	            this.state = 551;
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
	            this.state = 553;
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
	    this.enterRule(localctx, 72, ASPParser.RULE_additiveTerm);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 557;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===35) {
	            this.state = 556;
	            this.match(ASPParser.CLASSICAL_NEGATION);
	        }

	        this.state = 559;
	        this.multiplicativeTerm();
	        this.state = 564;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(((((_la - 35)) & ~0x1f) === 0 && ((1 << (_la - 35)) & 15) !== 0)) {
	            this.state = 560;
	            _la = this._input.LA(1);
	            if(!(((((_la - 35)) & ~0x1f) === 0 && ((1 << (_la - 35)) & 15) !== 0))) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 561;
	            this.multiplicativeTerm();
	            this.state = 566;
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
	        this.state = 567;
	        this.powerTerm();
	        this.state = 572;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(((((_la - 39)) & ~0x1f) === 0 && ((1 << (_la - 39)) & 15) !== 0)) {
	            this.state = 568;
	            _la = this._input.LA(1);
	            if(!(((((_la - 39)) & ~0x1f) === 0 && ((1 << (_la - 39)) & 15) !== 0))) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 569;
	            this.powerTerm();
	            this.state = 574;
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
	        this.state = 575;
	        this.unaryTerm();
	        this.state = 580;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===43) {
	            this.state = 576;
	            this.match(ASPParser.EXPONENTIATION);
	            this.state = 577;
	            this.unaryTerm();
	            this.state = 582;
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
	        this.state = 590;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,77,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 583;
	            this.simpleTerm();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 584;
	            this.functionTerm();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 585;
	            this.tuple();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 586;
	            this.match(ASPParser.T__13);
	            this.state = 587;
	            this.term();
	            this.state = 588;
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
	        this.state = 599;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,78,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 592;
	            this.integer();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 593;
	            this.match(ASPParser.CONSTANT);
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 594;
	            this.match(ASPParser.STRING);
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 595;
	            this.match(ASPParser.VARIABLE);
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 596;
	            this.match(ASPParser.UNDERSCORE);
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 597;
	            this.match(ASPParser.SUP);
	            break;

	        case 7:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 598;
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
	    this.enterRule(localctx, 82, ASPParser.RULE_functionTerm);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 601;
	        this.match(ASPParser.CONSTANT);
	        this.state = 602;
	        this.match(ASPParser.T__13);
	        this.state = 611;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(((((_la - 14)) & ~0x1f) === 0 && ((1 << (_la - 14)) & 2227205) !== 0)) {
	            this.state = 603;
	            this.term();
	            this.state = 608;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===7) {
	                this.state = 604;
	                this.match(ASPParser.T__6);
	                this.state = 605;
	                this.term();
	                this.state = 610;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	        }

	        this.state = 613;
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
	        this.state = 615;
	        this.match(ASPParser.T__13);
	        this.state = 616;
	        this.term();
	        this.state = 617;
	        this.match(ASPParser.T__6);
	        this.state = 618;
	        this.term();
	        this.state = 623;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===7) {
	            this.state = 619;
	            this.match(ASPParser.T__6);
	            this.state = 620;
	            this.term();
	            this.state = 625;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 626;
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
	        this.state = 628;
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
	        this.state = 630;
	        this.constant_multiplicativeTerm();
	        this.state = 635;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(((((_la - 35)) & ~0x1f) === 0 && ((1 << (_la - 35)) & 15) !== 0)) {
	            this.state = 631;
	            _la = this._input.LA(1);
	            if(!(((((_la - 35)) & ~0x1f) === 0 && ((1 << (_la - 35)) & 15) !== 0))) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 632;
	            this.constant_multiplicativeTerm();
	            this.state = 637;
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
	        this.state = 638;
	        this.constant_powerTerm();
	        this.state = 643;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(((((_la - 39)) & ~0x1f) === 0 && ((1 << (_la - 39)) & 15) !== 0)) {
	            this.state = 639;
	            _la = this._input.LA(1);
	            if(!(((((_la - 39)) & ~0x1f) === 0 && ((1 << (_la - 39)) & 15) !== 0))) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 640;
	            this.constant_powerTerm();
	            this.state = 645;
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
	        this.state = 646;
	        this.constant_unaryTerm();
	        this.state = 651;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===43) {
	            this.state = 647;
	            this.match(ASPParser.EXPONENTIATION);
	            this.state = 648;
	            this.constant_unaryTerm();
	            this.state = 653;
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
	        this.state = 665;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,85,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 654;
	            this.integer();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 655;
	            this.match(ASPParser.CONSTANT);
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 656;
	            this.match(ASPParser.STRING);
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 657;
	            this.match(ASPParser.SUP);
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 658;
	            this.match(ASPParser.INF);
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 659;
	            this.constant_functionTerm();
	            break;

	        case 7:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 660;
	            this.constant_tuple();
	            break;

	        case 8:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 661;
	            this.match(ASPParser.T__13);
	            this.state = 662;
	            this.constant_term();
	            this.state = 663;
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
	        this.state = 667;
	        this.match(ASPParser.CONSTANT);
	        this.state = 668;
	        this.match(ASPParser.T__13);
	        this.state = 677;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) === 0 && ((1 << _la) & 2063613952) !== 0)) {
	            this.state = 669;
	            this.constant_term();
	            this.state = 674;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===7) {
	                this.state = 670;
	                this.match(ASPParser.T__6);
	                this.state = 671;
	                this.constant_term();
	                this.state = 676;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	        }

	        this.state = 679;
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
	        this.state = 681;
	        this.match(ASPParser.T__13);
	        this.state = 690;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) === 0 && ((1 << _la) & 2063613952) !== 0)) {
	            this.state = 682;
	            this.constant_term();
	            this.state = 687;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===7) {
	                this.state = 683;
	                this.match(ASPParser.T__6);
	                this.state = 684;
	                this.constant_term();
	                this.state = 689;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	        }

	        this.state = 692;
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
	    try {
	        this.state = 696;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,90,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 694;
	            this.interval();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 695;
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
	    this.enterRule(localctx, 102, ASPParser.RULE_interval);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 698;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 587202560) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	        this.state = 699;
	        this.match(ASPParser.T__16);
	        this.state = 700;
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



	weight() {
	    let localctx = new WeightContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 104, ASPParser.RULE_weight);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 702;
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
	    this.enterRule(localctx, 106, ASPParser.RULE_priority);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 704;
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
ASPParser.RULE_interval = 51;
ASPParser.RULE_weight = 52;
ASPParser.RULE_priority = 53;

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
ASPParser.IntervalContext = IntervalContext; 
ASPParser.WeightContext = WeightContext; 
ASPParser.PriorityContext = PriorityContext; 
