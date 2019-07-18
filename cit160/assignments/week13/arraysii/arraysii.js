document.getElementById('currentdate').innerHTML = new Date().toLocaleDateString();

function countEvens(list) {
    //count and return the number of 'even' integers in an array
    let count = 0;
    for (let i = 0; i < list.length; i++) {
        if (list[i] % 2 === 0) count++;
    }
    return count;
}

function multiply(list, multiplier) {
    //multiply each item in the array by a given multiplier
    return list.map(x=>{ return x *= multiplier });
}

function doTests(count) {
    let output = "";
    generateTestArrays(count).forEach(test => {
        let multiplier = randomNumber(10, 1);
        output +=
            `<tr>
                <td>[${test}]</td>
                <td>Multiplier(${multiplier}) [${multiply(test, multiplier)}]</td>
                <td>${countEvens(test)} Evens</td>
            </tr>`;
    });
    document.getElementById('output').innerHTML =
        `<table class="results">
        <tr>
            <th>Tests</th>
            <th>multiply(list, multiplier)</th>
            <th>countEvens(list)</th>           
        </tr>
        ${output}
        </table><br>`;
}

function generateTestArrays(count) {
    let output = [];
    let countOfTests = count || 3;
    for (let i = 0; i < countOfTests; i++) {
        let test = [];
        let testLn = randomNumber(7, 3);
        for (let n = 0; n < testLn; n++) {
            test.push(randomNumber(10));
        }
        output.push(test);
    }
    return output;
}

function randomNumber(max, min) {
    let x = max || 10; //Default max is 10
    let y = min || 0; //Default min is 0
    return Math.floor(Math.random() * (x - y) + y);
}