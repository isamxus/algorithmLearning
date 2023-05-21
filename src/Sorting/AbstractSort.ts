export abstract class AbstractSort {
    constructor(protected array:Array<number>){}
    abstract sort():void;
    abstract showArray():void;
}