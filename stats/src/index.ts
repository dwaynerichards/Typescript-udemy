import fs from "fs";
import { Readable } from "stream";

console.log("hello");

class Match {
  constructor(public data: string[]) {}
  get date(): string {
    return this.data[0];
  }
  get homeTeam(): string {
    return this.data[1];
  }
  get awayTeam(): string {
    return this.data[2];
  }
  get homeScore(): string {
    return this.data[3];
  }
  get awayeScore(): string {
    return this.data[4];
  }
  get winner(): string {
    return this.data[5];
  }
  get player(): string {
    return this.data[6];
  }
}

const footballString = fs
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

const footballData = Readable.from(footballString);

let matches = "";
footballData.on("data", (chunk) => {
  matches += chunk.toString();
});

//footballData.on("end", () => console.log("matches", matches));
