document.querySelector('.todays-date').innerHTML = new Date().toLocaleDateString();

let header = document.querySelector("header");
let mainContent = document.querySelector(".main-content");
let footerLabel = document.querySelector("footer h2");
let weeks = document.querySelectorAll(".week");

weeks.forEach((week, i)=>{
    week.querySelector("h2").addEventListener("click", ()=>{week.querySelector("ul").classList.toggle("collapsed");});
});

//Add stickytop scrolling? For fun?
window.addEventListener('scroll', ()=>{ setHeightListeners(); setWidthListeners();});

//Shrink text when the window width is small. (For phones etc.)
window.addEventListener('resize', ()=>{ setWidthListeners();});

//Functions
//This will scroll the window to the top
function returnToTop(){
    window.scroll({ top:0, behavior: "smooth" })
}

//I couldn't figure out media queries, they didn't seem to be working the way they are explained on so many websites, so I added these listeners for height and width.

//This one applies a sticky class to the header when you start scrolling down
//I noticed that I had also had to augment the top of the body content because it would jump up underneath the header once it went 'sticky'.
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

//When the body got smaller in width than a certain area, I noticed that the text looked horrible on mobile, so I wanted to toggle a class when those things changed.
function setWidthListeners(){
    if (window.innerWidth < 600){
        footerLabel.classList.add("small-text");
    } else {
        footerLabel.classList.remove("small-text");
    }
}

WebFont.load({
    google: {
        families: [
            'Montserrat:300,400'
        ]
    }
})