import { lockScroll, scrollLockStatus, unlockScroll } from './scroll-lock.js';

export const openPopup = (popup) => {
  if (popup && scrollLockStatus) {
    lockScroll();
    popup.classList.add('popup-open');

    popup.addEventListener('click', (event) => {
      if (!event.target.closest('.popup__content')) {
        closePopup(event.target.closest('.popup'));
      }
    });
  }
};

export const closePopup = (popup) => {
  if (scrollLockStatus) {
    unlockScroll();
    popup.classList.remove('popup-open');
  }
};
