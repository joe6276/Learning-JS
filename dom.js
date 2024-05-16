//Nodes 

// element nodes
// text nodes
// attributes nodes 


// element is just one typr of a node- Element Node <li></li>

//Select an element (one element)

const b=document.getElementById('btn')
// query Selector--CSS Selector #btn .btn button 
//const ul= document.querySelector('ul')
//manipuulate 
// ul.innerText="Hello There"

//selecting multiple elements

//Query selector All

// const list= document.querySelectorAll('li')

// //Array Like

// const list1= document.getElementsByClassName('list_item')
// //Array Like

// const list2= document.getElementsByTagName('li')


// Traversing the DOM


 const ul= document.querySelector('ul')
// console.dir(ul.children)

/// HTML String
//Create Element

// HTML String
// affect performace 
// ul.insertAdjacentHTML('afterbegin' ,  "<strong>inserted text</strong>")

const p = document.createElement('p')
const p1 = document.createElement('p')
p.textContent="Appended paragraph"
p1.textContent="Appended paragraph"
const div = document.querySelector('div')

ul.removeChild(ul.children[2])
