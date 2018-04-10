var control_access = document.querySelector(".access");
var page_body = document.querySelector("body");
var link_control = document.querySelector(".not-to-see");
var link_swith_version = document.querySelector(".switch-version");

link_control.addEventListener("click", function (ev) {
  ev.preventDefault();
  control_access.classList.add("access-show");
  link_control.classList.add("hide");

});

link_swith_version.addEventListener("click", function (ev) {
  ev.preventDefault();
  if (control_access.classList.contains("access-show")) {
    control_access.classList.remove("access-show");
    link_control.classList.remove("hide");
  }
});
