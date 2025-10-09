// 04 - Student Grades Analysis

// 4.1 - create an array that holds 8 grades (integers between 0-100)
let studentGrades = [79, 89, 91, 98, 63, 58, 81, 95];

// 4.2 - log antal grades ud
console.log(`There are ${studentGrades.length} grades in the class`) // logger antal grades i arrayet ud med .length. Bruger template literals ${} til at blande variabel med strings

// 4.3 - klassificer grades ud fra A-F og log dem ud i konsollen
for (let i = 0; i < studentGrades.length; i++) { // For loopet gennemløber hele arrayet
    let grade = studentGrades[i]; //Tager det enkelte element i arrayet og starter på indeks (plads) 0

    // Her bruges if, else if og else til at vurdere hver grade individuelt. Alt efter om grade opfylder betingelsen logges det ud i console.log
    if (grade >= 90) {
        console.log(`${grade}: A`);
    } else if (grade >= 80) {
        console.log(`${grade}: B`);
    } else if (grade >= 70) {
        console.log(`${grade}: C`);
    } else if (grade >= 60) {
        console.log(`${grade}: D`);
    } else {
        console.log(`${grade}: F`);
    }
}

// 4.4 Evaluate overall class performance
let sum = 0; // Jeg laver en variabel, sum, der holder styr på summen af grades. Den starter på 0;

for (let i = 0; i < studentGrades.length; i++) {
    sum += studentGrades[i]; //kode fundet på Google. += lægger hver grade til summen.
}
let average = sum / studentGrades.length; //kode fundet på Google. Udregner gennemsnittet

//// Her bruges if, else if og else til at vurdere gennemsnittet. Alt efter om average opfylder betingelsen logges det ud i console.log
if (average >= 90) {
    console.log("Overall Class Performance: Excellent");
} else if (average >= 80) {
    console.log("Overall Class Performance: Good");
} else if (average >= 70) {
    console.log("Overall Class Performance: Satisfactory");
} else {
    console.log("Overall Class Performance: Needs Improvement");
}