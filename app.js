import {
  makeDraggable,
  toggleHidden,
  toggleStart,
  updateClock,
  closePopup,
  elemArray,
  openPopup,
  scoutLoader,
} from "./utils.js";

$(document).ready(() => {
  makeDraggable(elemArray);

  window.setTimeout(openPopup, 1000);
  closePopup();

  toggleStart();

  toggleHidden();

  window.setInterval(updateClock, 6000);
  updateClock();

  window.setTimeout(scoutLoader, 1000);

  scoutLoader();
});
