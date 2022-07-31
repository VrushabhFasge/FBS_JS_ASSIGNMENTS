function que1(){
    let name = prompt("Enter you name.")
    console.log(`Hello ${name}`)
}

function evenOdd(){
    let number = prompt("Enter choice number.")
    let result = number%2 == 0 ? "Even number detected" : "Not a even number"
    console.log(result)
}

function isPrime(){
    let number = parseInt(prompt("Enter choice number."))
    let result =""
    if(number === 1){
        result=`${number} is neither prime nor composite.`
    }
    else if( number > 1){
        for(var i=2; i < number; i++ ){
            if(number % i == 0){
                result = `${number} is not prime number.`
                break
            }
            else{
                result = `${number} is prime no.`
            }
        }
    }
    console.log(result)
}

function table(){
    let number = parseInt(prompt("Enter number to write the table."))
    if(number != 0){
        for(i=1;i<=10;i++){
            console.log(number*i)
        }
    }
    else{
        console.log("Please enter a valid number")
    }
}