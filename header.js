const header = document.querySelector('h1');
const logo = document.querySelector('h1 span');
const logoWidth = logo.clientWidth;

const logoTl = gsap.timeline({repeat: -1});
logoTl
    .set(logo, {
        x: logoWidth * 3,
        fontVariationSettings: '"wght" 130, "slnt" 45',
    })
    .to(logo, {
        x: 0,
        fontVariationSettings: '"wght" 130, "slnt" 0',
        ease: 'linear',
        duration: 3,
    })
    .to(logo, {
        x: logoWidth * -3,
        fontVariationSettings: '"wght" 130, "slnt" -45',
        ease: 'linear',
        duration: 3,
    })
