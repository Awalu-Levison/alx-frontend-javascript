export default function cleanSet(set, startString) {
  const mylist = [];

  if (
    typeof set !== 'object'
    || typeof startString !== 'string'
    || startString.length === 0
  ) {
    return '';
  }

  for (const item of set) {
    if (item && item.startsWith(startString)) {
      mylist.push(item.slice(startString.length));
    }
  }

  return mylist.join('-');
}
