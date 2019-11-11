function render5DayForecast(data){
    let forecastEl = document.getElementById("five-day-forecast");
    forecastEl.style.gridTemplateColumns = `repeat(${Object.keys(data).length}, 1fr)`;
    let html = new String();
    for (day in data){
        let temp = data[day].temp,
            speed = data[day].windSpeed,
            chill = windChill(temp, speed);
        html+=`
        <div class="forecast-day">
            <h2>${day}</h2>
            <picture>
                <img src="${data[day].icon}" alt="icon for ${data[day].condition} condition">
            </picture>
            <h2>${temp} &deg;</h2>
            <br>
            <h3>${data[day].condition}</h3>
            <h4>
                <i>Wind</i>: ${speed} mph<br><br>
                <i>Chill</i>: ${chill} &deg;
            </h4>
        </div>
        `;
    }
    forecastEl.innerHTML = html;
}