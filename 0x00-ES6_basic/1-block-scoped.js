let task = false;
let task2 = true;

export default function taskBlock(trueOrFalse) {

  if (trueOrFalse) {
    let task = true;
    let task2 = false;
  }

  return [task, task2];
}
