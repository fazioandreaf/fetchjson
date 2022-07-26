import {readFileSync} from 'fs';
import { MatchResults } from './MatchResults';

//tuple
// type MatchData = [Date, string, string, number, number, MatchResults, string]

export default abstract class CsvFileReader<TypeOfData> {
    constructor(public filename: string) {}

    abstract mapRow(row: string[]) : TypeOfData;

    data: TypeOfData[] = [];

    read(): void {
        this.data = readFileSync(this.filename, {
            encoding: 'utf-8'
        })
        .split('\n')
        .map((row: string): string[] => {
            return row.split(',')
        })
        .map(row => this.mapRow(row))
    }
}
