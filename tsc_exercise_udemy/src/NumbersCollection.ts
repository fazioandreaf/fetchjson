export default class NumbersCollection {
    constructor(public data: number[]) {}

    // can call this function without the ()
    get length(): number {
        return this.data.length;
    }

    compare(leftIndex: number, rightIndex: number): boolean {
        return (this.data[leftIndex] > this.data[rightIndex])? true : false;
    }

    swap(leftIndex: number, rightIndex: number): void {
        const leftHand = this.data[leftIndex];

        this.data[leftIndex] = this.data[rightIndex];
        this.data[rightIndex] = leftHand;
    }
}
