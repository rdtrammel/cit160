const googleApiKey = `yourKeyHere`; //Get your own!
const openWeatherApiKey = "976da33f0dcc8a7e268ee63fe5d06018"; //Get your own!

function getWeather(location){ //This is the command that will get called by the individual module
    getCoordinates(location);
}

function getCoordinates(location){
    const googleGeocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${location}&key=${googleApiKey}`;
    fetch(googleGeocodeUrl)
        .then(result=>{return result.json();})
        .then(json=>{
            getWeatherData(json.results[0].geometry.location);
            //Set map at the bottom of the screen
        });
}

function getWeatherData(latLng){
    let lat = latLng.lat;
    let lng = latLng.lng;
    const openWeatherCurrentUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=imperial&APPID=${openWeatherApiKey}`;
    const openWeatherForecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lng}&units=imperial&APPID=${openWeatherApiKey}`

    //Current Weather
    fetch(openWeatherCurrentUrl)
        .then(response=>{return response.json()})
        .then(json=>{setSummary(json)});
    
    //5-Day Forecast
    fetch(openWeatherForecastUrl)
        .then(response=>{return response.json()})
        .then(json=>{setForecast(json)});
}

function setSummary(data){
    let summaryEl = document.getElementById("summary-data");
    let temp = data.main.temp.toFixed(1);
    summaryEl.innerHTML = `
        <h2>${data.weather[0].main}</h2>
        Currently: <span class="summary-highlight">${Number(temp).toFixed(0)} &#8457;</span><br>
        High: <span class="summary-highlight">${Number(data.main.temp_max).toFixed(0)} &#8457;</span><br>
        Low: <span class="summary-highlight">${Number(data.main.temp_min).toFixed(0)} &#8457;</span><br>
        Humidity: <span class="summary-highlight">${data.main.humidity}</span><br>
        Wind Chill: <span class="summary-highlight">${windChill(temp,data.wind.speed)}</span>
    `;
}

function setForecast(data){
    let output = "";
    let search = new RegExp("18:00","gi");
    data.list.forEach(forecast=>{
        if (!forecast.dt_txt.match(search)) return;
        let forecastDay = new Date(forecast.dt_txt);
        let icon = `https://openweathermap.org/img/wn/${forecast.weather[0].icon}.png`;
        output += `
        <div class="forecast-day">
            <h2>${new Intl.DateTimeFormat("default",{weekday:"long"}).format(forecastDay)}</h2>
            <picture>
                <img src="${icon}" alt="picture of ${forecast.weather[0].description} weather condition">
            </picture>
            <h2>${forecast.main.temp.toFixed(0)} &deg;</h2>
            <br>
            <h3>${forecast.weather[0].main}</h3>
            <h4>
                <i>Wind</i>: ${forecast.wind.speed} mph<br><br>
                <i>Chill</i>: ${windChill(forecast.main.temp,forecast.wind.speed)}
            </h4>
        </div>`;
    });
    document.getElementById("five-day-forecast").innerHTML = output;
}