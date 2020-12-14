const hamburgerMenu = document.querySelector('.nav__hamburger');
const closeNav = document.querySelector('.close__toggle');
const navMenu = document.querySelector('.nav__menu');
const body = document.querySelector('body');

// Open hamburger menu
hamburgerMenu.addEventListener('click', () => {
    const leftNav = navMenu.getBoundingClientRect().left;

    if(leftNav < 0) {
        navMenu.style.left = "0";
        body.classList.add('active');
    } else {
        navMenu.style.left = "-40rem";
        body.classList.remove('active');
    }
});

// Close hamburger menu
closeNav.addEventListener('click', () => {
    const leftNav = navMenu.getBoundingClientRect().left;

    if(leftNav > 0) {
        navMenu.style.left = "0";
        body.classList.add('active');
    } else {
        navMenu.style.left = "-40rem";
        body.classList.remove('active');
    }
});