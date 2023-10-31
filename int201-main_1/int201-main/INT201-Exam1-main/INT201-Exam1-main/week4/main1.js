function doSomething(msg) {
  console.log(x)
  if (msg === null || msg === undefined) {
    let someone = "guest"
  }
  let x = 1
}
//   console.log(someone)  return `hello, ${msg}`}doSomething()// console.log(msg)

//let x =1

// let y = x === 1 ? Math.random()*2+3/5 : x
// console.log(x === 1 ? 1 : 0)

let m = null

// // optional chaining
// console.log(m?.charAt(0))
// console.log(m?.[0])
// console.log(m?.id)

//nullish
let n = m ?? 0 //equals to m===null ||m===undefind? m : 0
console.log(n)

let y = [] //array initialization with empty array
let z = {} //object initialization with no property
console.log(typeof y) //empty array (not null and not undefined)
console.log(typeof z) //empty object (not null and not undefined)

let a = [1, 3, 5, 7]
a = a ?? y
console.log(a)

console.log(Math.round(3.1)) //3
console.log(Math.round(3.4)) //3
console.log(Math.round(3.5)) //4
console.log(Math.round(3.7)) //4
console.log("--------------------------")

console.log(Math.floor(3.1)) //3
console.log(Math.floor(3.4)) //3
console.log(Math.floor(3.5)) //3
console.log(Math.floor(3.7)) //3
console.log("--------------------------")

console.log(Math.ceil(3.1)) //4
console.log(Math.ceil(3.4)) //4
console.log(Math.ceil(3.5)) //4
console.log(Math.ceil(3.7)) //4
console.log("--------------------------")

console.log(Math.PI)
console.log(Math.pow(2))
