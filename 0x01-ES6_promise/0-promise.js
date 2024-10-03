export default function getResponseFromAPI() {
  const done = true;
  return new Promise((resolve, reject) => {
    if (done) {
      resolve();
    } else {
      reject();
    }
  });

}
