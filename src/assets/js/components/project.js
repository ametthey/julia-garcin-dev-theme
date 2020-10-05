import Flickity from 'flickity';

let carousel = new Flickity ('.container_images__gallery', {
    // autoPlay: 1000,
    adaptiveHeight: true,
    lazyLoad: true,
    pageDots: false
});

/*
 * https://codepen.io/chriscoyier/pen/XQpqZV
 */
const project = document.querySelector('.project__item');
const projects = document.querySelectorAll('.project__item');
const galleries = document.querySelectorAll('.wrapper__container__images');
const container = document.querySelector('.container');

/******************************************************
 * Script for both
 ******************************************************/

projects.forEach(project => {
    project.addEventListener('click', e => {
        e.preventDefault();
        removeActiveProject();
        addActiveProject(project);
        clickOutside(project);

    });
    project.addEventListener('mousemove', e => {
        e.preventDefault;
        removeHoverProject();
        removeImageHover();
        addHoverProject(project);
    });
    project.addEventListener('mouseout', e => {
        e.preventDefault;
        const href = project.getAttribute('href');
        const matchingSection = document.querySelector(href);

        if (project.classList.contains('is-hover')) {
            project.classList.remove('is-hover');
            matchingSection.classList.remove('is-hover');
            matchingSection.querySelector('.container_images__gallery').style.opacity = '0';
        }
    });
});

project.addEventListener('click', () => {

});

/******************************************************
 * Remove Active State
 ******************************************************/

const removeActiveProject = () => {
    projects.forEach(project => {
        project.classList.remove('is-active');
    });
    galleries.forEach(gallery => {
        gallery.classList.remove('is-active');
    });
}

/******************************************************
 * Add Active State
 ******************************************************/

const addActiveProject = project => {
    const href = project.getAttribute('href');
    const matchingSection = document.querySelector(href);

    // Project List
    project.classList.add('is-active');
    project.classList.remove('is-hover');

    // Project Gallery Item
    matchingSection.classList.add('is-active');
    matchingSection.classList.remove('is-hover');

    // Show Project Gallery Item
    matchingSection.querySelector('.container_images__info').style.opacity = '1';
    matchingSection.querySelector('.container_images__gallery').style.opacity = '1';

    // Reduce Opacity On Main Container
    container.style.opacity = '0.1';

}

const clickOutside = project => {
    const href = project.getAttribute('href');
    const matchingSection = document.querySelector(href);

    matchingSection.addEventListener("click", function(evt) {
        evt.preventDefault();

        // this select the matchingSection child
        let flyoutElement = matchingSection.querySelector('.container_images__gallery'),
            targetElement = evt.target;  // clicked element

        do {
            if (targetElement == flyoutElement) {
                // This is a click inside. Do nothing, just return.
                console.log('Clicked inside!');
                return;
            }
            // Go up the DOM
            targetElement = targetElement.parentNode;
        } while (targetElement);

        // This is a click outside.
        matchingSection.classList.remove('is-active');
        matchingSection.querySelector('.container_images__info').style.opacity = '0';
        matchingSection.querySelector('.container_images__gallery').style.opacity = '0';
        container.style.opacity = '1';
        project.classList.remove('is-active');

        // reinitiate the carousel to the first slide for 1s delay
        setTimeout( function() {
            carousel.selectCell(0);
            }, 1000
        );
    });
}

/******************************************************
 *  Remove Hover State
 ******************************************************/

const removeHoverProject = () => {
    projects.forEach(project => {
        project.classList.remove('is-hover');
    });
    galleries.forEach(gallery => {
        gallery.classList.remove('is-hover');
        gallery.querySelector('.container_images__gallery').style.opacity = '0';
    });
}

/******************************************************
 * Add Hover State
 ******************************************************/

const addHoverProject = project => {
    project.classList.add('is-hover');
    const href = project.getAttribute('href');
    const matchingSection = document.querySelector(href);
    matchingSection.classList.add('is-hover');
    matchingSection.querySelector('.container_images__gallery').style.opacity = '0.3';
}

const removeImageHover = () => {
    const href = project.getAttribute('href');
    const matchingSection = document.querySelector(href);

    if (project.classList.contains('is-hover')) {
        project.classList.remove('is-hover');
        matchingSection.classList.remove('is-hover');
        matchingSection.querySelector('.container_images__gallery').style.opacity = '0';
    }
}
