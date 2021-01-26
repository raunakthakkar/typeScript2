import {Sorter} from './sorting-class'
class node{
    constructor(public data:number,public next:node|null=null){}
}

export default class Linklist extends Sorter{

    constructor(public head:node|null=null, public leng:number=0){
      super()  
    }
    get length()
    {
        return this.leng
    }
    add(data:number){
        if(!this.head){
            this.head= new node(data)
            this.leng+=1
        }
        else{
            let temp:node|null =this.head
            while(temp.next!==null){
                temp=temp.next
            }
            temp.next=new node(data)
            this.leng+=1
        }
    }
    at(postion:number):node{
        if(!this.head || postion>this.leng){
            throw new Error("index out of bounds")
        }
            let temp:node|null=this.head
            let countr=0
            while(temp!==null){
                if(countr==postion){
                    break;
                }
                countr+=1
                temp=temp.next
            }
            if(temp==null){
                throw new Error("index out of bounds")
            }
        return temp
    }

    compare(leftInd:number,rightInd:number):boolean{
        return this.at(leftInd).data>this.at(rightInd).data
    }
    swap(leftInd:number,rightInd:number):void{
        const left=this.at(leftInd).data
        this.at(leftInd).data=this.at(rightInd).data
        this.at(rightInd).data=left
    }
}