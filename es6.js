// destructuring 
let array=[
    {
        name:"John",
        salary:202333
    },
    {
        name:"Doe",
        salary:234236633
    },
    {
        name:"Jane",
        salary:20265333
    }
]

function sortBySalary(x, y){
    if(x.salary>y.salary){
        return 1
    }
    else if(x.salary<y.salary){
        return -1
    }else{
        return 0
    }
}

array.sort(sortBySalary)
//assuming you have a thousand employees==1000 objects
// top 10

const [leastpayed]=array

//array destructuring uses index
//leastpayed is going to represent the item at index 0

// console.log(leastpayed)

//rest operator(...)=> i represent an infinite/unknown number of element
// let arry1= ['John', 'Doe', "Jane","Mary"]
//uses the order
//rest operators it has to be the last argument=> cant e the first of midle
// let[y,x,...rest]=arry1
// console.log(y,x)

// let post=  {
//     "postId": 1,
//     "id": 2,
//     "name": "quo vero reiciendis velit similique earum",
//     "email": "Jayne_Kuhic@sydney.com",
//     "body": "est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et"
//   }

  //assuming there are 1000 props
  //interested in one

  //i can still use key
  // objects use keys to destructure
//   let {body, ...otherprops}=post

//   console.log(otherprops)

 let arry1= ['John', 'Doe', "Jane","Mary"]
//for in iterates through the keys /index

//  for( let index in arry1){
//     console.log(index , arry1[index])
//  }

arry1=arry1.map((element,index)=>element=element+12);


console.log(arry1)
//  for of --- used in array only 
//returns value only ---no index

//copy the values of arry1 into arry2
//[] means we are creating a new array 
//
// let arry2=[ moreName=['stephen'],...arry1]

// console.log(arry1)
// console.log(arry2)

// let obj1={
//     name:"John Doe",
//     age:12,
//     hobies:['swimming']
// }

// for(let x of Object.values(obj1)){
//     console.log(x)
// }
// console.log(Object.values(obj1))

// let obj2={
//     weight:65,
//     height:5.7
// }



// let john= {...obj1, ...obj2,height:5.9, hobies:[]}

// obj1.hobies[0]="Nature walks"
// console.log(john)