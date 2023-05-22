import { AbstractSort } from "./AbstractSort";

export class MergeSort extends AbstractSort {
    constructor(array:Array<number>){
        super(array);
    }
    private merge(array:Array<number>, left:number, mid:number, right:number){ //合并数组操作
        let L1 = left,
            L2 = mid + 1,
            index = 0,
            helper = new Array(right - left + 1);
        
        while(L1 <= mid && L2 <= right) {
            if (array[L1] > array[L2]) {
                helper[index++] = array[L2++];
            } else if (array[L1] <= array[L2]) {
                helper[index++] = array[L1++];
            }
        }
        while(L1 <= mid) {
            helper[index++] = array[L1++];
        }
        while(L2 <= right) {
            helper[index++] = array[L2++];
        }
        for (let i = 0; i < helper.length; i++) {
            array[left+i] = helper[i];
        }
    }
    private mergeSort(array:Array<number>, left:number, right:number){ // 切割数组后合并数组
        if(left === right) return; // 切割到最小单位时中止切割
        const mid = (left + right) >> 1;
        this.mergeSort(array, left, mid);
        this.mergeSort(array, mid + 1, right);
        this.merge(array, left, mid, right);
    }
    sort(): void {
        this.mergeSort(this.array, 0, this.array.length - 1);
    }
    showArray(): void {
        console.log(this.array);
    }
    
}

const array = [5, 3, 6, 8, 10, 4];
const mergeSort = new MergeSort(array); 
mergeSort.sort();
mergeSort.showArray(); // [ 3, 4, 5, 6, 8, 10 ]