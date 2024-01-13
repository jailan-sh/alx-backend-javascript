export default function getStudentsByLocation(students, city) {
  const filt = students.filter((student) => student.location === city);
  return filt;
}
