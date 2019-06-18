document.getElementById('currentdate').innerHTML = new Date().toLocaleDateString();

/* Output the oldest, running temple of The Church from a limited list provided in an HTML data table */

let table = document.getElementById("templeData");
let minYear = parseInt(table.rows[1].cells[1].innerHTML);
let minRow;

[...table.rows].forEach(row=>{
    let dedicationYear = parseInt(row.cells[1].innerHTML);
    if ( dedicationYear <= minYear){ 
        minYear = dedicationYear;
        minRow = row; 
    }
});

document.getElementById("output").innerHTML =   
`<h3>Oldest Operating Temple</h3>
<table class="output-data">
    <tr>
        <th>Temple</th>
        <th>Year Dedicated</th>
        <th>Square Footage</th>
    </tr>
    ${minRow.innerHTML}
</table>`