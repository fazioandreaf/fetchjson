"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const matches = (0, fs_1.readFileSync)('./src/football.csv', {
    encoding: 'utf-8'
})
    .split('\n')
    .map((row) => {
    return row.split(',');
});
let manUnitedWins = 0;
for (let match of matches) {
    if (match[1] === 'Man United' && match[5] === 'H' || match[2] === 'Man United' && match[5] === 'A') {
        manUnitedWins++;
    }
}
console.log(`Man United wins ${manUnitedWins} games`);
