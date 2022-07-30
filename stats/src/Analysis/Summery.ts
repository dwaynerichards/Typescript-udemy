import MatchReacher from "./interface/MatchReader";
import { Match } from "./MatchReader";

export interface Analyser {
  run(matches: Match[]): string;
}
export interface OutputTarget {
  print(report: string): void;
}

export default class Summary {
  constructor(public analyzer: Analyser, public outputTarget: OutputTarget) {}
}

class AvgGoalsAnalysis implements Analyser {
  matches: Match[];
  constructor(matchesreader: MatchReacher) {
    this.matches = matchesreader.load();
  }
  run(matches: Match[]): string {
    //returning ave goals, total goals / num games
    let homeGoals = 0;
    let awayGoals = 0;
    const numOfGames = matches.length;
    matches.forEach((match) => {
      homeGoals += match.homeScore;
      awayGoals += match.awayScore;
    });
    const avgHomeGoals = homeGoals / numOfGames;
    const avgAwayGoals = awayGoals / numOfGames;
    const avgGoals = (homeGoals + awayGoals) / numOfGames;
    return `Average Home Goals: ${avgHomeGoals}\n Average Away Goals: ${avgAwayGoals}\n  Average Goals: ${avgGoals}\n`;
  }
}
