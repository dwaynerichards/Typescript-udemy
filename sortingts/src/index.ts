import Sorter from "./Sorter";
import NumersCollection from "./NumberCollection";
import { CharacterCollection } from "./CharacterCollection";
import { LinkedList } from "./LinkedList";

const str = "asweWdfegfrtwegergsffowohp";
const arr = [34, 55, 7, 222, 5, 1, 9, 3];
const characterCollection = new CharacterCollection(str);
// const numCollection = new NumersCollection(arr);
// const sorter = new Sorter(numCollection);
// console.log(sorter.collection);
// console.log(sorter.sort());
// console.log(arr);
// const charSorter = new Sorter(characterCollection);
// charSorter.sort();

const linkedList = new LinkedList(5);
linkedList.add(2);
linkedList.add(1);
console.log(linkedList.length);
console.log(linkedList.at(1));
//console.log(linkedList.at(0));
linkedList.swap(0, 1);
console.log(linkedList.at(1));
