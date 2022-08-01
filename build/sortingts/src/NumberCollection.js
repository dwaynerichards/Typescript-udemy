"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Sortable_1 = __importDefault(require("./Sortable"));
class NumberCollection extends Sortable_1.default {
    constructor(data) {
        super();
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
