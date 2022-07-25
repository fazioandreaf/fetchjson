interface Sortable {
    length: number;
    compare(leftIndex: number, rightIndex: number): boolean;
    swap(leftIndex: number, rightIndex: number): void;
}

export default class Sorter {
    constructor(public collection: Sortable) {}

    sort(): void {
        const length = this.collection.length;

        for (let i = 0; i < length; i++) {
            for (let j = 0; j < this.collection.length - i -  1; j++) {
                if ( this.collection.compare(j, j + 1) ) {
                    this.collection.swap(j, j + 1)
                }
            }
        }
    }
}