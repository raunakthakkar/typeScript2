import {Sorter} from './sorting-class'

export default class stringSorter extends Sorter{
    constructor(public data:string){
        super()
    }

    get length():number{
        return this.data.length
    }
    
    compare(leftInd:number,rightInd:number):boolean{
        return this.data[leftInd].toLowerCase()>this.data[rightInd].toLowerCase()
    }

    swap(leftInd:number,rightInd:number):void{
        let temp=this.data.split('')
        let leftChar=temp[leftInd]
        temp[leftInd]=temp[rightInd]
        temp[rightInd]=leftChar
        this.data=temp.join('')
    }
}