import {readFileSync} from 'fs';

export default class CsvFileReader {
    constructor(public filename: string) {}

    data: string[][] = [];

    read(): void {
        this.data = readFileSync(this.filename, {
            encoding: 'utf-8'
        })
        .split('\n')
        .map((row: string): string[] => {
            return row.split(',')
        })
    }
}
