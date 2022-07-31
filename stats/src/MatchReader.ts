import CsvFileReader from "./CsvFileReader";

export enum MatchResult {
  HomeWin = "H",
  AwayWin = "A",
  Draw = "D",
}

//example of tuple/ orderedArr
export type MatchData = [
  Date,
  string,
  string,
  number,
  number,
  MatchResult,
  string
];

export class Match {
  dataParsed: MatchData;
  constructor(public data: string[]) {
    this.dataParsed = this.parseData(data);
  }
  parseData(data: string[]): MatchData {
    return [
      this.date,
      this.homeTeam,
      this.awayTeam,
      this.homeScore,
      this.awayScore,
      data[5] as MatchResult,
      this.referee,
    ];
  }
  date: Date = this.parseDate(this.data[0]);
  homeTeam: string = this.data[1];
  awayTeam: string = this.data[2];
  homeScore: number = Number(this.data[3]);
  awayScore: number = Number(this.data[4]);
  winner: string =
    (this.data[5] as MatchResult) === MatchResult.HomeWin
      ? this.homeTeam
      : (this.data[5] as MatchResult) === MatchResult.AwayWin
      ? this.awayTeam
      : "Draw";
  referee: string = this.data[6];
  parseDate(string: string): Date {
    string = string.replaceAll("/", " ");
    const dateNum = Date.parse(string);
    return new Date(dateNum);
  }
}

export default class MatchReacher extends CsvFileReader<Match> {
  mapRow(stringArr: string[]) {
    return new Match(stringArr);
  }
}
