"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class WinAnalysis {
    constructor(team) {
        this.team = team;
    }
    run(matches) {
        let wins = 0;
        matches.forEach((match) => {
            if (match.winner === this.team)
                wins++;
        });
        return `Team: ${this.team} has won ${wins} games`;
    }
}
exports.default = WinAnalysis;
