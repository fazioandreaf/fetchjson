import {readFileSync} from 'fs';
import { dateStringToDate } from './utils';
import { MatchResults } from './MatchResults';

// interface Row {
//     date: Date,
//     homeTeam: string,
//     awayTeam: string,
//     homeGoal: number,
//     awayGoal: number,
//     result: MatchResults,
//     stadium: string
// }

//tuple
type MatchData = [Date, string, string, number, number, MatchResults, string]

export default class CsvFileReader {
    constructor(public filename: string) {}

    data: MatchData[] = [];

    read(): void {
        this.data = readFileSync(this.filename, {
            encoding: 'utf-8'
        })
        .split('\n')
        .map((row: string): string[] => {
            return row.split(',')
        })
        .map((row: string[]): MatchData => {
            return [
                dateStringToDate(row[0]),
                row[1],
                row[2],
                parseInt(row[3]),
                parseInt(row[4]),
                // assertions
                row[5] as MatchResults,
                row[6]
            ]
        })
    }



}
