function solution(n, computers) {
  const visited = Array(n).fill(false);
  let answer = 0;

  for (let i = 0; i < n; i++) {
    if (visited[i]) continue;
    dfs(i, computers, visited);
    answer += 1;
  }

  return answer;
}

function dfs(k, computers, visited) {
  visited[k] = true;

  for (let i = 0; i < computers[k].length; i++) {
    if (visited[i]) continue;
    if (computers[k][i] === 0) continue;
    dfs(i, computers, visited);
  }
}
