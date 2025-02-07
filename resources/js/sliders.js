//hero
document.addEventListener('DOMContentLoaded', function() {
    const swiper = new Swiper('.swiperHero', {
       loop: true,
       autoplay: {
          delay: 5000,
       },
       navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
       },
       pagination: {
          el: '.swiper-pagination',
          clickable: true,
       },
       slidesPerView: 1,
       spaceBetween: 10,
    });
 });



 document.addEventListener('DOMContentLoaded', () => {
    const swiper = new Swiper('.slider1', {
        loop: true,

        navigation: {
            nextEl: '.custom-next',
            prevEl: '.custom-prev',
        },

        breakpoints: {
            // Mobile - 1 slide
            320: {
                slidesPerView: 1,
                spaceBetween: 10
            },
            // Mobile landscape - 2 slides
            480: {
                slidesPerView: 2,
                spaceBetween: 15
            },
            // Tablet - 3 slides
            768: {
                slidesPerView: 3,
                spaceBetween: 15
            },
            // Desktop - 4 slides
            1024: {
                slidesPerView: 5,
                spaceBetween: 20
            },

        }

    });
});


document.addEventListener('DOMContentLoaded', () => {
    const swiper = new Swiper('.slider2', {
        loop: true,

        navigation: {
            nextEl: '.custom-next',
            prevEl: '.custom-prev',
        },

        breakpoints: {
            // Mobile - 1 slide
            320: {
                slidesPerView: 1,
                spaceBetween: 10
            },
            // Mobile landscape - 2 slides
            480: {
                slidesPerView: 2,
                spaceBetween: 15
            },
            // Tablet - 3 slides
            768: {
                slidesPerView: 3,
                spaceBetween: 15
            },
            // Desktop - 4 slides
            1024: {
                slidesPerView: 5,
                spaceBetween: 20
            },

        }

    });
});