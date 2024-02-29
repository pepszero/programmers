function solution(number, k) {
  var answer = "";
  answer = removeNum(number, k);
  return answer.toString();
}

function removeNum(number, k) {
  if (k === number.length) {
    return "";
  }

  const MAX = Math.max(...number);
  const idx = number.indexOf(MAX);

  if (idx === 0) {
    // 맨 앞에 제일 큰수면: 제일 큰수를 답에 포함
    return number[0] + removeNum(number.slice(1), k);
  }
  if (idx <= k) {
    // 제일 큰수가 맨 앞으로 오도록 자름
    return removeNum(number.slice(idx), k - idx);
  }
  if (idx > k) {
    // 제일 큰수~끝까지는 유지
    return removeNum(number.slice(0, idx), k) + number.slice(idx);
  }
}
