export default function updateUniqueItems(items) {
  if (!(items instanceof Map)) {
    throw new Error('Cannot process');
  }
  /* define for loop to iterate through the list, a:key, b:value */
  for (const [a, b] of items) {
    if (b === 1) {
      items.set(a, 100);
    }
  }
  return items;
}
