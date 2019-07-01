document.getElementById('currentdate').innerHTML = new Date().toLocaleDateString();

/* 
1) function doFV()
    a) Takes no parameters 
    b) Is called from the onclick attribute
    c) gets input from the user
    d) calls the computeFutureValue function
    e) displays the result to the user
*/

function doFV(){
    let principal = parseFloat(document.getElementById("principal").value);
    let rate = parseFloat(document.getElementById("rate").value);
    let years = parseInt(document.getElementById("years").value);
    let periods = parseInt(document.getElementById("periods").value);
    document.getElementById("output").value = '$' + computeFutureValue(principal, rate , years, periods);
}
/*
2) function computeFutureValue ()
    a) Computes and returns the future value of an investment. 
    b) The formula for computing the future value of an investment is:
        f = a (1 + r)^n
        f is the future value
        a is the investment amount sometimes called the principal 
        r is the growth rate per period
        n is the total number of periods throughout the life of the investment. 
*/

function computeFutureValue(principal, annualRate, years, periodsPerYear){
    let periodRate = annualRate/periodsPerYear;
    let totalPeriods = periodsPerYear*years;
    let f = principal * Math.pow((1 + periodRate), totalPeriods);
    return f.toFixed(2);
}
