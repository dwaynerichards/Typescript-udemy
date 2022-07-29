"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Sorter {
    constructor(collection) {
        this.collection = collection;
    }
    sort() {
        console.log("invoking sort");
        let i = 0;
        const { collection } = this;
        let passes = collection.length - 1;
        let eleSwaped = false;
        while (passes > 0) {
            //if r > l, swap elements
            if (collection.compare(i, i + 1)) {
                collection.swap(i, i + 1);
                eleSwaped = true;
            }
            i++;
            if (i === passes) {
                //if you have iterated to the end of the arr
                if (!eleSwaped)
                    break; //no eleSwapped = array is sorted
                i = 0; //iterate though arr again, stopping 1 item earlier becase of a swap
                passes--;
            }
        }
        //    return collection;
    }
}
exports.default = Sorter;
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
