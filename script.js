"use strict"
document.addEventListener('DOMContentLoaded', function () {
  const hamburgerMenu = document.querySelector('.header__hamburgerMenu')
  const header = document.querySelector('.header')
  
  hamburgerMenu.addEventListener('click', function () {
    header.classList.toggle('menuActive')
  
  });
  

const accordionHeaders = document.querySelectorAll('.question__box')

accordionHeaders.forEach((accordionHeader) => {
  accordionHeader.addEventListener('click', (e) => {
    e.preventDefault();
    const content = accordionHeader.nextElementSibling;
    accordionHeader.classList.toggle('active');
    content.classList.toggle('open');
  })
});

const nav = document.querySelectorAll('.header__item > a')

nav.forEach((el) => {
  el.addEventListener('click', function(){
    header.classList.remove('menuActive')
  });
});


const submitButtons = document.querySelectorAll('.c-buttonSmall');

submitButtons.forEach(function(button) {
  button.addEventListener('click', function() {
    this.value = '資料ダウンロードありがとうございました!';
    this.setAttribute('disabled', true);
    this.classList.add('disappear');
  });
});


  const slider1 = new Swiper('.slider1', {
    direction: 'horizontal', // デフォルトは水平方向
    loop: true,              // スライダーをループさせる
    speed: 3000,
    slidesPerView: 5,
    spaceBetween: 80,
    autoplay: {     //追記
      delay: 0,   //追記
  },    
  breakpoints: {
    1300: {
      slidesPerView: 5, 
      slidesPerGroup: 1, 
      spaceBetween: 30,
    },
    720: {
      slidesPerView: 4, 
      slidesPerGroup: 1, 
      spaceBetween: 30,
    },
    420: {
      slidesPerView: 3, 
      slidesPerGroup: 1, 
      spaceBetween: 30,
    },
    375: {
      slidesPerView: 2, 
      slidesPerGroup: 1, 
      spaceBetween: 30,
    },
  },   

  });


const slider2 = new Swiper('.slider2', {
  direction: 'horizontal', // デフォルトは水平方向
  speed: 1000,
  effect: 'slide',
  spaceBetween: 70,
  navigation: {
    nextEl: '.slider2 .swiper-button-next', // 次へボタン
    prevEl: '.slider2 .swiper-button-prev', // 前へボタン
  },
  
  breakpoints: {
    720: {
      slidesPerView: 2, 
      slidesPerGroup: 2, 
    },
    430: {
      slidesPerView: 1, 
      slidesPerGroup: 1, 
    },
    
    
  },
});

});
