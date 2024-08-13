//Custom toggle dank mode

const bodyElement = document.body;

const switchBtn = document.querySelector(".switch--theme");
const lightMode = document.querySelector(".light--mode");
const darkMode = document.querySelector(".dark--mode");

const toggle = () => {
  switchBtn.addEventListener("click", () => {
    if (lightMode.classList.contains("active")) {
      bodyElement.classList.add("dark-mode");
      darkMode.classList.add("active");
      lightMode.classList.remove("active");
    } else {
      bodyElement.classList.remove("dark-mode");
      darkMode.classList.remove("active");
      lightMode.classList.add("active");
    }
  });
};
toggle();

//Custom toggle video
const btn1 = document.querySelector(".about-sea");
const btn2 = document.querySelector(".about-castle");
const btn3 = document.querySelector(".about-couple");

const img1 = document.querySelector(".img-sea");
const img2 = document.querySelector(".img-castle");
const img3 = document.querySelector(".img-couple");

console.log(btn1, btn2, btn3, img1, img2, img3);

const switchImg = () => {
  btn1.addEventListener("click", () => {
    btn1.classList.add("bg-primary");
    btn2.classList.remove("bg-primary");
    btn3.classList.remove("bg-primary");

    img1.classList.add("active");
    img2.classList.remove("active");
    img3.classList.remove("active");
  });

  btn2.addEventListener("click", () => {
    btn1.classList.remove("bg-primary");
    btn2.classList.add("bg-primary");
    btn3.classList.remove("bg-primary");

    img1.classList.remove("active");
    img2.classList.add("active");
    img3.classList.remove("active");
  });

  btn3.addEventListener("click", () => {
    btn1.classList.remove("bg-primary");
    btn2.classList.remove("bg-primary");
    btn3.classList.add("bg-primary");

    img1.classList.remove("active");
    img2.classList.remove("active");
    img3.classList.add("active");
  });
};

switchImg();

//lading page

const loader = document.querySelector(".wrapper--loader");

const loadPage = () => {
  setTimeout(() => {
    loader.classList.add("hidden");
  }, 1500);
};

console.log(loader);

loadPage();
