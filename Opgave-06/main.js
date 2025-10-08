// Opgave 6 - Dice Rolling Championship

// Level 1 - Player Setup
console.log("Welcome to The Dice Rolling Championship!");

let player1 = prompt("What is your game name?");
console.log(`Player 1: ${player1}`);

let player2 = prompt("What is your game name?");
console.log(`Player 2: ${player2}`);


/*
//Level 2 - Single Round
function diceRoll() {
    return Math.floor(Math.random() * 6) + 1; // Kode fundet på Google

}
console.log("Round 1:");

prompt(`${player1}: please, Press Enter to roll`);
let player1Roll = diceRoll();
console.log(`${player1} rolled: ${player1Roll}`);

prompt(`${player2}: please, Press Enter to roll`);
let player2Roll = diceRoll();
console.log(`${player2} rolled: ${player2Roll}`);

 */


/*
//Level 3 - Track Scores
let sumOfRollsPlayer1 = 0;
let sumOfRollsPlayer2= 0;

sumOfRollsPlayer1 += player1Roll; // += kode fundet på Google - betyder
sumOfRollsPlayer2 += player2Roll; // += kode fundet på Google - betyder


console.log("Round 1:")
console.log(`${player1} rolled: ${player1Roll} (Total: ${sumOfRollsPlayer1})`);
console.log(`${player2} rolled: ${player2Roll} (Total: ${sumOfRollsPlayer2})`);

 */




// Level 4 - Complete Game (10 Rounds) ------------------ Lukket Level 2 & 3 og samlet i Level 4
function diceRoll() {
    return Math.floor(Math.random() * 6) + 1; // Kode fundet på Google

}

let sumOfRollsPlayer1 = 0;
let sumOfRollsPlayer2= 0;

let rounds = 10;

for (let i = 1; i <= rounds; i++) {
    console.log("Round " + i)

    prompt(`${player1} please, Press Enter to roll`);
    let player1Roll = diceRoll();
    sumOfRollsPlayer1 += player1Roll;
    console.log(`${player1} rolled: ${player1Roll} (Total: ${sumOfRollsPlayer1})`);

    prompt(`${player2} please, Press Enter to roll`);
    let player2Roll = diceRoll();
    sumOfRollsPlayer2 += player2Roll;
    console.log(`${player2} rolled: ${player2Roll} (Total: ${sumOfRollsPlayer2})`);

}

console.log("🥳 Game Over! 🥳");
console.log("Final Scores Are:");
console.log(`${player1}: ${sumOfRollsPlayer1}`);
console.log(`${player2}: ${sumOfRollsPlayer2}`);

if (sumOfRollsPlayer1 > sumOfRollsPlayer2) {
    console.log(`🥇 ${player1} wins the championship! 🥇`);
} else if (sumOfRollsPlayer2 > sumOfRollsPlayer1) {
    console.log(`🥇 ${player2} wins the championship! 🥇`);
} else {
    console.log("It’s a draw!");
}                                                          