document.getElementById('currentdate').innerHTML = new Date().toLocaleDateString();

function runTests(){ //Runs on button click
    let output = "";
    //generateTests returns an array of arrays
    generateTests().forEach((test)=>{
        output += 
        `<tr>
            <td>[${test}]</td>
            <td>${getMiddle(test)}</td>
            <td>${addEnds(test)}</td>
        </tr>`;
    });

    document.getElementById('output').innerHTML = 
    `<table class="results">
        <tr>
            <th>Tests</th>
            <th>getMiddle(arr)</th>
            <th>addEnds(arr)</th>
        </tr>
        ${output}
    </table><br>`;
}

function addEnds(arr){ return arr[0] + arr[arr.length -1] }

function getMiddle(arr){ 
    //If odd, get the middle value : If even, get average of middle values
    return (arr.length%2>0) ? arr[(arr.length-1)/2] : (arr[(arr.length/2)-1]+arr[arr.length/2])/2;
}

function generateTests(){
    let output = [];
    //Length of a test array should be at least 3, but no more than 7.
    let minLn = 3, maxLn = 7;
    //Count of tests to generate
    let countOfTests = 3;
    //Start Generating Tests
    for(let i = 0; i < countOfTests ; i++){
        let test = [];
        let testLn = Math.floor(Math.random() * (maxLn - minLn) + minLn); 
        //Build test array
        for (let n = 0; n <= testLn ; n++){
            //Push randomly generated number into test array
            test.push(Math.floor(Math.random() * 10)); 
        }
        //Push test array into output array
        output.push(test);
    }
    return output;
}