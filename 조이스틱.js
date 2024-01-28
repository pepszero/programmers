// https://school.programmers.co.kr/learn/courses/30/lessons/42860

const INF = 987654321;

function solution(name) {
  // i번째 인덱스의 알파벳을 만드는데 걸리는 횟수 = 커서를 해당 자리까지 이동하는 횟수 + A에서 해당 알파벳으로 변경하는 횟수
  // 따라서 전체 알파벳을 만드는 횟수 = i:[0,name.length)까지 알파벳 생성하는데 걸리는 횟수 합
  let moveCount = 0,
    alphaCount = 0;

  // A에서 다른 알파벳으로 변경하는 최소 횟수 구하기
  const getAlphaDistance = (char) =>
    Math.min(
      char.charCodeAt(0) - "A".charCodeAt(0),
      "Z".charCodeAt(0) - char.charCodeAt(0) + 1
    );
  for (let i = 0; i < name.length; i++) {
    alphaCount += getAlphaDistance(name[i]);
  }

  // 커서를 이동하는 최소 횟수 구하기

  // 1.toRight[i]: 오른쪽으로만 이동하여 인덱스 i까지 가는데 걸리는 거리
  const toRight = Array(name.length)
    .fill(0)
    .map((v, i) => (name[i] === "A" ? -1 : i));
  // 2. toLeft[i]: 왼쪽으로만 이동하여 인덱스 i까지 가는데 걸리는 거리
  const toLeft = Array(name.length)
    .fill(0)
    .map((v, i) => (name[i] === "A" ? -1 : name.length - i));
  toRight[0] = toLeft[0] = 0; // 시작지점은 거리가 0

  // 3. toRightAndBack(i): 오른쪽으로 i까지 간 뒤에 다시 왼쪽으로 돌아가서 'A'가 아닌 자리까지 가는 거리
  const toRightAndBack = (idx) => {
    // idx < name.length 일때만 고려함
    if (name[idx] === "A") return INF;
    const k = name
      .slice(idx + 1)
      .split("")
      .findIndex((i) => i !== "A");
    return toRight[idx] + toRight[idx] + (k === -1 ? 0 : toLeft[idx + 1 + k]);
  };
  // 4. toLeftAndBack(i): 왼쪽으로 i까지 간 뒤에 다시 오른쪽으로 돌아가서 'A'가 아닌 자리까지 가는 거리
  const toLeftAndBack = (idx) => {
    // idx > 0 일때만 고려함
    if (name[idx] === "A") return INF;
    const k = name
      .slice(0, idx)
      .split("")
      .reverse()
      .findIndex((i) => i !== "A");
    return toLeft[idx] + toLeft[idx] + (k === -1 ? 0 : toRight[idx - 1 - k]);
  };

  // 커서가 모든 자리에 도착하는 최소 횟수 구하기
  moveCount = Math.min(
    Math.max(...toRight.filter((i) => i > 0)),
    Math.max(...toLeft.filter((i) => i > 0))
  );
  for (let i = 1; i < name.length; i++) {
    moveCount = Math.min(moveCount, toRightAndBack(i));
    moveCount = Math.min(moveCount, toLeftAndBack(i));
  }

  return alphaCount + (moveCount === -Infinity ? 0 : moveCount);
}
