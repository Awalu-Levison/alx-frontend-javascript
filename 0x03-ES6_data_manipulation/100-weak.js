export const weakMap = new WeakMap();

export function queryAPI(endpoint) {
  let tasks = weakMap.get(endpoint) || 0;

  tasks += 1;

  weakMap.set(endpoint, tasks);

  if (tasks >= 5) {
    throw Error('Endpoint load is high');
  }

  return tasks;
}
