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

getWeather("fish+haven,id");