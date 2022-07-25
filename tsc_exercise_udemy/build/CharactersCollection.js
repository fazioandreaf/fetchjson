"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CharactersCollection {
    constructor(data) {
        this.data = data;
    }
    // can call this function without the ()
    get length() {
        return this.data.length;
    }
    compare(leftIndex, rightIndex) {
        return (this.data[leftIndex].toLocaleLowerCase() > this.data[rightIndex].toLocaleLowerCase()) ? true : false;
    }
    swap(leftIndex, rightIndex) {
        const characters = this.data.split('');
        const leftHand = characters[leftIndex];
        characters[leftIndex] = characters[rightIndex];
        characters[rightIndex] = leftHand;
        this.data = characters.join('');
    }
}
exports.default = CharactersCollection;
