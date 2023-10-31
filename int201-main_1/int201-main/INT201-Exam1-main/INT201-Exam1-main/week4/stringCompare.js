let str1 = 'ant'
let str2 = 'Ant'
let str3 = 'ANT'
let str4 = 'ant'

console.log(str1 === str2) //false 'a' === 'A' ,
console.log(str2 === str3) //false 'A' === 'A' , 'n' === 'N' ,
console.log(str1 === str4) //true  'a' === 'a' , 'n' === 'n' , 't' === 't'
console.log(str1 !== str3) //true  'a' === 'A',
console.log(str1 < str2) //false   'a' < 'A'  97<65
console.log(str3 < str1) //true    'A' < 'a'  65<97

console.log('-------------')
console.log(str1.includes('nt')) //true
console.log(str1.includes('Nt')) //false
console.log(str1.toLowerCase().includes('Nt'.toLowerCase())) //true // เปลี่ยนให้ไม่เป็น case sensitive
console.log(str1.toLowerCase().includes('Nt'.toUpperCase())) //false