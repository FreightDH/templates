import Splide from '@splidejs/splide';

export function initSlider() {
  const splide = new Splide('.splide', {
    type: 'loop',
    perPage: 3,
    perMove: 3,
    gap: 15,
    speed: 1000,
    breakpoints: {
      1110: {
        perPage: 2,
        perMove: 2,
      },
      767.98: {
        arrows: false,
      },
      610: {
        perPage: 1,
        perMove: 1,
      },
    },
  });
  splide.mount();
}
