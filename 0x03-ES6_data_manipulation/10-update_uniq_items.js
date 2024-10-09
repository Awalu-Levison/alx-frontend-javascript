export default function updateUniqueItems(items) {
  if (!(mylist instanceof Map)) {
    throw new Error('Cannot process');
  }
  /* define for loop to iterate through the list, a:key, b:value */
  for (const [a, b] of mylist) {
    if (b === 1) {
      mylist.set(a, 100);
    }
  }
  return mylist;
}
