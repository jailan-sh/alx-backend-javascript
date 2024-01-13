import getStudentsByLocation from './2-get_students_by_loc';

export default function updateStudentGradeByCity(students, city, newGrades) {
  const selectedStudents = getStudentsByLocation(students, city);

  const updatedStudents = selectedStudents.map((student) => {
    const matchingGrade = newGrades.filter((grade) => grade.studentId === student.id);

    if (matchingGrade.length > 0) {
      return {
        ...student,
        grade: matchingGrade[0].grade,
      };
    }
    return {
      ...student,
      grade: 'N/A',
    };
  });

  return updatedStudents;
}
