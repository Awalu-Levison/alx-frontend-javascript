export default function createInt8TypedArray(length, position, value) {
  const myarray = new ArrayBuffer(length);
  const val1 = new DataView(myarray);

  try {
    val1.setInt8(position, value);
  } catch (e) {
    throw Error('Position outside range');
  }
  return val1;
}
