function windChill(tempF, speed){
    let maxTemp = 50, minSpeed = 3, chill = "N/A";
    if((tempF <= maxTemp) && (speed >= minSpeed)){
        // f = 35.74 + .6125f - 35.75s^.16 + .4275fs^.16
        chill = Math.round(35.74 + ( .6215 * tempF ) - ( 35.75 * Math.pow(speed, .16)) + ( .4275 * (tempF * Math.pow(speed, .16)))) + "&deg;";
    }
    return chill;
}