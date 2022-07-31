"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AvgGoalsAnalysis {
    constructor(team) {
        this.team = team;
    }
    run(matches) {
        //returning ave goals, total goals / num games
        let goals = 0;
        let totalGames = 0;
        matches.forEach((match) => {
            //if homettteam is the team passed into constructor
            if (match.homeTeam === this.team) {
                goals += match.homeScore;
                totalGames += 1;
            }
            else if (match.awayTeam === this.team) {
                goals += match.homeScore;
                totalGames += 1;
            }
            //add home gaols to goals, increment totalGames
            //otherwise if awayteam is team nnnname do sameeee
        });
        const avgGoals = goals / totalGames;
        return `Team : ${this.team} averages ${avgGoals} per game`;
    }
}
exports.default = AvgGoalsAnalysis;
