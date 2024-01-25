import '../scss/style.scss';
import { isWebp } from './files/functions.js';
import { initMenu } from './files/burger.js';
import { initSwiper } from './files/swiper.js';

// Проверка поддержки webp, добавление класса webp или no-webp для HTML
isWebp();
// Модуль для работы с меню-бургер
// initMenu();
// Модуль для работы со свайпером
// initSwiper();
