import { aboutMe } from '../js/data.js';
import { articles } from '../js/data.js';
import { renderMostRecentPosts } from '../js/common.js';

const mainContainer = document.getElementById('main-container');

const renderContent = () => {
  const html = `
        <article id="article-container" class="article-container">
            <img class="profile-photo" src="../${aboutMe.image}" alt="${aboutMe.altText}">
            <h1 class="title">${aboutMe.title}</h1>
            <p class="intro">${aboutMe.introduction}</p>
            <h3 class="subheading">${aboutMe.subheading1}</h3>
            <p class="text">${aboutMe.contentParagraph1}</p>
            <p class="text">${aboutMe.contentParagraph2}</p>
            <h3 class="subheading">${aboutMe.subheading2}</h3>
            <p class="text">${aboutMe.contentParagraph3}</p>
            <p class="text">${aboutMe.contentParagraph4}</p>
        </article>
    `;

  mainContainer.innerHTML = html;

  if (articles.length > 0) {
    renderMostRecentPosts();
  }
};

renderContent();
