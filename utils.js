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

export const helpCursor = () => {
  $("*").toggleClass("loading");
  setTimeout(() => {
    $("*").toggleClass("loading");
  }, 100);
};

export const makeDraggable = (
  window_one,
  window_two,
  note_one,
  note_two,
  explorer,
  computer,
  linkedin,
  github,
  twitter
) => {
  const elemArray = [
    window_one,
    window_two,
    note_one,
    note_two,
    explorer,
    computer,
    linkedin,
    github,
    twitter,
  ];
  return elemArray.map((elem) => $(elem).pep());
};

console.log(
  makeDraggable(
    window_one,
    window_two,
    note_one,
    note_two,
    explorer,
    computer,
    linkedin,
    github,
    twitter
  )
);

export const updateClock = () => {
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

export const toggleHidden = () => {
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

      helpCursor();
    }
  });

  $(note_two).click(() => {
    if ($(window_two).hasClass("hidden")) {
      $(window_two).toggleClass("hidden");

      helpCursor();
    }
  });
};

export const toggleStart = () => {
  $(start_button).click((e) => {
    $(start_button).toggleClass("sb_click");
    $(start_menu).slideToggle();
  });

  $(start_menu).on("mouseleave", () => {
    $(start_button).toggleClass("sb_click");
    $(start_menu).slideToggle();
  });
};

export const closePopup = () => {
  $(ok).click(() => {
    $(ok).parent().parent().fadeOut();
  });
};
