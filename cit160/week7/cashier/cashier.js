document.getElementById('currentdate').innerHTML = new Date().toLocaleDateString();

/*
if the subtotal is greater than $50 and today is Tuesday or Wednesday, subtract 10% from the subtotal.
Finish by adding 6% sales tax to the balance. It looks like days are 0 based. So Sunday = 0, Monday = 1, etc.
*/

function checkOut(){
    let subtotal = parseFloat(document.getElementById("subtotal").value);
    //let today = new Date().getDay();
    let today = 2
    let discount = 0;
    if (subtotal > 50){
        if (today == 2 || today == 3){
            discount = subtotal * .1;
        }
    }
    let salesTax = parseFloat(((subtotal - discount) * .06).toFixed(2));
    document.getElementById("output").innerHTML = 
        `<div class="checkout-table">
            <table>
                <tr>
                    <td>Subtotal</td>
                    <td>Discount(10%)</td>
                    <td>Tax(6%)</td>
                    <td>Total</td>
                </tr>
                <tr>
                    <td>$${subtotal}</td>
                    <td>$${discount}</td>
                    <td>$${salesTax}</td>
                    <td>$${(subtotal - discount)+salesTax}</td>
                </tr>
            </table>
        </div>
        `;
}