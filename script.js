//* Script - Modern Website 1 
//* Animations..... 

//! Functions... 
//? Smooth Scroll
const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

//? Circle on Mouse Cursor
const circleMouseFollow = (xScale, yScale) => {
    window.addEventListener('mousemove', (details) => {
        // console.log(details.clientX, details.clientY);
        document.querySelector('#miniCircle').style.transform = `translate(${details.clientX}px, ${details.clientY}px)`
        document.querySelector('#miniCircle').style.display = 'block';
    })
}
//? Fix the circle size when cursor is moved
// const mouseCircleFix = () => {
//     let xScale = 1; 
//     let yScale = 1; 

//     let xPrev = 0;
//     let yPrev = 0;

//     window.addEventListener('mousemove', (details) => {
//         yScale = gsap.utils.clamp(0.8, 1.2, details.clientY - yPrev);
//         xScale = gsap.utils.clamp(0.8, 1.2, details.clientX - xPrev);

//         xPrev = details.clientX;
//         yPrev = details.clientY;

//         circleMouseFollow(xScale, yScale);
//         setTimeout(() => {
//             document.querySelector('#miniCircle').style.transform = `translate(${details.clientX}px, ${details.clientY}px) scale(1, 1)`
//         }, 100)
//     })
// }

//? First Page Animations using GSAP
const firstPageAnimation = () => {
    const timeLine = gsap.timeline();

    // Nav Animation
    timeLine.from('.nav', {
        y: 10,
        opacity: 0,
        duration: 1,
        ease: 'Expo.easeInOut',
    })

    // Hero Headings Animations
    timeLine.to('.boundingElem', {
        y: 0,
        duration: 1.5,
        ease: 'Expo.easeInOut',
        stagger: .2,
    })

    // Hero-footer Animations
    timeLine.from('.hero-footer', {
        opacity: 0,
        duration: .5,
        ease: 'Expo.EaseInOut',
    })
}

//? Second Page Animations
const secondPageAimations = () => {
    const boundingElem = document.querySelectorAll('.element');

    boundingElem.forEach((element) => {
        //? Image Hover Listener
        element.addEventListener('mousemove', (details) => {
            // Center The Position of The Image
            const centerY = element.getBoundingClientRect().top + element.offsetHeight / 2;
            // const centerX = element.getBoundingClientRect().left + element.offsetWidth / 7;

            //get the global Client Y values of each div
            const diffY = details.clientY - centerY;
            const diffX = details.clientX - 200;

            // display image onHover
            gsap.to(element.querySelector('#hover-img'), {
                opacity: 1,
                ease: Power1,
                y: diffY,
                x: diffX,
            })

            // Move Text to right
            gsap.to(element.querySelector('#hover-h1'), {
                opacity: .5,
                x: 40,
                ease: Power1,
            })

            // Make circle Big With View Text
            const mouseCircle = document.querySelector('#miniCircle');
            mouseCircle.style.width = '40px';
            mouseCircle.style.height = '40px';
        })

        //? Reset The Image Positon When the MouseCursor leave the div
        element.addEventListener('mouseleave', () => {
            // reset image to 0
            gsap.to(element.querySelector('#hover-img'), {
                x: 0,
                y: 0,
                opacity: 0,
            })

            // reset text to 0
            gsap.to(element.querySelector('#hover-h1'), {
                opacity: 1,
                x: 0,
                y: 0,
            })

            // reset circle to normal size
            const mouseCircle = document.querySelector('#miniCircle');
            mouseCircle.style.width = '11px';
            mouseCircle.style.height = '11px';
        })
    })
}


//! Function Calls 
circleMouseFollow();
// mouseCircleFix();
firstPageAnimation();
secondPageAimations();