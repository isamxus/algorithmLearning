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
>>> * 时间复杂度为O(N ^ 2)，冒泡排序能保持排序的稳定性。
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
            const selectionSort = new SelectionSort(array); 
            selectionSort.sort();
            selectionSort.showArray(); // [ 3, 4, 5, 6, 8, 10 ]
```
>>> * 时间复杂度为O(N ^ 2)，选择排序不能保证排序的稳定性。
>>### 3.插入排序
>>> ### 思路：
>>> * 在N个数字构成的无序数组中，从第二个数字K1开始往前倒序遍历，查看K1是否小于前一个数字K2，如果K1 < K2，那么将两个数字位置互换，否则什么也不做。
>>> * 从第三个数字开始往前倒序遍历，重复上述过程，直到该数字被交换到合适的位置(该位置的前一个数字小于该数字)为止。
>>> * 直到数组最后一个数字交换到合适的位置后，数组整体变成有序。
>>> * 完整代码如下：
```typescript
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
```
>>> * 时间复杂度为O(N ^ 2)，插入排序能保证排序的稳定性。
>>### 4.快速排序
>>> ### 思路：
>>> * 对于无序数组Array选定一个标志数K(数组末尾位置的数)，将小于K的数都移动到数组的左边区域，大于K的数都移动到数组的右边区域。
>>> * 再对小于K的左边区域执行上述步骤，大于K的右边区域同理，递归执行划分区域的过程。
>>> * 划分区域的过程如下：
>>>> * 设置左边小于K的区域边界Small为数组开头索引，右边大于K的区域边界Large为数组倒数第二索引(因为数组末尾索引是标志数)，索引index用来遍历数组，初始化为数组开头索引。
>>>> * 当Array[index] < 标志数K，将Array[index]与Array[small]交换，Small右移，index右移。
>>>> * 当Array[index] = 标志数K，index右移，不采取任何动作。
>>>> * 当Array[index] > 标志数K，将Array[index]与Array[large]交换，Large左移。
>>>> * 当index大于右边界Large时，此时将K与Large位置后一个数交换。
>>>> * 按照Small往左的数字作为一个数组，index往右的数字作为一个数组，继续进行上述步骤，直到左右边界无法划分数组为止(数组越界)。
>>> * 完整代码如下：
```typescript
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
```
>>> * 时间复杂度为O(N * logN)，快速排序不能保证排序的稳定性。
>>### 5.归并排序
>>> ### 思路：
>>> * 以无序数组array的中间索引位置为中点，划分左右两组子数组，又以左右子数组各自的中间索引为中点，继续划分左右子数组，不断划分到数组无法再划分(子数组的元素个数为1或者0)为止。
>>> * 对每一对左右子数组进行合并操作，L1代表左子数组的开始索引，L2代表右子数组的开始索引，变量index代表合并操作后的数组helper的开始索引，初始化为0，过程如下：
>>>> * 当array[L1] > array[L2]时，将helper[index]位置的值设为array[L2]，index右移，L2右移。
>>>> * 当array[L1] <= array[L2]时，将helper[index]位置的值设为array[L1]，index右移，L1右移。
>>>> * 当L1右移超过左子数组的最大长度时，把右子数组的值填充到helper中。
>>>> * 当L2右移超过右子数组的最大长度时，把右子数组的值填充到helper中。
>>>> * 将helper数组中的值覆盖到原数组中。
>>> * 问题的关键在于将大数组切割成最小单元的数组，然后对每一轮切割都采取相同的合并操作。
>>> * 完整代码如下：
```typescript
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
```
>>> * 时间复杂度为O(N * logN)，归并排序可以保证排序的稳定性。
>>### 6.堆排序
>>> ### 思路：
>>> * 首先实现一个堆结构，每增加一个数，拿该数N1与其父节点((该数索引i - 1) / 2位置)的数N2作比较，如果N1 > N2，则N1与N2交换位置，继续拿N1与其父节点的数N3比较，直到N1的值小于其父节点为止。
>>> * 所有的数都依次摆放到正确的位置，形成一个大根堆，此时开始堆排序，数组头部数字N1与尾部数字N2交换，并将N2与其左子节点(2 * i + 1)的数，右子节点(2 * i + 2)的数中较大数N3比较，如果N2小于N3则将N2与N3交换位置，继续拿N2与其左右子节点较大的数比较，知道N2的值大于其左右子节点为止。
>>> * 完整代码如下：
```typescript
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
```
>>> * 时间复杂度为O(N * logN)，归并排序可以保证排序的稳定性。