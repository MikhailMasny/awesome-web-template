import { modalShowOnTargetDataset, modelCloseOnEvents } from './assets/js/modal.js'

function main() {
    modalShowOnTargetDataset();
    modelCloseOnEvents();
}

document.addEventListener('DOMContentLoaded', main);