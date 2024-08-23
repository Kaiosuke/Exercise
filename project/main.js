// Blur main

const body = document.body;
const bntBar = document.querySelector(".header--bar");
const main = document.querySelector("main");
const overLay = document.querySelector(".overlay");

const toggleBar = () => {
  bntBar.addEventListener("click", () => {
    body.classList.add("overflow--hd");
    main.classList.add("blur");
  });
  overLay.addEventListener("click", () => {
    body.classList.remove("overflow--hd");
    main.classList.remove("blur");
  });
};

toggleBar();
