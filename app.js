const ok = ".ok_button";
const start_button = ".start_button";
const start_menu = ".start_menu";
const clock = "#showClock";
const window_one = ".window-one";
const window_two = ".window-two";
const explorer = ".description";

$(document).ready(() => {
  $(window_one).draggable();
  $(window_two).draggable();
  $(explorer).draggable();

  $(ok).click(() => {
    $(ok).parent().parent().fadeOut();
  });

  $(start_button).click(() => {
    $(start_button).toggleClass("sb_click");
    $(start_menu).slideToggle();
  });

  const updateClock = () => {
    const date = new Date();
    let mins = date.getMinutes();
    let hrs = date.getHours();
    let ext = "AM";

    if (hrs >= 12) {
      ext = "PM";
      if (hrs !== 12) {
        hrs = hrs - parseInt(12);
      }
    } else if (hrs < 10) {
      ext = "AM";
      hrs = "0" + hrs;
    }

    if (mins < 10) {
      mins = "0" + mins;
    }
    const currentTime = hrs + ":" + mins + " " + ext;
    $(clock).html(currentTime);
  };

  window.setInterval(updateClock, 6000);
  updateClock();
});
