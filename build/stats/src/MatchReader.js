"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Match = exports.MatchResult = void 0;
const CsvFileReader_1 = __importDefault(require("./CsvFileReader"));
var MatchResult;
(function (MatchResult) {
    MatchResult["HomeWin"] = "H";
    MatchResult["AwayWin"] = "A";
    MatchResult["Draw"] = "D";
})(MatchResult = exports.MatchResult || (exports.MatchResult = {}));
class Match {
    constructor(data) {
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
    parseData(data) {
        return [
            this.date,
            this.homeTeam,
            this.awayTeam,
            this.homeScore,
            this.awayScore,
            data[5],
            this.referee,
        ];
    }
    parseDate(string) {
        string = string.replaceAll("/", " ");
        const dateNum = Date.parse(string);
        return new Date(dateNum);
    }
}
exports.Match = Match;
class MatchReacher extends CsvFileReader_1.default {
    mapRow(stringArr) {
        return new Match(stringArr);
    }
}
exports.default = MatchReacher;
