function solution(nodeinfo) {
  const tree = buildTree(nodeinfo);
  const pre = preorder(tree);
  const post = postorder(tree);

  const answer = [pre, post];
  return answer;
}

function Node(x, y, num, left, right) {
  this.x = x;
  this.y = y;
  this.num = num;
  this.left = left || null;
  this.right = right || null;
}

function buildTree(nodeinfo) {
  // 노드를 추가하는 순서에 따라 트리 모양이 달라지므로, 문제 조건과 동일하게 맞추기 위해 y좌표 내림차순 정렬함.
  const dummy = new Node(-1, -1, -1);
  const data = nodeinfo
    .map(([x, y], i) => new Node(x, y, i + 1))
    .sort((a, b) => b.y - a.y);
  data.forEach((node) => add(node, dummy));

  return dummy.right;
}

function add(node, root) {
  if (!root) return node;

  if (node.x < root.x) root.left = add(node, root.left);
  if (node.x > root.x) root.right = add(node, root.right);
  // if (node.x === root.x) {} // 문제 조건상 동일한 x는 없음

  return root;
}

// tree의 idx번째 노드부터 전위순회
function preorder(root) {
  if (!root) return [];

  return [root.num, ...preorder(root.left), ...preorder(root.right)];
}

// tree의 idx번째 노드부터 후위순회
function postorder(root) {
  if (!root) return [];

  return [...postorder(root.left), ...postorder(root.right), root.num];
}
