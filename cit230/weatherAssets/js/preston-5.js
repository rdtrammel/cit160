//Display Promo Banner on Saturdays
if(new Date().getDay() === 5){
    document.getElementById("promo-banner").style.display = "block";
}

//Set Summary Data
let summaryData = {
    "temp" : "72",
    "conditions" : "Cloudy"
}
document.getElementById("summary-data").innerHTML = `${summaryData.temp} &#8451;<br>${summaryData.conditions}`;

renderNav(); // found at cit230/js/weather-nav.js

//5-Day forecast Data
let forecastData = {  // found at cit230/js/weather-5day.js
    "Monday" : {
        "condition" : "Sunny",
        "icon" : "../weatherAssets/images/sunny-icon.png",
        "temp" : "43"
    },
    "Tuesday" : {
        "condition" : "Sunny",
        "icon" : "../weatherAssets/images/sunny-icon.png",
        "temp" : "32"
    },
    "Wednesday" : {
        "condition" : "Sunny",
        "icon" : "../weatherAssets/images/sunny-icon.png",
        "temp" : "10"
    },
    "Thursday" : {
        "condition" : "Sunny",
        "icon" : "../weatherAssets/images/sunny-icon.png",
        "temp" : "-32"
    },
    "Friday" : {
        "condition" : "Sunny",
        "icon" : "../weatherAssets/images/sunny-icon.png",
        "temp" : "19"
    },
};

render5DayForecast(forecastData);
