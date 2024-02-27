function solution(money) {
  return Math.max(steal(money, true), steal(money, false));
}

function steal(money, stealFirst) {
  // cache[i][0]: i번째를 안 넣었을때 0~i까지 합중 최대, cache[i][1]:i번째를 넣었을때 0~i 합중 최대
  const cache = Array.from(Array(money.length), () => [-1, -1]);
  let result = -1;
  cache[0][0] = stealFirst ? -1 : 0;
  cache[0][1] = stealFirst ? money[0] : -1;

  for (let i = 1; i < money.length; i++) {
    cache[i][0] = Math.max(cache[i - 1][0], cache[i - 1][1]);
    cache[i][1] = cache[i - 1][0] + money[i];
  }

  if (stealFirst) {
    cache[money.length - 1][1] -= money[money.length - 1];
  }

  result = Math.max(...cache[money.length - 1]);
  return result;
}
