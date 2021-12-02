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

        compareHands(this.textContent, computerChoice);

        playerHand.src = `./${this.textContent}.png`;
        computerHand.src = `./${computerChoice}.png`;
      });
    });
  };

  const updateScore = () => {
    const playerScore = document.querySelector(
      ".player-score .score__subtitle"
    );
    const computerScore = document.querySelector(
      ".computer-score .score__subtitle"
    );

    playerScore.textContent = pScore;
    computerScore.textContent = cScore;
  };

  const compareHands = (playerChoice, computerChoice) => {
    const winner = document.querySelector(".winner");

    if (playerChoice === computerChoice) {
      winner.textContent = "Draw";
      return;
    }
    if (playerChoice === "rock") {
      if (computerChoice === "scissors") {
        winner.textContent = "Player wins";
        pScore++;
        updateScore();
        return;
      } else {
        winner.textContent = "Computer wins";
        cScore++;
        updateScore();
        return;
      }
    }
    if (playerChoice === "paper") {
      if (computerChoice === "scissors") {
        winner.textContent = "Computer wins";
        cScore++;
        updateScore();
        return;
      } else {
        winner.textContent = "Player wins";
        pScore++;
        updateScore();
        return;
      }
    }
    if (playerChoice === "scissors") {
      if (computerChoice === "rock") {
        winner.textContent = "Computer wins";
        cScore++;
        updateScore();
        return;
      } else {
        winner.textContent = "Player wins";
        pScore++;
        updateScore();
        return;
      }
    }
  };

  startGame();
  playMatch();
};

game();
