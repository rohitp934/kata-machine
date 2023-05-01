class Node<T> {
    value: T;
    next?: Node<T>;

    constructor(item: T) {
      this.value = item;
    }
}

export default class Stack<T> {
    public length: number;
    private head?: Node<T>;

    constructor() {
        this.head = undefined;
        this.length = 0;
    }

    push(item: T): void {
      const node = new Node(item);
      this.length++;
      if (!this.head) {
        this.head = node;
        return;
      }
      const head = this.head;
      this.head = node;
      this.head.next = head;
    }
    pop(): T | undefined {
        if (!this.head) {
            return undefined;
        }
        this.length--;
        const head = this.head;
        this.head = this.head.next;
        head.next = undefined;
        return head.value;
    }
    peek(): T | undefined {
        return this.head?.value;
    }
}
