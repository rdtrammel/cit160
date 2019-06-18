document.getElementById('currentdate').innerHTML = new Date().toLocaleDateString();

/* Output the times table from 1 to 12 for any positive integer that the USER INPUTS from 1 to 10 inclusive. */

function getMultiplicationTable() {
    let num = parseInt(document.getElementById("input").value);
    let output = "";
    for ( let i = 1 ; i <= 12 ; i++ ){
        output += `${num} x ${i} = ${num*i}<br>`;
    }
    document.getElementById("output").innerHTML = output;
}