/*
 * plugin simpleBar : https://github.com/Grsmto/simplebar/tree/master/packages/simplebar
 * on stylise la bar de scroll avec la class .simplebar-scrollbar
 * .simplebar-scrollbar-thumb
 */
import SimpleBar from 'simplebar';

new SimpleBar(document.querySelector('.container__projects'), {
    direction: 'rtl'
});
