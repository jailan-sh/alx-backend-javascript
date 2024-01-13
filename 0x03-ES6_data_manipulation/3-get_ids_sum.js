export default function getStudentIdsSum(students) {
  const sum = students.reduce((acc, student) => acc + student.id, 0);
  return sum;
}
