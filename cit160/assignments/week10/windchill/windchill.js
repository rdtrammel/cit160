document.getElementById('currentdate').innerHTML = new Date().toLocaleDateString();

let tempEl = document.getElementById("temp");
let windEl = document.getElementById("wind");
let chillEl = document.getElementById("chill");

tempEl.addEventListener("keyup", doInputOutput);
windEl.addEventListener("keyup", doInputOutput);

function doInputOutput(){
    let chill = windChill(parseFloat(tempEl.value), parseFloat(windEl.value));
    if (chill < -200) chill = "☠";
    chillEl.value = chill;
}

function windChill(tempF, speed){
    let maxTemp = 50, minSpeed = 3;
    if((tempF > maxTemp) || (speed < minSpeed) || (!tempF && tempF != 0) || !speed ) return "N/A";
    // f = 35.74 + .6125f - 35.75s^.16 + .4275fs^.16
    let chill = 
        35.74 + 
        ( .6215 * tempF ) - 
        ( 35.75 * Math.pow(speed, .16)) + 
        ( .4275 * (tempF * Math.pow(speed, .16)));
    return Math.round(chill);
}