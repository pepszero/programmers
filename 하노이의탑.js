function solution(n) {
    const answer = hanoi(n, 1, 3);
    return answer;
}

// 가장 큰 원판을 (i->j)로 옮기고자 할때, 다른 원판을 임시로 쌓아둘 기둥
const tmpTo = [
    [-1, -1, -1, -1],
    [-1, -1, 3, 2], // from: 1
    [-1, 3, -1, 1],   // from: 2
    [-1, 2, 1, -1],   // from: 3
]

function hanoi(n, from, to) {
    if (n === 1) return [[from, to]];
    const result = [];
    result.push(...hanoi(n - 1, from, tmpTo[from][to])); // 큰 원판을 제외한 나머지를 임시 기둥에 쌓음
    result.push(...hanoi(1, from, to)); // 가장 큰 원판을 목표하는 기둥으로 이동
    result.push(...hanoi(n - 1, tmpTo[from][to], to)); // 큰 원판을 제외한 나머지를 임시 기둥에서 목표 기둥으로 쌓음
    return result;
}
