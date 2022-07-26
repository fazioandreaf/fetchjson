
// import CsvFileReader from "./CsvFileReader";
import {MatchResults} from './MatchResults';
import MatchReader from './MatchReader';

let matches = new MatchReader('./src/football.csv');
let manUnitedWins = 0;

matches.read();
// console.log(matches.data[0])

for (let match of matches.data) {
    if (match[1] === 'Man United' && match[5] === MatchResults.HomeWin ||  match[2] === 'Man United' && match[5] === MatchResults.AwayWin) {
        manUnitedWins++
    }
}

console.log(`Man United wins ${manUnitedWins} games`)