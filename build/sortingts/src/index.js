"use strict";
console.log("sorting!");
class Sorter {
    constructor(collection) {
        this.collection = collection;
    }
    sort() {
        let i = 0;
        const { collection } = this;
        let passes = collection.length - 1;
        let eleSwaped = false;
        while (passes > 0) {
            //if r > l, swap elements
            let [left, right] = [collection[i], collection[i + 1]];
            if (typeof collection === "number") {
                if (left > right) {
                    [left, right] = [right, left];
                    eleSwaped = true;
                }
                i++;
                if (i === passes && eleSwaped == false) {
                    break;
                }
                else if (i === passes) {
                    i = 0;
                    passes--;
                }
            }
        }
        return collection;
    }
}
const arr = [34, 55, 7, 222, 5, 1, 9, 3];
const bubbleSort = (arr) => {
    let i = 0;
    let passes = arr.length - 1;
    let eleSwaped = false;
    while (passes > 0) {
        const r = arr[i];
        const l = arr[i + 1];
        if (r > l) {
            [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
            eleSwaped = true;
        }
        i++;
        if (i === passes && eleSwaped == false) {
            break;
        }
        else if (i === passes) {
            i = 0;
            passes--;
        }
    }
    return arr;
};
const sorter = new Sorter(arr);
console.log(sorter.collection);
console.log(sorter.sort());
