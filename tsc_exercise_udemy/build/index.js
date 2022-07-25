"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const CharactersCollection_1 = __importDefault(require("./CharactersCollection"));
const NumbersCollection_1 = __importDefault(require("./NumbersCollection"));
const Sorter_1 = __importDefault(require("./Sorter"));
const collection = new NumbersCollection_1.default([10, -3, 5, 0]);
const characters = new CharactersCollection_1.default('ciaone');
const sorter = new Sorter_1.default(collection);
const sorterChar = new Sorter_1.default(collection);
sorter.sort();
console.log(sorter.collection);
sorterChar.sort();
console.log(sorterChar.collection);
