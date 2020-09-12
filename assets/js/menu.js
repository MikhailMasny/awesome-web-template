import { MENU, MENU_BUTTON, MENU_BUTTON_CLOSE } from './constants.js';

function menuShow() {
  MENU.classList.remove('menu__hidden');
  MENU.classList.add('menu__show');
}

function menuClose() {
  MENU.classList.remove('menu__show');
  MENU.classList.add('menu__hidden');
}

export default function setMenuEvents() {
  MENU_BUTTON.addEventListener('click', menuShow);
  MENU_BUTTON_CLOSE.addEventListener('click', menuClose);
}
