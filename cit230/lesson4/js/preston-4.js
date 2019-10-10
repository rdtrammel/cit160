function toggleMenu(){
    document.getElementById("primary-nav").classList.toggle("hide");
}

document.getElementById("today").innerHTML = new Date().toLocaleDateString();