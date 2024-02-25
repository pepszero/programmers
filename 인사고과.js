function solution(scores) {
  return getGrade(scores);
}
function getGrade(scores) {
  let employees = scores.map((v) => ({
    work: v[0], // 근무평가
    peer: v[1], // 동료평가
    sum: v[0] + v[1], // 합
    isExcluded: false,
  })); // 근무평가, 동료평가 합, 제외여부

  const me = employees[0];
  employees = employees
    .filter((v) => v.sum >= me.sum)
    .sort((a, b) => a.sum - b.sum); // 점수 합의 오름차순으로 정렬
  const maxScore = employees[employees.length - 1].sum;

  for (let i = 0; i < employees.length; i++) {
    if (employees[i].sum === maxScore) break;
    for (let j = employees.length - 1; j > i; j--) {
      if (employees[i].work >= employees[j].work) continue;
      if (employees[i].peer >= employees[j].peer) continue;
      employees[i].isExcluded = true;
      break;
    }
  }

  return me.isExcluded
    ? -1
    : employees.filter((v) => !v.isExcluded && v.sum > me.sum).length + 1;
}
