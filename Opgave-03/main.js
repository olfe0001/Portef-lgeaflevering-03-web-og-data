// -------- Opgave 3 --------
// 3.1

let island = ['-', '-', '-', 'T', '-'];
console.log("There are " + island.length +  " moves in the island")

// 3.2
let treasureCount = 0;

for (let i= 0; i < island.length; i++){
    if (island[i] === "T"){
        console.log("Treasure found at move " + (i + 1) + " :)");
        treasureCount++;
    } else {
        console.log("No treasure was found :(");
    }
}

// 3.3
console.log("There were " + treasureCount + " treasures in the island")
