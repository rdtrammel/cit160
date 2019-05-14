document.querySelector('.todays-date').innerHTML = new Date().toLocaleDateString();

function returnToTop(){
    window.scroll({ top:0, behavior: "smooth" })
}

let header = document.querySelector("header");
let mainContent = document.querySelector(".main-content");

//Add stickytop scrolling? For fun?
window.addEventListener('scroll', ()=>{ 
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
});