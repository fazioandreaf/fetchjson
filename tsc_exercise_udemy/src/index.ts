import CharactersCollection from "./CharactersCollection";
import LinkedList from "./LinkedList";
import NumbersCollection from "./NumbersCollection";
import Sorter from "./Sorter";

const collection = new NumbersCollection([10, -3 ,5, 0]);
const characters = new CharactersCollection('ciaone');
// const sorter = new Sorter(collection);
// const sorterChar = new Sorter(characters);

collection.sort();
console.log(collection.data)
characters.sort();
console.log(characters.data)

// sorter.sort();
// console.log(sorter.collection)
// sorterChar.sort();
// console.log(sorterChar.collection)

const linkedList = new LinkedList();
linkedList.add(40);
linkedList.add(500);
linkedList.add(5);
linkedList.add(33);

// const sortLinkedList = new Sorter(linkedList);
// sortLinkedList.sort();
linkedList.sort()
linkedList.print()
