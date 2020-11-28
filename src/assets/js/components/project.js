import Flickity from 'flickity';

/*
 * https://codepen.io/chriscoyier/pen/XQpqZV
 */
// const project = document.querySelector('.project__item'); // THIS IS USELESS
const listProjects = document.querySelectorAll('.project__item');
const galleries = document.querySelectorAll('.wrapper__container__images');
const container = document.querySelector('.container');

let carousel = new Flickity('.container_images__gallery', {
    adaptiveHeight: true,
    lazyLoad: true,
    pageDots: false
});


/******************************************************
 * Script for both
 ******************************************************/

listProjects.forEach(project => {
    project.addEventListener('click', e => {
        e.preventDefault();
        removeActiveProject();
        addActiveProject(project);
        clickOutsideGallery(project);
        closeGalleryButton(project);
    });
    project.addEventListener('mousemove', e => {
        e.preventDefault;
        removeHoverProject();
        // removeImageHover(project);

        // Gallery Hover
        addGalleryHover(project);
    });
    project.addEventListener('mouseout', e => {
        e.preventDefault;

        // Gallery Hover
        removeGalleryHover(project);
    });
});

/******************************************************
 * Remove Active State
 ******************************************************/

const removeActiveProject = () => {
    listProjects.forEach(project => {
        project.classList.remove('is-active');
    });
    galleries.forEach(gallery => {
        gallery.classList.remove('is-active');
    });
}

/******************************************************
 * Click functions
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
    matchingSection.querySelector('.container_images__info').classList.add('info-is-active');
    matchingSection.querySelector('.container_images__gallery').classList.add('gallery-is-active');
    matchingSection.querySelector('.container_images__gallery').classList.remove('gallery-is-hovered');

    // Show Project Gallery Item
    // matchingSection.querySelector('.container_images__info').style.opacity = '1';
    // matchingSection.querySelector('.container_images__gallery').style.opacity = '1';

    // Reduce Opacity On Main Container
    container.classList.add('container-opacity-down');
    console.log('click on project to show the gallery');
}
/******************************************************
 * Outside gallery click
 ******************************************************/

const clickOutsideGallery = project => {
    const href = project.getAttribute('href');
    const matchingSection = document.querySelector(href);

    matchingSection.addEventListener("click", function (evt) {
        evt.preventDefault();

        // this select the matchingSection child
        let flyoutElement = matchingSection.querySelector('.container_images__gallery'),
            targetElement = evt.target; // clicked element

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
        matchingSection.querySelector('.container_images__info').classList.remove('info-is-active');
        matchingSection.querySelector('.container_images__gallery').classList.remove('gallery-is-active')

        container.classList.remove('container-opacity-down');
        project.classList.remove('is-active');

        // reinitiate the carousel to the first slide for 1s delay
        setTimeout(function () {
            carousel.selectCell(0);
            console.log('flickity is reinitiate');
        }, 700);
    });
}

/******************************************************
 * Close the gallery button
 ******************************************************/

const closeGalleryButton = project => {
    const href = project.getAttribute('href');
    const matchingSection = document.querySelector(href);
    const button = matchingSection.querySelector('.close-gallery-button span');

    button.addEventListener('click', function(evt) {
        console.log('click on button');
    });
}

/******************************************************
 * Hover functions
 ******************************************************/

const removeHoverProject = () => {
    listProjects.forEach(project => {
        project.classList.remove('is-hover');
    });
    galleries.forEach(gallery => {
        gallery.classList.remove('is-hover');
    });
}

const addGalleryHover = project => {
    const href = project.getAttribute('href');
    const matchingSection = document.querySelector(href);
    let matchingSectionGallery = matchingSection.querySelector('.container_images__gallery');

    project.classList.add('is-hover');

    matchingSection.classList.add('is-hover');
    matchingSectionGallery.classList.add('gallery-is-hovered');
}

const removeGalleryHover = project => {
    const href = project.getAttribute('href');
    const matchingSection = document.querySelector(href);
    let matchingSectionGallery = matchingSection.querySelector('.container_images__gallery');

    if ( project.classList.contains('is-hover') && matchingSectionGallery.classList.contains('gallery-is-hovered') ) {

        project.classList.remove('is-hover');

        matchingSection.classList.remove('is-hover');
        matchingSectionGallery.classList.remove('gallery-is-hovered');
    }
}



