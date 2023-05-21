# 数据结构和算法学习
>## 一、排序算法
>>### 1.冒泡排序
>>> ### 思路：
>>> * 在包含N个数字的无序数组中，选取数组的第一个数P1跟后一个数P2进行比较，如果P1大于P2，则两数交换位置，否则什么也不做。
>>> * 选取数组的第二个数跟后一个数进行比较，重复上述步骤，直到第N-1个数和第N个数比较完毕，此时最大的数字将会被交换到数组的最末尾位置，当N-1个数字通过交换处于数组右边的位置时，最左边的数一定是数组中的最小值，N-1个比最小值大的数字放置到右边则需要经过N-1轮操作。
>>> * 由于每轮操作后末尾的位置已经是较大的数了，所以这个数在下一轮操作的时候就没必要交换了，之前经过多少轮次操作，那么就有多少个数不用参与交换，所以每轮操作只需要进行N - 1 - [之前经过多少轮操作]交换就可以了。
>>> * 下面是完整代码：
```typescript
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
```



