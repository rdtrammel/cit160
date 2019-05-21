document.getElementById('currentdate').innerHTML = new Date().toLocaleDateString();

/*The rules for writing Roman numerals are
Thousands, hundreds, tens, and ones are written separately.
Thousands can be no larger than 3000 and are written as M, MM, or MMM, meaning 1000, 2000, or 3000 respectively.
The numbers 100 to 900 are written as C, CC, CCC, CD, D, DC, DCC, DCCC, CM
The numbers 10 to 90 are written similarly, except X, L, and C are used: X, XX, XXX, XL, L, LX, LXX, LXXX, XC
The numbers 1 to 9 are written similarly, except I, V, and X are used: I, II, III, IV, V, VI, VII, VIII, IX
As an example, 1987 is MCMLXXXVII (1000 = M, 900 = CM, 80 = LXXX, and 7 = VII).*/

/*
Roman	Arabic
I	    1
V	    5
X	    10
L	    50
C	    100
D	    500
M	    1000
*/
