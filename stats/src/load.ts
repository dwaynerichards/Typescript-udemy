import fs from "fs";

import { Readable } from "stream";

const footballData = Readable.from("../football.csv");

let matches = "";
footballData.on("data", (chunk) => {
  matches += chunk.toString();
  console.log(matches);
});
