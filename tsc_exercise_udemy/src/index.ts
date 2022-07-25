import CharactersCollection from "./CharactersCollection";
import NumbersCollection from "./NumbersCollection";
import Sorter from "./Sorter";

const collection = new NumbersCollection([10, -3 ,5, 0]);
const characters = new CharactersCollection('ciaone');
const sorter = new Sorter(collection);
const sorterChar = new Sorter(collection);

sorter.sort();
console.log(sorter.collection)
sorterChar.sort();
console.log(sorterChar.collection)