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

  const playMatch = () => {
    const matchButtons = document.querySelectorAll(".options__button");
    const playerHand = document.querySelector(".player-hand");
    const computerHand = document.querySelector(".computer-hand");

    const computerOptions = ["rock", "paper", "scissors"];

    matchButtons.forEach((matchButton) => {
      matchButton.addEventListener("click", function () {
        const randomNumber = Math.floor(Math.random() * 3);
        const computerChoice = computerOptions[randomNumber];

        playerHand.src = `./${this.textContent}.png`;
        computerHand.src = `./${computerChoice}.png`;
      });
    });
  };

  startGame();
  playMatch();
};

game();
