const game = () => {
  let pScore = 0;
  let cScore = 0;

  const startGame = () => {
    const intro = document.querySelector(".intro");
    const playButton = document.querySelector(".intro__button");
    const match = document.querySelector(".match");

    playButton.addEventListener("click", () => {
      intro.classList.add("fadeOut");
      match.classList.add("fadeIn");
      intro.addEventListener("transitionend", () => {
        intro.style.display = "none";
      });
    });
  };

  startGame();
};

game();
