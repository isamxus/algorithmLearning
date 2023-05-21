import { AbstractSort } from "./AbstractSort";
import { Utils } from "./Utils";

interface IPartitionReturnType {
    l:number; // 划分区域后左边数组的末尾索引
    r:number; // 划分区域后右边数组的开始索引
}

export class QuickSort extends AbstractSort {
    constructor(array:Array<number>){
        super(array);
    }
    private partition(array:Array<number>, left:number, right:number):IPartitionReturnType{ // 划分区域的过程
        let flag = array[right],
              Small = left, 
              Large = right - 1,
              index = left;
        while(index <= Large) {
            if (array[index] < flag) {
                Utils.swap(array, index, Small);
                index++;
                Small++;
            } else if (array[index] === flag) {
                index++;
            } else {
                Utils.swap(array, index, Large);
                Large--;
            }
        }
        Utils.swap(array, right, index);
        return {
            l: Small - 1,
            r: index + 1
        }
    }
    private quickSort(array:Array<number>, left:number, right:number){
        if(left >= right) return;
        const {l, r} = this.partition(array, left, right);
        this.quickSort(array, left, l);
        this.quickSort(array, r, right);
    }
    sort(): void {
        this.quickSort(this.array, 0, this.array.length - 1);
    }
    showArray(): void {
        console.log(this.array);
    }
    
}

const array = [5, 3, 6, 8, 10, 4];
const quickSort = new QuickSort(array); 
quickSort.sort();
quickSort.showArray(); // [ 3, 4, 5, 6, 8, 10 ]