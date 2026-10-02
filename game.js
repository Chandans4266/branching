const choices = ["rock", "paper", "scissors"];

function normalizeChoice(choice) {
    return typeof choice === "string" ? choice.trim().toLowerCase() : "";
}

function getRandomChoice() {
    return choices[Math.floor(Math.random() * choices.length)];
}

function determineWinner(player, computer) {
    const normalizedPlayer = normalizeChoice(player);
    const normalizedComputer = normalizeChoice(computer);

    if (!choices.includes(normalizedPlayer) || !choices.includes(normalizedComputer)) {
        throw new Error("Both choices must be rock, paper, or scissors.");
    }

    if (normalizedPlayer === normalizedComputer) {
        return "Draw!";
    }

    if (
        (normalizedPlayer === "rock" && normalizedComputer === "scissors") ||
        (normalizedPlayer === "paper" && normalizedComputer === "rock") ||
        (normalizedPlayer === "scissors" && normalizedComputer === "paper")
    ) {
        return "You Win! 🎉";
    }

    return "Computer Wins! 🤖";
}

if (require.main === module) {
    const userChoice = process.argv[2];
    const player = userChoice ? normalizeChoice(userChoice) : getRandomChoice();

    if (userChoice && !choices.includes(player)) {
        console.log(`Invalid choice: "${userChoice}". Pick one of: ${choices.join(", ")}.`);
        process.exit(1);
    }

    const computer = getRandomChoice();

    console.log("You:", player);
    console.log("Computer:", computer);
    console.log(determineWinner(player, computer));
}

module.exports = { choices, getRandomChoice, determineWinner };