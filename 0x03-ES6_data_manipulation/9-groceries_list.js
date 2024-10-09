export default function groceriesList() {
  /* Create am instance object */
  const mylist = new Map();

  /* Set up the item list */
  mylist.set('Apples', 10);
  mylist.set('Tomatoes', 10);
  mylist.set('Pasta', 1);
  mylist.set('Rice', 1);
  mylist.set('Banana', 5);

  return mylist;
}
