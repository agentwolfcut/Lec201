// หาจำนวนตัวอักษรใน string

function strCount(str,letter){
    //code here
    // let strArr = str.split('').filter((element) => element === letter).length
    // return strArr

    return str.split(letter).length - 1
}
console.log(strCount('Hello', 'o'))
console.log(strCount('Hello', 'l')) // 2