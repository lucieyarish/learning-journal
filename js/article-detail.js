import { articles } from '../js/data.js';
import { formatDate } from './utils.js';
import { renderMostRecentPosts } from './common.js';

const mainContainer = document.getElementById('main-container');

const getSlugFromUrl = () => {
  const url = window.location.hash;
  return url.slice(1);
};

const renderAdditionalContent = (article) => {
  const html = `
        <h3 class="subheading">${article.subheading1}</h3>
        <p class="content-paragraph">${article.contentParagraph1}</p>
        <p class="content-paragraph">${article.contentParagraph2}</p>
        <h3 class="subheading">${article.subheading2}</h3>
        <p class="content-paragraph">${article.contentParagraph3}</p>
        <p class="content-paragraph">${article.contentParagraph4}</p>
    `;
  return html;
};

const renderArticle = () => {
  const slug = getSlugFromUrl();
  const article = articles.find((a) => a.slug === slug);

  //TODO: display full month name
  const date = formatDate(article.date);
  const html = `
        <article id="article-container" data-id=${article.uuid} class="article-container">
            <p class="post-date">${date}</p>
            <h1 class="post-title">${article.title}</h1>
            <p>${article.content}</p>
                <img 
                    class="article-img hidden" 
                    src="../${article.image}" 
                    alt="${article.altText}">
        </article>
    `;

  mainContainer.innerHTML = html;

  if (article.uuid === 'e36a8f90-b7cb-43e2-a609-0a6a466ecbc9') {
    const currentArticle = document.getElementById('article-container');
    currentArticle.innerHTML += renderAdditionalContent(article);
  }

  if (articles.length > 0) {
    renderMostRecentPosts();
  }
};

renderArticle();
