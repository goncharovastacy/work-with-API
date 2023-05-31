document.addEventListener("DOMContentLoaded", (event) => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(user => {
        user.forEach(el => {
          createArticle(el.title, el.body)
        });
    })
    .catch(error => console.log(error));
  });

  function createArticle (headline, article) {
      const container = document.getElementById('container');
      const div = document.createElement('div');
      div.innerHTML = `<h3>Заголовок: ${headline}</h3>
      <p>Статья: ${article}</p>`;
      container.append(div);
  }