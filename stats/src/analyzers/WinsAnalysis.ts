import { Analyzer } from "./../Summary"
import { MatchData } from "./../MatchData"
import { MatchResults } from "./../MatchResults";

export default class WinsAnalysis implements Analyzer {
    constructor(public team: string) {}

    run(matches: MatchData[]): string {
        let wins = 0;

        for (let match of matches) {
            if (match[1] === this.team && match[5] === MatchResults.HomeWin ||  match[2] === this.team && match[5] === MatchResults.AwayWin) {
                wins++
            }
        }

        return `Man United wins ${wins} games`
    }

}