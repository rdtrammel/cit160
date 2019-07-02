document.getElementById('currentdate').innerHTML = new Date().toLocaleDateString();

function runTests(){ //Runs on button click
    let output = "";
    generateTests().forEach((test)=>{
        output += 
        `<tr>
            <td>[${test.toString()}]</td>
            <td>${getMiddle(test)}</td>
            <td>${addEnds(test)}</td>
        </tr>`;
    });
    
    document.getElementById('output').innerHTML = 
    `<table class="results">
        <tr>
            <th>Tests</th>
            <th>getMiddle</th>
            <th>addEnds</th>
        </tr>
        ${output}
    </table><br>`;
}

function addEnds(arr){ //returns the sum of the first and last values in an array
    return parseFloat(arr[0]) + parseFloat(arr[arr.length -1]);
}

function getMiddle(arr){ //If odd, get the middle value : If even, get average of middle values
    return (arr.length%2>0) ? arr[(arr.length-1)/2] : (arr[(arr.length/2)-1]+ arr[arr.length/2])/2;
}

//Function for dynamically generating three test arrays
function generateTests(){ //Returns an array of randomly generated arrays
    let output = [];
    let maxLn = 7, minLn = 3; 
    for(let i = 0; i < 3 ; i++){ //Generate an array X number of times. In this case 3.
        let arr = [];
        //Length of an array should at least be 3, but no more than 10.
        let arrLn = Math.floor(Math.random() * (maxLn - minLn) + minLn); 
        for (let n = 0; n <= arrLn ; n++){
            //Generate number between 0 and 10 and push it into the array.
            arr.push(Math.floor(Math.random() * 10)); 
        }
        output.push(arr); //Push the newly generated array to the overall output
    }
    return output; //Return the output of arrays
}