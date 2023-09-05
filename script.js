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
    window.addEventListener('mousemove',(details) =>{
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
        // y: -10,
        opacity: 0,
        duration: .5,
        ease: 'Expo.EaseInOut',
    })
}

//? Second Page Animations
 


//! Function Calls 
circleMouseFollow();
// mouseCircleFix();
firstPageAnimation();