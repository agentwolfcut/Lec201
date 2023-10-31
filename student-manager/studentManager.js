const Student = require('./student');

function StudentManager() {
  const students = [];

  function getStudentById(id) {
    return students.find((s) => s.id == id);
  }

  function addStudent(name, id) {
    const student = new Student(name, id);
    students.push(student);
  }

  function enrollStudent(id, course) {
    const student = getStudentById(id);
    student.enroll(course);
  }

  function getStudentInfo(id) {
    const student = getStudentById(id);
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
