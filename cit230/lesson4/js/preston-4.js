function toggleMenu(){
    document.getElementById("primary-nav").classList.toggle("hide");
}

function myDateFormat(date){
    let dayName = new Intl.DateTimeFormat('en-US', {weekday:"long"}).format(date);
    let monthName = new Intl.DateTimeFormat('en-US', { month:"long" }).format(date);
    return `${dayName}, ${date.getDay()} ${monthName} ${date.getFullYear()}`;
}

document.getElementById("today").innerHTML = myDateFormat(new Date());