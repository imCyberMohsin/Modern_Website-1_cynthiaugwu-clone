//* Script - Modern Website 1 
//* Animations..... 

//! Functions... 
//? Smooth Scroll
const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
}); 

//? Circle on Mouse Cursor
const circleMouseFollow = () => {
    window.addEventListener('mousemove',(details) =>{
        // console.log(details.clientX, details.clientY);
        document.querySelector('#miniCircle').style.transform = `translate(${details.clientX}px, ${details.clientY}px)`
        document.querySelector('#miniCircle').style.display = 'block';
    })
} 

//? First Page Animations using GSAP
// const firstPageAnimation = () => {
    
// } 


//! Function Calls 
circleMouseFollow();