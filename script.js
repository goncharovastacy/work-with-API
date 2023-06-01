const container = document.getElementById('container');

// создаем содержание дива
  function createArticle(obj){
    return `<h3>Заголовок: ${obj.title}</h3>
    <p>Статья: ${obj.body}</p>`;
  }

// создаем новый див
  function createDiv (content) {
    const div = document.createElement('div');
    div.innerHTML = content;
    return div;
  }

  document.addEventListener("DOMContentLoaded", (event) => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(user => {
        user.forEach(el => {
          const postText = createArticle(el);
          const divContent = createDiv(postText);
          container.append(divContent);
        });
    })
    .catch(error => console.log(error));
  });