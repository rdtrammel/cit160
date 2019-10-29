var sunriseEl = document.querySelector(".sunrise-container");

setTimeout(doAnimations(),100);

function doAnimations(){
    sunriseEl.classList.toggle("sunrise-containerup");
    sunriseEl.querySelector(".sunrise-sun").classList.toggle("sunrise-suntop");
    sunriseEl.querySelector(".sunrise-ground").classList.toggle("ground-day");
    sunriseEl.querySelector(".sunrise-weather").classList.toggle("rainy");
}