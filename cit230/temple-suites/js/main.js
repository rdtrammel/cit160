WebFont.load({ google: { families: [ 'Raleway: 300,400', 'Baskervville' ] } });

const header = document.getElementById("top-header");
const nav = document.getElementById("top-nav");
const navBtns = nav.querySelectorAll("a");
const app = document.getElementById("app");

// Attach routing capability to each Nav Item
navBtns.forEach(btn=>{
    btn.addEventListener("click", ()=>{toggleMenu();loadPage(btn.getAttribute('data-href'));});
});

//default route on loading index is main.html
let route = "pages/main.html";
loadPage(route);

//Header Scroll Behavior
window.addEventListener("scroll", ()=>{
    let y = this.scrollY;
    if (y > 60){
        header.addEventListener("click", returnToTop, true);
        header.addEventListener("touchend", returnToTop, true);
        header.classList.add("scrolled");
        nav.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
        nav.classList.remove("scrolled");
        header.removeEventListener("click", returnToTop, true);
        header.removeEventListener("touchend", returnToTop, true);
    }
    console.log(nav.childNodes[0]);
});

function returnToTop(){
    window.scroll({ top:0, behavior: "smooth" })
}

//Function used to load the page snippets into the main view
function loadPage(route){
    fetch(route)
    .then(response=> response.text())
    .then(html=>{app.innerHTML = html;});
}

//Function used to toggle the Navigation Menu in smaller views. Default is hidden
function toggleMenu(){
    document.querySelector("#top-nav ul").classList.toggle("hide");
}

function initBooking(){
    console.log("Callout to form modal");
}