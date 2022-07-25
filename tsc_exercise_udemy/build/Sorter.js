"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Sorter {
    constructor(collection) {
        this.collection = collection;
    }
    sort() {
        const length = this.collection.length;
        for (let i = 0; i < length; i++) {
            for (let j = 0; j < this.collection.length - i - 1; j++) {
                if (this.collection.compare(j, j + 1)) {
                    this.collection.swap(j, j + 1);
                }
            }
        }
    }
}
exports.default = Sorter;
