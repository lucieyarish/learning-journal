import { articles } from './data.js';

const heroArticleContainer = document.getElementById('hero-article-container');
const allArticlesContainer = document.getElementById('all-articles-container');
console.log(allArticlesContainer);

const renderHeroArticle = () => {
  const html = `
            <article class="hero-post">
                <p class="post-date">July 23, 2023</p>
                <h1 class="hero-post-title">My new journey as a bootcamp student</h1>
                <p>
                    After several months of learning in the Frontend Developer Career Path, 
                    I've made the big jump over to the Bootcamp to get expert code reviews of my 
                    Solo Projects projects and meet like-minded peers.
                </p>
            </article>
    `;

  heroArticleContainer.innerHTML += html;
};

//TODO: find more elegant solution for rendering newest as hero post
//TODO: reverse order of articles - display newest first
const renderArticles = () => {
  const html = articles
    .map((article) => {
      return `
            <article data-id=${article.uuid}>
                <img 
                    class="article-img" 
                    src="${article.image}" 
                    alt="${article.altText}">
                    <p class="post-date">${article.date}</p>
                    <h2 class="post-title">${article.title}</h2>
                    <p class="post-text">
                        ${article.content}
                    </p>
            </article>
        `;
    })
    .join('');

  console.log(html);

  allArticlesContainer.innerHTML += html;
};

renderHeroArticle();
renderArticles();
