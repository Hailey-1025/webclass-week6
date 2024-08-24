import './assets/scss/all.scss';

import 'bootstrap';

console.log("Hello world!");

// 首頁
// 精選文章
var swiper = new Swiper(".mySwiper-text", {
  slidesPerView: 1,
  slodesPerGroup: 2,
  spaceBetween: 48,

  pagination: {
    el: ".swiper-pagination-custom",
    type: "fraction",
  },
  navigation: {
    nextEl: ".swiper-next-text",
    prevEl: ".swiper-prev-text",
  },
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 768px
    768: {
      slidesPerView: 2,
      slodesPerGroup: 2,
      spaceBetween: 48,
    },
  },
});

var swiper = new Swiper(".mySwiper-text-mobile", {
  slidesPerView: 1,
  slodesPerGroup: 2,
  spaceBetween: 48,

  pagination: {
    el: ".swiper-pagination-custom2",
    type: "fraction",
  },
  navigation: {
    nextEl: ".swiper-next-text",
    prevEl: ".swiper-prev-text",
  },
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 768px
    768: {
      slidesPerView: 2,
      slodesPerGroup: 2,
      spaceBetween: 48,
    },
  },
});


// 大家都在看
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  slodesPerGroup: 2,
  spaceBetween: 48,

  pagination: {
    el: ".swiper-pagination-custom2",
    type: "fraction",
  },

  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 768px
    768: {
      slidesPerView: 2,
      slodesPerGroup: 2,
      spaceBetween: 48,
    },
  },
});

var swiper = new Swiper(".mySwiper-wrap", {
  slidesPerView: 1.1,
  spaceBetween: 24,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  scrollbar: {
    el: ".swiper-scrollbar",
    hide: true,
  },
});

// life
var swiper = new Swiper(".mySwiper-life", {
  slidesPerView: 3,
  slodesPerGroup: 3,
  spaceBetween: 24,
  navigation: {
    nextEl: ".swiper-next-life",
    prevEl: ".swiper-prev-life",
  },

});


// case
var swiper = new Swiper(".mySwiper-case", {
  slidesPerView: 1,
  spaceBetween: 24,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  scrollbar: {
    el: ".swiper-scrollbar",
    hide: true,
  },
});


// 登入註冊頁面
// Gpt寫的
(function () {
  'use strict';
  var forms = document.querySelectorAll('.needs-validation');
  Array.prototype.slice.call(forms).forEach(function (form) {
    form.addEventListener('submit', function (event) {
      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      }
      form.classList.add('was-validated');
    }, false);
  });
})();
