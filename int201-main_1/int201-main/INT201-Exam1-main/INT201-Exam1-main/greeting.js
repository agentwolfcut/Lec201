function greeting(someone) {
  if (someone == null || someone == undefined) {
    return `hello, guest`
  }
  return `hello, ${someone}`
}

console.log(`greeting('everyone') : ${greeting("Jimmy")}`)
console.log(`greeting(null) : ${greeting(null)}`)
console.log(`greeting(undefined) : ${greeting(undefined)}`)

module.exports = greeting
