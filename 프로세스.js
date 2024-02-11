function solution(priorities, location) {
  return getOrder(priorities, location);
}

// js는 pq 자료구조를 제공하지 않음...
function getOrder(priorities, location) {
  let result = 0;
  let max = Math.max(...priorities);
  let i = 0;

  while (priorities[location] !== -1) {
    if (priorities[i] === max) {
      priorities[i] = -1;
      max = Math.max(...priorities);
      result += 1;
    }
    i = (i + 1) % priorities.length;
  }
  return result;
}
