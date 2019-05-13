document.getElementById('currentdate').innerHTML = new Date().toLocaleDateString();

//Code below this line
//Get and store the input elements
let radius = document.getElementById("cylander-radius");
let height = document.getElementById("cylander-height");
//Get and store the output element
let outputEl = document.getElementById("output");

//Write a function that will get the volume of the cylander
function getVolume(){
	//If the radius or height are missing, then display a message
	if (!radius.value || !height.value){
		output.innerHTML = "Please enter both the height and radius of the cylinder.";
	}else{
		//Volume of cylander is: V=pi*r^2*h
		//Conversion of inches to liters is approximately 61.024 per google
		output.innerHTML = "Volume<i>(in liters)</i> ≈ " + (Math.PI * Math.pow(radius.value, 2) * height.value)/61.024;
	}
}