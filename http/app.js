const baseURL = "http://localhost:3000/posts/";
const app = document.getElementById("app");
const btn = document.querySelector("#btn");
const title = document.querySelector("#title");
const content = document.querySelector("#content");

function getPosts() {
  fetch(baseURL)
    .then((res) => res.json())
    .then((data) => {
      displayUI(data);
    });
}

getPosts();

function displayUI(data) {
  let html = "";
  data.forEach((post) => {
    html += `<li class="item">
        <h2>${post.title}</h2>
        <p>${post.body}</p>
        <button onClick=updatePost('${post.id}')>update</button>
        <button onClick=deletePost('${post.id}')>DELETE</button>
        </li>`;
  });

  app.innerHTML = html;
}


async function createPost() {
  //a better is start by validating the inputs if ther are empty

  let newPost = {
    title: title.value,
    body: content.value,
  };

  //send a request
if(btn.textContent==='ADD'){
    await fetch(baseURL, {
        method: "POST",
        body: JSON.stringify(newPost),
      });
}
}


async function updatePost(id) {
  //prepopulate()-inputs and buttons

  // get  the post with that id
  let response = await fetch(baseURL + id);
  let post = await response.json();
  // console.log(post);
  if (post.id) {
    prepopulate(post);

    //
    btn.addEventListener("click", async () => {
      if (btn.textContent === "update") {
        let updatedPost = {
          title: title.value,
          body: content.value,
          id
        };
        await sendRequest(updatedPost);
      }
    });
  }
  //update
}


async function sendRequest({ id ,...updatedPost}){
    await fetch(baseURL+id, {
        method: "PUT",
        body: JSON.stringify(updatedPost),
      });
}


async function deletePost(id){
    await fetch(baseURL+id, {
        method: "DELETE"    
    });
}
function prepopulate(post) {
  content.value = post.body;
  title.value = post.title;
  btn.textContent = "update";
}
btn.addEventListener("click", createPost);
