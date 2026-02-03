const choices = ["rock", "paper", "scissors"];

function getComChoice() {
    const index = Math.floor(Math.random() * choices.length);
    return choices[index];
}

function getResult(user, computer) {
    if (user === computer) return "It's a Draw!";

    if (
        (user === "rock" && computer === "scissors") ||
        (user === "paper" && computer === "rock") ||
        (user === "scissors" && computer === "paper")
    ) {
        return "You Win! 🎉";
    }

    return "You Lose 😢";
}

function play(userChoice) {
    userChoice = userChoice.toLowerCase();

    if (!choices.includes(userChoice)) {
        console.log("Invalid choice! Choose rock, paper, or scissors.");
        return;
    }

    const computerChoice = getComChoice();
    const result = getResult(userChoice, computerChoice);

    console.log("You chose:", userChoice);
    console.log("Computer chose:", computerChoice);
    console.log(result);
}

play("rock");
