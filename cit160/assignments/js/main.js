document.querySelector('.todays-date').innerHTML = new Date().toLocaleDateString();

let header = document.querySelector("header");
let mainContent = document.querySelector(".main-content");
let footerLabel = document.querySelector("footer h2");

//Add stickytop scrolling? For fun?
window.addEventListener('scroll', ()=>{ setHeightListeners(); setWidthListeners();});

//Shrink text when the window width is small. (For phones etc.)
window.addEventListener('resize', ()=>{ setWidthListeners();});

//Functions
function returnToTop(){
    window.scroll({ top:0, behavior: "smooth" })
}

function setHeightListeners(){
    if (this.scrollY > 15){
        header.addEventListener("click", returnToTop, true);
        header.addEventListener("touchend", returnToTop, true);
        header.classList.add("sticky");
        mainContent.classList.add("augment-top");
    } else {
        header.classList.remove("sticky");
        mainContent.classList.remove("augment-top");
        header.removeEventListener("click", returnToTop, true);
        header.removeEventListener("touchend", returnToTop, true);
    }
}

function setWidthListeners(){
    if (window.innerWidth < 600){
        footerLabel.classList.add("small-text");
        header.classList.add("small-text")
    } else {
        footerLabel.classList.remove("small-text");
        header.classList.remove("small-text")
    }
}