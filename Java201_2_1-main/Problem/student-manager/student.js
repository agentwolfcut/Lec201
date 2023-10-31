class Student {
  constructor(name, id) {
    // ทำค่าเริ่มต้น
    this.name = name
    this.id = id
    this.courses = [] // course เป็น empty array
  }

  enroll(course) {
    this.courses.push(course) // when student enrollsมา รับชื่อ course ใส่ใน course list
  }

  getInfo() {
    return `${this.name} ${this.id} ${this.courses.join(", ")}`
  } // return String with name , ID ,$ ${this.course} or
}

module.exports = Student // export เพื่อให้ใช้กับไฟล์อื่นได้ // { Student , Teacher } export แบบ object

// ['Math','Sci','Eng']
// join(', ') -> Math ,Sci ,Eng
