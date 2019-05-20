document.getElementById('currentdate').innerHTML = new Date().toLocaleDateString();

function getGradeLevel(){
	let x = document.getElementById("credits").value;
	let gradeLevel;
	console.log("I ran");
	if (x < 30) { 
		gradeLevel = "Freshman" 
	} else if (x < 60) {
		gradeLevel = "Sophomore"
	} else if (x < 90){
		gradeLevel = "Junior"
	} else {
		gradeLevel = "Senior"
	}
	document.getElementById("output").innerHTML = `<hr><br><strong>You are a ${gradeLevel}.</strong><br><br>`;
;}