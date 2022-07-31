"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const MatchReader_1 = __importDefault(require("./MatchReader"));
const MatchReader_2 = require("./interface/MatchReader");
const Summery_1 = __importDefault(require("./Summery"));
const AvgGoalsAnalysis_1 = __importDefault(require("./Analysis/AvgGoalsAnalysis"));
const WinAnalysis_1 = __importDefault(require("./Analysis/WinAnalysis"));
const ConsoleReport_1 = __importDefault(require("./ReportTarget/ConsoleReport"));
const HtmlReport_1 = __importDefault(require("./ReportTarget/HtmlReport"));
console.log("hello");
let manUnitedWins = 0;
const footballFileReader = new MatchReader_1.default("football.csv");
const matches = MatchReader_2.footBallReader.load();
matches.forEach((match) => {
    if (match.winner === "Man United")
        manUnitedWins++;
});
console.log(manUnitedWins, ":manu wins");
const manuGoalsAnalysis = new AvgGoalsAnalysis_1.default("Man United");
const manuGoalSummery = new Summery_1.default(manuGoalsAnalysis, new ConsoleReport_1.default());
const manuWinSummery = new Summery_1.default(new WinAnalysis_1.default("Man United"), new ConsoleReport_1.default());
manuGoalSummery.buildAndPrintReport(matches);
manuWinSummery.buildAndPrintReport(matches);
const htmlSummary = new Summery_1.default(manuGoalsAnalysis, new HtmlReport_1.default("ManUnitedGoalSumm"));
htmlSummary.buildAndPrintReport(matches);
//0-data, 1-homeTeam, 2- away team, 3- homeScore, 4- awayscore, 5- winner, player
