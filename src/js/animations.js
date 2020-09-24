const TOP_BANNER = document.getElementById('banner');
const IMAGE_ABOUT = document.querySelector('.about__background__image');
const ARTICLE_ABOUT = document.querySelector('.about__article__background');
const IMG_SERVICE = document.querySelector('.services__image__service');
const TITLE_ORCAMENTO = document.querySelector('.budget__link');


gsap.registerPlugin(ScrollTrigger);

gsap.set(TOP_BANNER, {opacity: 0});
gsap.to(TOP_BANNER, { duration: 2, opacity: 1 });    


gsap.from(IMAGE_ABOUT, {
    duration: 2, x: 300, ease: "back.out(1.7)",
    scrollTrigger: {
        trigger: IMAGE_ABOUT,
        start:"top 75%"
    }
});  

gsap.set(IMG_SERVICE, {opacity: 0});
gsap.to(IMG_SERVICE, {
    duration: 2, ease: "back.out(1.7)",opacity:1,
    scrollTrigger: {
        trigger: IMG_SERVICE,
        start:"top 75%"
    }
});  


gsap.set(TITLE_ORCAMENTO, {opacity: 0, fontSize:"0"});
gsap.to(TITLE_ORCAMENTO, {
    duration: 2, ease: "power1.in", opacity:1, fontSize:"1.5rem",
    scrollTrigger: {
        trigger: TITLE_ORCAMENTO,
        start:"top 75%"
    }
}); 




