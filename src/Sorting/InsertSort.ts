import { AbstractSort } from "./AbstractSort";
import { Utils } from "./Utils";

export class InsertSort extends AbstractSort {
    constructor(array:Array<number>){
        super(array);
    }
    sort(): void {
        const array = this.array;
        const length = array.length;
        for (let i = 1; i < length; i++) { // 选择第二个数开始往前遍历
            for (let j = i; j > 0 && array[j] < array[j - 1]; j--) { // 把选择的数跟前面的数比较，比前一个数小，就交换位置，再用交换位置后的数跟前面的数比较，直到该数大于前一个数为止
                Utils.swap(array, j, j - 1);
            }
        }
    }
    showArray(): void {
        console.log(this.array);
    }

}

const array = [5, 3, 6, 8, 10, 4];
const insertSort = new InsertSort(array); 
insertSort.sort();
insertSort.showArray(); // [ 3, 4, 5, 6, 8, 10 ]