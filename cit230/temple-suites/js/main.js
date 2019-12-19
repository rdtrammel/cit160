WebFont.load({ google: { families: [ 'Raleway: 300,400', 'Baskervville' ] } });

const app = document.getElementById("app");
const nav = document.querySelectorAll("#top-nav ul li a");

nav.forEach(item=>{
    item.addEventListener("click", ()=>{loadPage(item.getAttribute('data-href'));});
});

//default route on loading index is main.html
let route = "pages/main.html";
loadPage(route);

//Function used to load the page snippets into the main view
function loadPage(route){
    fetch(route)
    .then(response=> response.text())
    .then(html=>{app.innerHTML = html;});
}

//Function used to toggle the Navigation Menu in smaller views. Default is hidden
function toggleMenu(){
    document.querySelector("#top-nav ul").classList.toggle("hidden");
}