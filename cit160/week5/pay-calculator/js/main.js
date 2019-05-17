document.getElementById('currentdate').innerHTML = new Date().toLocaleDateString();

/*Write a defining table and a JavaScript program to compute and output an employee’s after tax pay. Your program will read the number of regular hours that an employee worked and that employee’s wage, and then compute that employee’s after tax pay. Tax is 15% of the employee’s gross pay. Your program should correctly handle real numbers.*/
let hours = document.getElementById("hours");
let wage = document.getElementById("wage");
let gross = document.getElementById("gross");
let tax = document.getElementById("tax");

//Since the tax rate is set at 15%, we dont want people to change that value
//You can just put a disabled flag on the input, but this is how you do it via javascript
tax.disabled = true;

//Add listeners for when the wage or hours worked are modified and update the tax value accordingly
hours.addEventListener("change", ()=>{ tax.value = calculateTax(); gross.value = calculatePay();});
wage.addEventListener("change", ()=>{ tax.value = calculateTax(); gross.value = calculatePay();});

//Function for calculating the tax
function calculateTax(){
	return calculatePay()*.15;
}

//Function will either return the hours*wage, or a 0;
function calculatePay(){
	return hours.value*wage.value || 0
}

//This function calculates the final Take Home Pay
function calculateTotalPay(){
	if (hours.value<=0 || wage.value<=0) {
		output.innerHTML = "Please enter a wage and a number of hours worked.";
	} else {
		output.innerHTML = `Take Home: <strong>$${calculatePay() - calculateTax()}</strong>`;
	}
}