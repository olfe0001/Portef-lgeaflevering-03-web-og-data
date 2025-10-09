// -------- Opgave 4 --------

// 4.1
let studentGrades = [79, 89, 91, 98, 63, 58, 81, 95];

// 4.2
console.log("There are " + studentGrades.length + " grades in the class")

// 4.3
for (let i = 0; i < studentGrades.length; i++) {
    let grade = studentGrades[i];

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

// 4.4
let sum = 0;

for (let i = 0; i < studentGrades.length; i++) {
    sum += studentGrades[i];
}
let average = sum / studentGrades.length;

if (average >= 90) {
    console.log("Overall Class Performance: Excellent");
} else if (average >= 80) {
    console.log("Overall Class Performance: Good");
} else if (average >= 70) {
    console.log("Overall Class Performance: Satisfactory");
} else {
    console.log("Overall Class Performance: Needs Improvement");
}