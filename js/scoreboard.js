//variables for home counts
let homeCountOne=0
let guestCountOne=0


 
 //functions for home buttons
 function homeIncOne(){
   
     homeCountOne +=1
     document.getElementById("numHolder1").innerText=homeCountOne

 }

 function homeIncTwo(){
     
    homeCountOne +=2
    document.getElementById("numHolder1").innerText=homeCountOne

}
function homeIncThree(){
    homeCountOne +=3
    document.getElementById("numHolder1").innerText=homeCountOne

}

//functions for guest buttons

function guestIncOne(){
    guestCountOne +=1
    document.getElementById("numHolder2").innerText=guestCountOne

}
function guestIncTwo(){
    guestCountOne +=2
    document.getElementById("numHolder2").innerText=guestCountOne

}

function guestIncThree(){
    guestCountOne +=3
    document.getElementById("numHolder2").innerText=guestCountOne

}


