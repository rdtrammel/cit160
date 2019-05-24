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
1-10 will use [I, V, X] 
10-100 will use [X, L, C]
100-1000 will use [C, D, M]
1000+ will be [M] max is 3000
*/

//Added this event listener because I got tired of clicking the button over and over.
document.getElementById("arabic-number").addEventListener("change", whenInRome );

function whenInRome(){
    //We have to declare output as a string first or the first value will be "undefinedI"
    let output=new String();
    //The thousands have a limit of 3, so the max number is 3999
    let max = 3999;

    
    let numberEl = document.getElementById("arabic-number");
    let number = parseInt(numberEl.value);
    //If the user types a number greater than the max, set the number to the max value and reset the field.
    if (number > max) {number = max; numberEl.value = max;}

    //We convert the number into a string and then break it into an array using the split function to work on each individual digit
    let numArr = String(number).split("");

    //length-1 means, get the outermost element in this new array, which for us would be the ones column.
    //Consider the number 1,204. 
    //Converted to an array [1,0,2,4].
    //The length would be 4 because there are 4 items
    //Arrays are 0 indexed, so in order to retreive the last item in the array, you get the length, and subtract 1
    //To get the second from last, you subtract 2, etc.
    let ones = parseInt(numArr[numArr.length-1]);
    let tens = parseInt(numArr[numArr.length-2]);
    let hundreds = parseInt(numArr[numArr.length-3]);
    let thousands = parseInt(numArr[numArr.length-4]);  
    
    //Thousands can't go above 3 in this example
    if (thousands > 3) thousands = 3;

    //getNumerals is designed to handle the numbers 0-9, then we just pass in what characters will be used as an array.
    //Call the function on each placement and concatenate any valid values together 
    output = `<font size="14pt">`
    if (thousands) output += getNumerals(thousands, ["M"]);
    if (hundreds) output += getNumerals(hundreds, ["C", "D", "M"]);
    if (tens) output += getNumerals(tens, ["X", "L", "C"]);
    if (ones) output += getNumerals(ones, ["I", "V", "X"]);
    output += `</font>`

    //Write the final output to the page
    document.getElementById("output").innerHTML = output;
}

function getNumerals(num, chars){
    //At 4 and 9 you're going to change the leading numeral
    let output = "";
    if (num < 5){ //start simple and process the numbers from 1 to 4
        if ( num === 4 ){ 
            //If the number is 4, then we take the character that starts at 5 and put it after the first char. 
            //For instance, you wouldn't write IIII, you would write IV, 
            //Also, 
            output = `${chars[0]}${chars[1]}` 
        }else{ 
            for (let i = 0 ; i < num && i < 3 ; i++){ output += chars[0];} 
        }
    } else { 
        //continue simple and process the numbers from 5 to 9
        if (num === 9){ 
            //For 9, you wouldn't write VIIII, you would write IX. The first and last character.
            output=`${chars[0]}${chars[2]}`
        }else{
            //For everything else, you're going to lead with the second character, and then append as many of the first character up to 8
            output = chars[1]; 
            for (let i = 0; i < num - 5; i++){ output += chars[0];}
        } 
    }
    //Because this can be repeated for each of the digit spaces, I opted to pass in the number in that position, and an array of symbols needed to represent the number in each specific place
    return output;
}