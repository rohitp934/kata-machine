export default function post_order_search(head: BinaryNode<number>): number[] {
  const post_order_list: number[] = [];
  post_order(head, post_order_list);

  return post_order_list;
}



function post_order(head: BinaryNode<number>, post_order_list: number[]): void {
  if (!head) return;

  if (head.left) {
    post_order(head.left, post_order_list);
  }
  if (head.right) {
    post_order(head.right, post_order_list);
  }
  post_order_list.push(head.value);
}
