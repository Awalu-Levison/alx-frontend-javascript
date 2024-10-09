export default function getStudentIdsSum(students) {
  /* iterate through students list, a: total of students, b: current student object */
  return students.reduce((a, b) => a + b.id, 0);
}
