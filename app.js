import {
  makeDraggable,
  toggleHidden,
  toggleStart,
  updateClock,
  closePopup,
  elemArray,
  openPopup,
} from "./utils.js";

$(document).ready(() => {
  makeDraggable(elemArray);

  window.setTimeout(() => openPopup(), 1000);
  closePopup();

  toggleStart();

  toggleHidden();

  window.setInterval(updateClock, 6000);
  updateClock();
});
