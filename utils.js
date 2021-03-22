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

export const elemArray = [
  window_one,
  window_two,
  note_one,
  note_two,
  explorer,
  contact,
  computer,
  linkedin,
  github,
  twitter,
];

const draggableOptions = {
  cssEaseDuration: 0,
  deferPlacement: true,
  place: false,
  elementsWithInteraction: elemArray.map((elem) => $(elem)),
  startClass: "no_click",
};

export const helpCursor = () => {
  $("*").toggleClass("loading");
  setTimeout(() => {
    $("*").toggleClass("loading");
  }, 100);
};

export const makeDraggable = (elemArray) => {
  return elemArray.map((elem) => $(elem).pep(draggableOptions));
};

// dragging a note icon immediately opens the note on mobile when dragging stops
// fixed issue on desktop
export const toggleHidden = () => {
  $(window_one_x).bind("touchmove", (e) => {
    e.preventDefault();
  });
  $(window_one_x).on("click touchstart", () => {
    $(window_one).unbind("touchmove");
    $(window_one).toggleClass("hidden");
  });

  $(window_two_x).bind("touchmove", (e) => {
    e.preventDefault();
  });
  $(window_two_x).on("click touchstart", () => {
    $(window_two).unbind("touchmove");
    $(window_two).toggleClass("hidden");
  });

  $(explorer).bind("touchmove", (e) => {
    e.preventDefault();
  });
  $(explorer_x).on("click touchstart", () => {
    $(explorer).unbind("touchmove");
    $(explorer).toggleClass("hidden");
  });

  $(note_one).bind("touchmove", (e) => {
    e.preventDefault();
  });
  $(note_one).on("click touchstart", () => {
    if ($(window_one).hasClass("hidden")) {
      $(note_one).unbind("touchmove");
      $(window_one).toggleClass("hidden");

      helpCursor();
    }
  });

  $(note_two).bind("touchmove", (e) => {
    e.preventDefault();
  });
  $(note_two).on("click touchstart", () => {
    $(note_two).unbind("touchmove");
    if ($(window_two).hasClass("hidden")) {
      $(window_two).toggleClass("hidden");

      helpCursor();
    }
  });
};

// currently working on mobile
export const toggleStart = () => {
  $(start_button).on("click", (e) => {
    $(start_button).toggleClass("sb_click");
    $(start_menu).slideToggle();
  });

  // not an option on mobile, user will need to click the start button again
  $(start_menu).on("mouseleave", () => {
    $(start_button).toggleClass("sb_click");
    $(start_menu).slideToggle();
  });
};

export const openPopup = () => {
  $(explorer).fadeIn();
  $(explorer).toggleClass("hidden");
};

// currently not working on mobile
export const closePopup = () => {
  $(ok).on("click", () => {
    $(explorer).fadeOut();
  });

  $(ok).on("touchstart", () => {
    $(explorer).toggleClass("hidden");
  });
};

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
