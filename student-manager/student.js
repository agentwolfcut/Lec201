class Student {
  constructor(name, id) {
    this.name = name;
    this.id = id;
    this.courses = [];
  }

  enroll(course) {
    this.courses.push(course);
  }

  getInfo() {
    return `${this.name} ${this.id} ${this.courses.join(', ')}`;
  }
}

module.exports = Student;
