document.getElementById('currentdate').innerHTML = new Date().toLocaleDateString();

function doTests(count){
    //Added *optional* count param to be called from the HTML onclick event
    let output = "";
    //Generate Tests with optional param to specify a number of tests to generate
    generateTests(count).forEach((test)=>{
        output += 
        `<tr>
            <td>[${test}]</td>
            <td>${getMiddle(test)}</td>
            <td>${addEnds(test)}</td>
        </tr>`;
    });
    //Display test results
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

function addEnds(arr){ 
    //Return the sum of the first and last item in the array 
    return arr[0] + arr[arr.length -1];
}

function getMiddle(arr){ 
    //If odd, get the middle value : If even, get average of middle values
    return (arr.length%2>0) ? arr[(arr.length-1)/2] : (arr[(arr.length/2)-1]+arr[arr.length/2])/2;
}

function generateTests(count){
    let output = []; //Create array to store each test array
    let countOfTests = count || 3; //If no number is specified, default to 3
    let minLn = 3, maxLn = 7; //Set min and max length for each test array
    //Generate Individual Tests
    for(let i = 0; i < countOfTests ; i++){
        //Create a new test array
        let test = [];
        //Randomly generate how many numbers will be in the array between a max and min
        let testLn = Math.floor(Math.random() * (maxLn - minLn) + minLn); 
        for(let n = 0; n < testLn ; n++){
            //Push randomly generated number between 0 and 10 into test array that amount of times
            test.push(Math.floor(Math.random() * 10)); 
        }
        //Push completed test array into output array
        output.push(test);
        //Do it again
    }
    return output;
}