// Your code here

let twoRows = [
    ["moe", "sizlak", "barkeep", 2],
    ["bartholomew", "simpson", "scamp", 3]
  ]

  //createEmployeeRecords(twoRows);




function createEmployeeRecord(myArray){
    let newObj = {};

    newObj.firstName = myArray[0];
    newObj.familyName = myArray[1];
    newObj.title = myArray[2];
    newObj.payPerHour = myArray[3];
    newObj.timeInEvents = [];
    newObj.timeOutEvents = [];

    return newObj;
}


function createEmployeeRecords(empArray){
    let newArray = [];

    for(let card in empArray){

        //console.log("pass " + (empArray[card]) + ": " + createEmployeeRecord(empArray[card]));
        newArray.push(createEmployeeRecord(empArray[card]));
    }
    return newArray;
}


function createTimeInEvent(empRecObj, date){
    let timeObj = {};

    timeObj.type = "TimeIn";
    timeObj.hour = parseInt(date.slice(11, 15));
    timeObj.date = date.slice(0, 10);

    empRecObj.timeInEvents.push(timeObj);

    return empRecObj;
}


function createTimeOutEvent(empRecObj, dateOut){
    let timeOutObj = {};

    timeOutObj.type = "TimeOut";
    timeOutObj.hour = parseInt(dateOut.slice(11, 15));
    timeOutObj.date = dateOut.slice(0, 10);

    empRecObj.timeOutEvents.push(timeOutObj);

    return empRecObj;
}

// let cRecord = createEmployeeRecord(["Julius", "Caesar", "General", 1000])
// updatedBpRecord = createTimeInEvent(cRecord, "0044-03-15 0900")
// updatedBpRecord = createTimeOutEvent(cRecord, "0044-03-15 1100")
// hoursWorkedOnDate(cRecord, "0044-03-15");

function hoursWorkedOnDate(empRecObj, date){
    let hoursWorked = 0;

    hoursWorked = (empRecObj.timeOutEvents[0].hour - empRecObj.timeInEvents[0].hour) / 100;
    return hoursWorked;
}

// cRecord = createEmployeeRecord(["Julius", "Caesar", "General", 27]);
// wagesEarnedOnDate(cRecord, "0044-03-15");

function wagesEarnedOnDate(empRecObj, date){
    let payOwed = 0;

    payOwed = hoursWorkedOnDate(empRecObj, date) * empRecObj.payPerHour;
    
    return parseInt(payOwed);
}


cRecord = createEmployeeRecord(["Julius", "Caesar", "General", 27])
// Earns 324
updatedBpRecord = createTimeInEvent(cRecord, "0044-03-14 0900")
updatedBpRecord = createTimeOutEvent(cRecord, "0044-03-14 2100")
// Earns 54
updatedBpRecord = createTimeInEvent(cRecord, "0044-03-15 0900")
updatedBpRecord = createTimeOutEvent(cRecord, "0044-03-15 1100")
// 324 + 54

allWagesFor(cRecord);

function allWagesFor(empRecObj){
    let payOwed = 0;
    let totalTimeIn = 0;
    let totalTimeOut = 0;

    for(let time in empRecObj.timeInEvents){
       // console.log(empRecObj.timeInEvents[time].hour);
       //totalTimeIn += empRecObj.timeOutEvents[time].hour - empRecObj.timeInEvents[time].hour;
       payOwed += wagesEarnedOnDate(empRecObj, payOwed)
    }
    console.log(payOwed);

    //payOwed = for( let pay in 
    
    return payOwed;
}