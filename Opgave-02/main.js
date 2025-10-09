// Opgave 02 - Startup name generator

function getStartupName (){ // Jeg laver min function og navngiver den getStartupName

    const firstWords = ["Tech", "Inno", "Smart", "Blue", "Next", "Bright", "Quantum", "Rapid", "Future", "Digital"]; // Input fra opgavebeskrivelsen fra Git
    const secondWords = ["Vision", "Solutions", "Systems", "Works", "Dynamics", "Hub", "Network", "Innovations", "Labs", "Path"]; // Input fra opgavebeskrivelsen fra Git

    const wordOne = firstWords[Math.floor(Math.random() * firstWords.length)]; // Kode fundet på Google. Koden giver en tilfældig værdi (Math.random) som rundes ned og fjerner decimaler (Math.floor). Ganges med vores liste af elementer [array.length]
    const wordTwo = secondWords[Math.floor(Math.random() * secondWords.length)]; // Kode fundet på Google. Koden giver en tilfældig værdi (Math.random) som rundes ned og fjerner decimaler (Math.floor). Ganges med vores liste af elementer [array.length]

    return wordOne + wordTwo // Returnerer et wordOne og wordTwo - så et tilfældigt navn returneres
}
console.log("Your startup name could be: " + getStartupName()); // kalder en "string" + funktionen getStartupName, som jeg har defineret ovenfor.
