import { CONTACT_INPUTS, CONTACT_TEXT, CONTACT_BUTTON } from "./constants.js";

function clearInputs() {
  CONTACT_INPUTS.forEach((input) => {
    input.value = "";
  });
  CONTACT_TEXT.value = "";
  alert("Thanks!");
}

function checkValue(text) {
  if (text === "") {
    return false;
  }

  return true;
}

function checkInputs() {
  let verifiedInputs = [];
  CONTACT_INPUTS.forEach((input) => {
    verifiedInputs.push(checkValue(input.value));
  });
  verifiedInputs.push(checkValue(CONTACT_TEXT.value));

  const isIncorrect = verifiedInputs.includes(false);
  if (isIncorrect) {
    alert("Please, check inputs..");
    return;
  }

  // send data to..

  clearInputs();
}

export default function setContactButtonEvent() {
  CONTACT_BUTTON.addEventListener("click", function (event) {
    event.preventDefault();
    checkInputs();
  });
}
