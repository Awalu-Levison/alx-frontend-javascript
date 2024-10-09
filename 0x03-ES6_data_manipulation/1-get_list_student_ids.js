export default function getListStudentIds(myarray) {
  if (!Array.isArray(myarray)) {
    return [];
  }
  return myarray.map((iterator) => iterator.id);
}
getListStudentIds();
