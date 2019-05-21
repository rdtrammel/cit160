document.getElementById('currentdate').innerHTML = new Date().toLocaleDateString();

//Bank of Ririe down payment calculation table
/*Cost of House		            Down Payment
$0	–	$49,999.99		        5% * cost
$50,000	–	$99,999.99		    $2,000 + 10% * (cost − $50,000)
$100,000	–	$199,999.99		$7,500 + 20% * (cost − $100,000)
$200,000	–	∞		        $27,500 + 25% * (cost − $200,000)*/

let costChartRows = document.querySelectorAll("tr");

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

document.getElementById("cost").addEventListener("change", resetButton);

function resetButton(){
    document.getElementById("output").innerHTML = "";
    document.getElementById("calculate").style = "";
}

function resetRows(){
    costChartRows.forEach(row=>{
        row.className = "";
    });
}

function highlightRow(num){
    resetRows();
    costChartRows[num].classList.add("highlight-row");
}