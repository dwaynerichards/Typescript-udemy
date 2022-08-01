"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const Reader_1 = __importDefault(require("./Reader"));
class CsvFileReader extends Reader_1.default {
    constructor(fileName) {
        super();
        this.fileName = fileName;
        this.data = [];
    }
    read() {
        this.data = fs_1.default
            .readFileSync(this.fileName, {
            encoding: "utf-8",
        })
            .split("\n")
            .map((string) => string.split(","))
            .map(this.mapRow);
        //[ [adam, 12.00,dan][adam, 12.00,dan] ]
    }
}
exports.default = CsvFileReader;
