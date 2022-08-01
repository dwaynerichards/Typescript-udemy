class ArrayOfNumbers {
  constructor(public collection: number[]) {}

  get(i: number): number {
    return this.collection[i];
  }
}

class ArrayOfStrings {
  constructor(public collection: string[]) {}

  get(i: number): string {
    return this.collection[i];
  }
}

class ArrayOfType<T> {
  constructor(public collection: T[]) {}

  get(i: number): T {
    return this.collection[i];
  }
}

const srrOfStrings = new ArrayOfType<string>(["w"]);

const string = srrOfStrings.get(0);
console.log(string);
