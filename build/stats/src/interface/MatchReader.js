"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.footBallReader = exports.CsvFileReader = void 0;
const MatchReader_1 = require("../MatchReader");
const fs_1 = __importDefault(require("fs"));
class MatchReader {
    constructor(reader) {
        this.reader = reader;
    }
    load() {
        //load data and mutate strings and return new data
        this.reader.read();
        return this.reader.data.map((data) => new MatchReader_1.Match(data));
    }
}
exports.default = MatchReader;
class CsvFileReader {
    constructor(fileName) {
        this.fileName = fileName;
        this.data = [];
    }
    read() {
        this.data = fs_1.default
            .readFileSync(this.fileName, {
            encoding: "utf-8",
        })
            .split("\n")
            .map((string) => string.split(","));
        //[ [adam, 12.00,dan][adam, 12.00,dan] ]
    }
}
exports.CsvFileReader = CsvFileReader;
const csvReader = new CsvFileReader("football.csv");
exports.footBallReader = new MatchReader(csvReader);
