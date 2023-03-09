const ul = document.querySelector("ul");
ul.className = "red-bg visibe";
const modal = document.querySelector("div");
const button = document.querySelector("button");
modal.className = "modalDesign";
button.addEventListener("click", () => {
  modal.classList.toggle("invisible");
});
