setHeader();

function setHeader(){
    let header = document.getElementById("site-header");
    fetch("https://rdtrammel.github.io/cit230/waboveground/pages/templates/site-header.html")
        .then(blob=>{return blob.text()})
        .then(html=>{
            header.innerHTML = html;
            setFooter();
        });
}

function setFooter(){
    let footer = document.getElementById("site-footer");
    fetch("https://rdtrammel.github.io/cit230/waboveground/pages/templates/site-footer.html")
        .then(response=>{return response.text()})
        .then(html=>{
            footer.innerHTML = html; 
            document.getElementById("today").innerHTML = myDateFormat(new Date());
        });
}