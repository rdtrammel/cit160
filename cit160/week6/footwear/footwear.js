document.getElementById('currentdate').innerHTML = new Date().toLocaleDateString();
//Write a defining table and a program that helps a user choose the correct foot wear for the day’s weather. The following table shows the weather types the user may enter and what your program should output.

document.getElementById("weatherpicker").focus();

function getShoes(){
	let weather = document.getElementById("weatherpicker").value;
	if (weather){
		let shoes="";
		switch(weather){
			case "hot" : shoes="Sandals"; break;
			case "raining" : shoes="Galoshes"; break;
			case "snowing" : shoes="Boots"; break;
			default : shoes="Shoes"
		}
		document.getElementById("output").innerHTML=`<hr><br><strong>If it's ${weather} outside then you should definitely wear your <i>${shoes}</i> today. ${addPersonality()}</strong><br><br>`;
	}
}

function addPersonality(){
	farewells=[
		"Zip it in and Zip it out ma dood.",
		"Be well.",
		"Live long and perspire.",
		"Don't slip on the ice.",
		"Okay. Well I'm super busy right now. Good luck."
	];
	return farewells[Math.floor(Math.random() * farewells.length)];
}