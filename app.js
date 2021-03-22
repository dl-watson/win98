import {
  makeDraggable,
  toggleHidden,
  toggleStart,
  updateClock,
  closePopup,
  elemArray,
} from "./utils.js";

$(document).ready(() => {
  makeDraggable(elemArray);

  closePopup();

  toggleStart();

  toggleHidden();

  window.setInterval(updateClock, 6000);
  updateClock();
});
