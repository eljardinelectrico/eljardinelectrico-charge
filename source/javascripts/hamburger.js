export default () => {
  const menu = document.querySelector("nav > ul");
  const hamburger = document.querySelector(".hamburger");
  hamburger.onclick = function () {
    this.classList.toggle("is-active");
    menu.classList.toggle("visible");
  };
  menu.onclick = function () {
    if (hamburger.classList.contains("is-active")) {
      hamburger.onclick();
    }
  };
  document.onkeydown = function (evt) {
    evt = evt || window.event;
    if ("key" in evt) {
      isEscape = evt.key === "Escape" || evt.key === "Esc";
    } else {
      isEscape = evt.keyCode === 27;
    }
    if (isEscape && hamburger.classList.contains("is-active")) {
      hamburger.onclick();
    }
  };
};
