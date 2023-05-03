export default function in_order_search(head: BinaryNode<number>): number[] {
  const in_order_list: number[] = [];
  in_order(head, in_order_list);

  return in_order_list;
}


function in_order(head: BinaryNode<number>, in_order_list: number[]): void {
  if (!head) return;

  if (head.left) {
    in_order(head.left, in_order_list);
  }
  in_order_list.push(head.value);
  if (head.right) {
    in_order(head.right, in_order_list);
  }
}
