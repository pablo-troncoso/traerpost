document.addEventListener("DOMContentLoaded", () => {
  const boton = document.getElementById("post");
  const postData = document.getElementById("post-data");

  boton.addEventListener("click", getPosts);

  async function getPosts() {
    try {
      let data = await fetch("https://jsonplaceholder.typicode.com/posts");
      let respuesta = await data.json();
      let post = "";
      respuesta.forEach((element) => {
        post += `<div class="post"><h3>${element.title}</h3><p>${element.body}</p></div>`;

      });
      postData.innerHTML = post;
    } catch (e) {
      console.log(e);
    }
  }
});
