import { MODAL, MODAL_BUTTON_CLOSE } from './constants.js'

function modalShow() {
    MODAL.classList.remove('modal__hidden');
    MODAL.classList.add('modal__show');
}

function openCurrentModal(event) {
    let cardIdentifier = event.target.dataset.strategy;
    if (!cardIdentifier) {
        return;
    }
    // send request to get information about card
    modalShow();
}

function modalShowOnTargetDataset() {
    document.addEventListener('click', function(event) {
        openCurrentModal(event);
    });
}

function modalClose() {
    MODAL.classList.remove('modal__show');
    MODAL.classList.add('modal__hidden');
}

function modalCloseOnBody() {
    window.onclick = function(event) {
        if (event.target == MODAL) {
            modalClose();
        }
    }
}

function modelCloseOnEvents() {
    modalCloseOnBody();
    MODAL_BUTTON_CLOSE.addEventListener('click', modalClose);
}

export {
    modalShowOnTargetDataset,
    modelCloseOnEvents,
}