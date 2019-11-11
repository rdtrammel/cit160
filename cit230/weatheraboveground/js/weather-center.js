setLazyLoad("[data-src]"); //setLazyLoad(selector)
const stormDate = document.querySelector("[name=stormDate]");

//Set default Storm Report date to today, format must be yyyy-mm-dd
let today = new Date();
let day = `0${today.getDate()}`;
stormDate.value = `${today.getFullYear()}-${today.getMonth()}-${day.substring(day.length-2,day.length)}`;

//Adjust slider value when value is changed
function adjustSlider(num){
    
}