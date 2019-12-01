// Fetch Weather Site Data
fetch(`https://rdtrammel.github.io/cit230/waboveground/data/towndata.json`)
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
            let eventHTML = new String();
            town.events.forEach(event=>{
                eventHTML += `<li>${event}</li>`;
            });

            html += `
                <div class="card">
                    <section class="information">
                        <h2>${town.name}</h2>
                        <picture>
                            <source srcset="../images/${town.photo}_800.jpg" media="(min-width:600px) and (max-width:999px)">
                            <source srcset="../images/${town.photo}_1200.jpg" media="(min-width:1000px)">
                            <img src="../images/${town.photo}_500.jpg" alt="Picture of ${town.name}">
                        </picture>
                        <h4 class="motto">${town.motto}</h4>
                        <p class="info">Founded: ${town.yearFounded}</p>
                        <p class="info">Population: ${town.currentPopulation}</p>
                        <p class="info">Average Rain: ${town.averageRainfall} ft</p>
                    </section>
                    <section class="events">
                        <h2>Upcoming Events</h2>
                        <ul>${eventHTML}</ul>
                    </section>
                </div>
            `;
        }
    });
    cardsContainer.innerHTML = html;

    //Append the completed container to the card
    document.getElementById("main-content").append(cardsContainer);

}