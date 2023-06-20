const navMobile = document.querySelector('.nav-mobile');
const navBtn = document.querySelector('.hamburger');
const allNavLink = document.querySelectorAll('.nav__link');
const allSection = document.querySelectorAll('.section');
const footerYear = document.querySelector('.footer__year');

const handleNav =() => {
    navBtn.classList.toggle('is-active');
    navMobile.classList.toggle('nav-mobile--active');

   allNavLink.forEach(item =>  {
    item.addEventListener('click', () => {
        navMobile.classList.remove('nav-mobile--active')
    })
   })
}

const handleCurrentyear = () => {
    const year = (new Date) .getFullYear();
    footerYear.innerText = year;
}

handleCurrentyear();
navBtn.addEventListener('click', handleNav);