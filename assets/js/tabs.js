import { STRATEGY_TABS, STRATEGY_CARDS } from './constants.js';

function setDisableAllTabs() {
  STRATEGY_TABS.forEach(tab => {
    if (tab.classList.contains('strategy__badge-enable')) {
      tab.classList.remove('strategy__badge-enable');
    }
  });
}

function setEnableTargetTab(target) {
  target.classList.add('strategy__badge-enable');
}

function dropAllCardSorts() {
  STRATEGY_CARDS.forEach(card => {
    if (card.classList.contains('strategy__card-order')) {
      card.classList.remove('strategy__card-order');
    }
  });
}

function setCardSortsByName(name) {
  STRATEGY_CARDS.forEach(card => {
    if (card.dataset.strategyName.includes(name)) {
      card.classList.add('strategy__card-order');
    }
  });
}

function sortByName(event) {
  let strategyName = event.target.dataset.strategyName;
  if (!strategyName) {
    return;
  }

  setDisableAllTabs();
  setEnableTargetTab(event.target);

  dropAllCardSorts();

  if (strategyName == 'all') {
    return;
  }

  setCardSortsByName(strategyName);
}

export default function setTabsEvents() {
  document.addEventListener('click', function (event) {
    sortByName(event);
  });
}
