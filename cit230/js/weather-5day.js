function render5DayForecast(data){
    let forecastEl = document.getElementById("five-day-forecast");
    forecastEl.style.gridTemplateColumns = `repeat(${Object.keys(data).length}, 1fr)`;
    let html = new String();
    for (day in data){
        html+=`
        <div class="forecast-day">
            <h2>${day}</h2>
            <picture>
                <img src="${data[day].icon}" alt="icon for ${data[day].condition} condition">
            </picture>
            <h2>${data[day].temp} &deg;</h2>
            <h4>${data[day].condition}</h4>
        </div>
        `;
    }
    forecastEl.innerHTML = html;
}