document.getElementById('currentdate').innerHTML = new Date().toLocaleDateString();

/*
The program should allow a child to enter two numbers and an arithmetic operator (+, −, *, or /) and the child’s answer to the problem. The program should compute the correct answer and compare it to the child’s answer and output “Correct! Good job.” or “Incorrect. Try again!”
*/
function checkMyMath(){
    let x = parseFloat(document.getElementById("first-number").value);
    let y = parseFloat(document.getElementById("second-number").value);
    let operator = document.getElementById("operator").value;
    let userAnswer = parseFloat(document.getElementById("answer").value);
    let compAnswer;
    //Need to modify this to make sure that there is a value instead
    if (x == "" || y == "" || !operator || userAnswer == ""){ 
        console.log("Highlight fields that need to be filled out."); return;
    }
    switch(operator){
        case "+" : compAnswer = x + y; break;
        case "-" : compAnswer = x - y; break;
        case "*" : compAnswer = x * y; break;
        case "/" : compAnswer = x / y; break;
        default : console.log("An invalid operator was chosen."); break;
    } 
    if (userAnswer != compAnswer){
        //Display message stating that the answer was not correct
        document.getElementById("output").innerHTML = `Your answer was not correct. <br><strong>(${x} ${operator} ${y} = ${compAnswer})</strong>`;
    } else {
        //Display a message that states that the answer was correct.
        document.getElementById("output").innerHTML = `Your answer was correct! Good Job!!!`;
    }
}