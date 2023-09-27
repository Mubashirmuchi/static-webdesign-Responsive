// script.js
const sliderContent = document.querySelector('.slider-content');
const slideButton = document.getElementById('slideButton');

slideButton.addEventListener('click', () => {
    const checkedRadio = document.querySelector('input[type="radio"]:checked');
    const index = Array.from(document.querySelectorAll('input[type="radio"]')).indexOf(checkedRadio);
    const slideWidth = document.querySelector('.slide').offsetWidth;
    
    sliderContent.style.transform = `translateX(-${index * slideWidth}px)`;
});
