function solution(cap, n, deliveries, pickups) {
  return work(cap, deliveries, pickups);
}

function work(cap, deliveries, pickups) {
  let result = 0;
  let targets = [
    findLast((i) => i > 0, deliveries),
    findLast((i) => i > 0, pickups),
  ];

  while (targets[0] >= 0 || targets[1] >= 0) {
    let delivered = 0; // 배달한 개수
    let pickuped = 0; // 픽업한 개수

    // 배달
    for (let i = targets[0]; i >= 0; i--) {
      const toDeliver = Math.min(cap - delivered, deliveries[i]);
      deliveries[i] -= toDeliver;
      delivered += toDeliver;
      if (delivered === cap) break; // 이 코드 없으면 시간초과
    }

    // 픽업
    for (let i = targets[1]; i >= 0; i--) {
      const toPickup = Math.min(cap - pickuped, pickups[i]);
      pickups[i] -= toPickup;
      pickuped += toPickup;
      if (pickuped === cap) break; // 이 코드 없으면 시간초과
    }

    result += (Math.max(targets[0], targets[1]) + 1) * 2;
    targets = [
      findLast((i) => i > 0, deliveries, targets[0]),
      findLast((i) => i > 0, pickups, targets[1]),
    ];
  }

  return result;
}

// 프로그래머스 노드 버전이 낮아서 지원이 안되길래 직접 만들어서 씀
// offset 추가 (lastIdx)
function findLast(fn, arr, lastIdx) {
  for (let i = lastIdx ?? arr.length - 1; i >= 0; i--) {
    if (fn(arr[i])) return i;
  }
  return -1;
}
