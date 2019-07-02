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

//Function for dynamically generating three test arrays
function generateTests(){
    let output = [];
    //Length of a test array should be at least 3, but no more than 10.
    let minLn = 3, maxLn = 7;
    //Start Generating Tests
    for(let i = 0; i < 3 ; i++){ //Generate an array X number of times. In this case 3.
        let test = [];
        let testLn = Math.floor(Math.random() * (maxLn - minLn) + minLn); 
        for (let n = 0; n <= testLn ; n++){
            test.push(Math.floor(Math.random() * 10)); 
        }
        output.push(test); //Push the newly generated array to the overall output
    }
    return output; //Return the output of arrays
}