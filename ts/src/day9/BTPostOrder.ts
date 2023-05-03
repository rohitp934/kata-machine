export default function post_order_search(head: BinaryNode<number>): number[] {
  const post_order_list: number[] = [];
  post_order(head, post_order_list);

  return post_order_list;
}



function post_order(curr: BinaryNode<number>, path: number[]): void {
  if (!curr) return;

  if (curr.left) {
    post_order(curr.left, path);
  }
  if (curr.right) {
    post_order(curr.right, path);
  }
  path.push(curr.value);
}
