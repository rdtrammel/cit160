
/* Set Site Navigation Elements here */

const navItems = {
    "Main" : "index.html",
    "Target Audience" : "target-audience.html",
    "Typography" : "typography.html",
    "Color Scheme" : "color-scheme.html",
    "Site Map" : "site-map.html"
}

let siteNavEl = document.querySelector(".site-nav");

let navLn = Object.keys(navItems).length;

let navButtons = new String();

for (const key in navItems) { 
    let buttonLink = navItems[key];
    let regEx = new RegExp(buttonLink,'gi');
    if (buttonLink){
        navButtons += location.pathname.match(regEx) ? `<li class="active"><a href="${navItems[key]}">${key}</a></li>` : `<li><a href="${navItems[key]}">${key}</a></li>`;
    }
}

siteNavEl.style.gridTemplateColumns = `repeat(${navLn}, 1fr)`;
siteNavEl.innerHTML = navButtons;

console.log(location.pathname);