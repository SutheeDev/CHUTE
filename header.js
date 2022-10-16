const headers = document.querySelectorAll('header h1, section h1');

headers.forEach((header) => {
    const logo = header.querySelector('span');
    const logoWidth = logo.clientWidth;

    const h1Tl = gsap.timeline({repeat: -1});
    h1Tl
        .set(header, {x: logoWidth * 1})
        .to(header, {
            x: logoWidth * -1,
            ease: 'linear',
            duration: 3,
        })
    
    const logoTl = gsap.timeline({repeat: -1});
    logoTl
        .set(logo, {
            fontVariationSettings: '"wght" 130, "slnt" 45',
        })
        .to(logo, {
            fontVariationSettings: '"wght" 130, "slnt" -45',
            ease: 'linear',
            duration: 3, 
        })
});




