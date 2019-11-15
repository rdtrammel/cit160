setHeader();

function setHeader(){
    let header = document.getElementById("site-header");
    fetch("templates/site-header.html")
        .then(blob=>{return blob.text()})
        .then(html=>{
            header.innerHTML = html;
            setFooter();
        });
}

function setFooter(){
    let footer = document.getElementById("site-footer");
    fetch("templates/site-footer.html")
        .then(response=>{return response.text()})
        .then(html=>{
            footer.innerHTML = html; 
            document.getElementById("today").innerHTML = myDateFormat(new Date());
        });
}