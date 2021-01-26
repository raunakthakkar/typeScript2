// creating a sorting class that contains function irrespective of type given to that function
 export  abstract class Sorter{
    abstract length:number;
    abstract compare(left:number,right:number):boolean;
    abstract swap(leftInd:number,rightInd:number):void
    
    bubbleSort():void{
        let leng=this.length
        for(let i=0;i<leng;i++){
            for(let j=0;j<leng-i-1;j++){
                if(this.compare(j,j+1)){
                    this.swap(j,j+1)
                }
            }
        }
    }
}

