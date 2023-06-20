
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