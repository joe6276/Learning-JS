// let name1 ="John"
// let name2=name1// copy the value
// name2= "Mary"

// console.log(name1)
// console.log(name2)

// var bool= true /false
//hold  true/false or any value that can evaluate to true or false


/// numbers
//all numbers between this range are treated as numbers in JS
console.log(Number.MIN_SAFE_INTEGER)
console.log(Number.MAX_SAFE_INTEGER)

console.log(Number.isSafeInteger(12378348763478))
console.log(Number.isSafeInteger(Number.MAX_SAFE_INTEGER + 3))


let  x= Number.MAX_SAFE_INTEGER + 3

console.log(typeof x)


// if(condition){// condition has to something that results to true or false 

//     //what to print/do when the condition is true
// }else{
//     //what to print/do when the condition is false
// }

//
// _ variable  camelCase , snake_Case
//classes - Pascal Case


// undefined - null
// you never gave a value unintentionally
//null
// you never gave a value intentionally

let results =null; //( right now there is no value, I know there is no value and im okey with it)

let c // is data coming from an API ---(The API is not running/ working)

// console.log(c)// undefined


// Strings

// []--arrays literals 

//'' "" `` -- string literals
// when a compiler see any of the above they treat that variable as a string 
// '' ""
let name3 ="Rodgers"
let name4 ='Nelly'

//use any of the two

// let sentense = " my name is "+ name4
// " I did BBIT at Dedan Kimathi University"+"
//  Graduated with first class  honours"+ "
//   and I hate Swimming" // unary operator -convert string to Number 
//code it is not 'clean code '-- readable/ mantainable code 


//i cant put strings in multilines (unless i use concatenation(+))
//not readable
// it adds \n for all new lines automatically 
// Expression -- referencing to an external variable / function with a return type
//Template strings / Backticks
// let sentense =`my name is ${name4}
// I did BBIT at Dedan Kimathi University
// Graduated with first class  honours
// `

// console.log(sentense)

let firstName = "Samuel"
let secondName="Waweru"
let age=19

let agestr= age.toString()//converts from number to string

console.log(typeof agestr)

//trim does NOT remove all whitespaces --it removes whitespaces before and after a string


