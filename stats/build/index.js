"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const MatchReader_1 = __importDefault(require("./MatchReader"));
const MatchReader_2 = require("./interface/MatchReader");
console.log("hello");
let manUnitedWins = 0;
const footballFileReader = new MatchReader_1.default("football.csv");
MatchReader_2.footBallReader.load().forEach((match) => {
    if (match.winner === "Man United")
        manUnitedWins++;
});
console.log(manUnitedWins, ":manu wins");
//0-data, 1-homeTeam, 2- away team, 3- homeScore, 4- awayscore, 5- winner, player
