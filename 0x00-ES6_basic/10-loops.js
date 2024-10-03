export default function appendToEachArrayValue(array, appendString) {
  const my_arr = [];
  for (const idx of array) {
    const value = idx;
    arr.push(appendString + value);
  }

  return my_arr;
}
