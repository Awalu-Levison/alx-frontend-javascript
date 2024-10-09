export default function getStudentsByLocation(students, city) {
  return students.filter((iterator) => iterator.location === city);
}
