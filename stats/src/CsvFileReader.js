"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var fs_1 = require("fs");
var Reader_1 = require("./Reader");
var CsvFileReader = /** @class */ (function (_super) {
    __extends(CsvFileReader, _super);
    function CsvFileReader(fileName) {
        var _this = _super.call(this) || this;
        _this.fileName = fileName;
        _this.data = [];
        return _this;
    }
    CsvFileReader.prototype.read = function () {
        this.data = fs_1["default"]
            .readFileSync(this.fileName, {
            encoding: "utf-8"
        })
            .split("\n")
            .map(function (string) { return string.split(","); })
            .map(this.mapRow);
        //[ [adam, 12.00,dan][adam, 12.00,dan] ]
    };
    return CsvFileReader;
}(Reader_1["default"]));
exports["default"] = CsvFileReader;
