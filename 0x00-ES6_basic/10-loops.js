export default function appendToEachArrayValue(array, appendString) {
  const myarr = [];
  for (const idx of array) {
    const value = idx;
    myarr.push(appendString + value);
  }

  return myarr;
}
