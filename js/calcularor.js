let num1 = 12
let num2 = 22
document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2

// Create four functions: add(), subtract(), divide(), multiply()
function add(){
    let sum = num1+num2
    document.getElementById("sum-el").textContent="results: "+sum
}
function subtract(){
    let sum = num1-num2
    document.getElementById("sum-el").textContent="results: "+sum
}
function divide(){
    let sum = num1/num2
    document.getElementById("sum-el").textContent="results: "+sum
}
function multiply(){
    let sum = num1*num2
    document.getElementById("sum-el").textContent="results: "+sum
}