/* Your Code Here */
let createEmployeeRecord = function (ary){
    return {
        firstName:      ary[0],
        familyName:     ary[1],
        title:          ary[2],
        payPerHour:     ary[3],
        timeInEvents:   [],
        timeOutEvents:  []
    }
}

let createEmployeeRecords = function(ary) {
    return ary.map(createEmployeeRecord)
}

let createTimeInEvent = function(dateTime) {
    let [date, time] = dateTime.split(' ')
    let timeInEvent = {}
    timeInEvent = {
        type:   'TimeIn',
        hour:   parseInt(time),
        date:   date
    }
    this.timeInEvents.push(timeInEvent)
    return this
}

let createTimeOutEvent = function(dateTime) {
    let [date, time] = dateTime.split(' ')
    let timeOutEvent = {}
    timeOutEvent = {
        type:   'TimeOut',
        hour:   parseInt(time),
        date:   date
    }
    this.timeOutEvents.push(timeOutEvent)
    return this
}

let hoursWorkedOnDate = function(date) {
    let timeInEvent = this.timeInEvents.find(event => event.date === date)
    let timeOutEvent = this.timeOutEvents.find(event => event.date === date)
    let hoursWorked = Math.abs(timeOutEvent.hour - timeInEvent.hour)/100
    return hoursWorked
}

let wagesEarnedOnDate = function(date) {
    let payRate = this.payPerHour
    let hoursWorked = hoursWorkedOnDate.call(this, date)
    let payOwed = payRate * hoursWorked
    return payOwed
}

let findEmployeeByFirstName = function(records, fname) {
    return records.find(function(employee){
        return fname === employee.firstName
    })
}

let calculatePayroll = function(records) {
    return records.reduce((payroll, employee) => {
        return payroll += allWagesFor.call(employee)
    }, 0)
}

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

let allWagesFor = function () {
    let eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    let payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}