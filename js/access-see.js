var control_access = document.querySelector(".access"),
    page_body = document.querySelector("body"),
    link_control = document.querySelector(".not-to-see"),
    link_fontsize_small = document.querySelector(".a-fontsize-small"),
    link_fontsize_normal = document.querySelector(".a-fontsize-normal"),
    link_fontsize_big = document.querySelector(".a-fontsize-big"),
    link_fonttype_sans_sefrif = document.querySelector(".a-fonttype-sans-serif"),
    link_bg_white = document.querySelector(".a-bg-white"),
    link_bg_black = document.querySelector(".a-bg-black"),
    link_swith_version = document.querySelector(".switch-version");

link_control.addEventListener("click", function (ev) {
  ev.preventDefault();
  control_access.classList.add("access-show");
  link_control.classList.add("hide");
  /*select position*/
  link_fontsize_small.classList.add("a-fontsize-small-check");
  link_fonttype_sans_sefrif.classList.add("a-fonttype-sans-serif-check");
  bg_white();
});

link_fontsize_small.addEventListener("click", function (ev) {
  ev.preventDefault();
  fontsize_small();
});

link_fontsize_normal.addEventListener("click", function (ev) {
  ev.preventDefault();
  fontsize_normal();
});

link_fontsize_big.addEventListener("click", function (ev) {
  ev.preventDefault();
  fontsize_big();
});

link_bg_white.addEventListener("click", function (ev) {
  ev.preventDefault();
  bg_white();
});

link_bg_black.addEventListener("click", function (ev) {
  ev.preventDefault();
  bg_black();
});

link_swith_version.addEventListener("click", function (ev) {
  ev.preventDefault();
  if (page_body.classList.contains("bg-white")) {
    page_body.classList.remove("bg-white");
    control_access.classList.remove("access-show");
    link_control.classList.remove("hide");
  }
  if (page_body.classList.contains("bg-black")) {
    page_body.classList.remove("bg-black");
    control_access.classList.remove("access-show");
    link_control.classList.remove("hide");
  }
});

function fontsize_small() {
  if (link_fontsize_normal.classList.contains("a-fontsize-normal-check")) {
    link_fontsize_normal.classList.remove("a-fontsize-normal-check");
    page_body.classList.remove("fontsize-normal");
  }
  if (link_fontsize_big.classList.contains("a-fontsize-big-check")) {
    link_fontsize_big.classList.remove("a-fontsize-big-check");
    page_body.classList.remove("fontsize-big");
  }
  link_fontsize_small.classList.add("a-fontsize-small-check");
}

function fontsize_normal() {
  if (link_fontsize_small.classList.contains("a-fontsize-small-check")) {
    link_fontsize_small.classList.remove("a-fontsize-small-check");
  }
  if (link_fontsize_big.classList.contains("a-fontsize-big-check")) {
    link_fontsize_big.classList.remove("a-fontsize-big-check");
    page_body.classList.remove("fontsize-big");
  }
  link_fontsize_normal.classList.add("a-fontsize-normal-check");
  page_body.classList.add("fontsize-normal");
}

function fontsize_big() {
  if (link_fontsize_small.classList.contains("a-fontsize-small-check")) {
    link_fontsize_small.classList.remove("a-fontsize-small-check");
  }
  if (link_fontsize_normal.classList.contains("a-fontsize-normal-check")) {
    link_fontsize_normal.classList.remove("a-fontsize-normal-check");
    page_body.classList.remove("fontsize-normal");
  }
  link_fontsize_big.classList.add("a-fontsize-big-check");
  page_body.classList.add("fontsize-big");
}

function bg_white() {
  if (link_bg_black.classList.contains("a-bg-black-check")) {
    link_bg_black.classList.remove("a-bg-black-check");
    page_body.classList.remove("bg-black");
  }
  page_body.classList.add("bg-white");
  link_bg_white.classList.add("a-bg-white-check");
}

function bg_black() {
  if (link_bg_white.classList.contains("a-bg-white-check")) {
    link_bg_white.classList.remove("a-bg-white-check");
    page_body.classList.remove("bg-white");
  }
  page_body.classList.add("bg-black");
  link_bg_black.classList.add("a-bg-black-check");
}
