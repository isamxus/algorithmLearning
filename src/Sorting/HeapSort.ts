import { AbstractSort } from "./AbstractSort";
import { Utils } from "./Utils";

export class HeapSort extends AbstractSort {
    constructor(array:Array<number>){
        super(array);
        this.buildHeap();
    }
    private buildHeap(){ // 初始化数组，将数组转化为堆结构
        for (let i = 0; i < this.array.length; i++) {
            this.heapInsert(i);
        }
    }
    private heapify(tail:number){
        let index = 0, array = this.array;
        while(2 * index + 1 < tail) { // tail代表数组末尾最大数字的索引，是循环的边界
            let left = 2 * index + 1,
                right = 2 * index + 2,
                maxIndex = right < tail && array[right] > array[left] ? right : left;// 取出左右子节点中较大数的索引，并且右子节点索引不能大于tail
            if (array[index] > array[maxIndex]) break;
            Utils.swap(array, index, maxIndex); //满足条件交换
            index = maxIndex;  // 更新交换后的索引，继续与左右子节点比较
        }
    }
    private heapInsert(index:number){
        let parentIndex = (index - 1) >> 1; // 先记录插入数父节点索引
        const array = this.array;
        while(parentIndex >= 0 && array[index] > array[parentIndex]) { //当插入数大于父节点数，并且父节点索引不能为负数
            Utils.swap(this.array, index, parentIndex);
            index = parentIndex; // 插入数索引也需要更新为交换后的位置
            parentIndex = (parentIndex - 1) >> 1; // 继续寻找父节点比较
        }    
    }
    sort(): void {
        const array = this.array;
        let heapIndex = array.length - 1; // 有N个数，就要进行N-1次将队顶的最大数字放到数组后面的过程
        while(heapIndex){
            Utils.swap(array, 0, heapIndex);
            this.heapify(heapIndex); // 交换到顶部的数字需要下沉到它该放置的位置
            heapIndex--;
        }
    }
    showArray(): void {
        console.log(this.array);
    }
    
}

const array = [5, 3, 6, 8, 10, 4];
const heapSort = new HeapSort(array); 
heapSort.sort();
heapSort.showArray(); // [ 3, 4, 5, 6, 8, 10 ]