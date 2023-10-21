import { bodyLockStatus, bodyLockToggle, lockBody, unlockBody } from './functions';

// МЕНЮ-БУРГЕР
export function menuInit() {
  if (document.querySelector('.menu__icon')) {
    document.addEventListener('click', (event) => {
      const target = event.target as HTMLElement;

      if (bodyLockStatus && target.closest('.menu__icon')) {
        bodyLockToggle();
        document.documentElement.classList.toggle('menu-open');
        document.querySelector('.menu__body')!.classList.toggle('menu-open');
      }
      if (bodyLockStatus && target.closest('.menu__link')) {
        unlockBody();
        document.documentElement.classList.remove('menu-open');
        document.querySelector('.menu__body')!.classList.remove('menu-open');
      }
      if (bodyLockStatus && !target.closest('.menu__link')) {
        unlockBody();
        document.documentElement.classList.remove('menu-open');
        document.querySelector('.menu__body')!.classList.remove('menu-open');
      }
    });
  }
}

export function menuOpen() {
  lockBody();
  document.documentElement.classList.add('menu-open');
  document.querySelector('.menu__body')!.classList.add('menu-open');
}

export function menuClose() {
  unlockBody();
  document.documentElement.classList.remove('menu-open');
  document.querySelector('.menu__body')!.classList.remove('menu-open');
}
//----------------------------------------------------------------------
