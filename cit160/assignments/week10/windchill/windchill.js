document.getElementById('currentdate').innerHTML = new Date().toLocaleDateString();

let tempEl = document.getElementById("temp");
let windEl = document.getElementById("wind");
tempEl.addEventListener("keyup", doInputOutput);
windEl.addEventListener("keyup", doInputOutput);

/*Your program will calculate the windchill factor given a current temperature and current wind speed as inputs. We will be working in Fahrenheit (F) units. 'The wind chill explains how cold people and animals feel when outside. It is based on the amount and rate of heat lost from skin exposed to wind and cold.'*/

function doInputOutput(){
    let chill = windChill(parseFloat(tempEl.value), parseFloat(windEl.value));
    document.getElementById("chill").value = chill;
}

function windChill(tempF, speed){
    let maxTemp = 50, minSpeed = 3, chill = "N/A";
    if((tempF <= maxTemp) && (speed >= minSpeed)){
        // f = 35.74 + .6125f - 35.75s^.16 + .4275fs^.16
        chill = Math.round(35.74 + ( .6215 * tempF ) - ( 35.75 * Math.pow(speed, .16)) + ( .4275 * (tempF * Math.pow(speed, .16))));
    }
    return chill;
}