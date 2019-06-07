document.getElementById('currentdate').innerHTML = new Date().toLocaleDateString();

//Get City, State, and Zip, and Output the address as City, State, Zip
let $ = document;
let output = $.getElementById('output'),
		city = $.getElementById('city'),
		state = $.getElementById('state'),
		zip = $.getElementById('zip');

city.addEventListener('keyup', displayAddress );
state.addEventListener('keyup', displayAddress );
zip.addEventListener('keyup', displayAddress );

function displayAddress(){
	output.innerHTML = `${city.value}, ${state.value} ${zip.value}`
}