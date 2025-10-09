// Opgave 6 - Dice Rolling Championship

// Level 1 - Player Setup
console.log("Welcome to The Dice Rolling Championship!");

let player1 = prompt("What is your game name?"); // prompt() bruges fra opgavebeskrivelsen, til at spørge om spillerens navn.
console.log(`Player 1: ${player1}`); //Spiller1's navn gemmes i vores let variabel

let player2 = prompt("What is your game name?"); // prompt() bruges fra opgavebeskrivelsen, til at spørge om spillerens navn.
console.log(`Player 2: ${player2}`); //Spiller 2's navn gemmes i vores let variabel


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

sumOfRollsPlayer1 += player1Roll; // += kode fundet på Google
sumOfRollsPlayer2 += player2Roll; // += kode fundet på Google


console.log("Round 1:")
console.log(`${player1} rolled: ${player1Roll} (Total: ${sumOfRollsPlayer1})`);
console.log(`${player2} rolled: ${player2Roll} (Total: ${sumOfRollsPlayer2})`);

 */




// Level 4 - Complete Game (10 Rounds) -------------- Lukket Level 2 & 3 og samlet i Level 4

function diceRoll() { //Jeg laver en funktion der returnerer et random diceRoll
    return Math.floor(Math.random() * 6) + 1; // Kode fundet på Google. Returnerer et tilfældigt tal mellem 1-6

}

let sumOfRollsPlayer1 = 0; // Jeg laver en variabel til at holde styr på summen af player1's terningeslag
let sumOfRollsPlayer2= 0; // Jeg laver en variabel til at holde styr på summen af player2's terningeslag

let rounds = 10; // Jeg laver en variabel, rounds, til at definere hvor mange antal runder der er i spillet.

for (let i = 1; i <= rounds; i++) { // i starter på 1, altså runde 1 og kører til og med i <= rounds, som = 10
    console.log("Round " + i) // logger vores string "round" ud i konsollen + i, som er et number


    prompt(`${player1} please, Press Enter to roll`); // prompt() Plauer1 bliver bedt om at trykke enter
    let player1Roll = diceRoll(); // Kalder funktionen, der returnerer et random diceRoll
    sumOfRollsPlayer1 += player1Roll; // Kode fundet på Google. Lægger spillerens diceRoll til summen af diceRolls.
    console.log(`${player1} rolled: ${player1Roll} (Total: ${sumOfRollsPlayer1})`); // Bruger template literals `${}` til at blande strings og variabler

    prompt(`${player2} please, Press Enter to roll`); // prompt() Plauer2 bliver bedt om at trykke enter
    let player2Roll = diceRoll(); // Kalder funktionen, der returnerer et random diceRoll
    sumOfRollsPlayer2 += player2Roll; // Kode fundet på Google. Lægger spillerens diceRoll til summen af diceRolls.
    console.log(`${player2} rolled: ${player2Roll} (Total: ${sumOfRollsPlayer2})`); // Bruger template literals `${}` til at blande strings og variabler

}
// Når runde 10 er slut, logger jeg, at spillet er slut ud i konsollen og viser resultatet med spiller navn og summen af diceRolls.
console.log("🥳 Game Over! 🥳");
console.log("Final Scores Are:");
console.log(`${player1}: ${sumOfRollsPlayer1}`);
console.log(`${player2}: ${sumOfRollsPlayer2}`);

if (sumOfRollsPlayer1 > sumOfRollsPlayer2) { // If betingelsen tjekker om summen af player 1 diceRolls > end summen af player 2 diceRolls.
    console.log(`🥇 ${player1} wins the championship! 🥇`); // Logger if betingelsen ud
} else if (sumOfRollsPlayer2 > sumOfRollsPlayer1) { // else if betingelsen tjekker om summen af player 2 diceRolls > end summen af player 1 diceRolls.
    console.log(`🥇 ${player2} wins the championship! 🥇`); // Logger else if betingelsen ud
} else { // Hvis hverken if eller else if betingelsen er true -->
    console.log("It’s a draw!"); // Logges følgende ud
}                                                          