import setModalEvents from './assets/js/modal.js';
import setTabsEvents from './assets/js/tabs.js';
import setContactButtonEvent from './assets/js/input.js';

function main() {
    setModalEvents();
    setTabsEvents();
    setContactButtonEvent();
}

document.addEventListener('DOMContentLoaded', main);