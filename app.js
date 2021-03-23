import {
  makeDraggable,
  toggleHidden,
  toggleStart,
  updateClock,
  closePopup,
  elemArray,
  openPopup,
  scoutLoader,
  delayNote,
} from "./utils.js";

$(document).ready(() => {
  makeDraggable(elemArray);

  delayNote();

  window.setTimeout(scoutLoader, 1000);

  window.setTimeout(openPopup, 1000);
  closePopup();

  toggleStart();

  toggleHidden();

  window.setInterval(updateClock, 6000);
  updateClock();
});
