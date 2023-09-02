//* Script - Modern Website 1 

// Getting Elements
const HoverElement = document.querySelector('.element');
const hoverImg = document.querySelectorAll('.hover-img');

const ShowImagesWhenHover = () =>{
    HoverElement.addEventListener('mouseover', () => {
        hoverImg.style.display = 'block';
    })
}

// ShowImagesWhenHover();