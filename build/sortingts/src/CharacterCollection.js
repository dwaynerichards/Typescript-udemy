"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CharacterCollection = void 0;
const Sortable_1 = __importDefault(require("./Sortable"));
class CharacterCollection extends Sortable_1.default {
    constructor(data) {
        super();
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
