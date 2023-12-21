import { articles } from '../js/data.js';
import { formatDate } from './utils.js';

const mainContainer = document.getElementById('main-container');

const renderArticle = () => {
  //TODO: Extract logic into new func
  const url = window.location.hash;
  const slug = url.slice(1);

  const article = articles.find((a) => a.slug === slug);

  const date = formatDate(article.date);
  const html = `
        <article data-id=${article.uuid} class="hero-post">
            <img 
                class="article-img hidden" 
                src="../${article.image}" 
                alt="${article.altText}">
            <p class="post-date">${date}</p>
            <h1 class="hero-post-title">${article.title}</h1>
            <p>
                ${article.content}
            </p>
        </article>
    `;

  mainContainer.innerHTML = html;
};

renderArticle();
