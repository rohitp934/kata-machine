export default function dfs(head: BinaryNode<number>, needle: number): boolean {
  if (head.value === needle) return true;
  if (needle < head.value && head.left) {
    return dfs(head.left, needle);
  } else if (needle > head.value && head.right) {
    return dfs(head.right, needle);
  }

  return false;
}
