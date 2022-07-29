"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class NumberCollection {
    constructor(data) {
        this.data = data;
    }
    get length() {
        return this.data.length;
    }
    swap(leftIndex, rightIndex) {
        const { data } = this;
        [data[leftIndex], data[rightIndex]] = [data[rightIndex], data[leftIndex]];
    }
    compare(leftIndex, rightIndex) {
        const { data } = this;
        return data[leftIndex] > data[rightIndex];
    }
}
exports.default = NumberCollection;
