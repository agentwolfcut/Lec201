const StudentManager = require('./studentManager'); //import StudentManager ถ้า import เป็น Obj ต้องใส่ {} ทั้ง 2 ฝั่ง

const studentManager = StudentManager(); // สร้าง obj จาก StudentManager

studentManager.addStudent('John-1', 1); // เรียกใช้ addStudent จาก obj ที่สร้างไว้
studentManager.addStudent('John-2', 2);
studentManager.addStudent('John-3', 3);

studentManager.enrollStudent(1, 'Math'); // เรียกใช้ enrollStudent จาก obj ที่สร้างไว้
studentManager.enrollStudent(1, 'PE');
studentManager.enrollStudent(2, 'Eng');
studentManager.enrollStudent(3, 'Sci');

console.log('------------------------------------');
console.log(studentManager.getStudentInfo(1)); // เรียกใช้ getStudentInfo จาก obj ที่สร้างไว้
console.log('------------------------------------');
console.log(studentManager.getAllStudentsInfo()); // เรียกใช้ getAllStudentsInfo จาก obj ที่สร้างไว้
console.log('------------------------------------');
