var elSiteHeader = document.querySelector('.site-nav');

var elHeaderButtonOpen = document.querySelector('.header-button');

var elHeaderButtonClose = document.querySelector('.site-nav__button');

elHeaderButtonOpen.addEventListener("click", function (){
  elSiteHeader.classList.add("site-nav__open");
});

elHeaderButtonClose.addEventListener("click", function (){
  elSiteHeader.classList.remove("site-nav__open");
});