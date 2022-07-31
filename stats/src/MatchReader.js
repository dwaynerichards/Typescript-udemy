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
exports.Match = exports.MatchResult = void 0;
var CsvFileReader_1 = require("./CsvFileReader");
var MatchResult;
(function (MatchResult) {
    MatchResult["HomeWin"] = "H";
    MatchResult["AwayWin"] = "A";
    MatchResult["Draw"] = "D";
})(MatchResult = exports.MatchResult || (exports.MatchResult = {}));
var Match = /** @class */ (function () {
    function Match(data) {
        this.data = data;
        this.date = this.parseDate(this.data[0]);
        this.homeTeam = this.data[1];
        this.awayTeam = this.data[2];
        this.homeScore = Number(this.data[3]);
        this.awayScore = Number(this.data[4]);
        this.winner = this.data[5] === MatchResult.HomeWin
            ? this.homeTeam
            : this.data[5] === MatchResult.AwayWin
                ? this.awayTeam
                : "Draw";
        this.referee = this.data[6];
        this.dataParsed = this.parseData(data);
    }
    Match.prototype.parseData = function (data) {
        return [
            this.date,
            this.homeTeam,
            this.awayTeam,
            this.homeScore,
            this.awayScore,
            data[5],
            this.referee,
        ];
    };
    Match.prototype.parseDate = function (string) {
        string = string.replaceAll("/", " ");
        var dateNum = Date.parse(string);
        return new Date(dateNum);
    };
    return Match;
}());
exports.Match = Match;
var MatchReacher = /** @class */ (function (_super) {
    __extends(MatchReacher, _super);
    function MatchReacher() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MatchReacher.prototype.mapRow = function (stringArr) {
        return new Match(stringArr);
    };
    return MatchReacher;
}(CsvFileReader_1["default"]));
exports["default"] = MatchReacher;
