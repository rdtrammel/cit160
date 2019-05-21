document.getElementById('currentdate').innerHTML = new Date().toLocaleDateString();

//Write a defining table and then a program that computes and outputs the absolute difference between two numbers entered by a user. In other words, your program should always show the difference as a positive number
function getDifference(){
	let x = document.getElementById("x").value;
	let y = document.getElementById("y").value;
	if (!x || !y) { displayError(); } else { document.getElementById("difference").value = Math.abs(x-y); }
}

function displayError(){
	//This is getting the feedback element, resetting the difference to 0, and then displaying an error message.
	let feedback = document.getElementById("feedback");
	document.getElementById("difference").value = 0;
	feedback.innerHTML = "You must enter at least two numbers.";
	//This is saying, after 3 seconds, clear the button style and feedback text
	setTimeout(()=>{feedback.innerHTML = ""}, 3000);
}