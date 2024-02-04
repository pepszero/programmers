function solution(weights) {
  const seats = [2, 3, 4];
  let result = 0;

  const distinctWeights = [...new Set(weights).keys()];
  for (let i = 0; i < distinctWeights.length; i++) {
    for (let j = i + 1; j < distinctWeights.length; j++) {
      const [G, a, b] = getGab(distinctWeights[i], distinctWeights[j]);
      if (
        (seats.includes(a) && seats.includes(b)) ||
        (seats.includes(2 * a) && seats.includes(2 * b))
      ) {
        const n = weights.filter((w) => w === distinctWeights[i]).length;
        const m = weights.filter((w) => w === distinctWeights[j]).length;
        result += n * m;
      }
    }
  }

  // 같은 무게인경우
  for (let i = 0; i < distinctWeights.length; i++) {
    const weight = weights.filter((w) => w === distinctWeights[i]).length;
    result += (weight * (weight - 1)) / 2;
  }

  return result;
}

// 유클리드 호제법을 이용하여 [최대공약수, A/최대공약수, B/최대공약수] 구한다
function getGab(A, B) {
  let [bigger, smaller] = [Math.max(A, B), Math.min(A, B)];

  while (smaller > 0) {
    bigger = bigger % smaller;
    [smaller, bigger] = [bigger, smaller]; // swap
  }

  return [bigger, A / bigger, B / bigger];
}
