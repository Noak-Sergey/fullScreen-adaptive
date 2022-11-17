window.addEventListener('DOMContentLoaded', () => {

    const hamburger = document.querySelector('.icon-menu'),
        body = document.querySelector('body'),
        menuBody = document.querySelector('.menu__body');    
 
    hamburger.addEventListener('click', () => {
     hamburger.classList.toggle('active'); 
     body.classList.toggle('lock'); 
     menuBody.classList.toggle('active');
    });

//simple slider ===============================================
    const slides = document.querySelectorAll('.slider__item'),
          slider = document.querySelector('.slider'),
          btns = document.querySelectorAll('.slider__btn');
    let i = 0;
    slider.addEventListener('click',() => {
        ++i;
        if ( i >= slides.length) {
            slides[i-1].classList.remove("slider__item_show");
            btns[i-1].classList.remove("bg-active");
            i = 0;
            slides[i].classList.add("slider__item_show");
            btns[i].classList.add("bg-active");
        } else {
            slides[i-1].classList.remove("slider__item_show");
            btns[i-1].classList.remove("bg-active");
            slides[i].classList.add("slider__item_show");
            btns[i].classList.add("bg-active");
        }
    } )
 })