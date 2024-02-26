function solution(money) {
  var answer = 0;
  const cache = Array.from(Array(money.length), () =>
    Array.from(Array(2), () => [-1, -1])
  ); // cache[i][0]: i번째 집을 털지 않았을때 i번째~그 이후의 집을 돌면서 얻을 수 있는 최대 값, cache[i][1]: i번째 집을 털었을때 i번째~그 이후의 집을 돌면서 얻을 수 있는 최대 값. 마지막꺼는 0번쨰에 안(0) 훔쳤다(1)

  fillCache(0, money, 0, cache, 0);
  fillCache(0, money, 1, cache, 1);

  for (let i = 0; i < cache.length; i++) {
    for (let j = 0; j < cache[i].length; j++) {
      answer = Math.max(answer, cache[i][j][0], cache[i][j][1]);
    }
  }
  return answer;
}

function fillCache(house, money, curTake, cache, stoleFirst) {
  if (house === money.length) return 0;
  if (cache[house][curTake][stoleFirst] !== -1)
    return cache[house][curTake][stoleFirst];

  let take = 0;
  let notTake = 0;
  take = curTake
    ? money[house] + fillCache(house + 1, money, 0, cache, stoleFirst)
    : 0;
  notTake = curTake
    ? 0
    : Math.max(
        fillCache(house + 1, money, 0, cache, stoleFirst),
        fillCache(house + 1, money, 1, cache, stoleFirst)
      );

  if (house === money.length - 1 && stoleFirst) {
    take = 0;
  }

  cache[house][curTake][stoleFirst] = curTake ? take : notTake;
  return cache[house][curTake][stoleFirst];
}
