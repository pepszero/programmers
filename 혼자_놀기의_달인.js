function solution(cards) {
    const visited = Array(cards.length+1).fill(false);
    const cardsFromOne = [0, ...cards]; // 계산의 편의를 위해 카드 번호(1부터 시작)과 인덱스를 맞춰줌
    visited[0] = true;
    
    const groups = []; // 박스 그룹별 합
    for(let i = 1; i<cardsFromOne.length; i++) {
        if (visited[cardsFromOne[i]]) continue;
        groups.push(dfs(i, cardsFromOne, visited));
    }

    // 박스 2개의 곱 중 최대값 구하기
    let result = 0;
    for(let i = 0; i<groups.length; i++) {
        for(let j = i+1; j<groups.length; j++) {
            result = Math.max(result, groups[i] * groups[j])
        }
    }

    return result;
}

// 카드 번호는 1부터 시작
function dfs(idx, cards, visited) {
    if (visited[idx]) return 0;
    visited[idx] = true;
    return 1 + dfs(cards[idx], cards, visited);
}
