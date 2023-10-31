const person1 = {
    name: "Sophia",
    id: 1,
    age: 19
}

const person2 = {
    name: "Mason",
    id: 2,
    age: 18
}

const person3 = {
    name: "Isabella",
    id: 3,
    age: 20
}


//map เขียน format ใหม่ แต่ไม่รู้ว่าต้องทำกระบวนการอะไรต้องสร้าง process เอง
const persons = [person1, person2, person3]
const names = persons.map((p) => p.name)
console.log(names)

//reduce รวมเป็นค่าเดียว แต่ไม่รู้ว่าต้องทำกระบวนการอะไรต้องสร้าง process เอง
const countAge = persons.reduce((acc, cur) => acc + cur.age , 0)
console.log(countAge)

const personStack = [] // สร้าง array ว่างไว้เพื่อเก็บข้อมูล
//forEach ทำลูป  push เข้า personStack 
persons.forEach((p) => { // ทำลูป
    personStack.push(p.name) // ใส่ข้อมูลเข้าไปใน array ว่าง
})
console.log(personStack)

//filter กรองข้อมูล 
const personFilter = persons.filter((p) => p.age > 18) // กรองข้อมูลที่มีอายุมากกว่า 18
console.log(personFilter)

//find หาข้อมูล 
const personFind = persons.find((p) => p.age > 18) // หาข้อมูลที่มีอายุมากกว่า 18
console.log(personFind)

//sort เรียงข้อมูล 
const personSort = persons.sort((a,b) => a.age - b.age) // เรียงข้อมูลตามอายุน้อยไปมาก
console.log(personSort)

//every ตรวจสอบข้อมูล 
const personEvery = persons.every((p) => p.age > 18) // ตรวจสอบว่าข้อมูลทุกตัวมีอายุมากกว่า 18 หรือไม่
console.log(personEvery)

//some ตรวจสอบข้อมูล 
const personSome = persons.some((p) => p.age > 18) // ตรวจสอบว่าข้อมูลบางตัวมีอายุมากกว่า 18 หรือไม่
console.log(personSome)

//includes ตรวจสอบข้อมูล 
const personIncludes = persons.includes(person1) // ตรวจสอบว่าข้อมูลบางตัวมีอายุมากกว่า 18 หรือไม่
console.log(personIncludes)

const pets = ["dog", "cat", "bird", "fish", "rabbit","ant"]

//slice ตัดข้อมูล 
const petSlice = pets.slice(0,2) // ตัดข้อมูลตั้งแต่ตัวที่ 0 ถึง 2
console.log(petSlice) // [ 'dog', 'cat' ]

//splice ตัดข้อมูล
const petSplice = pets.splice(0,3) // ตัดข้อมูลตั้งแต่ตัวที่ 0 ถึง 2
console.log(petSplice) // [ 'dog', 'cat', 'bird' ]

//concat ต่อข้อมูล
const petConcat = pets.concat(person1)
console.log(petConcat) // [ 'bird', 'fish', 'rabbit', 'ant', { name: 'Sophia', id: 1, age: 19 } ]

//reverse แปลงข้อมูล
const petReverse = pets.reverse()
console.log(petReverse) // [ 'ant', 'rabbit', 'fish', 'bird', 'cat', 'dog' ]

//lastIndexOf แปลงข้อมูล
const petLastIndexOf = pets.lastIndexOf()
console.log(petLastIndexOf) // -1

//indexOf แปลงข้อมูล
const petIndexOf = pets.indexOf()
console.log(petIndexOf) // -1

//pop แปลงข้อมูล
const petPop= pets.pop()
console.log(petPop) // ant

//push แปลงข้อมูล
const petPush = pets.push()
console.log(petPush) // 

//shift แปลงข้อมูล
const petShift = pets.shift()
console.log(petShift) // 

//unshift แปลงข้อมูล
const petUnshift = pets.unshift()
console.log(petUnshift) // 




