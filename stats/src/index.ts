
import CsvFileReader from "./CsvFileReader";
import {MatchResults} from './MatchResults';
import MatchReader from './MatchReader';

let manUnitedWins = 0;
let csvFileReader = new CsvFileReader('./src/football.csv');
const matchReader = new MatchReader(csvFileReader);

matchReader.load();

// console.log(matches.data[0])

for (let match of matchReader.matches) {
    if (match[1] === 'Man United' && match[5] === MatchResults.HomeWin ||  match[2] === 'Man United' && match[5] === MatchResults.AwayWin) {
        manUnitedWins++
    }
}

console.log(`Man United wins ${manUnitedWins} games`)