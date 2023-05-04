export default function compare(
  a: BinaryNode<number> | null,
  b: BinaryNode<number> | null,
): boolean {
  if (!a && !b) return true;
  if (!a || !b) return false;
  // We check for inequality because we know that the trees can never be the same if they are unequal.
  // If they are equal, that means the nodes at this point are equal, it doesn't mean the entire tree is equal.
  //! Something to keep in mind definitely.
  //? Don't forget this base case, if this isn't there, then any trees with the same SHAPE, will be returned as equal.
  if (a.value !== b.value) return true;

  return compare(a.left, b.left) && compare(a.right, b.right);
}
