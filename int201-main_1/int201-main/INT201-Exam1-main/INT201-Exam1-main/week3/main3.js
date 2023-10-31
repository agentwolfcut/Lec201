//x is a global scope
const x = 1
{
  //x is a block scope
  let x = 2
  console.log(x)
}
function doIt(x) {
  //y is a function scope
  console.log(x)
}
console.log(x) //?1 global
doIt(100)
console.log(x) //?1 global

let msg = "hello"
console.log(msg.charAt(0)) //string user zero based index
let msgs = [...msg] //spread operator
console.log(msgs)

let n ='2'
console.log(typeof n)
console.log(typeof Number(n)) //ecxplict type conversion