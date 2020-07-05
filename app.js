let sideNav = document.querySelector('.side-nav');
let toggler = document.querySelector('.toggler');
let closeBtn = document.querySelector('.close-btn');

// user click hamburger menu - sidebar appears - es6 function
toggler.addEventListener('click', ()=> {
    sideNav.style.left = '0'; // reset where menu appears at left of page
})

// user click close button - sidebar dissapears
closeBtn.addEventListener('click', () => sideNav.style.left = "-100%");
       
