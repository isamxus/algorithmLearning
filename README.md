# 数据结构和算法学习
>## 一、排序算法
>>### 1.冒泡排序
>>> ### 思路：
>>> * 在包含N个数字的无序数组中，选取数组的第一个数P1跟后一个数P2进行比较，如果P1大于P2，则两数交换位置，否则什么也不做。
>>> * 选取数组的第二个数跟后一个数进行比较，重复上述步骤，直到第N-1个数和第N个数比较完毕，此时最大的数字将会被交换到数组的最末尾位置，当N-1个数字通过交换处于数组右边的位置时，最左边的数一定是数组中的最小值，N-1个比最小值大的数字放置到右边则需要经过N-1轮操作。
>>> * 由于每轮操作后末尾的位置已经是较大的数了，所以这个数在下一轮操作的时候就没必要交换了，之前经过多少轮次操作，那么就有多少个数不用参与交换，所以每轮操作只需要进行【N - 1 - 之前经过多少轮操作】交换就可以了。
>>> * 下面是完整代码：
```typescript
            export class BubbleSort extends AbstractSort {
                constructor(array:Array<number>){
                    super(array);
                }
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
>>> * 时间复杂度为O(N^2)。
>>### 2.选择排序
>>> ### 思路：
>>> * 在N个数字构成的无序数组中，假定第一个数是最小值，并遍历到数组末尾找到最小的数，两者交换位置，此时真正最小的数会被放置在数组最左边。
>>> * 假定第二个数是最小值，继续遍历到数组末尾找到最小的数，两者交换，以此类推，当前N-1个数字通过交换后被放置在数组左边时，最右边数一定为最大值，前N-1个数字经过了N-1轮寻找最小值的操作。
>>> * 每一轮操作寻找最小值都需要从假定为最小值的数开始便利到数组末尾。
>>> * 完整代码如下：
```typescript
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
```



