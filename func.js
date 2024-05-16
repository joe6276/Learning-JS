//  // function - code on demand
const btn = document.getElementById("btn")
//  // function declaration

//  function sayHi()//parameters 
//  {
//     console.log("Hello World")
//  }

//  function sayHi1()//parameters 
//  {
//    return "Hello World"
//  }

//  sayHi()// direct Execution


 
// //method use . Notation
//  btn.addEventListener('click', sayHi)// is indirect execution of function
//  //its not us executing the function -- its Javascript

//  console.log( sayHi1() )


//  // Parameter  -- Arguments
//  function sayHi2(myname)//parameters --placeholder 
//  {
//     console.log(`${myname} said Hello World`)
//  }

//  sayHi2("John Doe")  //Arguments -- concrete values 

//  // fuction -- Methods



//  let person={
//     name:"John Doe",
//     walk: function(){//method
//         console.log("Walking...")
//     }
//  }


//  person.walk()


//  //functions are object -- Reference types

//  console.dir(sayHi2)



// Function Expression

// const sayHi= function(){// function has  no name its called an Anonymous function
//     console.log("Hello World")
// }

btn.addEventListener("click",function (){//Anonymous function 
    console.log("Hello World",age)
})

//debugging anonymous function is not very easy


// function expression  vs function declaration
// function are hoisted -- (available at the top)
// i can execute before initialization-- if it exist 
//for function declaration are hoisted
//for fE are hoisted but not initialized
//fd

// sayHi1()
// function sayHi1(){
//     console.log("Hello World",age)
// }

// // sayHi()
// const sayHi= function(){
//     console.log("Hello World")
// }


// Arrow functions
//came with ES6
// shorter syntax

// function sayHi1(){
//     console.log("Hello World")
// }


// // arrow but with no arguments // only one expression
// const sayHi=()=>console.log("Hello World")
// // arrow but with one arguments // only one expression
// const sayHi23=thename=>console.log(`${thename} said Hello World`)
// // arrow but with one arguments // multi expression
// const sayHi2=thename=>{
//     thename="John Doe"
//     console.log(`${thename} said Hello World`)
    
// }


//multiple arguments one expression
// const add =(a,b)=> a+b

// //multiple arguments and more than one expression
// //use return keyword (if the function has a return type)
// //use curly braces 
// const add1 =(a,b)=>{
// a+=10
// b+=10
// return a+b

// }
// console.log(add1(1,3))



// sayHi()
// sayHi1()
// sayHi2("Evans")


// Hotel 
//One waiter 
//10 customer 
//Janet 
// Blocks the rest- Synchronous-- take order -wait for chef to prep
//next person -wait for chef 

// pick the first customer take order -give it to the Chef
//go to the next person get the order -give to the chef


console.log("Hello World")


///
setTimeout( function(){
    console.log("Hello after 2 secs")
}, 2000);

/// will wait for 2 seconds
// A problem (synchronous)
console.log("Hello James ")

// Asynchronous -- I dont wait 
// Hey browser kindly set a timer for me for 2000 secs 
// when they are over tell me .
// meanwhile i will continue working on the rest
//2000 secs are over
//it executes the function

// function gameOn(command){
// // exit
// // stop
// if(command==='exit'){
//     return// stop execution
// }

// console.log("Game on..")
// }

// gameOn("exitefd")


// I want to create a function that adds numbers given by a user 
// 6
//10
//3
//56
//7

/// ES6 -REST (...) -- take n numbers and make an array
function add(...numbers){
    // [1,2,3,4,5,6]
 return numbers.reduce((acc,cur)=> acc+cur,0)
}


// console.log(add(1000,1,2,3,4,5,6))
// console.log(add(1000, 1,2))



//default parameter

function addtoTax(addon, tax=16){
    return tax+addon
}

console.log(addtoTax(3))
console.log(addtoTax(3,12))
let x =10
x-=10

console.log(x)//loose strict --it does not check datatype
