"use strict";
class ArrayOfNumbers {
    constructor(collection) {
        this.collection = collection;
    }
    get(i) {
        return this.collection[i];
    }
}
class ArrayOfStrings {
    constructor(collection) {
        this.collection = collection;
    }
    get(i) {
        return this.collection[i];
    }
}
class ArrayOfType {
    constructor(collection) {
        this.collection = collection;
    }
    get(i) {
        return this.collection[i];
    }
}
const srrOfStrings = new ArrayOfType(["w"]);
const string = srrOfStrings.get(0);
console.log(string);
