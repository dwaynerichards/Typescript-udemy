import { concurrently } from "concurrently";
import Sorterable from "./Sortable";

class Node {
  public next: Node | null = null;
  constructor(public val: number) {}
}

export class LinkedList extends Sorterable {
  public head: Node | null = null;
  constructor(val?: number) {
    super();
    if (val) this.add(val);
  }
  add(val: number) {
    const node = new Node(val);
    if (this.head === null) {
      this.head = node;
      return;
    }
    let tail: Node | null = this.head;
    while (tail.next) {
      //step thr until c = null
      //when curretn = null, prev's next should be node
      tail = tail.next;
      //init prev to curent
      //init current to curent's next
    }
    tail!.next = node;
  }
  get length(): number {
    let indices = 0;
    let current = this.head;
    while (current) {
      current = current.next;
      indices++;
    }
    return indices;
  }
  at(index: number): Node | null {
    if (index > this.length - 1) return null;
    // =====> tabulation
    //return this.tabulation[index].val
    //interate until index in 0, then return node's value, decrement index
    let current = this.head;
    let count = 0;
    while (index > count) {
      current = current!.next!;
      count++;
    }
    return current;
  }
  swap(leftIndex: number, rightIndex: number): void {
    //return nodes from each index
    let current = this.at(leftIndex);
    let next = this.at(rightIndex);
    if (leftIndex != 0) {
      let prev = this.at(leftIndex - 1);
      prev!.next = next;
    } else {
      this.head = next;
    }
    current!.next = next!.next;
    next!.next = current;
  }
  //left index is bigger, so move node at right index to left index's place
  //nodeat right index needs to become left index's (currents) prev's.next
  //save current, mutate prev.next to curreents's next
  //mutate current,nexts's next to current
  //mutate current.next.next to current
  //move left index to node at right index pallce
  compare(leftIndex: number, rightIndex: number): boolean {
    if (!this.at(leftIndex) || !(this.at(leftIndex) || !this.head)) {
      throw new Error("invalid funtion call");
    }
    return this.at(leftIndex)!.val > this.at(rightIndex)!.val;
  }
  print(index: number): void {
    console.log(this.at(index));
  }
}
