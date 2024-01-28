// https://school.programmers.co.kr/learn/courses/30/lessons/12927

function solution(n, works) {
  // a^2 + b^2 >= 2ab이고, a==b일때 a^2 + b^2의 최소값이다.
  // 본 문제는 각 works의 요소의 제곱의 합의 최소값을 찾는 것이므로
  // 각 요소의 크기를 최대한 동일하게 맞추었을때가 정답이다.

  while (n > 0 && works[0] > 0) {
    // 내림차순 정렬하여 최대값이 아닌 수 중 가장 큰 수의 인덱스를 찾는다.
    works = works.sort((a, b) => (a < b ? 1 : a > b ? -1 : 0));

    const idx = works.findIndex((i) => i < works[0]); // 최대값이 아닌 숫자 중 가장 큰 수의 인덱스
    const diff = idx === -1 ? works[0] : Math.min(n, works[0] - works[idx]); // 최대값과 그 다음 최대값간의 차
    const length = idx === -1 ? works.length : idx; // works요소 중 최대값의 개수
    const subPerWork = Number.parseInt(diff / length); // 최대값에서 뺄 일의 양

    if (subPerWork === 0) {
      // 동일하게 값을 뺄 만큼 n이 남지 않은 경우
      for (let i = 0; i < length; i++) {
        works[i] -= 1;
        n -= 1;
        if (n === 0) break;
      }
    } else {
      // 동일한 크기만큼 works에서 값을 뺀다
      for (let i = 0; i < length; i++) {
        works[i] -= subPerWork;
        n -= subPerWork;
      }
    }
  }

  // 각 요소의 제곱의 합을 구한다.
  return works.reduce((p, c) => p + c * c, 0);
}
