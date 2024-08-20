// Scroll header

const header = document.querySelector(".header");
const logoWhite = document.querySelector(".logo-white");
const logoViolet = document.querySelector(".logo-violet");
const navLink = document.querySelector(".nav-link");
const bar = document.querySelector(".bar");

window.onscroll = () => {
  scrollHeader();
};

const scrollHeader = () => {
  if (document.documentElement.scrollTop > 20) {
    header.classList.add("header-scroll");
    logoViolet.classList.add("show");
    logoWhite.classList.remove("show");
    navLink.classList.add("nav-scroll");
    bar.classList.add("bg-black");
  } else {
    header.classList.remove("header-scroll");
    logoViolet.classList.remove("show");
    logoWhite.classList.add("show");
    navLink.classList.remove("nav-scroll");
    bar.classList.remove("bg-black");
  }
};
