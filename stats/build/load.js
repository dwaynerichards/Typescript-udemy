"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const stream_1 = require("stream");
const footballData = stream_1.Readable.from("../football.csv");
let matches = "";
footballData.on("data", (chunk) => {
    matches += chunk.toString();
    console.log(matches);
});
