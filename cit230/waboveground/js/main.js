const urlEndpoint = "https://byui-cit230.github.io/weather";

// Fetch Weather Site Data
fetch(`${urlEndpoint}/data/towndata.json`)
    .then(response=>{return response.json()})
    .then(json=>{
        renderWeatherData(json);
    });

//Method for rendering Weather data to page
function renderWeatherData(obj){
    //Create the container for all of the cards to go in
    let cardsContainer = document.createElement("section");
    cardsContainer.setAttribute("id", "town-cards");
    
    //Set up the variable to build the html
    let html = new String();
    obj.towns.forEach(town=>{
        if ( town.name.match(/Preston/gi) || town.name.match(/Fish/gi) || town.name.match(/Soda/gi)){
            html += `
                <div class="card">
                    <section class="information">
                        <h2>${town.name}</h2>
                        <h4 class="motto">${town.motto}</h4>
                        <p class="info">Founded: ${town.yearFounded}</p>
                        <p class="info">Population: ${town.currentPopulation}</p>
                        <p class="info">Average Rain: ${town.averageRainfall} ft</p>
                    </section>
                    <section class="image">
                        <picture>
                            <img src="../images/${town.photo}" alt="Picture of ${town.name}">
                        </picture>
                    </section>
                </div>
            `;
        }
    });
    cardsContainer.innerHTML = html;

    //Append the completed container to the card
    document.getElementById("main-content").append(cardsContainer);

}