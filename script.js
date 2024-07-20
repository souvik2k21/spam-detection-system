// Script for header background change on scroll
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.querySelector("header").style.backgroundColor =
      "rgba(0, 123, 255, 1)";
  } else {
    document.querySelector("header").style.backgroundColor =
      "rgba(0, 123, 255, 0.8)";
  }
}
