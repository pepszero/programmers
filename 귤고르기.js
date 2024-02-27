function solution(k, tangerine) {
  const guel = {};
  for (let i = 0; i <= tangerine.length; i++) {
    guel[tangerine[i]] = (guel[tangerine[i]] ?? 0) + 1;
  }

  return Object.values(guel)
    .sort((a, b) => b - a)
    .reduce((p, c) => {
      k -= c;
      return k > 0 ? p + 1 : p;
    }, 1);
}
