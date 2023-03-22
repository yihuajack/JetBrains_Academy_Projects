const input = require('sync-input');
const words = ["python", "java", "swift", "javascript"];
let wonTimes = 0;
let lostTimes = 0;
function playGame() {
    const answer = words[Math.floor(Math.random() * words.length)];
    let solution = '-'.repeat(answer.length);
    let guessed = [];
    let attempts = 8;
    while (attempts > 0) {
        console.log("\n" + solution);
        if (solution === answer) {
            console.log(`You guessed the word ${answer}!`);
            console.log("You survived!");
            wonTimes++;
            return;
        }
        const letter = input(`Input a letter: `);
        if (letter.length !== 1) {
            console.log("Please, input a single letter.");
        } else if (!/[a-z]/.test(letter)) {
            console.log("Please, enter a lowercase letter from the English alphabet.");
        } else if (guessed.includes(letter)) {
            console.log("You've already guessed this letter.");
        } else {
            guessed.push(letter);
            if (answer.includes(letter)) {
                solution = solution.replace(/-/g, (c, i) => i === answer.indexOf(letter, i) ? letter: c);
            } else {
                console.log("That letter doesn't appear in the word.");
                attempts--;
            }
        }
    }
    console.log("\nYou lost!");
    lostTimes++;
}
console.log("H A N G M A N");
while (true) {
    const choice = input("Type \"play\" to play the game, \"results\" to show the scoreboard, and \"exit\" to quit: ");
    switch (choice) {
        case "play":
            playGame();
            break;
        case "results":
            console.log(`You won: ${wonTimes} times.`);
            console.log(`You lost: ${lostTimes} times.`);
            break;
        case "exit":
            return;
        default:
            break;
    }
}