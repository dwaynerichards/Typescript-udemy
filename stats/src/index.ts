import MatchReacher from "./MatchReader";
import { footBallReader } from "./interface/MatchReader";

console.log("hello");

let manUnitedWins = 0;
const footballFileReader = new MatchReacher("football.csv");
footBallReader.load().forEach((match) => {
  if (match.winner === "Man United") manUnitedWins++;
});
console.log(manUnitedWins, ":manu wins");
//0-data, 1-homeTeam, 2- away team, 3- homeScore, 4- awayscore, 5- winner, player
