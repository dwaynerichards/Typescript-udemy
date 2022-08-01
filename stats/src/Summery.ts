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
  buildAndPrintReport(matches: Match[]) {
    const report = this.analyzer.run(matches);
    this.outputTarget.print(report);
  }
}
