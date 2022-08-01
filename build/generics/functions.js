"use strict";
function printStrings(arr) {
    arr.forEach((e) => console.log(e));
}
function printNums(arr) {
    arr.forEach((e) => console.log(e));
}
function printType(arr) {
    arr.forEach((e) => console.log(e));
}
class Printable {
    constructor(val) {
        this.val = val;
    }
    print() {
        console.log(this.val);
    }
    duplicate(num) {
        const prints = [];
        while (num > 0)
            prints.push(new Printable(num--));
        return prints;
    }
}
function ducePrint(printables) {
    printables.forEach((p) => p.print());
}
const printable = new Printable("W");
ducePrint(printable.duplicate(4));
//have class implement interface
//write function that crates multiple instances of class and places in array
