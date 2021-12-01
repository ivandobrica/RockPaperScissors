const intro = document.querySelector(".intro");
const playButton = document.querySelector(".intro__button");

playButton.addEventListener("click", () => {
  intro.classList.add("fade");
  intro.addEventListener("transitionend", () => {
    intro.style.display = "none";
  });
});
