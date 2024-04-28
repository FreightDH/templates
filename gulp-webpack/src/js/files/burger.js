import { scrollLockStatus, scrollLockToggle, unlockScroll, lockScroll } from './scroll-lock.js';

export const initMenu = () => {
  if (document.querySelector('.menu__icon')) {
    document.addEventListener('click', (event) => {
      if (scrollLockStatus && event.target.closest('.menu__icon')) {
        scrollLockToggle();
        document.documentElement.classList.toggle('menu-open');
        document.querySelector('.menu__body').classList.toggle('menu-open');
      }
      if (scrollLockStatus && event.target.closest('.menu__link')) {
        unlockScroll();
        document.documentElement.classList.remove('menu-open');
        document.querySelector('.menu__body').classList.remove('menu-open');
      }
      if (scrollLockStatus && !event.target.closest('.menu__link')) {
        unlockScroll();
        document.documentElement.classList.remove('menu-open');
        document.querySelector('.menu__body').classList.remove('menu-open');
      }
    });
  }
};

export const openMenu = () => {
  lockScroll();
  document.documentElement.classList.add('menu-open');
  document.querySelector('.menu__body').classList.toggle('menu-open');
};

export const closeMenu = () => {
  unlockScroll();
  document.documentElement.classList.remove('menu-open');
  document.querySelector('.menu__body').classList.toggle('menu-open');
};
