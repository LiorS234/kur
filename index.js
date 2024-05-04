let toGuess = "apple"
let wordElement = document.getElementById('wordElement')
let container = document.getElementById('container')
let guessCount = 0
function guess(){

    
    

    let firstword= wordElement.value.charAt(0)
    let secondword= wordElement.value.charAt(1)
    let thirdword= wordElement.value.charAt(2)
    let fourthword= wordElement.value.charAt(3)
    let fifthword= wordElement.value.charAt(4)

    container.innerHTML+=`
 <div class="letter" style="background-color: ${checkletter(firstword,0)};">${firstword}</div>
 <div class="letter" style="background-color: ${checkletter(secondword,1)};">${secondword}</div>
 <div class="letter" style="background-color: ${checkletter(thirdword,2)};">${thirdword}</div>
 <div class="letter" style="background-color: ${checkletter(fourthword,3)};">${fourthword}</div>
 <div class="letter" style="background-color: ${checkletter(fifthword,4)};">${fifthword}</div>
 


 
    `


    let inputWord = wordElement.value.trim().toLowerCase() ;
 
    if (inputWord.length <5)  {
     alert("need 5 letters ")
     window.location.reload();
     return ;
    }
    if ( inputWord.length >5){
        alert("need 5 letters ")
        window.location.reload();
        return ;
    }
    if(wordElement.value === toGuess){
        alert('you won!!!') ;
        window.location.reload();
    }
    guessCount =  guessCount + 1
    if (guessCount == 6) {
        // Alert the user that maximum guesses have been reached
        alert("Maximum guesses reached!");

        window.location.reload();
        



}

}
function checkletter(letter,index){
    if(toGuess.charAt(index)==letter){
        return "green"
    }
    if(toGuess.includes(letter)){
        return "yellow"
    }
    return "red"
}
