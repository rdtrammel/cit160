//Navigation being set by script found at cit230/weatheraboveground/js/functions/weather-nav.js

WebFont.load({
    google: {
        families: [
            'Montserrat: 300,400'
        ]
    }
});

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
render5DayForecast({ // found at cit230/weatheraboveground/js/functions/render5day.js
    "Monday" : {
        "condition" : "Sunny",
        "icon" : "../images/sunny-icon.png",
        "temp" : 43,
        "windSpeed" : 5
    },
    "Tuesday" : {
        "condition" : "Sunny",
        "icon" : "../images/sunny-icon.png",
        "temp" : 32,
        "windSpeed" : 10
    },
    "Wednesday" : {
        "condition" : "Sunny",
        "icon" : "../images/sunny-icon.png",
        "temp" : 10,
        "windSpeed" : 30

    },
    "Thursday" : {
        "condition" : "Sunny",
        "icon" : "../images/sunny-icon.png",
        "temp" : -32,
        "windSpeed" : 30
    },
    "Friday" : {
        "condition" : "Sunny",
        "icon" : "../images/sunny-icon.png",
        "temp" : 19,
        "windSpeed" : 10
    }
});


