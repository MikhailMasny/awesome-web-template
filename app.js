import setModalEvents from './assets/js/modal.js';
import setTabsEvents from './assets/js/tabs.js';

function main() {
    setModalEvents();
    setTabsEvents();
}

document.addEventListener('DOMContentLoaded', main);