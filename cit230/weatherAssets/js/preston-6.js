renderNav(); // found at cit230/weatherAssets/js/weather-nav.js

//Display Promo Banner on Saturdays
if(new Date().getDay() === 6){
    document.getElementById("promo-banner").style.display = "block";
}

//Set Summary Data
let summaryData = {
    "temp" : "72",
    "conditions" : "Cloudy"
}
document.getElementById("summary-data").innerHTML = `${summaryData.temp} &#8451;<br>${summaryData.conditions}`;

//Set 5-Day forecast Data
render5DayForecast({ // found at cit230/weatherAssets/js/weather-5day.js
    "Monday" : {
        "condition" : "Sunny",
        "icon" : "../weatherAssets/images/sunny-icon.png",
        "temp" : 43,
        "windSpeed" : 5
    },
    "Tuesday" : {
        "condition" : "Sunny",
        "icon" : "../weatherAssets/images/sunny-icon.png",
        "temp" : 32,
        "windSpeed" : 10
    },
    "Wednesday" : {
        "condition" : "Sunny",
        "icon" : "../weatherAssets/images/sunny-icon.png",
        "temp" : 10,
        "windSpeed" : 30

    },
    "Thursday" : {
        "condition" : "Sunny",
        "icon" : "../weatherAssets/images/sunny-icon.png",
        "temp" : -32,
        "windSpeed" : 30
    },
    "Friday" : {
        "condition" : "Sunny",
        "icon" : "../weatherAssets/images/sunny-icon.png",
        "temp" : 19,
        "windSpeed" : 10
    },
});


