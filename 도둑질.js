function solution(money) {
  return steal(money);
}

function steal(money) {
  // cache[0]: 짝수번째 집까지 진행한 최댓값, cache[1]: 홀수번째 집까지 진행한 최댓값
  const cache = [0, money[1]]; // 첫번째집을 안 턴 경우, 0번째 집까지 진행 최댓값=0, 1번째집까지 진행 최댓값=money[1]
  const cache2 = [money[0], money[0]]; // 첫번째집을 턴 경우. 0번째 집까지 진행 최댓값=money[0], 1번째 집까지 진행 최댓값=money[0]

  for (let i = 2; i < money.length; i++) {
    cache[i % 2] = Math.max(cache[i % 2] + money[i], cache[(i + 1) % 2]);
  }

  for (let i = 2; i < money.length - 1; i++) {
    cache2[i % 2] = Math.max(cache2[i % 2] + money[i], cache2[(i + 1) % 2]);
  }

  let result = -1;
  result = Math.max(cache[0], cache[1]);
  result = Math.max(result, cache2[0]);
  result = Math.max(result, cache2[1]);
  return result;
}
