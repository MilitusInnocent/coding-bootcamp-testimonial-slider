const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const slides = document.querySelectorAll('.slide');

let position = 0;

function showSlide() {
    slides.forEach((slide) => {
        slide.style.display = 'none';
    }); 
    slides[position].style.display = 'flex';
}

function nextSlide(){
    position++

    if(position>slides.length-1){
        position = 0;
    }
    showSlide();
}

function prevSlide(){
    position--

    if(position<0){
        position = slides.length-1;
    }
    showSlide();
}

nextButton.addEventListener('click', nextSlide);
prevButton.addEventListener('click', prevSlide);