// overflow body

const label1 = document.querySelector(".bar");
const label2 = document.querySelector(".overlay");
const body = document.body;

const checkOpenExplore = () => {
  label1.addEventListener("click", () => {
    body.classList.add("overflowHidden");
  });
};

const checkCloseExplore = () => {
  label2.addEventListener("click", () => {
    body.classList.remove("overflowHidden");
  });
};

checkOpenExplore();
checkCloseExplore();
