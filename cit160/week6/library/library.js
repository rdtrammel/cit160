document.getElementById('currentdate').innerHTML = new Date().toLocaleDateString();

/*
The Library allows loans based on the following table:
Patron Status	Overdue Books	Loan Duration(weeks)
Student	        0	            6
Student	        Fewer than 3	4
Student	        3 or More	    2
Faculty	        0	            16
Faculty	        Fewer than 3	12
Faculty	        3 or More	    8
Other	        0	            4
Other	        Fewer than 3	3
Other	        3 or More	    2
*/
let data = {
    student : [6,4,2],
    faculty : [16,12,8],
    other : [4,3,2]
}

//I voted to use a json structure because the nested if's and switches were getting a little hard to follow.
function getDurationData(){
    //Clear the feedback message in case there were any errors
    document.getElementById("feedback").innerHTML = "";
    //Start be getting the value of the Patron Type
    let patronType = document.getElementById("patron").value;
    let feedback;
    if (patronType){
        //If there was a valid patron type, then check to see if the overdue books are also valid
        let overdueBooks = document.getElementById("overdue").value;
        if (overdueBooks != "" && overdueBooks >= 0){
            let duration;
            //If there was a valid value for overdue books, then get and set the duration
            switch(true){
                case overdueBooks == 0 : 
                    duration = data[patronType][0]; 
                    highlightRow(patronType,0);
                    break;
                case overdueBooks < 3: 
                    duration = data[patronType][1]; 
                    highlightRow(patronType,1);
                    break;
                default : 
                    duration = data[patronType][2];
                    highlightRow(patronType,2);
                    break;
            }
            document.getElementById("duration").value = duration;
        } else { 
            feedback = "Please enter a number greater than 0 for overdue books.";
            document.getElementById("overdue").focus();
        }
    }else{ 
        feedback = "Please select a patron type from the drop down.";
        document.getElementById("patron").focus();
    }
    if(feedback){
        document.getElementById("feedback").innerHTML = feedback;
        document.getElementById("duration").value = "0";
        resetHighlight();
    }
}

document.getElementById("patron").addEventListener("change", getDurationData);
document.getElementById("overdue").addEventListener("change", getDurationData);

function highlightRow(str, num){
    resetHighlight();
    let chart = document.querySelectorAll("table")[0].querySelectorAll("tr");
    switch(str){
        case "student" : chart[num+1].classList.add("highlight-row"); break;
        case "faculty" : chart[num+4].classList.add("highlight-row"); break;
        default : chart[num+7].classList.add("highlight-row"); break;
    } 
}

function resetHighlight(){
    document.querySelectorAll("table")[0].querySelectorAll("tr").forEach(row=>{
        row.className = "";
    });
}