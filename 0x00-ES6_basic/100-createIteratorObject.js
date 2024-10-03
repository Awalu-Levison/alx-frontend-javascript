export default function createIteratorObject(report) {
  let allEmployees = [];
  for (const item of object.values(report.allEmployees)) {
    allEmployees = [
      ..allEmployees,
      ..item,
    ];
  }
  return allEmployees;
}
