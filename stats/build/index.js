"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const CsvFileReader_1 = __importDefault(require("./CsvFileReader"));
const MatchResults_1 = require("./MatchResults");
let matches = new CsvFileReader_1.default('./src/football.csv');
let manUnitedWins = 0;
matches.read();
// console.log(matches.data[0])
for (let match of matches.data) {
    if (match[1] === 'Man United' && match[5] === MatchResults_1.MatchResults.HomeWin || match[2] === 'Man United' && match[5] === MatchResults_1.MatchResults.AwayWin) {
        manUnitedWins++;
    }
}
console.log(`Man United wins ${manUnitedWins} games`);
