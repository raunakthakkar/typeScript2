import {Sorter} from './sorting-class';

export default class NumberCollection extends Sorter{
    constructor(public data: number[]){
        super()
    }
    get length():number{
        return this.data.length
    }
    compare(leftIndx:number,rightIndx:number):boolean{
        return this.data[leftIndx]>this.data[rightIndx]
    }
    swap(leftInd:number, rightInd:number):void{
        const leftHand=this.data[leftInd]
        this.data[leftInd]=this.data[rightInd]
        this.data[rightInd]=leftHand

    }
}
