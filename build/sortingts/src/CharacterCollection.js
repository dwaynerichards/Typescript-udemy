"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CharacterCollection = void 0;
class CharacterCollection {
    constructor(data) {
        this.data = data;
    }
    get length() {
        return this.data.length;
    }
    compare(leftIndex, rightIndex) {
        let data = this.data.toLocaleLowerCase();
        return data[leftIndex] > data[rightIndex];
    }
    swap(leftIndex, rightIndex) {
        const arr = this.data.split("");
        [arr[leftIndex], arr[rightIndex]] = [arr[rightIndex], arr[leftIndex]];
        this.data = arr.join("");
    }
}
exports.CharacterCollection = CharacterCollection;
