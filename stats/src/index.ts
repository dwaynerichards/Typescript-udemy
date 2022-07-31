import MatchReacher from "./MatchReader";
import { footBallReader } from "./interface/MatchReader";
import Summary from "./Summery";
import AvgGoalsAnalysis from "./Analysis/AvgGoalsAnalysis";
import WinAnalysis from "./Analysis/WinAnalysis";
import ConsoleReport from "./ReportTarget/ConsoleReport";
import { match } from "assert";
import HtmlReport from "./ReportTarget/HtmlReport";

console.log("hello");

let manUnitedWins = 0;
const footballFileReader = new MatchReacher("football.csv");
const matches = footBallReader.load();
matches.forEach((match) => {
  if (match.winner === "Man United") manUnitedWins++;
});
console.log(manUnitedWins, ":manu wins");
const manuGoalsAnalysis = new AvgGoalsAnalysis("Man United");
const manuGoalSummery = new Summary(manuGoalsAnalysis, new ConsoleReport());
const manuWinSummery = new Summary(
  new WinAnalysis("Man United"),
  new ConsoleReport()
);
manuGoalSummery.buildAndPrintReport(matches);
manuWinSummery.buildAndPrintReport(matches);
const htmlSummary = new Summary(
  manuGoalsAnalysis,
  new HtmlReport("ManUnitedGoalSumm")
);
htmlSummary.buildAndPrintReport(matches);
//0-data, 1-homeTeam, 2- away team, 3- homeScore, 4- awayscore, 5- winner, player
