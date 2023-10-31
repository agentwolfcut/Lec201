const Student = require('./student'); //import Student ถ้า import เป็น Obj ต้องใส่ {} ทั้ง 2 ฝั่ง

function StudentManager() {
  const students = [];

  function addStudent(name, id) {
    const student = new Student(name, id);
    students.push(student);
  }

  function enrollStudent(id, course) {
    const student = students.find((s) => s.id == id)
    student.enroll(course);
  }

  function getStudentInfo(id) {
    const student = students.find((s) => s.id == id)
    return student.getInfo();
  }

  function getAllStudentsInfo() {
    return students.map((s) => s.getInfo());
  }

  return {
    addStudent,
    enrollStudent,
    getStudentInfo,
    getAllStudentsInfo,
  };
}

module.exports = StudentManager;
