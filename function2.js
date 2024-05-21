
// function powerof(x,y){

//     let product=1
//     for(let i=0; i<y;i++){
//         product*=x
//     }

//     return product
// }

// console.log(powerof(2,3))

// function powerof(x,y){
//     //stopping poin
//     if(y==1){
//         return x
//     }
//     return x* powerof(x,y-1)
// }

// console.log(powerof(5,3))


function factorial(n){
    // 4=> 4*3*2*1

    if(n===1){
        return 1
    }
    //
   return  n *factorial(n-1)
//    return  4 *factorial(n-1)
//    24
//    return  4 * 6 4
//    return  4 * 3
//    return  4 * 2     
    ///1
}


console.log(factorial(4))


1 
