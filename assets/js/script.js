let search = document.querySelector('.search-box');
let cart = document.querySelector('.cart');
let user = document.querySelector('.user');

document.querySelector('#search-icon').onclick = () => {
    search.classList.toggle('active');
    cart.classList.remove('active');
    user.classList.remove('active');
}

// Navbar Scroll
let header = document.querySelector('header');

window.addEventListener('scroll', () => {
    header.classList.toggle('shadow', window.scrollY > 0);
});

document.querySelector('#cart-icon').onclick = () => {
    cart.classList.toggle('active');
    search.classList.remove('active');
    user.classList.remove('active');
}

document.querySelector('#user-icon').onclick = () => {
    user.classList.toggle('active');
    search.classList.remove('active');
    cart.classList.remove('active');
}

// Initialize Swiper

var swiper = new Swiper(".new-arrival", {
    spaceBetween: 20,
    loop:true,
    centeredSlides: true,
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },
    breakpoints: {
        0: {
            slidesPerView: 0,
        },
        568: {
            sliderPerView: 2,
        },
        768: {
            sliderPerView: 2,
        },
        1020: {
            slidesPerView: 3,
        },
    },
  });