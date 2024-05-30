let burger = document.querySelector('.burger');
let menu = document.querySelector('.header__nav');
let menuLinks = menu.querySelectorAll('.nav__link');

burger.addEventListener('click',

  function() {

    burger.classList.toggle('burger--active');

    menu.classList.toggle('header__nav--active');

    document.body.classList.toggle('stop-scroll');
    
  })

menuLinks.forEach(function(el) {
  el.addEventListener('click', function() {

    burger.classList.remove('burger--active');

    menu.classList.remove('header__nav--active');

    document.body.classList.remove('stop-scroll');

  })
})


const swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});


let tabsBtn = document.querySelectorAll('.regimen__step-btn');
let tabsItem = document.querySelectorAll('.regimen__content');

tabsBtn.forEach(function(element){
  element.addEventListener('click', function(e){
    const path = e.currentTarget.dataset.path;

    tabsBtn.forEach(function(btn){ btn.classList.remove('regimen__step-btn--active')});
    e.currentTarget.classList.add('regimen__step-btn--active');

    tabsItem.forEach(function(element){ element.classList.remove('regimen__content--active')});
    document.querySelector(`[data-target="${path}"]`).classList.add('regimen__content--active');
  })
})




