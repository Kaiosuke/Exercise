// overflow body

const exploreBar = document.querySelector(".explore-bar");
const menuBar = document.querySelector(".menu-bar");
const wrapperInput = document.querySelector(".wrapper-input");
const label2 = document.querySelector(".overlay");
const body = document.body;

const checkOpenExplore = () => {
  exploreBar.addEventListener("click", () => {
    body.classList.toggle("overflowHidden");
    wrapperInput.classList.remove("open-bar");
  });
};

const checkCloseExplore = () => {
  label2.addEventListener("click", () => {
    body.classList.remove("overflowHidden");
  });
};

checkOpenExplore();
checkCloseExplore();

// open bar

const bar = document.querySelector(".bar");
const wrapperBar = document.querySelector(".wrapper-bar");

const openBar = () => {
  bar.addEventListener("click", () => {
    wrapperBar.classList.toggle("open-bar");
  });
};

openBar();
