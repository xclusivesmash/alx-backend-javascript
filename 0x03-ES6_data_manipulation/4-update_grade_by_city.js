/* update grade by city */
export default function updateStudentGradeByCity(students, city, grades) {
  const defaultGrade = { grade: 'N/A' };
  /* input check */
  if (!(students instanceof Array)) {
    return [];
  }
  return students
    .filter((student) => student.location === city)
    .map((student) => ({
      id: student.id,
      firstName: student.firstName,
      location: student.location,
      grade: (grades
        .filter((grade) => grade.studentId === student.id)
        .pop() || defaultGrade).grade,
    }));
}
