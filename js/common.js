const header = document.getElementById('header');
const navBar = document.createElement('nav');
const footer = document.getElementById('footer');

navBar.innerHTML = `
  <li class="logo"><img src="../images/logo-icon.png"></li>
  <li class="site-name">Lucie's Learning Journal</li>
  <li class="nav-link-first"><a href="/" class="nav-link">Home</a></li>
  <li><a href="#" class="nav-link">About Me</a></li>
`;

header.appendChild(navBar);

footer.innerHTML = `
  <div class="footer-container">
    <p class="footer-text-bold">Lucie's Learning Journal</p>
    <p class="footer-text">Copyright ©2023</p>
  </div>
`;
