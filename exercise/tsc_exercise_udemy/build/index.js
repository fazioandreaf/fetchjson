"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const CharactersCollection_1 = __importDefault(require("./CharactersCollection"));
const LinkedList_1 = __importDefault(require("./LinkedList"));
const NumbersCollection_1 = __importDefault(require("./NumbersCollection"));
const collection = new NumbersCollection_1.default([10, -3, 5, 0]);
const characters = new CharactersCollection_1.default('ciaone');
// const sorter = new Sorter(collection);
// const sorterChar = new Sorter(characters);
collection.sort();
console.log(collection.data);
characters.sort();
console.log(characters.data);
// sorter.sort();
// console.log(sorter.collection)
// sorterChar.sort();
// console.log(sorterChar.collection)
const linkedList = new LinkedList_1.default();
linkedList.add(40);
linkedList.add(500);
linkedList.add(5);
linkedList.add(33);
// const sortLinkedList = new Sorter(linkedList);
// sortLinkedList.sort();
linkedList.sort();
linkedList.print();
