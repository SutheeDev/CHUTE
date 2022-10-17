// const textLines = document.querySelectorAll('header, section');
// textLines.forEach((line) => {
//     const header = line.querySelector('h1');
//     const headerWidth = header.clientWidth;
//     const spanTags  = header.querySelectorAll('span');
//     // const spanWidth = spanTag.clientWidth;
//     console.log(headerWidth);

//     const headerTl = gsap.timeline();
//     headerTl
//         .set(header, {
//             x: headerWidth,
//         })
//         .set(spanTags, {
//             fontVariationSettings: '"wght" 130, "slnt" 45',
//         })
//         .to(header, {
//             x: headerWidth / 4,
//             // fontVariationSettings: '"wght" 130, "slnt" 45',
//             duration: 4.5,
//             ease: 'linear',
//         })
//         .to(header, {
//             x: (headerWidth / 4) * -1,
//             duration: 3,
//             ease: 'linear',
//         })
//         .to(spanTags, {
//             fontVariationSettings: '"wght" 130, "slnt" -45',
//             duration: 3,
//             ease: 'linear',
//             stagger: {
//                 amount: 1,
//             },
//         }, '<')
//         .to(header, {
//             x: headerWidth * -1,
//             duration: 4.5,
//             ease: 'linear'
//         })
// });

const sections = document.querySelectorAll('header, section');
sections.forEach(section => {
    const heading = section.querySelector('h1');
    const headingWidth = heading.clientWidth;
    const spanTags = heading.querySelectorAll('span');

    spanTags.forEach(spanTag => {
        let rect = spanTag.getBoundingClientRect();
        let spanPosition = ((rect.right - rect.left) / 2) + rect.left; 
        // console.log(spanPosition);
        let vpWidth = window.innerWidth;
        let midPoint = vpWidth / 2;
        let deg = 0;
        if (spanPosition >= midPoint){
            let deg = Math.floor(((midPoint / 45) * (spanPosition - midPoint)) * 0.01);
            spanTag.style.fontVariationSettings = `"wght" 130, "slnt" ${deg}`;
        } else {
            let deg = Math.floor((midPoint / 45) * (midPoint - spanPosition) * -0.01);
            spanTag.style.fontVariationSettings = `"wght" 130, "slnt" ${deg}`;
        }
    });
    
    const headingTl = gsap.timeline();
    headingTl
        .set(heading, {
            x: 0,
        })
        .to(heading, {
            x: headingWidth * -1,
            duration: 12,
            ease: 'linear',
        })
});








