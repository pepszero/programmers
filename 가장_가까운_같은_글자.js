function solution(s) {
  const answer = Array.from(s).fill(-1);
  for (let i = 1; i < s.length; i++) {
    const lastIdx = s.lastIndexOf(s[i], i - 1);
    answer[i] = lastIdx === -1 ? -1 : i - lastIdx;
  }

  return answer;
}
