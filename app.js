var readlineSync = require('readline-sync');
var firstNum = readlineSync.question('please enter first number')
var secNum = readlineSync.question('please enter second number')
firstNum = Number(firstNum)
secNum = Number(secNum)

var operation = readlineSync.question('which operation do you want to use?')
function addNum(num1, num2) {
    return num1 + num2
}
function subNum(num1, num2) {
    return num1 - num2
}
function divideNum(num1, num2) {
    return num1 / num2
}
function multNum(num1, num2) {
    return num1 * num2
}
if (operation === 'add') {
    console.log(addNum(firstNum, secNum))

} if (operation === 'multiply') {
    console.log(multNum(firstNum, secNum))

} if (operation === 'divide') {
    console.log(divideNum(firstNum, secNum))
} if (operation === 'subtract') {
    console.log(subNum(firstNum, secNum))
}

