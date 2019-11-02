//I did this so that if we need to add nav elements, I can just do it here and it will flow to other pages where nav is used.
// { pageName : link }
let sitePages = {
    "Home" : "#",
    "Preston" : "../lesson6/preston-6.html",
    "Soda Springs" : "#",
    "Fish Haven" : "#",
    "Storm Center" : "#",
    "Gallery" : "../lesson7/gallery-7.html"
};

function setTopNavigation(){
    let siteNavEl = document.getElementById("site-nav");
    siteNavEl.style.gridTemplateColumns = `repeat(${Object.keys(sitePages).length}, 1fr)`;

    let navButtons = new String();
    for (const key in sitePages) { 
        let buttonLink = sitePages[key];
        let regEx = new RegExp(buttonLink,'gi');
        if(location.pathname.match(regEx)){
            navButtons += `<li class="active"><a href="#">${key}</a></li>\n`
        }else{
            navButtons += `<li><a href="${sitePages[key]}">${key}</a></li>\n`;
        }
    }
    siteNavEl.innerHTML = navButtons;
}

function toggleMenu(){
    let siteNavEl = document.getElementById("site-nav");
    siteNavEl.classList.toggle("hide");
}