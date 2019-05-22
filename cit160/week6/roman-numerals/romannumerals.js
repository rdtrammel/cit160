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
document.getElementById("arabic-number").addEventListener("change", whenInRome );

function whenInRome(){
    let output="";
    let number = String(document.getElementById("arabic-number").value).split("");
    //Every 5, you're going to change the leading numeral
    let ones = parseInt(number[number.length-1]);
    let tens = parseInt(number[number.length-2]);
    let hundreds = parseInt(number[number.length-3]);
    let thousands = parseInt(number[number.length-4]);
    thousands = thousands > 3 ? 3 : thousands;
    if (thousands) output += getNumerals("thousands", thousands, ["M"]);
    if (hundreds) output += getNumerals("hundreds", hundreds, ["C", "D", "M"]);
    if (tens) output += getNumerals("tens", tens, ["X", "L", "C"]);
    if (ones) output += getNumerals("ones", ones, ["I", "V", "X"]);
    document.getElementById("output").innerHTML = output;
}

function getNumerals(type, num, chars){
    let output = "";
    if (num < 5){
        if ( num == 4 ){ output = `${chars[0]}${chars[1]}` }else{ for (let i = 0 ; i < num && i < 3 ; i++){ output += chars[0];} }
    } else {
        if (num === 9){ output=`${chars[0]}${chars[2]}`}else{output = chars[1]; for (let i = 0; i < num - 5; i++){output += chars[0];}} 
    }
    return output;
}
