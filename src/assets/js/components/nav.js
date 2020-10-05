const navTrigger = document.querySelector('nav p:nth-child(2)');
const about = document.querySelector('.container__about');
const button = document.querySelector('.container__about button');
const containerAbout = document.querySelector('.container__about');

window.addEventListener('DOMContentLoaded', ()=> {
    navTrigger.addEventListener('click', function() {
        about.classList.toggle('container__about--active');
        navTrigger.classList.toggle('nav__element--active');
    });

    /*
     * script for clicking outside of container
     * https://www.blustemy.io/detecting-a-click-outside-an-element-in-javascript/
     */
    containerAbout.addEventListener("click", (evt) => {
        const aboutMe = document.querySelector('.about__me');
        let targetElement = evt.target; // clicked element

        if (targetElement == aboutMe) {
            // true
        } else {
            about.classList.remove('container__about--active');
            navTrigger.classList.remove('nav__element--active');
        }
    });


});





