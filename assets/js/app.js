const medias = document.querySelectorAll('.bulle');
const logo = document.querySelector('.logoAcc');
const present = document.querySelector('.presentation');

window.addEventListener('load', () => {

    const TL = gsap.timeline({paused: true});

    TL
    .staggerFrom(logo, 1, {opacity: 0, delay:1})
    .staggerFrom(medias, 1, {opacity:0}, 0.3, '+=1');

    TL.play();
});