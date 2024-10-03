export default function getResponseFromAPI() {
  const done = true;
  return new promise((resolve, reject) => {
    if (done) {
      resolve();
    } else {
      reject();
    }
  });

}
