document.getElementById('currentdate').innerHTML = new Date().toLocaleDateString();
//Write a defining table and a program that helps a user choose the correct foot wear for the day’s weather. The following table shows the weather types the user may enter and what your program should output.

function getShoes(){
	let weather = document.getElementById("weatherpicker").value;
	if (weather){
		let shoes="";
		switch(weather){
			case "hot" : shoes="Sandals"; break;
			case "raining" : shoes="Galoshes"; break;
			default : shoes="Boots"; break;
		}
		document.getElementById("output").innerHTML=`<hr><br>If it's ${weather} outside them you should definitely wear your ${shoes} today. ${addPersonality()}`;
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