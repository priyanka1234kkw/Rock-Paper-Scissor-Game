let userscore = 0;
let compscore = 0;


const choices = document.querySelectorAll(".choice"); // Use querySelectorAll
const msg = document.querySelector("#msg");
// Function to generate computer's choice
const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"]; // Consistent lowercase strings
    const randIdx = Math.floor(Math.random() * 3); // Fixed: "Math" with capital M
    return options[randIdx];
};

// Function for draw game
const drawGame = () => {
    console.log("Game was a draw");
    msg.innerText="Game was a draw! Play again";
    msg.style.backgroundColor =  "#081b31";
};

// Function to show winner
const showWinner = (userWin) => {
    if (userWin) {
        console.log("You Win");
        msg.innerText="You Win!";
        msg.style.backgroundColor =  "red";
    } else {
        console.log("You Lose");
        msg.innerText="You Lose!";
        msg.style.backgroundColor =  "green";
    }
};

// Function to play the game
const playGame = (userChoice) => {
    const compChoice = genCompChoice();

    console.log(`User Choice: ${userChoice}, Computer Choice: ${compChoice}`);

    if (userChoice === compChoice) {
        drawGame();
    } else {
        let userWin = true;

        if (userChoice === "rock") {
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            userWin = compChoice === "scissors" ? false : true; // Fixed typo: "scissor"
        } else {
            userWin = compChoice === "rock" ? false : true;
        }

        showWinner(userWin);
    }
};

// Add event listeners to user choices
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id").toLowerCase(); // Ensure lowercase match
        console.log("Choice was clicked", userChoice);
        playGame(userChoice);
    });
});
