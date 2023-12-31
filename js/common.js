import { sortArticlesByDate, formatDate, getSlugFromUrl } from '../js/utils.js';
import { articles } from '../js/data.js';

const header = document.getElementById('header');
const hamburgerMenu = document.createElement('div');
const navBar = document.createElement('nav');
const footer = document.getElementById('footer');

hamburgerMenu.innerHTML = `
    <div id="hamburger-wrapper" class="hamburger-wrapper">
      <p class="hamburger"></p>
    </div>
`;

header.appendChild(hamburgerMenu);

navBar.innerHTML = `
<div class="logo-container">
  <li class="logo"><img src="../images/logo-icon.png"></li>
  <a class="nav-link-logo"href="/"><li class="site-name">Lucie's Learning Journal</li></a>
</div>
<div id="nav-links" class="nav-links">
  <li class="nav-link-first"><a href="/" class="nav-link">Home</a></li>
  <li><a href="/pages/about-me.html" class="nav-link">About Me</a></li>
</div>
`;

header.appendChild(navBar);

const hamburgerWrapper = document.getElementById('hamburger-wrapper');

hamburgerWrapper.addEventListener('click', function () {
  hamburgerWrapper.classList.toggle('open');
  const navLinks = document.getElementById('nav-links');
  navLinks.classList.toggle('active');
});

footer.innerHTML = `
  <div class="footer-container">
    <p class="footer-text-bold">Lucie's Learning Journal</p>
    <p class="footer-text">Copyright ©2023</p>
  </div>
`;

const renderRecentPoststTitleTemplate = () => {
  return `
        <h3 class="subheading center-align">Recent posts</h3>
  `;
};

const removeDisplayedArticleFromRecentPosts = (
  sortedArticles,
  displayedArticleSlug
) => {
  let hiddenArticleIndex;
  console.log(displayedArticleSlug);
  hiddenArticleIndex = sortedArticles.findIndex(
    (a) => a.slug === displayedArticleSlug
  );
  sortedArticles.splice(hiddenArticleIndex, 1);
};

export const renderMostRecentPosts = (slug) => {
  const articleContainer = document.getElementById('article-container');
  const recentArticlesContainer = document.createElement('div');
  recentArticlesContainer.classList.add('recent-articles-container');
  articleContainer.innerHTML += renderRecentPoststTitleTemplate();
  const sortedArticles = sortArticlesByDate(articles);

  if (window.location.pathname.includes('article-detail')) {
    removeDisplayedArticleFromRecentPosts(sortedArticles, slug);
  }

  if (sortedArticles.length >= 3) {
    const html = sortedArticles
      .map((article, index) => {
        if (index <= 2) {
          const date = formatDate(article.date);
          return `
            <a href="/pages/article-detail.html#${article.slug}" class="article-link">
                <article data-id=${article.uuid}>
                    <img 
                        class="article-img" 
                        src="../${article.image}" 
                        alt="${article.altText}">
                    <p class="post-date">${date}</p>
                    <h2 class="post-title post-title-small">${article.title}</h2>
                    <p class="post-text">
                        ${article.content}
                    </p>
                </article>
            </a>
        `;
        }
      })
      .join('');

    recentArticlesContainer.innerHTML += html;
    articleContainer.appendChild(recentArticlesContainer);
  }
};
