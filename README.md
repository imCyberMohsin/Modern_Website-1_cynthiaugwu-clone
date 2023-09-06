# Fix Bugs
1. MiniCircle
2. Text when img hover is switched
...


# Smooth Scroll Tutorial

1. Visit https://github.com/locomotivemtl/locomotive-scroll
2. copy locomotive-scroll.css
3. copy smooth scroll js
   Smooth Scroll script:
   const scroll = new LocomotiveScroll({
        el: document.querySelector('#main'),
        smooth: true
   });
4. Put the loco css in a separate file
5. Put the js script in script.js
6. Link the smooth-scroll JS & CSS in the HTML
7. link the CDN of smooth scroll inside <script> tag
<script src="https://cdn.jsdelivr.net/npm/locomotive-scroll@3.5.4/dist/locomotive-scroll.min.js"></script>


# GSAP Tutorial
1. Go to GSAP CDN & link the script to HTML
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js" integrity="sha512-16esztaSRplJROstbIIdwX3N97V1+pZvV33ABoG1H2OyTttBxEGkTsoIVsiP1iaTtM8b3+hu2kB6pQ4Clr5yug==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>

2.


# Circle With Mousemove Tutorial
1. HTML
<div id="miniCircle" class="miniCircle"></div>

2. CSS
   .miniCircle{
   width: 11px;
   height: 11px;
   position: absolute;
   border-radius: 50%;
   background-color: white;
   z-index: 999999;
   transition: all cubic-bezier(0.19, 1, 0.22, 1) 1s;
    display: none;
   }

3. JS
   const circleMouseFollow = () => {
    window.addEventListener('mousemove',(details) =>{
        // console.log(details.clientX, details.clientY);
        document.querySelector('#miniCircle').style.transform = `translate(${details.clientX}px, ${details.clientY}px)`
        document.querySelector('#miniCircle').style.display = 'block';
    })
} 
circleMouseFollow();


# Page & Content Slide when Pages Loads
1. Put every Element inside separate div 
2. translateY the element, below the div and hide the elements.
3. Now Use GSAP in Script.js