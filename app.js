import setModalEvents from './assets/js/modal.js';
import setTabsEvents from './assets/js/tabs.js';
import setContactButtonEvent from './assets/js/input.js';
import setMenuEvents from './assets/js/menu.js';

function main() {
    setModalEvents();
    setTabsEvents();
    setContactButtonEvent();
    setMenuEvents();
}

document.addEventListener('DOMContentLoaded', main);