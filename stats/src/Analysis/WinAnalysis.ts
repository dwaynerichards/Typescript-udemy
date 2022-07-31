import { Match } from "../MatchReader";
import { Analyser } from "../Summery";

export default class WinAnalysis implements Analyser {
  constructor(public team: string) {}
  run(matches: Match[]): string {
    let wins = 0;
    matches.forEach((match) => {
      if (match.winner === this.team) wins++;
    });

    return `Team: ${this.team} has won ${wins} games`;
  }
}
