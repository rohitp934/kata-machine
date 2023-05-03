export default function pre_order_search(head: BinaryNode<number>): number[] {
  const pre_order_list: number[] = [];
  pre_order(head, pre_order_list);
  return pre_order_list;
}

function pre_order(curr: BinaryNode<number>, path: number[]): void {
  if (!curr) return;

  path.push(curr.value);

  if (curr.left) {
    pre_order(curr.left, path);
  }
  if (curr.right) {
    pre_order(curr.right, path);
  }
}
