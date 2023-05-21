import { Utils } from "./Utils";

export class BubbleSort {
    constructor(public array:Array<number>){}
    sort(){
        const array = this.array;
        const length = array.length;
        for (let i = 0; i < length - 1; i++) { // 经过length - 1轮操作
            for (let j = 0; j < length - 1 - i; j++) { // 每轮交换减去之前已经进行操作的轮次i，代表不处理i个已经放置在数组右边的较大数
                if (array[j] > array[j + 1]) {
                    Utils.swap(array, j, j + 1);
                }
            }
        }        
    }
    showArray(){
        console.log(this.array);
    }
}

const array = [5, 3, 6, 8, 10, 4];
const bubbleSort = new BubbleSort(array); 
bubbleSort.sort();
bubbleSort.showArray(); // [ 3, 4, 5, 6, 8, 10 ]