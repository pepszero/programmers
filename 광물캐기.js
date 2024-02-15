function solution(picks, minerals) {
  return dig(0, picks, minerals);
}

const hard = [
  [1, 1, 1], // 다이아
  [5, 1, 1], // 철
  [25, 5, 1], // 돌
];

const getHard = (pick, mineral) => {
  const types = ["diamond", "iron", "stone"];
  return hard[pick][types.indexOf(mineral)];
};

function dig(m, picks, minerals) {
  if (m >= minerals.length) return 0; // 모든 미네랄 소진시 종료
  if (picks.every((p) => p === 0)) return 0; // 모든 곡괭이 소진시 종료

  let result = 987654321;

  for (let i = 0; i < picks.length; i++) {
    if (picks[i] === 0) continue;

    const curHard = minerals
      .slice(m, m + 5)
      .reduce((p, c) => p + getHard(i, c), 0);

    picks[i] -= 1;
    result = Math.min(result, dig(m + 5, picks, minerals) + curHard);
    picks[i] += 1;
  }

  return result;
}
