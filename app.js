const btn = document.getElementById('btn')


// function getLocation(){
//     navigator.geolocation.getCurrentPosition(posData=>{
//         setTimeout(()=>{
//             console.log(posData)
//         },2000)
    
//     }, error=>{
//         console.log(error)
//     })
// }

function setTimer(duration ){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Hello there")
        },2000)
    })
}

function getLocation1(){
    const promise = new Promise((resolve,reject)=>{
        navigator.geolocation.getCurrentPosition(positionData=>{
            resolve(positionData)
        }, error=>{
            reject(error)
        })
    })

    return  promise
}

async function trackHandler(){
    // getLocation1().then(data=>{
    //     console.log(data)
       
    // }).catch(error=>{
    //     console.log(error)
    //     return setTimer(1000)
    // }).then(res=>{
    //     console.log(res)
    // })

   try {
    const positionData=await getLocation1()
    const timerResult= await setTimer(3000)
    console.log(positionData,timerResult)
   } catch (error) {
    console.log(error)
   }
}


btn.addEventListener('click', trackHandler)