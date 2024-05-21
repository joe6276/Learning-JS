// https://jsonplaceholder.typicode.com/posts
const baseURL="https://jsonplaceholder.typicode.com/posts"
const app= document.getElementById('app')
function getPosts(){
    fetch(baseURL).then(
        res=> res.json()
    ).then(data=>{
        displayUI(data)
    })
}

getPosts()


function displayUI(data){

    let html=''
    data.forEach(post=>{
        html+=`<li class="item">
        <h2>${post.title}</h2>
        <p>${post.body}</p>
        <button>update</button>
        <button>DELETE</button>
        </li>`
    })

    app.innerHTML=html
}

async function createPost(){
    let newPost={
        id:101,
        userId:10,
        title:"our own",
        body:"Some text.."
    }

   const res= await fetch(baseURL,{
        method:"POST",
        body:JSON.stringify(newPost)
    })

    console.log(await res.json())
}
createPost()