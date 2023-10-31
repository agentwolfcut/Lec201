//random number in a range 25 to 100
//Math.random() randoms in a range 0 to 0.99999*
function randomNumber(min,max){
    return Math.floor(Math.random()* (max - min + 1)) + min
}


let n1= 25 ,
    n2=100
    //const rand = Math.floor(Math.random() * (n2-n1+1)) +n1
const rand = randomNumber(25,100)
// const rand = Math.floor(Math.random() * (100-25+1)) +25

//1. 75
//2. Math.random() 0  to 0.99999*
//3. 0*75 to 0.9999 * 75 = 0 to 74.99999
//4. +25 = 25 to 99.9999

console.log(rand)
const rand2 = randomNumber(1,10)
const rand3 = randomNumber(20,100)