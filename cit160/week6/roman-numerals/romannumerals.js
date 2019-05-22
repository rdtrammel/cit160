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

Mapping:
1-10 will be [I, V, X]
10-100 will be [X, L, C]
100-1000 will be [C, D, M]
1000+ will be [M] max is 3000
*/

//Added this event listener because I got tired of clicking the button over and over.
document.getElementById("arabic-number").addEventListener("change", whenInRome );

function whenInRome(){
    //We have to declare output as a string first or the first value will be "undefinedI"
    let output=new String();

    //We convert the number into a string and then break it into an array using the split function
    let number = String(document.getElementById("arabic-number").value).split("");

    //length-1 means, get the outermost element in this new array, which for us would be the ones column.
    let ones = parseInt(number[number.length-1]);
    let tens = parseInt(number[number.length-2]);
    let hundreds = parseInt(number[number.length-3]);

    //The thousands have a limit of 3, so if the number goes above 3, then we just stop.
    let thousands = parseInt(number[number.length-4]);
    //This ternary solves that. It essentially says, if (thousands > 3) 3, else, just use the thousands.
    thousands = thousands > 3 ? 3 : thousands;

    //getNumerals is designed to handle the numbers 0-9, then we just pass in what characters will be used as an array.
    //Call the function on each placement and concatenate any valid values together 
    if (thousands) output += getNumerals(thousands, ["M"]);
    if (hundreds) output += getNumerals(hundreds, ["C", "D", "M"]);
    if (tens) output += getNumerals(tens, ["X", "L", "C"]);
    if (ones) output += getNumerals(ones, ["I", "V", "X"]);

    //Write the final output to the page
    document.getElementById("output").innerHTML = output;
}

function getNumerals(num, chars){
    //At 4 and 9 you're going to change the leading numeral
    let output = "";
    if (num < 5){ 
        if ( num === 4 ){ output = `${chars[0]}${chars[1]}` }else{ for (let i = 0 ; i < num && i < 3 ; i++){ output += chars[0];} }
    } else {
        if (num === 9){ output=`${chars[0]}${chars[2]}`}else{output = chars[1]; for (let i = 0; i < num - 5; i++){ output += chars[0];}} 
    }
    return output;
}

//I checked my work against https://www.thecalculatorsite.com/misc/romannumerals.php by pasting in my output and clicking "Convert". It's able to return back the alphanumeric code back to me successfully.
