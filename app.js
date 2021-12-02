const game = () => {
  let pScore = 0;
  let cScore = 0;
  let roundNr = 5;

  const rounds = document.querySelectorAll(".round");
  rounds.forEach((round) => {
    round.addEventListener("click", (e) => {
      rounds.forEach((round) => {
        round.classList.remove("default-round");
      });
      roundNr = e.target.innerText;
      round.classList.add("default-round");
      roundNr = parseInt(roundNr);
    });
  });

  const startGame = () => {
    const intro = document.querySelector(".intro");
    const playButton = document.querySelector(".intro__button");
    const match = document.querySelector(".match");

    playButton.addEventListener("click", () => {
      intro.classList.add("fadeOut");
      match.classList.add("fadeIn");
      setTimeout(function () {
        intro.style.display = "none";
      }, 1000);
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

          playerHand.src = `./assets/${this.textContent}.png`;
          computerHand.src = `./assets/${computerChoice}.png`;
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

    if (pScore === roundNr || cScore === roundNr) {
      const intro = document.querySelector(".intro");
      const introTitle = document.querySelector(".intro__title");
      const playButton = document.querySelector(".intro__button");
      const match = document.querySelector(".match");

      intro.style.display = "flex";
      setTimeout(function () {
        intro.classList.remove("fadeOut");
        match.classList.remove("fadeIn");
      }, 20);

      if (pScore === roundNr && cScore !== roundNr) {
        introTitle.textContent = "Player is the winner!";
      }
      if (cScore === roundNr && pScore !== roundNr) {
        introTitle.textContent = "Computer is the winner!";
      }

      playButton.innerText = "Play again";

      pScore = 0;
      cScore = 0;
      playerScore.textContent = pScore;
      computerScore.textContent = cScore;

      playButton.addEventListener("click", () => {
        const playerHand = document.querySelector(".player-hand");
        const computerHand = document.querySelector(".computer-hand");

        playerHand.src = "./assets/Rock.png";
        computerHand.src = "./assets/Rock.png";

        intro.classList.add("fadeOut");
        match.classList.add("fadeIn");
        setTimeout(function () {
          intro.style.display = "none";
        }, 1000);
      });
    }
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
