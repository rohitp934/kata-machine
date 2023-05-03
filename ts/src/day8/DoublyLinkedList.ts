export class Node<T> {
    value: T;
    prev?: Node<T>;
    next?: Node<T>;

    constructor(item: T) {
      this.value = item;
    }
}

export default class DoublyLinkedList<T> {
    public length: number;
    private head?: Node<T>;
    private tail?: Node<T>;

    constructor() {
        this.length = 0;
        this.head = undefined;
        this.tail = undefined;
    }

    prepend(item: T): void {
      const node = new Node(item);
      this.length++;
      if (!this.head) {
        this.head = node;
        this.tail = node;
        return;
      }

      node.next = this.head;
      this.head.prev = node;
      this.head = node;
    }

    insertAt(item: T, idx: number): void {
      if (idx > this.length) {
        throw new Error("You are trying to insert into an illegal index.");
      } else if (idx === this.length) {
        this.append(item);
        return;
      } else if (idx === 0) {
        this.prepend(item);
        return;
      }
      const node = new Node(item);
      let curr = this.head;
      let currIndex = 0;
      while (currIndex < idx && curr) {
        currIndex++;
        curr = curr.next;
      }
      curr = curr as Node<T>;
      node.next = curr.next;
      if (node.next) {
        node.next.prev = node;
      }
      node.prev = curr;
      curr.next = node;
    }
    append(item: T): void {
      const node = new Node(item);
      this.length++;
      if (!this.tail) {
        this.head = node;
        this.tail = node;
        return;
      }
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    }
    remove(item: T): T | undefined {
      if (this.length === 0) {
        this.head = this.tail = undefined;
        return;
      }

      let curr = this.head;
      for (let i = 0; curr && i < this.length; i++) {
        if (curr.value === item) {
          break;
        }
        curr = curr.next;
      }

      if (!curr) return;
      return this.removeNode(curr);
    }
    get(idx: number): T | undefined {
      return this.getAt(idx)?.value;
    }
    removeAt(idx: number): T | undefined {
      const node = this.getAt(idx);

      if (!node) {
        return;
      }

      return this.removeNode(node);
    }

    private getAt(idx: number): Node<T> | undefined {
      if (idx === this.length - 1) return this.tail;
      let curr = this.head;
      for (let i = 0; curr && i < idx; i++) {
        curr = curr.next;
      }
      return curr;
    }

    private removeNode(node: Node<T>): T | undefined {
      this.length--;
      if (this.length === 0) {
        const out = this.head?.value;
        this.head = this.tail = undefined;
        return out;
      }

      if (node.prev) {
        node.prev.next = node.next;
      }
      if (node.next) { 
        node.next.prev = node.prev;
      }

      if (node === this.head) {
        this.head = node.next;
      }
      if (node === this.tail) {
        this.tail = node.prev;
      }
      node.next = node.prev = undefined;
      return node.value;
    }
}
