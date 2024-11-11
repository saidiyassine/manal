
    let slideImages = document.querySelectorAll('.slides img');
    let next = document.querySelector('.next');
    let prev = document.querySelector('.prev');
    let dots = document.querySelectorAll('.dot');
    let counter = 0;
    let deleteInterval;

    function updateSlide() {
        slideImages.forEach((img, index) => {
            img.classList.remove('active');
            img.style.animation = ''; 
        });
        slideImages[counter].classList.add('active');
    }

    next.addEventListener('click', slideNext);
    function slideNext() {
        slideImages[counter].style.animation = 'next1 0.5s ease-in forwards';
        counter = (counter >= slideImages.length - 1) ? 0 : counter + 1;
        slideImages[counter].style.animation = 'next2 0.5s ease-in forwards';
        updateSlide();
        updateIndicators();
    }

    prev.addEventListener('click', slidePrev);
    function slidePrev() {
        slideImages[counter].style.animation = 'prev1 0.5s ease-in forwards';
        counter = (counter === 0) ? slideImages.length - 1 : counter - 1;
        slideImages[counter].style.animation = 'prev2 0.5s ease-in forwards';
        updateSlide();
        updateIndicators();
    }

    function updateIndicators() {
        dots.forEach(dot => dot.classList.remove('active'));
        dots[counter].classList.add('active');
    }

    function autoSliding() {
        deleteInterval = setInterval(slideNext, 3000);
    }
    autoSliding();

    const container = document.querySelector('.slide-container');
    container.addEventListener('mouseover', function() {
        clearInterval(deleteInterval);
    });

    container.addEventListener('mouseout', autoSliding);

    function switchImage(currentDot) {
        let imageId = parseInt(currentDot.getAttribute('attr'));
        if (imageId === counter) return; 

        if (imageId > counter) {
            slideImages[counter].style.animation = 'next1 0.5s ease-in forwards';
        } else {
            slideImages[counter].style.animation = 'prev1 0.5s ease-in forwards';
        }
        counter = imageId;
        slideImages[counter].style.animation = (imageId > counter) ? 'next2 0.5s ease-in forwards' : 'prev2 0.5s ease-in forwards';

        updateSlide();
        updateIndicators();
    }

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => switchImage(dot));
    });

