import CsvFileReader from "./CsvFileReader"
import { dateStringToDate } from "./utils"
import { MatchResults } from "./MatchResults"

type MatchData = [Date, string, string, number, number, MatchResults, string]

export default class MatchReader extends CsvFileReader<MatchData> {
    mapRow(row: string[]): MatchData {
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
    }
}