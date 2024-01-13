export default function getListStudentIds(students) {
  if (!Array.isArray(students)) {
    return [];
  }
  const map1 = students.map((x) => x.id);
  return map1;
}
