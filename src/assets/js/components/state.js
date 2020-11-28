console.log(`state`);

/*
 * Gallery add active state
 */

// 1 - Liste du projet
// project list item : .container__projects .project__item
// project list item : add class is-active
// project list item : remove class is-hover

// 2 - Gallery du projet
// project gallery item : .wrapper__container__images
// project gallery item : add class is-active
// project gallery item : remove class is-hover

// 3 - Change opacity to 1 to .container_images__info and .container_images__gallery
//     of .wrapper__container__images
// .container_images__info - opacity 0 -> 1
// .container_images__gallery - opacity 0 -> 1

// 4 - Click on the project list item to show the gallery
// href + matchingSection to find the correspondant project gallery item
// project list item add class is-active
// project list item remove class is-hover
// project gallery item  add class is-active
// project gallery item remove class is-hover
// project gallery item info add class info-is-active
// project gallery item gallery add class gallery-is-active
// container of list item - opacity 1 -> 0.1
