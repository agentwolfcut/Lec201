const Student = require('./student');
const StudentManager = require('./studentManager');

const studentManager = StudentManager();

studentManager.addStudent('John-1', 1);
studentManager.addStudent('John-2', 2);
studentManager.addStudent('John-3', 3);

studentManager.enrollStudent(1, 'Math');
studentManager.enrollStudent(1, 'PE');
studentManager.enrollStudent(2, 'Eng');
studentManager.enrollStudent(3, 'Sci');

console.log('------------------------------------');
console.log(studentManager.getStudentInfo(1));
console.log('------------------------------------');
console.log(studentManager.getAllStudentsInfo());
console.log('------------------------------------');
