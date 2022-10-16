const headers = document.querySelectorAll('header h1, section h1');

headers.forEach((header) => {
    const logo = header.querySelector('span');
    const logoWidth = logo.clientWidth;

    for (i = 0; i < 5; i++){
        header.appendChild(logo.cloneNode(true));
    }
 
    const h1Tl = gsap.timeline({
        repeat: -1,
        yoyo: false,
    });
    h1Tl
        .set(header, {
            x: 0,
            fontVariationSettings: '"wght" 130, "slnt" 45',
        })
        .to(header, {
            x: logoWidth * -1,
            fontVariationSettings: '"wght" 130, "slnt" -45',
            ease: 'linear',
            duration: 3,
        })
    
    // const logoTl = gsap.timeline({repeat: -1});
    // logoTl
    //     .set(logo, {
    //         fontVariationSettings: '"wght" 130, "slnt" 45',
    //     })
    //     .to(logo, {
    //         fontVariationSettings: '"wght" 130, "slnt" -45',
    //         ease: 'linear',
    //         duration: 3, 
    //     })
});




