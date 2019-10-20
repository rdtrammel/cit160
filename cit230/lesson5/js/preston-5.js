/* Set Site Navigation Elements here */
// page name : path
let pages = {
    "Home" : "./index.html",
    "Preston" : "preston-5.html",
    "Soda Springs" : "#",
    "Fish Haven" : "#",
    "Storm Center" : "#",
    "Gallery" : "#"
}

//Set current date string in human readable format
document.getElementById("today").innerHTML = new Date().toLocaleDateString();

//Grab the element and set it's grid length to the amount of buttons there are
let siteNavEl = document.getElementById("site-nav");
siteNavEl.style.gridTemplateColumns = `repeat(${Object.keys(pages).length}, 1fr)`;

let navButtons = new String();
for (const key in pages) { 
    let buttonLink = pages[key];
    let regEx = new RegExp(buttonLink,'gi');
    if (buttonLink){ //Only do this if the button link is valid
        //If the pathname matches the page path, add the active class
        navButtons += location.pathname.match(regEx) ? `<li class="active"><a href="#">${key}</a></li>\n` : `<li><a href="${pages[key]}">${key}</a></li>\n`;
    }
}

console.log(navButtons);


siteNavEl.innerHTML = navButtons;


function toggleMenu(){
    siteNavEl.classList.toggle("hide");
}

