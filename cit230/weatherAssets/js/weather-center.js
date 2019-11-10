setTopNavigation(); //Calls a script that will render the top site navigation
setLazyLoad("[data-src]"); //setLazyLoad(selector)
const stormDate = document.querySelector("[name=stormDate]");

let today = new Date();
let day = `0${today.getDate()}`;
//Set default Storm Report date to today, format must be yyyy-mm-dd
stormDate.value = `${today.getFullYear()}-${today.getMonth()}-${day.substring(day.length-2,day.length)}`;

function adjustSlider(num){
    
}