import Sorterable from "./Sortable";

export class CharacterCollection extends Sorterable {
  constructor(public data: string) {
    super();
  }
  get length(): number {
    return this.data.length;
  }
  compare(leftIndex: number, rightIndex: number): boolean {
    let data = this.data.toLocaleLowerCase();
    return data[leftIndex] > data[rightIndex];
  }
  swap(leftIndex: number, rightIndex: number): void {
    const arr = this.data.split("");
    [arr[leftIndex], arr[rightIndex]] = [arr[rightIndex], arr[leftIndex]];
    this.data = arr.join("");
  }
}
