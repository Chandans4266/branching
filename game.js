let choices = ["rock", "paper", "scissors"];

let player = "rock";

let computer = choices[Math.floor(Math.random() * choices.length)];

console.log("You:", player);
console.log("Computer:", computer);

if (player === computer) {
    console.log("Draw!");
} 
else if (
    (player === "rock" && computer === "scissors") ||
    (player === "paper" && computer === "rock") ||
    (player === "scissors" && computer === "paper")
) {
    console.log("You Win! 🎉");
} 
else {
    console.log("Computer Wins! 🤖");
}