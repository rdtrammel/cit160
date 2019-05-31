document.getElementById('currentdate').innerHTML = new Date().toLocaleDateString();

/*Your program should get all its input from your computer’s clock. On all weekdays (Monday through Friday) that are not holidays, your program should output “Get up!” On all other days (weekends and holidays), your program should output “Sleep in.” The three holidays that your program must check for are January 1 (New Year’s Day), July 4 (U.S. Independence Day), and December 25 (Christmas).*/

document.getElementById("date").addEventListener('change', doISleepIn);

function doISleepIn(){
    let dateArr = document.getElementById("date").value.split("-");
    //This one was tricky because the month uses a 0 index, so you have to subtract one to get it to create right
    let date = new Date(dateArr[0], dateArr[1]-1, dateArr[2])|| new Date();
    if (isHoliday(date) || date.getDay() === 0 || date.getDay() === 6) {
        document.getElementById("output").innerHTML = "Sleep In!";
    } else {
        document.getElementById("output").innerHTML = "Get Up!";
    }
}

function isHoliday(date){
    //The year will change, but the month and day will not, so that's all we need to check really
    let month = date.getMonth(), day = date.getDate();
    if (month === 0 && day === 1) return true; //New Years Eve
    if (month === 6 && day === 4) return true; //Independence Day
    if (month === 11 && day === 25) return true; //Christmas
    return false;
}