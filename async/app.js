// function getUser(cb){
//     setTimeout(()=>{
//         cb({name:'John'})
//     }, 2000)
// }

// const res= getUser(user=>{
//     console.log(user.name)
// })

//code execution is top to bottom (synchronous)
//getUser has a delay of 2ms

//Asynchronous
// Javascript is a single threaded language - java is multi threads
// but the browser is multi-thread -leverage

const btn = document.getElementById("btn");

// function getLocation(){
//     navigator.geolocation.getCurrentPosition(positionData=>{
//         setTimeout(()=>{
//             setTimeout(()=>{
//                 console.log(positionData)
//             },3000)
//         },3000)

//         //unmatainable, unreadble and untestable
//         //What is Callback Hell??
//were part of ES5
//     // use callback if there is no nesting

//    },error=>{
//     console.log(error)
//    })
// }

// function getLocation(){
// //ES6 ---Promises
// const promise= new Promise((resolve, reject)=>{
//         //resolve - is a callback for success state / reject is a CB for error or rejected state
//         // promises have 3 states ---Pending(data is beeen fetched )
//         // fulfilled - we got the data
//         // rejected/cancelled - we got an error

//            setTimeout(()=>{
//                  resolve({name:'John'})
//           }, 2000)
// })

// return promise
// }

function setTimer(duration) {
const promise= new Promise((resolve, reject)=>{
  setTimeout(() => {
    reject("After 2 seconds");
  }, duration)

})

return promise
}

function getLocation() {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      (positionData) => {
        resolve(positionData);
      },
      (error) => {
        reject(error);
      }
    );
  });
}
// function trackme() {
//     let positiondata;
//   getLocation().then((data) => {//.then only handles the sucess state 
//     positiondata=data// fulfilled state
//     //to pending
//     return setTimer(3000)
//   }).then(res=>{
//     console.log(res, positiondata)
//     // return "done"//this will be converted to a promise
//   }).then(res=>{
//     console.log(res);
//   }).catch(error=>{
//     console.log(error)//rejected 
//     // return "Retrying to get your position"
//   });


//   //promise chaining ----Callback say ---callback nesting
// }
async function trackme() {
    try {
        let res= await setTimer(3000)
        let position = await getLocation()
    
    
    console.log(res,position)
    } catch (error) {
        console.log(error)
    }
}

btn.addEventListener("click", trackme); //asynchronous code -trackme is a callback

// let result=0
// for(let i=0 ; i<100000000 ; i++){
//     result+=i
// }

// console.log(result)
