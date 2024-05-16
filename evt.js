const button= document.querySelector('button')


// const fuctionHandler=()=>{
//     alert("clicked...")
// }



// const fuctionHandler1=()=>{
//     alert("clicked...")
// }

button.onclick=fuctionHandler

//you can only add one function

// AddEventListener

// button.addEventListener('click',fuctionHandler)
// button.addEventListener('click',function(){
//     alert("Second Event ...")
// })

//anonymous function is
// // 
// setTimeout(()=>{
//     button.removeEventListener('click',function(){
//         alert("Second Event ...")
//     })
// },3000)


// function myfunc(e){
//     console.log(e)
//     setTimeout(()=>{
//         e.target.disabled=true
//     },3000)
// }

// button.addEventListener('click', myfunc)


// const form= document.querySelector('form')

// form.addEventListener('submit',function (e){
//     e.preventDefault()
//     console.log(e)
// })


const div= document.querySelector('div')
div.addEventListener('click',function (){
    alert("Div Clicked..")
},true)


button.addEventListener('click',function (e){
    // e.stopPropagation()
    alert("button Clicked..")

},true)
