export default function pre_order_search(head: BinaryNode<number>): number[] {
  const pre_order_list: number[] = [];
  pre_order(head, pre_order_list);
  return pre_order_list;
}

function pre_order(head: BinaryNode<number>, pre_order_list: number[]): void {
  if (!head) return;

  pre_order_list.push(head.value);

  if (head.left) {
    pre_order(head.left, pre_order_list);
  }
  if (head.right) {
    pre_order(head.right, pre_order_list);
  }
}
