"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Summary {
    constructor(analyzer, outputTarget) {
        this.analyzer = analyzer;
        this.outputTarget = outputTarget;
    }
}
exports.default = Summary;
class AvgGoalsAnalysis {
    constructor(matchesreader) {
        this.matches = matchesreader.load();
    }
    run(matches) {
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
