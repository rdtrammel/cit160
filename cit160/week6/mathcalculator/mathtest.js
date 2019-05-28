document.getElementById('currentdate').innerHTML = new Date().toLocaleDateString();

/*
The program should allow a child to enter two numbers and an arithmetic operator (+, −, *, or /) and the child’s answer to the problem. The program should compute the correct answer and compare it to the child’s answer and output “Correct! Good job.” or “Incorrect. Try again!”
The program should randomly create two positive integers of max values of 100 and display those integers along with the addition symbol (+) and then allow a child to enter the answer. The program should compute the correct answer and compare it to the child’s answer and output “Correct! Good job.” or “Sorry. That is incorrect.”
*/

resetForm();

function checkMyMath(){
    //INPUT
    let x = parseFloat(document.getElementById("first-number").value);
    let y = parseFloat(document.getElementById("second-number").value);
    let operator = document.getElementById("operator").value;
    let userAnswer = parseFloat(document.getElementById("answer").value);
    //PROCESSING
    let compAnswer;
    if (!fieldValidation(x,y,operator,userAnswer)){return};
    switch(operator){
        case "+" : compAnswer = x + y; break;
        case "-" : compAnswer = x - y; break;
        case "*" : compAnswer = x * y; break;
        case "/" : compAnswer = x / y; break;
        default : console.log("An invalid operator was chosen."); break;
    }
    //OUTPUT
    if (userAnswer===compAnswer){
        document.getElementById("message").innerHTML = `<br>That's correct! Good Job!!!`;
        setTimeout(resetForm, 3000);
    } else {
        document.getElementById("message").innerHTML = `<br>Sorry. That is not correct. Try again!`;
        setTimeout(resetAnswer, 2000);
    }
}

function resetForm(){
    document.getElementById("first-number").value = Math.floor(Math.random() * 100);
    document.getElementById("second-number").value = Math.floor(Math.random() * 100);
    let operator = document.getElementById("operator");
    operator.value = operator.options[Math.floor(Math.random() * (Math.floor(operator.options.length) - 1) + 1)].value;
    resetAnswer();
}

function resetAnswer(){
    document.getElementById("message").innerHTML = "";
    document.getElementById("answer").value = "";
    document.getElementById("answer").focus();
}

function fieldValidation(x, y, operator, userAnswer){
    resetFieldHighlight();
    let isValid = true;
    if ( x != 0 && !x ){ document.getElementById("first-number").classList.add("error-highlight");isValid=false;} //highlight first-number field
    if ( y != 0 && !y ){ document.getElementById("second-number").classList.add("error-highlight"); isValid=false;} //highlight second-number field
    if (!operator){ document.getElementById("operator").classList.add("error-highlight"); isValid=false;} //Highlight the operator field
    if ( userAnswer != 0 && !userAnswer){ document.getElementById("answer").classList.add("error-highlight"); isValid=false;} //Highlight the answer field 
    if (isValid){ return isValid; } else { document.getElementById("message").innerHTML = `<br><font color="red">Please fill out the highlighted fields.</font>`; }    
}

function resetFieldHighlight(){
    document.getElementById("first-number").className = "";
    document.getElementById("second-number").className = "";
    document.getElementById("operator").className = "";
    document.getElementById("answer").className = "";
}



