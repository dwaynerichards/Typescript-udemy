import fs from "fs";
import Reader from "./Reader";

export default abstract class CsvFileReader<T> extends Reader {
  data: T[] = [];
  constructor(public fileName: string) {
    super();
  }
  abstract mapRow(stringArr: string[]): T;

  read(): void {
    this.data = fs
      .readFileSync(this.fileName, {
        encoding: "utf-8",
      })
      .split("\n")
      .map((string): string[] => string.split(","))
      .map(this.mapRow);
    //[ [adam, 12.00,dan][adam, 12.00,dan] ]
  }
}
