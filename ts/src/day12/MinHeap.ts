export default class MinHeap {
  public length: number;
  private q: number[];
  constructor() {
    this.length = 0;
    this.q = [];
  }

  insert(value: number): void {
    this.q.push(value);
    this.heapifyUp(this.length);
    this.length++;
  }
  delete(): number {
    if (!this.q.length) {
      throw new Error("No elements in the heap.")
    }
    const top = this.q[0];
    this.length--;
    this.q[0] = this.q.pop() as number;
    this.heapifyDown(0);
    return top;
  }

  private parent(i: number): number {
    return Math.floor((i - 1) / 2);
  }

  private leftChild(i: number): number {
    return 2 * i + 1;
  }

  private rightChild(i: number): number {
    return 2 * i + 2;
  }

  private heapifyDown(i: number): void {
    const l = this.leftChild(i);
    const r = this.rightChild(i);

    if (i >= this.length || l >= this.length) {
      return;
    }

    const lVal = this.q[l];
    const rVal = this.q[r];
    const val = this.q[i];

    if (lVal > rVal && val > rVal) {
      this.q[r] = val;
      this.q[i] = rVal;
      return this.heapifyDown(r);
    }

    if (rVal > lVal && val > lVal) {
      this.q[l] = val;
      this.q[i] = lVal;
      return this.heapifyDown(l);
    }
  }

  private heapifyUp(i: number): void {
    if (i == 0) {
      return;
    }

    const p = this.parent(i);
    const pVal = this.q[p];
    const val = this.q[i];

    if (pVal > val) {
      this.q[p] = val;
      this.q[i] = pVal;
      this.heapifyUp(p);
    }
  }
}
