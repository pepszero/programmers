function solution(s) {
  let answer = 0;

  // 홀수 펠린드롭
  for (let i = 0; i < s.length; i++) {
    let cnt = 1;
    for (let j = 1; j < s.length; j++) {
      if (i - j < 0 || i + j >= s.length) break;
      if (s[i - j] !== s[i + j]) break;
      cnt += 2;
    }
    answer = Math.max(answer, cnt);
  }

  // 짝수 펠린드롭
  for (let i = 0; i < s.length; i++) {
    let cnt = 0;
    for (let j = 1; j < s.length; j++) {
      if (i - j < 0 || i + j - 1 >= s.length) break;
      if (s[i - j] !== s[i + j - 1]) break;
      cnt += 2;
    }
    answer = Math.max(answer, cnt);
  }

  return answer;
}
