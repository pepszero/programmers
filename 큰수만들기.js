function solution(number, k) {
  var answer = "";
  answer = removeNum(number, k);
  return answer.toString();
}

// num에서 가장 큰 숫자의 인덱스 반환
function findMaxIdx(num) {
  const nums = ["9", "8", "7", "6", "5", "4", "3", "2", "1", "0"];
  return nums.reduce((p, c) => (p !== -1 ? p : num.indexOf(c)), -1);
}

function removeNum(number, k) {
  let num = number;
  let head = "";
  let tail = "";

  while (k < num.length) {
    const idx = findMaxIdx(num);
    if (idx === -1) break;
    if (idx === 0) {
      head += num[0];
      num = num.slice(1);
      continue;
    }
    if (idx <= k) {
      num = num.slice(idx);
      k -= idx;
      continue;
    }
    if (idx > k) {
      tail = num.slice(idx) + tail;
      num = num.slice(0, idx);
      continue;
    }
  }
  return head + tail;
}
