document.getElementById('currentdate').innerHTML = new Date().toLocaleDateString();

/*
1) Asks the user for an integer input 
2) output the sum of all the odd integers between 1 and then integer that the user inputted, inclusive (this means include 1 and the number if odd). 
3) MUST use a loop presented in the lesson to solve the problem.*/

function countIt(){
    let x = parseInt(document.getElementById("user-number").value);
    let sum = 0;
    for( let i = 0 ; i <= x ; i++) if ( i % 2 != 0 ) sum += i;
    document.getElementById("output").innerHTML = sum;
}