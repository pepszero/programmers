function solution(n, edge) {
  const edges = Array(n)
    .fill(0)
    .map(() => []);

  for (let i = 0; i < edge.length; i++) {
    const [a, b] = edge[i];
    edges[a - 1].push(b - 1);
    edges[b - 1].push(a - 1);
  }

  return bfs(n, edges);
}

function bfs(n, edges) {
  const queue = []; // [dist, node]
  const dist = Array(n).fill(Infinity);
  let p = 0;
  queue.push([0, 0]);

  while (queue.length > p) {
    const [d, cur] = queue[p++];
    if (dist[cur] <= d) continue;
    dist[cur] = d;
    for (let i = 0; i < edges[cur].length; i++) {
      if (dist[edges[cur][i]] !== Infinity) continue;
      queue.push([d + 1, edges[cur][i]]);
    }
  }

  const MAX = Math.max(...dist);
  return dist.filter((i) => i === MAX).length;
}
