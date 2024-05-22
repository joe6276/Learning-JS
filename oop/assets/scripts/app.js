let person={
    name:'John',
    age:19
}

// let mary1={
//     name:'Mary',
//     age:19
// }

// // if i want to create multiple objects it will be an issue/ we will write
// // redundant code

// //factory function
// function Person (name,age){
// return{
//     name,age
// }
// }

// //You have to always remember ro return 

// const jhn=Person('John', 12)
// const mary=Person('Mary', 12)
class Book{
    constructor(title,image,price){
            //initialize-- assigning initial values
            this.price=price
            this.title=title
            this.imageUrl=image
    }
}


class ElementAttribute{
    constructor(attrname, attrValue){
        this.value=attrValue
        this.name=attrname
    }
}

class Component{
    constructor(hookId , shouldRender=true){
    this.hookId= hookId
    if(shouldRender){
      this.render()
    }
    }

    render(){}
    createRootElement(tag ,cssClassNames, attributes){
        const rootElement= document.createElement(tag)
        if(cssClassNames){
            rootElement.className=cssClassNames
        }
        if(attributes &&  attributes.length>0){
            for (let attr of attributes){
                rootElement.setAttribute(attr.name, attr.value)
            }
        }
        document.getElementById(this.hookId).append(rootElement)
        // append to Parent
        return rootElement
    }
}
class BookItem extends Component{

    constructor(book, id){
        // this.book=book// this is wrong
        super(id,false)
        //calls parent constructor , pass argument to parent constructor
        //You use this keyword after super is called
        this.book=book
        this.render()
    }

    addToCart(){
    //    console.log(this.book) 
       App.addToCart(this.book)
    }

    render(){
        // const list =document.createElement('li')
        // list.className='product-item'

        const list=this.createRootElement('li','product-item')
        list.innerHTML=`
        <img src="${this.book.imageUrl}" alt="${this.book.title}"/>
        <h2> ${this.book.title}</h2>
        <p> \$ ${this.book.price}</P>
        <button>Buy</button>
        `
        const btn =list.querySelector('button')
        btn.addEventListener('click', this.addToCart.bind(this)) // this means the button)        
    }
}


class ShoppingCart extends Component{
    items=[]

    set setItem(value){
        this.items=value
        this.h2.innerHTML=`<h2>Total: \$ ${this.totalPrice}</h2>`
    }

    constructor(id){
        super(id)
    }
    get totalPrice(){
        return this.items.reduce((prev,cur)=>prev+ cur.price ,0)
    }
    render(){
        const section =this.createRootElement('section','cart')
        // section.className='cart'
        section.innerHTML=`
        <h2>Total: \$ 0</h2>
        <button>Order Now</button>
  ` 
        this.h2= section.querySelector('h2')
    //    return section
    }

    addToCart(book){
        let newItem=[...this.items, book]
        this.setItem=newItem
    }
 //should now bw accessed outside
//    #tax=16//private
//    //public

//    get getTax(){
//     return this.#tax
//    }

//    set setTax(value){
//     //validation
//     //check if the guy is the president 
//     //checks
//     this.#tax=value
//    }

   
}


// const sc=new ShoppingCart()
// console.log(sc.getTax)
// sc.setTax=18
// console.log(sc.getTax)
class BookList extends Component{
    books=[
        new Book('AI CheatCodes',
        'https://cdn.pixabay.com/photo/2015/07/27/20/16/book-863418_1280.jpg',
         345),
         new Book('JS CheatCodes',
        'https://cdn.pixabay.com/photo/2022/07/08/10/37/books-7309019_640.png',
         235)
    ]

    constructor(id){
        super(id,false)
        
       
            this.render()
        
    }
    render(){
       const bookEl=this.createRootElement('ul', 'product-list', [new ElementAttribute('id', 'products')])
       console.log(bookEl);
        for(let book of this.books){     
                 new BookItem(book,"products") 
        }
        
        }
}



class BookShop{
    static cart
    render(){
               const cart=new ShoppingCart("app")
        BookShop.cart=cart

    }
}

class App{
    static init(){
        const bookShop= new BookShop()
        bookShop.render()
         new BookList('app')
    }
    static addToCart(book){
        BookShop.cart.addToCart(book)
       
    }
}


App.init()




















