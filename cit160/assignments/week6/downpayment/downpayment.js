document.getElementById('currentdate').innerHTML = new Date().toLocaleDateString();

//Bank of Ririe down payment calculation table
/*Cost of House		            Down Payment
$0	–	$49,999.99		        5% * cost
$50,000	–	$99,999.99		    $2,000 + 10% * (cost − $50,000)
$100,000	–	$199,999.99		$7,500 + 20% * (cost − $100,000)
$200,000	–	∞		        $27,500 + 25% * (cost − $200,000)*/

//This gets the down payment
function getDownPayment(){
    let cost = document.getElementById('cost').value;
    if (cost){
        let downPayment, row;
        switch(true){
            case (cost < 50000) : downPayment = (cost * .05); row = 1; break;
            case (cost < 100000) : downPayment = 2000 + (.1 * (cost - 50000)); row = 2; break;
            case (cost < 200000) : downPayment = 7500 + (.2 * (cost - 100000)); row = 3; break;
            default : downPayment = 27500 + (.25 * (cost - 200000)); row = 4; break;
        }
        //I found out that there is a currency formatter as part of the International API that is 95%+ supported.
        formatter = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' });
        document.getElementById("calculate").style = "display:none";
        document.getElementById("output").innerHTML = `
            <h3>
                <br>Down Payment
                <br>${formatter.format(downPayment)}
                <br><br>
            </h3>`;
        highlightRow(row);
    }
}

//I wanted to hide the button and display the result in its place.
//This listener will reset the form when the cost of the house is changed
document.getElementById("cost").addEventListener("change", resetButton);

function resetButton(){
    document.getElementById("output").innerHTML = "";
    document.getElementById("calculate").style = "";
}

//I wanted to add some highlighting for the down payment calculator schedule so that users could easily see the underlying math that got their result.

//To do that We'll need a function that adds a highlight class to the row, and a function that will reset all of the rows in a table so that it only highlights one row at a time.
let costChartRows = document.querySelectorAll("tr");

function resetRows(){
    costChartRows.forEach(row=>{
        row.className = "";
    });
}

function highlightRow(num){
    //Before highlighting a row, remove the highlight class from all rows
    resetRows();
    //Add the highlight class to the given row number
    costChartRows[num].classList.add("highlight-row");
}