import { Match } from "../MatchReader";
import fs from "fs";

export interface DataReader {
  read(): void;
  data: string[][];
}

export default class MatchReader {
  constructor(public reader: DataReader) {}
  load(): Match[] {
    //load data and mutate strings and return new data
    this.reader.read();
    return this.reader.data.map((data) => new Match(data));
  }
}

export class CsvFileReader implements DataReader {
  data: string[][] = [];
  constructor(public fileName: string) {}
  read(): void {
    this.data = fs
      .readFileSync(this.fileName, {
        encoding: "utf-8",
      })
      .split("\n")
      .map((string: string): string[] => string.split(","));
    //[ [adam, 12.00,dan][adam, 12.00,dan] ]
  }
}

const csvReader = new CsvFileReader("football.csv");

export const footBallReader = new MatchReader(csvReader);
