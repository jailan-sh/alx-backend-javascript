import getStudentsByLocation from './2-get_students_by_loc';

export default function updateStudentGradeByCity(students, city, newGrades) {
  const selectedStudents = getStudentsByLocation(students, city);

  const updatedStudents = selectedStudents.map((student) => {
    const matchingGrade = newGrades.find((grade) => grade.studentId === student.id);
    if (matchingGrade) {
      return {
        ...student,
        grade: matchingGrade.grade,
      };
    }
    return {
      ...student,
      grade: 'N/A',
    };
  });

  return updatedStudents;
}
