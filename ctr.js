// if(condition){
// //stop there if this is true

// if()
// }else if(condition){
// //is true we stop else continue
// }else{
//     //non of the above evaluates to true
// }
// age=29
// if(age<10){
//     console.log("Still a Baby..")
// }
// else if(age<20){
// //nested if
//     if(age<18){
//         console.log("Teenager..")
//     }else{
//         console.log("An adult..")
//     }
// }else{
//     console.log("We mzee..")
// }

//at some point you will be writting alot else if cases 
//the code is not readable
//its advised to use switch 



// switch(expression){
//     //cases:""
//         //break
//     //default
// }
// let day ="teusday"
// switch(day){
//     case "monday":
//         console.log("Monday is great")
//         return
//         //stop executing 
//     case "teusday":
//         console.log("I'm very ready for teusday")
//         break
//     case "wednesday":
//         console.log(" Hump Day")
//         return
//     default:
//         console.log("not covered")
//         break
// }

// while(condition){
//     ///do that
//     //repeat until condition is false
// }

 let x=0
// while(x!=0){
//     console.log(x)
//     x++
// }

//condition> print >increment >repeat until its false

// is 8 a power of 2


// do{
//     // you get a change to do something before the condition is evaluated
// }while(condition)

    // do
    // {
    //     console.log(x)
    //     //runs atleast once 
    // }
    // while(x!=0)

// for(let i=0; i<=10; i++){
//     console.log(i)
// }
//initial runs once
//the condition is checked if yes
// the statements execute
//if condition is false --statement dont execute
//the final expression executes

//repeat

//the condition is checked if yes
// the statements execute
//if condition is false --statement dont execute
//the final expression executes

// for(initial_expression,[condition], final expression){
//     {statement}
// }

// 

// let username ="John" // global scope
// //same variable but in different scope --shadowing
function setUser(user){//function scope
    let username =user// local scope  (var,let,const ) of the dummy parent 
    //even if i use var iw wont be available outside the function
    return username

    function dummy(){
        let username ="Esther"//local scope--child
        console.log(username)
    }

}


// two scopes what can be defines as local scope- function / block 
//block scope
// {
//     var username="Joseph"

// }

// console.log(setUser("Mary"))
// console.log(username)

// lexical scoping

// first check if there is username in the local scope
// first check if there is username in the function scope/ block scope
//first check if there is username in the global scope scope


for (let i =0 ; i<10; i++){

    //to skip 5 use continue
    //to stop use break

    if(i==5){
        break
    }
    console.log(i)
}



