"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const stream_1 = require("stream");
console.log("hello");
class Match {
    constructor(data) {
        this.data = data;
    }
    get date() {
        return this.data[0];
    }
    get homeTeam() {
        return this.data[1];
    }
    get awayTeam() {
        return this.data[2];
    }
    get homeScore() {
        return this.data[3];
    }
    get awayeScore() {
        return this.data[4];
    }
    get winner() {
        return this.data[5];
    }
    get player() {
        return this.data[6];
    }
}
const footballString = fs_1.default
    .readFileSync("football.csv", {
    encoding: "utf-8",
})
    .split("\n")
    .map((string) => {
    const strSplt = string.split(",");
    return new Match(strSplt);
});
console.log(footballString[0]);
//0-data, 1-homeTeam, 2- away team, 3- homeScore, 4- awayscore, 5- winner, player
const footballData = stream_1.Readable.from(footballString);
let matches = "";
footballData.on("data", (chunk) => {
    matches += chunk.toString();
});
//footballData.on("end", () => console.log("matches", matches));
