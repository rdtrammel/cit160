document.getElementById('currentdate').innerHTML = new Date().toLocaleDateString();

/* Update the code so that it:
1) Counts the number of guesses the user takes to guess correctly the answer. 
2) Use let versus var.  
3) DON'T use alert but rather output the message to a div on the screen */
let tries = 0;
let gotIt = false;

function guessNumber() {
    if(gotIt)return;
    tries++;
    let answer = 38;
    let guess = document.getElementById("guess").value;
    let message = `${guess} is correct! <br>It took you ${tries} tries to get it!`;
    do {
        if (guess < answer) {
            message = `${guess} is too low. Please enter another integer.`;
            break;
        }
        else if (guess > answer) {
            message = `${guess} is too high. Please enter another integer.`;
            break;
        } else {
            gotIt=true;
        }
    } while (guess != answer);
    document.getElementById("output").innerHTML = `${message}`;
}