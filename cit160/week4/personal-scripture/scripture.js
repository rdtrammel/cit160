const $ = document;
const output = $.getElementById('output');
$.getElementById('currentdate').innerHTML = new Date().toLocaleDateString();

function getScripture(){
	let name = $.getElementById('name');
	if (!name.value){
		output.innerHTML = "You haven't told me your name."
		name.focus();
	} else {
		var random = Math.floor(Math.random() * scriptures.length);
		output.innerHTML = "Your Scripture:<br> " + scriptures[random].replace(/\{name\}/gi, `<strong>${name.value}</strong>`);
	}
}

var scriptures = [
	"1 Nephi 1:1<br>I, {name}, having been born of goodly parents, therefore I was taught somewhat in all the learning of my father; and having seen many afflictions in the course of my days, nevertheless, having been highly favored of the Lord in all my days; yea, having had a great knowledge of the goodness and the mysteries of God, therefore I make a record of my proceedings in my days.",
	"Moses 1:6<br>And I have a work for thee, {name}, my son; and thou art in the similitude of mine Only Begotten; and mine Only Begotten is and shall be the Savior, for he is full of grace and truth; but there is no God beside me, and all things are present with me, for I know them all."
]