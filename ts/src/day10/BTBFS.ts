export default function bfs(head: BinaryNode<number>, needle: number): boolean {
  const queue: BinaryNode<number>[] = [head];
  if (!head) return false;

  while (queue.length) {
    const curr = queue.shift();
    if (!curr) break;
    if (curr.value === needle) return true;

    if (curr.left) {
      queue.push(curr.left);
    }
    if (curr.right) {
      queue.push(curr.right);
    }
  }
  return false;
}
