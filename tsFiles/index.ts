import numberCollection from './numberCollection'
import characterCollection from './characterCollection'
import Linklist from './linkListCollection'

let myNumberSorter= new numberCollection([1,2,0,4,3,23,14,11])
myNumberSorter.bubbleSort();
console.log(myNumberSorter.data)

let myCharSorter= new characterCollection("XGhnvqwua")
myCharSorter.bubbleSort();
console.log(myCharSorter.data);


let myList= new Linklist()
myList.add(5)
myList.add(2)
myList.add(6)
myList.add(1)
myList.bubbleSort()
console.log(JSON.stringify(myList))