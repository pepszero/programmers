function solution(k, d) {
  var answer = 0;
  for (let i = 0; i <= d; i += k) {
    const rest = Math.sqrt(d * d - i * i);
    answer += Math.floor(rest / k) + 1;
  }

  return answer;
}
