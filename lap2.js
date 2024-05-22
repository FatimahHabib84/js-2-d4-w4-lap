function mult(num1 , num2){return num1*num2}
console.log(`Multiplication= ${mult(2,3)}`)

var dev = function (num1 , num2){ return num1/num2}
console.log(`devsion= ${dev(6,3)}`)

var sum =(num1,num2)=>{return num1+num2}
console.log(`sum= ${sum(4,5)}`)

function sub (num1,num2){console.log(`subtraction= ${num1-num2}`)}
sub(9,5)

function fuzzAndBuzz(num){
    if(num%3==0 && num%5==0){
        console.log("Fuzz and Buzz")
    } else if(num%3==0){
        console.log("Buzz")
    } else if(num%5==0){
        console.log("Fuzz")
    } else {
        console.log("NOT Fuzz and NOT Buzz")
    }
}
