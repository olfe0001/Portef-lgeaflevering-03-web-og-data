function getStartupName (){
    const firstWords = ["Tech", "Inno", "Smart", "Blue", "Next", "Bright", "Quantum", "Rapid", "Future", "Digital"];
    const secondWords = ["Vision", "Solutions", "Systems", "Works", "Dynamics", "Hub", "Network", "Innovations", "Labs", "Path"];

    const wordOne = firstWords[Math.floor(Math.random() * firstWords.length)];
    const wordTwo = secondWords[Math.floor(Math.random() * secondWords.length)];

    return wordOne + wordTwo
}
console.log("Your startup name could be: " + getStartupName());