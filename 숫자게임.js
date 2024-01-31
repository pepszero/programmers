function solution(A, B) {
  A.sort((a, b) => (a < b ? -1 : a === b ? 0 : 1));
  B.sort((a, b) => (a < b ? -1 : a === b ? 0 : 1));
  //   return game(A, B, 0, 0);
  return game2(A, B, 0, 0);
}

// 재귀로 돌리면 콜스택 초과 (Maximum callstack error)
function game(a, b, p, q) {
  if (p === a.length || q === b.length) return 0;

  let result = 0;
  for (let i = q; i < b.length; i++) {
    if (a[p] >= b[i]) continue;
    result = Math.max(result, 1 + game(a, b, p + 1, i + 1));
    break;
  }
  return result;
}

// 최대 승점을 구하는 방법 가설
// 가설 1. 오름차순으로 정렬 후 a[i]와 b[i]를 순서대로 매칭하면 최대 승점이 나올 것이다. 반례: [3,4,8],[1,4,7]
// 가설 2. 내림차순으로 정렬 후 a[i]와 b[i]를 순서대로 매칭하면 최대 승점이 나올 것이다. 반례: [10,3,2],[8,2,1]
// 가설 3. a[i] <= b[j]인 모든 b[j]를 a[i]에 매칭하면 최대 승점이 나올 것이다. 시간초과
// 가설 4. a[i] < b[j]를 만족하는 모든 b[j]중에서 가장 작은 b[j]와 a[i]만을 매칭하면 최대 승점이 나올 것이다. (참)
// 가설 4-1 a[i] <= b[j]를 만족하는 b[j]중에 가장 작은 b[j]와 a[i]를 매칭하면 최대 승점이 나올 것이다 (반례: [8,8,9,10], [8,9,9,10])
// 가설 4-2. a[i] < b[j]를 만족하는 b[j]를 모두 a[i]와 매칭해봐야 최대 승점이 나올 것이다. (반례: a1 < a2, b1<b2인 a,b가 존재하고, a1 < b1, a1 < b2 를 만족한다면 (a1, b1) 만족 개수 >= (a1,b2)로 만족하는 개수이므로 (a1,b1)만 확인해도 된다.)
function game2(a, b, p, q) {
  let result = 0;
  while (p < a.length && q < b.length) {
    if (a[p] >= b[q]) {
      q += 1;
      continue;
    }
    result += 1;
    p += 1;
    q += 1;
  }

  return result;
}
