const ok = ".ok_button";
const start_button = ".start_button";
const start_menu = ".start_menu";
const clock = "#showClock";
const window_one = ".window_one";
const window_two = ".window_two";
const explorer = ".description";
const note_one = ".note_one";
const note_two = ".note_two";
const window_one_x = ".window_one .x";
const window_two_x = ".window_two .x";
const explorer_x = ".description .x";
const computer = ".computer";
const contact = ".contact";
const linkedin = ".pages";
const github = ".code";
const twitter = ".recycle";

$(document).ready(() => {
  $(window_one).draggable();
  $(window_two).draggable();
  $(note_one).draggable();
  $(note_two).draggable();
  $(explorer).draggable();
  $(computer).draggable();
  $(contact).draggable();
  $(linkedin).draggable();
  $(github).draggable();
  $(twitter).draggable();

  $(ok).click(() => {
    $(ok).parent().parent().fadeOut();
  });

  $(start_button).click(() => {
    $(start_button).toggleClass("sb_click");
    $(start_menu).slideToggle();
  });

  $(window_one_x).click(() => {
    $(window_one).toggleClass("hidden");
  });

  $(window_two_x).click(() => {
    $(window_two).toggleClass("hidden");
  });

  $(explorer_x).click(() => {
    $(explorer).toggleClass("hidden");
  });

  $(note_one).click(() => {
    if ($(window_one).hasClass("hidden")) {
      $(window_one).toggleClass("hidden");
    }
  });

  $(note_two).click(() => {
    if ($(window_two).hasClass("hidden")) {
      $(window_two).toggleClass("hidden");
    }
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
