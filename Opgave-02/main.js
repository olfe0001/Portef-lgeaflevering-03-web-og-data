// -------- Opgave 2 --------

function getStartupName (){
    const firstWords = ["Tech", "Inno", "Smart", "Blue", "Next", "Bright", "Quantum", "Rapid", "Future", "Digital"];
    const secondWords = ["Vision", "Solutions", "Systems", "Works", "Dynamics", "Hub", "Network", "Innovations", "Labs", "Path"];

    const wordOne = firstWords[Math.floor(Math.random() * firstWords.length)]; // Kode fundet på Google
    const wordTwo = secondWords[Math.floor(Math.random() * secondWords.length)]; // Kode fundet på Google

    return wordOne + wordTwo // Returnerer et tilfældigt wordOne + wordTwo
}
console.log("Your startup name could be: " + getStartupName());
