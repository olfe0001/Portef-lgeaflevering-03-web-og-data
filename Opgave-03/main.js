// Opgave 03 - Treasure Hunter

// 3.1 - Log out how many moves there are in the island

const island = ['-', '-', '-', 'T', '-']; // Fra opgavebeskrivelse i Git
console.log(`There are ${island.length} moves in the island`) // island.length tæller antal elementer i arrayet, som logges ud. Bruger template literals ${} til at blande variabler og string.

// 3.2
let treasureCount = 0; // Jeg laver en variabel der holder styr på antallet af fundne treasures. Den starter på 0;

for (let i= 0; i < island.length; i++){ // Laver for loop, der gennemløber antal elementer i arrayet. i er indekset, som starter ved plads 0 i arrayet.
    if (island[i] === "T"){ // tjekker (===) om der er fundet en treasure i arrayet
        console.log("Treasure found at move " + (i + 1) + " :)"); //Logger if-betingelsen ud
        treasureCount++; // Øger treasure count + 1, hver gang der findes en treasure
    } else {
        console.log("No treasure was found :("); // Hvis if-betingelsen ikke opfyldes logges else-betingelsen ud i konsollen
    }
}

// 3.3
console.log(`There were ${treasureCount} treasures in the island`) // Logger samlet antal treasures ud i konsollen.