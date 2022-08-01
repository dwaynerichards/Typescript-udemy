function printStrings(arr: string[]): void {
  arr.forEach((e) => console.log(e));
}

function printNums(arr: number[]): void {
  arr.forEach((e) => console.log(e));
}

function printType<T>(arr: T[]): void {
  arr.forEach((e) => console.log(e));
}

//function print object invokes print function on each obj in arr
//create interface
interface Prints {
  print(): void;
}
class Printable<T> {
  constructor(public val: T) {}
  print(): void {
    console.log(this.val);
  }
  duplicate(num: number): Prints[] {
    const prints = [];
    while (num > 0) prints.push(new Printable(num--));
    return prints;
  }
}
function ducePrint<T extends Prints>(printables: T[]): void {
  printables.forEach((p) => p.print());
}

const printable = new Printable("W");
ducePrint(printable.duplicate(4));
//have class implement interface
//write function that crates multiple instances of class and places in array
