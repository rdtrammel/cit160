//I did this so that if we need to add nav elements, I can just do it here and it will flow to other pages where nav is used.
// { pageName : link }
fetch('https://rdtrammel.github.io/cit230/waboveground/data/site-nav.json')
    .then(result=> result.json())
    .then(json=>setTopNavigation(json));

function setTopNavigation(data){
    let siteNavEl = document.getElementById("site-nav");
    siteNavEl.style.gridTemplateColumns = `repeat(${Object.keys(data).length}, 1fr)`;
    let navButtons = new String();
    for (const key in data) { 
        let buttonLink = data[key];
        let regEx = new RegExp(location.pathname,'gi');
        if(buttonLink.match(regEx)){
            navButtons += `<li class="active"><a href="${data[key]}">${key}</a></li>\n`
        }else{
            navButtons += `<li><a href="${data[key]}">${key}</a></li>\n`;
        }
    }
    siteNavEl.innerHTML = navButtons;
}

function toggleMenu(){
    let siteNavEl = document.getElementById("site-nav");
    siteNavEl.classList.toggle("hide");
}