// Opgave 6 - DIce Rolling Championship

// Level 1 - Player Setup
console.log("Welcome to The Dice Rolling Championship!")

let playerName1 = prompt("What is your game name?");
console.log("Player 1: " + playerName1);

let playerName2 = prompt("What is your game name?");
console.log("Player 2: " + playerName2);



//Level 2 - Single Round
function diceRoll() {
    let result = Math.floor(Math.random() * 6) + 1;
    return result;
}

let playerRoll1 = prompt("Press Enter to Roll")
console.log(playerName1 + (` Rolled: ${diceRoll()}`))
let playerRoll2 = prompt("Press Enter to Roll")
console.log(playerName2 + (` Rolled: ${diceRoll()}`))







