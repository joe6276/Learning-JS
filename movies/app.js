let movies =[]

const maindiv=document.querySelector('.app')
const tInput= document.getElementById('title')
const iInput= document.getElementById('image')
const dInput= document.getElementById('description')
const button= document.getElementById('btn')


function displayMovies(){
    // to show all movies
    let html="";
    if(!movies.length){
        html='<p> <i> No movies found!!<i></p>'
    }else{
        movies.forEach(movie=>{
            html+=`
            <div class="item">
                <img src="${movie.image}" alt="">
                <h1>${movie.title}</h1>
                <p>${movie.description}</p>
                <div class='btn-c'>
                <button  onclick="updateMovie(${movie.id})">update</button>
                <button class='delete' onclick="deleteMovie(${movie.id})">delete</button>
                </div>
            </div>
            `
        })
    }

    // console.log(html)
    maindiv.innerHTML=html
}


function  prepopulate(existing){
    iInput.value=existing.image
    tInput.value= existing.title
    dInput.value=existing.description
}

function updateMovie(id){
    button.textContent='Update'
    let existing = movies.find(m=>m.id===id)
    prepopulate(existing)
    button.addEventListener('click', function(){
        if(button.textContent==='Update'){
           
            existing.image=iInput.value,
            existing.title=tInput.value,
            existing.description=dInput.value
            displayMovies()

            button.textContent="Add"
            iInput.value=''
            tInput.value=''
            dInput.value=''
        }
    })
    
}
function deleteMovie(id){
    if(window.confirm("Do you want to delete")){
        movies=movies.filter(m=>m.id!==id)
        displayMovies()
    } 
    console.log(id)  
}
function upsertMovie(){
    let newMovie={
        id:Math.floor(Math.random()*1000),
        image:iInput.value,
        title:tInput.value,
        description:dInput.value
    }
    if(button.textContent==="Add"){
        
        movies.push(newMovie)
        displayMovies()
    };
     
}
button.addEventListener('click', upsertMovie)
displayMovies()
