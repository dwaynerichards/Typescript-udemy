"use strict";
exports.__esModule = true;
exports.CsvFileReader = void 0;
var MatchReader_1 = require("../MatchReader");
var fs_1 = require("fs");
var MatchReader = /** @class */ (function () {
    function MatchReader(reader) {
        this.reader = reader;
    }
    MatchReader.prototype.load = function () {
        //load data and mutate strings and return new data
        this.reader.read();
        return this.reader.data.map(function (data) { return new MatchReader_1.Match(data); });
    };
    return MatchReader;
}());
exports["default"] = MatchReader;
var CsvFileReader = /** @class */ (function () {
    function CsvFileReader(fileName) {
        this.fileName = fileName;
        this.data = [];
    }
    CsvFileReader.prototype.read = function () {
        this.data = fs_1["default"]
            .readFileSync(this.fileName, {
            encoding: "utf-8"
        })
            .split("\n")
            .map(function (string) { return string.split(","); });
        //[ [adam, 12.00,dan][adam, 12.00,dan] ]
    };
    return CsvFileReader;
}());
exports.CsvFileReader = CsvFileReader;
var csvReader = new CsvFileReader("football.csv");
var footBallReader = new MatchReader(csvReader);
footBallReader.load();
console.log(footBallReader.reader.data[0]);
