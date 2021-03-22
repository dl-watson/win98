import {
  makeDraggable,
  toggleHidden,
  toggleStart,
  updateClock,
  closePopup,
} from "./utils.js";

$(document).ready(() => {
  makeDraggable();

  closePopup();

  toggleStart();

  toggleHidden();

  window.setInterval(updateClock, 6000);
  updateClock();
});
