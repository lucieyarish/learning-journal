import { articles } from './data.js';
import { formatDate, sortArticlesByDate } from './utils.js';

const heroArticleContainer = document.getElementById('hero-article-container');
const allArticlesContainer = document.getElementById('all-articles-container');
const loadMoreContainer = document.getElementById('load-more-container');

sortArticlesByDate(articles);

const renderHeroArticle = (heroArticle) => {
  const heroDate = formatDate(heroArticle.date);
  const html = `
    <a href="pages/article-detail.html#${heroArticle.slug}" class="article-link">
        <article data-id=${heroArticle.uuid} class="hero-post">
            <img 
                class="article-img hidden" 
                src="${heroArticle.image}" 
                alt="${heroArticle.altText}">
            <p class="post-date">${heroDate}</p>
            <h1 class="hero-post-title">${heroArticle.title}</h1>
            <p>
                ${heroArticle.content}
            </p>
        </article>
    </a>
`;

  heroArticleContainer.innerHTML += html;
};

const renderRecentArticles = () => {
  const recentArticles = articles.slice(1, 4);
  renderArticles(recentArticles);
};

const renderViewMoreArticles = () => {
  const viewMoreArticles = articles.slice(4, articles.length);
  renderArticles(viewMoreArticles);
  loadMoreBtn.classList.add('hidden');
};

const renderArticles = (articlesToRender) => {
  const html = articlesToRender
    .map((article, index) => {
      const date = formatDate(article.date);
      return `
            <a href="pages/article-detail.html#${article.slug}" class="article-link">
                <article data-id=${article.uuid}>
                    <img 
                        class="article-img" 
                        src="${article.image}" 
                        alt="${article.altText}">
                    <p class="post-date">${date}</p>
                    <h2 class="post-title">${article.title}</h2>
                    <p class="post-text">
                        ${article.content}
                    </p>
                </article>
            </a>
        `;
    })
    .join('');

  allArticlesContainer.innerHTML += html;

  if (articles.length > 4) {
    loadMoreContainer.innerHTML += `<a href="#" id="load-more-btn" class="load-more-btn">View more</a>`;
  }
};

if (articles.length > 0 && articles !== undefined) {
  renderHeroArticle(articles[0]);
  renderRecentArticles();
}

document.getElementById('load-more-btn').addEventListener('click', function () {
  renderViewMoreArticles();
});
