class Node<T> {
  value: T;
  next?: Node<T>;
  prev?: Node<T>;

  constructor(item: T) {
    this.value = item;
  }
}

export default class LRU<K, V> {
  private length: number;
  private cache: Map<K, Node<V>>;
  // This is needed because we won't really have the key for tail.
  private reverseLookup: Map<Node<V>, K>;
  private head?: Node<V>;
  private tail?: Node<V>;
  constructor(len: number) {
    this.length = len;
    this.cache = new Map();
    this.reverseLookup = new Map();
  }

  update(key: K, value: V): void {
    // Get the value if it exists (while updating the cache).
    const node = this.get(key);

    // If key wasn't found, insert at the head.
    if (!node) {
      const temp = new Node(value);
      this.prepend(temp);
      this.cache.set(key, temp);
      this.reverseLookup.set(temp, key);
      // Check if length of the cache exceeds capacity, if so, evict LRU val.
      this.trimCache();
      return;
    }

    // If the node was found, just update the value as it was already moved.
    this.head!.value = value;
  }
  get(key: K): V | undefined {
    const node = this.cache.get(key);
    // If node is not found, return undefined.
    if (!node) return undefined;
    // Skipping node and removing it from current position.
    this.detach(node);
    this.prepend(node);
    // Setting node as new head.
    return node.value;
  }

  private detach(node: Node<V>) {
    if (node.prev) node.prev.next = node.next;
    if (node.next) node.next.prev = node.prev;
    if (node == this.head) this.head = node.next;
    if (node == this.tail) this.tail = node.prev;
    node.next = undefined;
    node.prev = undefined;
  }

  private prepend(node: Node<V>) {
    if (!this.head) {
      this.head = this.tail = node;
      return;
    }
    node.next = this.head;
    this.head.prev = node;
    this.head = node;
  }

  private trimCache() {
    if (this.cache.size <= this.length) return;
    const tail = this.tail!;
    this.detach(tail);
    const tailKey = this.reverseLookup.get(tail);
    this.cache.delete(tailKey!);
    this.reverseLookup.delete(tail);
  }
}
