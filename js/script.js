// document.getElementById("count-el").innerText=5
// let count = 0
// count +=1
// console.log(count)
// let myAge=12
// console.log(myAge)
// let humanDogRatio=25
// let myDogAge= myAge * humanDogRatio
// console.log(myDogAge)

// let bonusPoint = 50
// console.log(bonusPoint)
// bonusPoint +=50
// console.log(bonusPoint)
// bonusPoint-=75
// console.log(bonusPoint)
// bonusPoint+=45
// console.log(bonusPoint)

// function add(){
//   console.log(2+4)
// }
// add() 

// let lap1 = 34
// let lap2 = 33
// let lap3 = 36
// function sum(){
//     console.log(lap1 +lap2+lap3)
// } 
// sum()
let count =0

function increment() {
    // alert('the button was clicked')
    count +=1
    document.getElementById("count-el").innerText= count

    // console.log("the button was clicked")

} 

function save(){
   let check = count + " - "
   document.getElementById("save-el").textContent+= check
   count=0
   document.getElementById("count-el").textContent=count
}