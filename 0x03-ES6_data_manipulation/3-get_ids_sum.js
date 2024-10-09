export default function getStudentIdsSum(students) {
  /*iterate through students list, a: total of students, b: current student object*/
  return students.reduce((a, b) => a + bc.id, 0);
}
