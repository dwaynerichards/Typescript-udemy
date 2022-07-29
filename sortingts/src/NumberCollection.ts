import Sorterable from "./Sortable";

export default class NumberCollection extends Sorterable {
  constructor(public data: number[]) {
    super();
  }
  get length(): number {
    return this.data.length;
  }
  swap(leftIndex: number, rightIndex: number): void {
    const { data } = this;
    [data[leftIndex], data[rightIndex]] = [data[rightIndex], data[leftIndex]];
  }
  compare(leftIndex: number, rightIndex: number): boolean {
    const { data } = this;
    return data[leftIndex] > data[rightIndex];
  }
}
