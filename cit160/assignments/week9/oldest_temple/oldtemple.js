document.getElementById('currentdate').innerHTML = new Date().toLocaleDateString();

/* Output the oldest, running temple of The Church from a limited list provided in an HTML data table */
let table = document.getElementById("templeData");
let maxYear = 0;
let minRow = 0;

[...table.rows].forEach(row=>{
    let dedicationYear = parseInt(row.children[1].innerHTML);
    if ( dedicationYear < maxYear){ maxYear = dedicationYear; minRow = row;}
});

document.getElementById("output").innerHTML = minRow;