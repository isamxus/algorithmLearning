import { AbstractSort } from "./AbstractSort";
import { Utils } from "./Utils";

export class SelectionSort extends AbstractSort {
    constructor(array:Array<number>){
        super(array);
    }
    sort(): void {
        const array = this.array;
        const length = array.length;
        for (let i = 0; i < length - 1; i++) { // 需要经过length - 1轮寻找最小值的操作
            let minIndex = i; // 假定i位置代表数组最小值索引
            for (let j = i + 1; j < length; j++) { // 每轮从i+1的位置遍历到数组末尾，与i位置的值比较
                if(array[minIndex] > array[j]) { // 记录最小值的索引，如果遍历数组发现更小的值，则更新索引，直到找到最小的值索引为止
                    minIndex = j;
                }
            }
            Utils.swap(array, i, minIndex); // 每轮遍历后交换初始索引i位置的数和最小索引位置的数交换，此时i位置就是该轮最小的数
        }
    }
    showArray(): void {
        console.log(this.array);
    }   
}

const array = [5, 3, 6, 8, 10, 4];
const bubbleSort = new SelectionSort(array); 
bubbleSort.sort();
bubbleSort.showArray(); // [ 3, 4, 5, 6, 8, 10 ]


