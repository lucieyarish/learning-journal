import { articles } from './data.js';

const heroArticleContainer = document.getElementById('hero-article-container');
const allArticlesContainer = document.getElementById('all-articles-container');

// HELPER FUNCTIONS
const sortArticlesByDate = () => {
  articles.sort((a, b) => b.date.getTime() - a.date.getTime());
};

sortArticlesByDate();

const formatDate = (date) => {
  const dateString = date.toDateString();
  const monthAndYearDate = dateString.substring(dateString.indexOf(' ') + 1);
  const dateWithComma = monthAndYearDate.replace(/(\s)(\d{4})/, ', $2');
  return dateWithComma;
};

// TEMPLATE RENDERING FUNCTIONS
const renderHeroArticle = (heroArticle) => {
  const heroDate = formatDate(heroArticle.date);
  const html = `
    <article data-id=${heroArticle.uuid} class="hero-post">
        <p class="post-date">${heroDate}</p>
        <h1 class="hero-post-title">${heroArticle.title}</h1>
        <p>
            ${heroArticle.content}
        </p>
    </article>
`;

  heroArticleContainer.innerHTML += html;
};

const renderArticles = () => {
  if (articles.length > 0 && articles !== undefined) {
    renderHeroArticle(articles[0]);

    const html = articles
      .map((article, index) => {
        const date = formatDate(article.date);
        if (index > 0) {
          return `
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
        `;
        }
      })
      .join('');

    allArticlesContainer.innerHTML += html;
  }
};

renderArticles();