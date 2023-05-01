class Node<T> {
    public value: T;
    public next: Node<T>;

    constructor(newValue: T) {
        this.value = newValue;
    }
}

export default class Queue<T> {
    public length: number;
    private head?: Node<T>;
    private tail?: Node<T>;

    constructor() {
        this.length = 0;
    }

    enqueue(item: T): void {
        const node = new Node(item);
        if (this.length === 0) {
            this.tail = node;
            this.head = this.tail;
        } else {
          this.tail!.next = node;
          this.tail = node;
        }
        this.length++;
    }
    deque(): T | undefined {
        if (this.length) {
            const headValue = this.head?.value;
            this.head = this.head?.next;
            this.length--;
            return headValue;
        }
        return undefined;
    }
    peek(): T | undefined {
        return this.head?.value;
    }
}
