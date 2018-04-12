var control_access = document.querySelector(".access"),
    page_body = document.querySelector("body"),
    link_control = document.querySelector(".not-to-see"),
    link_fontsize_small = document.querySelector(".a-fontsize-small"),
    link_fontsize_normal = document.querySelector(".a-fontsize-normal"),
    link_fontsize_big = document.querySelector(".a-fontsize-big"),
    link_fonttype_sans_serif = document.querySelector(".a-fonttype-sans-serif"),
    link_fonttype_serif = document.querySelector(".a-fonttype-serif"),
    link_bg_white = document.querySelector(".a-bg-white"),
    link_bg_black = document.querySelector(".a-bg-black"),
    link_img_off = document.querySelector(".a-image-on"),
    link_swith_version = document.querySelector(".switch-version");

link_control.addEventListener("click", function (ev) {
  ev.preventDefault();
  control_access.classList.add("access-show");
  link_control.classList.add("hide");
  /*select position*/
  /*link_fontsize_small.classList.add("a-fontsize-small-check");*/
  fontsize_small();
  fonttype_sans();
  /*link_fonttype_sans_serif.classList.add("a-fonttype-sans-serif-check");*/
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

link_fonttype_sans_serif.addEventListener("click", function (ev) {
  ev.preventDefault();
  fonttype_sans();
});

link_fonttype_serif.addEventListener("click", function (ev) {
  ev.preventDefault();
  fonttype_serif();
});

link_bg_white.addEventListener("click", function (ev) {
  ev.preventDefault();
  bg_white();
});

link_bg_black.addEventListener("click", function (ev) {
  ev.preventDefault();
  bg_black();
});


link_img_off.addEventListener("click", function (ev) {
  ev.preventDefault();
  link_img_off.classList.toggle("a-image-off");
  page_body.classList.toggle("img-off");
});

link_swith_version.addEventListener("click", function (ev) {
  ev.preventDefault();
  if (page_body.classList.contains("fontsize-normal")) {
    page_body.classList.remove("fontsize-normal");
    link_fontsize_normal.classList.remove("a-fontsize-normal-check");
  }
  if (page_body.classList.contains("fontsize-big")) {
    page_body.classList.remove("fontsize-big");
    link_fontsize_big.classList.remove("a-fontsize-big-check");
  }
  if (page_body.classList.contains("fonttype-sans")) {
    page_body.classList.remove("fonttype-sans");
  }
  if (page_body.classList.contains("fonttype-serif")) {
    page_body.classList.remove("fonttype-serif");
    link_fonttype_serif.classList.remove("a-fonttype-serif-check");
  }
  if (page_body.classList.contains("bg-white")) {
    page_body.classList.remove("bg-white");
  }
  if (page_body.classList.contains("bg-black")) {
    page_body.classList.remove("bg-black");
    link_bg_black.classList.remove("a-bg-black-check")
  }
  if (page_body.classList.contains("img-off")) {
    page_body.classList.remove("img-off");
    link_img_off.classList.remove("a-image-off");
  }
  control_access.classList.remove("access-show");
  link_control.classList.remove("hide");

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

function fonttype_sans() {
  if (link_fonttype_serif.classList.contains("a-fonttype-serif-check")) {
    link_fonttype_serif.classList.remove("a-fonttype-serif-check");
    page_body.classList.remove("fonttype-serif");
  }
  link_fonttype_sans_serif.classList.add("a-fonttype-sans-serif-check");
  page_body.classList.add("fonttype-sans");
}

function fonttype_serif() {
  if (link_fonttype_sans_serif.classList.contains("a-fonttype-sans-serif-check")) {
    link_fonttype_sans_serif.classList.remove("a-fonttype-sans-serif-check");
    page_body.classList.remove("fonttype-sans");
  }
  link_fonttype_serif.classList.add("a-fonttype-serif-check");
  page_body.classList.add("fonttype-serif");
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
