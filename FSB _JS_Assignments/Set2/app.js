let success = 0
let failure = 0
var successMeter = document.querySelector(".hitCount")
var failureMeter = document.querySelector(".guessCount")

function promptInput(){
    let userInput = parseInt(prompt("Please enter the number."))

    if (userInput >= 1 && userInput <=5){
        hitChecker(userInput)
    }
    else{
        alert("Please enter a number between 1-5.")
    }
}

function hitChecker(num){
    var battleArray = [0,1,1,0,1]
    if(battleArray[num-1] === 1){
        alert("You have hit a battleship.")
        success+=1
        successMeter.innerHTML = "Success count is: "+ success
        gameOver(success)
        console.log("success: "+ success)
    }
    else{
        alert("You missed the battleship.")
        failure+=1
        failure.innerHTML = "Faiure count is: "+ failure
        console.log("failure: " + failure)
    }

}

function gameOver(success){
    if(success === 3) {
        alert("You won the battleship.")
        success = 0
        failure = 0
    }
}

function toggleClick(){
    let text = document.querySelector('.toggleMe').innerHTML
    if(text == "Welcome to Javascript."){
        document.querySelector('.toggleMe').innerHTML = "Friday it is !!"
    }
    else if(text == "Friday it is !!"){
        document.querySelector('.toggleMe').innerHTML = "Welcome to Javascript."
    }
}