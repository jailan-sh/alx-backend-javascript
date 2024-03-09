export default class HolbertonCourse {
  constructor(name, lenght, students) {
    this._name = name;
    this._length = lenght;
    this._students = students;
  }

  get name() {
    return this._name;
  }

  set name(name) {
    if (typeof name === 'string') this._name = name;
    else throw TypeError('Name must be a string');
  }

  get length() {
    return this._length;
  }

  set length(length) {
    if (typeof length === 'number') this._length = length;
    else throw TypeError('Length must be a number');
  }

  get students() {
    return this._students;
  }

  set students(students) {
    if (
      !Array.isArray(students) ||
      students.every(stu => typeof stu !== 'string')
    ) {
      throw TypeError('students must be an array of strings');
    } else {
      this._students = students;
    }
  }
}
