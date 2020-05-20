/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

function createEmployeeRecord(arr) {
    return {
        firstName: arr[0],
        familyName: arr[1],
        title: arr[2],
        payPerHour: arr[3],
        timeInEvents: [],
        timeOutEvents: []
    }
}

function createEmployeeRecords(arr) {
    return arr.map(element => createEmployeeRecord(element));
}

function createTimeInEvent(time) {
    const timeInObject = {
        type: "TimeIn",
        date: time.split(' ')[0],
        hour: parseInt(time.split(' ')[1])
    };

    this.timeInEvents.push(timeInObject);
    return this;
}

function createTimeOutEvent(time) {
    const timeOutObject = {
        type: "TimeOut",
        date: time.split(' ')[0],
        hour: parseInt(time.split(' ')[1])
    };

    this.timeOutEvents.push(timeOutObject);
    return this;
}

function hoursWorkedOnDate(date) {
    const timeInObject = this.timeInEvents.find(event => event.date === date);
    const timeOutObject = this.timeOutEvents.find(event => event.date === date);

    return (timeOutObject.hour - timeInObject.hour) / 100;
}

function wagesEarnedOnDate(date) {
    return hoursWorkedOnDate.call(this, date) * this.payPerHour;
}

function allWagesFor() {
    return this.timeInEvents.reduce((total, event) => total + wagesEarnedOnDate.call(this, event.date), 0);
}

function calculatePayroll(employees) {
    return employees.reduce((total, employee) => total + allWagesFor.call(employee), 0);
}

function findEmployeeByFirstName(employees, name) {
    return employees.find(employee => employee.firstName === name);
}