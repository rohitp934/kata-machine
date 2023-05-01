export default function bs_list(haystack: number[], needle: number): boolean {
  let low = 0, high = haystack.length;
  do {
    const middle = Math.floor(low + (high - low) / 2);
    const val = haystack[middle];

    if (val === needle) {
      return true;
    } else if (needle > val) {
      low = middle + 1;
    } else {
      high = middle;
    }
  } while (low < high);

  return false;
}