let body = document.body;
// ЯКОРЬ
$(function () {
  $("body a[href^='#']").click(function (e) {
    var target = $(this).attr("href");
    $("html, body").animate({
      scrollTop: $(target).offset().top - $("header").outerHeight() + 5
    });
    e.preventDefault();
  });
});

// БУРГЕР-МЕНЮ
if (jQuery(window).width() < 768) {
  let headerNav = document.querySelector('.header__nav');
  let burger = document.querySelector('.header__burger');

  burger.addEventListener('click', function () {
    body.classList.toggle('_lock');
    headerNav.classList.toggle('_active');
    burger.classList.toggle('_active');
  });

  $('.header__navlink').on('click', function (e) {
    $('.header__nav').toggleClass("_active");
    $('.header__burger').toggleClass("_active");
    $('body').toggleClass("_lock");
    e.preventDefault();
  });
};

// СЛАЙДЕРЫ
var owl1 = $('.customers__list');
var owl2 = $('.examples__list');

owl1.owlCarousel(
  {
    loop: true,
    dots: false,
    margin: 30,
    responsive: {
      // breakpoint from 768 up
      0: {
        items: 1
      },

      992: {
        items: 2
      },

      1400: {
        items: 3
      }
    }
  }
);

owl2.owlCarousel(
  {
    items: 1,
    loop: true,
    center: true,
    dots: false,
    margin: 100,
    responsive: {
      // breakpoint from 768 up
      0: {
        stagePadding: 20
      },

      768: {
        stagePadding: 40
      }
    }
  }
);

$('.customers__arrow-left').click(function () {
  owl1.trigger('prev.owl.carousel');
});

$('.customers__arrow-right').click(function () {
  owl1.trigger('next.owl.carousel');
});

$('.examples__arrow-left').click(function () {
  owl2.trigger('prev.owl.carousel');
});

$('.examples__arrow-right').click(function () {
  owl2.trigger('next.owl.carousel');
});

// БУФЕР ОБМЕНА
let mail = document.querySelector('.contacts__mail');
let modal = document.querySelector('.contacts__modal');
mail.addEventListener('click', () => {
  navigator.clipboard.writeText(mail.textContent);
  modal.classList.add('_visible');
  setTimeout(() => {
    modal.classList.remove('_visible');
  }, 2000)
});

// МОДАЛЬНЫЕ ОКНА
let popup = document.querySelector('.coating__popup');
let cards = document.querySelectorAll('.coating__card');
let coatings = document.querySelectorAll('.coating__item');
let coatButtons = document.querySelectorAll('.coating__button');

coatings.forEach(element => {
  element.addEventListener('click', function () {
    document.body.classList.toggle('_lock');
    cards[element.id].classList.toggle('open');
    popup.classList.toggle('_active');
  });
});

coatButtons.forEach(button => {
  button.addEventListener('click', function () {
    let openCard = document.getElementsByClassName('open')[0];
    document.body.classList.toggle('_lock');
    openCard.classList.toggle('open');
    popup.classList.toggle('_active');
  });
});