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
    const hands = document.querySelectorAll(".hands img");

    hands.forEach((hand) => {
      hand.addEventListener("animationend", function () {
        this.style.animation = "";
      });
    });

    const computerOptions = ["Rock", "Paper", "Scissors"];

    matchButtons.forEach((matchButton) => {
      matchButton.addEventListener("click", function () {
        const randomNumber = Math.floor(Math.random() * 3);
        const computerChoice = computerOptions[randomNumber];

        setTimeout(() => {
          compareHands(this.textContent, computerChoice);

          playerHand.src = `./${this.textContent}.png`;
          computerHand.src = `./${computerChoice}.png`;
        }, 2000);

        playerHand.style.animation = "shakePlayer 2s ease";
        computerHand.style.animation = "shakeComputer 2s ease";
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
    if (playerChoice === "Rock") {
      if (computerChoice === "Scissors") {
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
    if (playerChoice === "Paper") {
      if (computerChoice === "Scissors") {
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
    if (playerChoice === "Scissors") {
      if (computerChoice === "Rock") {
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
