let menuBtn = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .flex .navbar');

menuBtn.onclick = ()=>{
    menuBtn.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}




// about

$(window).scroll(function(){
    let position = $(this).scrollTop();
    if(position >= 700 ){
        $('.about-text').addClass('animRight')
        $('.about-img').addClass('animLeft')
    }else{
        $('.about-text').removeClass('animRight')
        $('.about-img').removeClass('animLeft')
    }
})

// end of about


const swiper = new Swiper('.review-slider', {
    // Default parameters
    spaceBetween: 20,
    grabCursor: true,
    loop: true,
    pagination: {
        el: "swiper-pagination",
        clickable: true,
    },
    // Responsive breakpoints
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 2,
      },
      // when window width is >= 640px
      640: {
        slidesPerView: 3.5,
      }
    }
})