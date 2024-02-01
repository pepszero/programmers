function solution(triangle) {
  const cache = Array(triangle.length)
    .fill(0)
    .map((i) => Array(triangle.length).fill(-1));
  //   return tri(0, 0, triangle, cache);
  return tri2(triangle, cache);
}

// 재귀 - 시간초과
function tri(i, j, triangle, cache) {
  if (i === triangle.length) return 0;
  if (cache[i][j] > -1) return cache[i][j];

  const result =
    triangle[i][j] +
    Math.max(
      tri(i + 1, Math.max(0, j), triangle, cache),
      tri(i + 1, Math.min(j + 1, triangle[i].length), triangle, cache)
    );

  cache[i][j] = result;
  return result;
}

function tri2(triangle, cache) {
  for (let i = 0; i < triangle.length; i++) {
    for (let j = 0; j < triangle[i].length; j++) {
      const left = i === 0 || j === 0 ? 0 : cache[i - 1][j - 1];
      const right =
        i === 0 || j === triangle[i].length - 1 ? 0 : cache[i - 1][j];
      cache[i][j] = triangle[i][j] + Math.max(left, right);
    }
  }

  return Math.max(...cache[triangle.length - 1]);
}
