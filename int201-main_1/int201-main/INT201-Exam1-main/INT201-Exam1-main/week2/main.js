//synchronous programming
//interpreter translator

// function greeting(someone) {
//     return 'hello, ' + someone
// }
// let $myName = 'Nalinee Ninthongkam'
// $myName = 10 //weakly and dynamic data stype
// console.log("Starting...")
// //asynchronous programming
// setTimeout(() => {
//     console.log('more complex task finish...')
// }, 10000) //10 seconds
// console.log(greeting($myName))
// setTimeout(() => {
//     console.log('simple task finish...')
// }, 2000) //2 seconds
// console.log("Good Bye...")

// let msg = "I'm a teacher."
// console.log(msg)

let a = null
console.log(a)
let total
console.log(total)
if (total === undefined) console.log("variable does not have initial value")
if (a === null) console.log("variable has null value")
//bactick

if ("2" == 2) console.log(`'2' ==2':${"2" == 2}`)
if ("2" === 2) console.log(`'2' ===2':${"2" === 2}`)

//object sample
const obj = { id: 1001, name: "pen", price: 100 }
const obj2 = { id: 2001 }
//obj = obj2 //obj cannot change reference value

obj.id = 999 //but obj can update its propreties
