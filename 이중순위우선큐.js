function solution(operations) {
  const result = [];
  // const m = 0, M = 0; // m: 최소값 M: 최대값
  for (let i = 0; i < operations.length; i++) {
    const [oper, val] = operations[i].split(" ");
    if (oper === "I") {
      result.push(parseInt(val));
      result.sort((a, b) => a - b); // 오름차순 정렬
    } else {
      if (result.length === 0) continue;
      if (val == 1) {
        // 최대값 삭제
        result.pop();
      } else {
        // 최솟값 삭제
        result.shift();
      }
    }
  }

  return result.length === 0 ? [0, 0] : [result[result.length - 1], result[0]];
}
