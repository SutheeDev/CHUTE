// const headers = document.querySelectorAll('header h1, section h1');

// headers.forEach((header) => {
//     const logo = header.querySelector('span');
//     const logoWidth = logo.clientWidth;

//     for (i = 0; i < 5; i++){
//         header.appendChild(logo.cloneNode(true));
//     }
 
//     const h1Tl = gsap.timeline({
//         repeat: -1,
//         yoyo: false,
//     });
//     h1Tl
//         .set(header, {
//             x: 0,
//             fontVariationSettings: '"wght" 130, "slnt" 45',
//         })
//         .to(header, {
//             x: logoWidth * -1,
//             fontVariationSettings: '"wght" 130, "slnt" -45',
//             ease: 'linear',
//             duration: 3,
//         })
    
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
// });

const textLine = document.querySelectorAll('header, section');


// const headerTl = gsap.timeline();
// headerTl
//     .set(header, {
//         x: 1000,
//         fontVariationSettings: '"wght" 130, "slnt" 45',
//     })
//     .to(header, {
//         x: 500,
//         fontVariationSettings: '"wght" 130, "slnt" 45',
//         duration: 3,
//         ease: 'linear',
//     })
//     .to(header, {
//         x: -500,
//         fontVariationSettings: '"wght" 130, "slnt" -45',
//         duration: 6,
//         ease: 'linear',
//     })
//     .to(header, {
//         x: -1000,
//         fontVariationSettings: '"wght" 130, "slnt" -45',
//         duration: 3,
//         ease: 'linear',
//     })

textLine.forEach((line) => {
    const header = line.querySelector('h1');
    const headerWidth = header.clientWidth;
    // const spanTag  = header.querySelectorAll('span');
    // const spanWidth = spanTag.clientWidth;
    console.log(headerWidth);

        const headerTl = gsap.timeline();
        headerTl
            .set(header, {
                // x: '120vw',
                x: headerWidth,
            })
            .to(header, {
                // x: '-120vw',
                x: headerWidth * -1,
                duration: 12,
                ease: 'linear'
            })

});



// const spanTl = gsap.timeline();
// spanTl
//     .set(spanTag, {
//         fontVariationSettings: '"wght" 130, "slnt" 45',
//         stagger: 1,
//     })
//     .to(spanTag, {
//         fontVariationSettings: '"wght" 130, "slnt" 45',
//         duration: 3,
//         ease: 'linear',
//         stagger: 1,
//     })
//     .to(spanTag, {
//         fontVariationSettings: '"wght" 130, "slnt" -45',
//         duration: 6,
//         ease: 'linear',
//         stagger: 1,
//     })
//     .to(spanTag, {
//         fontVariationSettings: '"wght" 130, "slnt" -45',
//         duration: 3,
//         ease: 'linear',
//         stagger: 1,
//     })






