(function(window) {
  const app = window.app;
  const dotaHeroes = require('dota2-heroes');
  const quotes =  require('./quotes');

  const heroHeading = document.createElement('h1');
  const heroNameContainer = document.getElementById('hero-name');
  const heroImg = document.createElement('img');
  const heroImgContainer = document.getElementById('hero-img');
  const heroQuote = document.createElement('h2');
  const heroQuoteContainer = document.getElementById('quote-container');

  const rerollButton = document.getElementById('reroll');
  rerollButton.addEventListener("click", reroll);

  function initView () {
    const randomName = dotaHeroes.random();
    populateDom(randomName);
  }

  function populateDom (heroName) {
    const urlName = makeHeroNameURL(heroName);
    heroHeading.innerText = heroName;
    heroNameContainer.appendChild(heroHeading);
    heroImg.setAttribute("src", `http://cdn.dota2.com/apps/dota2/images/heroes/${urlName}_full.png`)
    heroImgContainer.appendChild(heroImg);
    heroQuote.innerText = quotes[heroName];
    heroQuoteContainer.appendChild(heroQuote);
  }

  function makeHeroNameURL (name) {
    const nameArr = name.toLowerCase().split(' ')
    if (nameArr.length === 2) {
      return `${nameArr[0]}_${nameArr[1]}`;
    }
    return name.toLowerCase();
  }

  function clearDom  () {
    heroNameContainer.innerHtml = '';
    heroImgContainer.innerHtml = '';
    heroQuoteContainer.innerHtml = '';
  }

  function reroll () {
    clearDom();
    initView();
  }

  initView();

})(window);
