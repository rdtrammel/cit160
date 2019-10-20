//Display Promo Banner on Saturdays
if(new Date().getDay() === 5){
    document.getElementById("promo-banner").style.display = "block";
}

//Set Summary Data
let summaryData = {
    "temp" : "72",
    "conditions" : "Cloudy"
}
document.getElementById("summary-data").innerHTML = 
`${summaryData.temp} &#8451;<br>
${summaryData.conditions}`;

//Set current date string in human readable format
document.getElementById("today").innerHTML = new Date().toLocaleDateString();

renderNav(); // found at cit230/js/weather-nav.js

render5DayForecast({  // found at cit230/js/weather-5day.js
    "Monday" : {
        "condition" : "Sunny",
        "icon" : "../assets/weather/sunny-icon.png",
        "temp" : "43"
    },
    "Tuesday" : {
        "condition" : "Sunny",
        "icon" : "../assets/weather/sunny-icon.png",
        "temp" : "32"
    },
    "Wednesday" : {
        "condition" : "Sunny",
        "icon" : "../assets/weather/sunny-icon.png",
        "temp" : "10"
    },
    "Thursday" : {
        "condition" : "Sunny",
        "icon" : "../assets/weather/sunny-icon.png",
        "temp" : "-32"
    },
    "Friday" : {
        "condition" : "Sunny",
        "icon" : "../assets/weather/sunny-icon.png",
        "temp" : "19"
    },
});
