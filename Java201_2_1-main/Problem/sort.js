//ANS in ex
//10. I need return [3, 5, 10, "apple", "banana", "cherry"] from mixedValues array by using sort method.
// const mixedValues = [10, "apple", 5, "banana", "cherry", 3]
//sort
// console.log(mixedValues.sort((a,b) =>  {
//     if (typeof a === 'number' && typeof b === 'number') {
//         return a - b
//     } else if (typeof a === 'string' && typeof b === 'string') {
//         return a.localeCompare(b)
//     } else if (typeof a === 'number' && typeof b === 'string') {
//         return -1
//     } else if (typeof a === 'string' && typeof b === 'number') {
//         return 1
//     } else {
//         return 0
//     }
// } ))

//10. I need return [3, 5, 10, "apple", "banana", "cherry"] from mixedValues array by using sort method.
const mixedValues = [10, "apple", 5, "banana", "cherry", 3]

const num = mixedValues.filter((element) => typeof element === "number").sort((a,b) => parseInt(a) - parseInt(b))
const str = mixedValues.filter((element) => typeof element === "string").sort((a,b) => a.localeCompare(b))

// const showNum = num.sort((a,b) => parseInt(a) - parseInt(b)) // asc
// const showStr = str.sort((a,b) => a.localeCompare(b))

const showMixed = num.concat(str)

console.log(showMixed)

