<<<<<<< HEAD
let userScore = 0;
let computerScore = 0;
let playing = false;

function startRound(userChoice) {
    if (playing) return;
    playing = true;

    const userHand = document.getElementById("userHand");
    const compHand = document.getElementById("computerHand");
    const status = document.getElementById("status");

    userHand.textContent = "✊";
    compHand.textContent = "✊";

    userHand.classList.add("shake");
    compHand.classList.add("shake");

    status.textContent = "Rock... Paper... Scissors...";

    setTimeout(() => {
        userHand.classList.remove("shake");
        compHand.classList.remove("shake");

        const choices = ["rock", "paper", "scissors"];
        const emojis = {
            rock: "✊",
            paper: "✋",
            scissors: "✌️"
        };

        const computerChoice = choices[Math.floor(Math.random() * 3)];

        userHand.textContent = emojis[userChoice];
        compHand.textContent = emojis[computerChoice];

        let result = "";

        if (userChoice === computerChoice) {
            result = "Draw 😐";
        } else if (
            (userChoice === "rock" && computerChoice === "scissors") ||
            (userChoice === "paper" && computerChoice === "rock") ||
            (userChoice === "scissors" && computerChoice === "paper")
        ) {
            result = "You Win 🎉";
            userScore++;
        } else {
            result = "Computer Wins 😢";
            computerScore++;
        }

        document.getElementById("userScore").innerText = userScore;
        document.getElementById("computerScore").innerText = computerScore;

        status.textContent = result;
        playing = false;

    }, 1500);
}
=======
let userScore = 0;
let computerScore = 0;
let playing = false;

function startRound(userChoice) {
    if (playing) return;
    playing = true;

    const userHand = document.getElementById("userHand");
    const compHand = document.getElementById("computerHand");
    const status = document.getElementById("status");

    userHand.textContent = "✊";
    compHand.textContent = "✊";

    userHand.classList.add("shake");
    compHand.classList.add("shake");

    status.textContent = "Rock... Paper... Scissors...";

    setTimeout(() => {
        userHand.classList.remove("shake");
        compHand.classList.remove("shake");

        const choices = ["rock", "paper", "scissors"];
        const emojis = {
            rock: "✊",
            paper: "✋",
            scissors: "✌️"
        };

        const computerChoice = choices[Math.floor(Math.random() * 3)];

        userHand.textContent = emojis[userChoice];
        compHand.textContent = emojis[computerChoice];

        let result = "";

        if (userChoice === computerChoice) {
            result = "Draw 😐";
        } else if (
            (userChoice === "rock" && computerChoice === "scissors") ||
            (userChoice === "paper" && computerChoice === "rock") ||
            (userChoice === "scissors" && computerChoice === "paper")
        ) {
            result = "You Win 🎉";
            userScore++;
        } else {
            result = "Computer Wins 😢";
            computerScore++;
        }

        document.getElementById("userScore").innerText = userScore;
        document.getElementById("computerScore").innerText = computerScore;

        status.textContent = result;
        playing = false;

    }, 1500);
}
>>>>>>> 242ac2d811b5f5bfcabe25dfc93da5918052e6c1
