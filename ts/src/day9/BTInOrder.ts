export default function in_order_search(head: BinaryNode<number>): number[] {
  const in_order_list: number[] = [];
  in_order(head, in_order_list);

  return in_order_list;
}

function in_order(curr: BinaryNode<number>, path: number[]): void {
  if (!curr) return;

  if (curr.left) {
    in_order(curr.left, path);
  }
  path.push(curr.value);
  if (curr.right) {
    in_order(curr.right, path);
  }
}
