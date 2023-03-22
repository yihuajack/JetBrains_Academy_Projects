## Stage 1/8: Hello, Hangman

##### Description

Hangman is a popular, funny, yet very grim game. A cruel computer hides a word from you and you need to guess it, letter by letter. If you fail, you'll be hanged, if you win, you'll survive.

You're probably familiar with the rules; now you can create this game yourself!

Let's take a brief look at what you are going to build in this project. Here is what the gameplay will look like:

- In the main menu, players can choose to either play or exit the game;
- If players choose to play, the computer picks a word from a list — it will be the answer;
- The computer asks players to enter a letter that may or may not be in the word;
- If players suggest a letter that does not appear in the word for the first time, It's a miss. A player can miss 8 times before the game is over;
- If the letter does occur in the word, the computer notifies the players. If there are letters left to guess, the computer invites the player to go on;
- When the entire word is uncovered — it's a victory! The game should calculate the final score and return to the main menu.

This may sound complex, but the project is split into small stages with the hints that will guide you. We guarantee that the final product is replayable and quite engaging!

Let's start with an announcement that will greet the player. You already know how to log to the console with JavaScript. Apply that knowledge to entice your friends to play with an announcement for your game!

##### Objectives

In this stage, write a program that prints the lines shown in the example below.

##### Example

*Output:*

```no-highlight
H A N G M A N
The game will be available soon.
```

```javascript
// Use "input()" to input a line from the user
// Use "input(str)" to print some text before requesting input
// You will need this in the following stages
const input = require('sync-input');

console.log(`H A N G M A N
The game will be available soon.`);
```

## Stage 2/8: Let’s play a game

##### Description

In this stage, we will add some simple gameplay. There will be two possible outcomes. Let's first print a welcoming message and then ask players to guess the word we have set for the game. If they guess the word, the game reports a win; otherwise, it will "hang" the player.

To simplify getting input from the console, we're using a JS library, check out the [documentation](https://github.com/hyperskill/sync-input#usage) to see how it's used.

##### Objectives

- Ask players for a possible word;
- Print `You survived!` if users guess the word;
- Print `You lost!` if users fail.



In this stage, `python` is the word that players need to guess. For now, this is the only form of answer that is deemed correct, so there is no need to worry about the register or punctuation marks.



##### Examples

The greater-than symbol followed by a space (`> `) represents the user input. Note that it's not part of the input.

**Example 1**:

```no-highlight
H A N G M A N
Guess the word: > python
You survived!
```

**Example 2**:

```no-highlight
H A N G M A N
Guess the word: > java
You lost!
```

```javascript
// Use "input()" to input a line from the user
// Use "input(str)" to print some text before requesting input
// You will need this in the following stages
const input = require('sync-input');

console.log("H A N G M A N");
const word = input("Guess the word: ");
if (word === "python") {
    console.log("You survived!");
} else {
    console.log("You lost!");
}
```

## Stage 3/8: Make your choice

##### Description

If there is only one word, the game becomes dull. You already know the word, and there’s no challenge. In this stage, let's make the game more difficult by choosing a word from the special list with a variety of options. This way, our game gains in replayability.

##### Objectives

- Create the following list of words: `python`, `java`, `swift`, `javascript`;
- Program the game to choose a word from the list at random (you can use the `Math.random()` method for that). You can enter more words, but let's stick to these four for now.

##### Examples

The greater-than symbol followed by a space (`> `) represents the user input. Note that it's not part of the input.

**Example 1**: *computer chooses python from the list.*

```no-highlight
H A N G M A N
Guess the word: > python
You survived!
```

**Example 2**: *computer chooses something other than python from the list.*

```no-highlight
H A N G M A N
Guess the word: > python
You lost!
```

**Example 3**: *computer randomly chooses something other than swift from the list.*

```no-highlight
H A N G M A N
Guess the word: > swift
You lost!
```

## Stage 4/8: Help is on the way

##### Description

The game is now more difficult to beat; your chances of guessing the word depend on the list size. If there are four words in the list, you have a 25% chance. Let's show a little mercy and add hints for our players.

##### Objectives

- As in the previous stage, use the following word list: `python`, `java`, `swift`, `javascript`;
- Once the computer has chosen a word from the list, show its first three letters. Replace the hidden letters with hyphens (`-`).

##### Examples

The greater-than symbol followed by a space (`> `) represents the user input. Note that it's not part of the input.

**Example 1**:

```no-highlight
H A N G M A N
Guess the word jav-: > java
You survived!
```

**Example 2**:

```no-highlight
H A N G M A N
Guess the word pyt---: > pythia
You lost!
```

```javascript
// Use "input()" to input a line from the user
// Use "input(str)" to print some text before requesting input
// You will need this in the following stages
const input = require('sync-input');
const words = ["python", "java", "swift", "javascript"];
const answer = words[Math.floor(Math.random() * words.length)];
console.log("H A N G M A N");
const word = input(`Guess the word ${answer.slice(0, 3)}${'-'.repeat(answer.length - 3)}: `);
if (word === answer) {
    console.log("You survived!");
} else {
    console.log("You lost!");
}
```

## Stage 5/8: Keep trying

##### Description

Let's make the game iterative. In this stage, we'll adjust our game to resemble the classic version of Hangman. Players should now guess the letters in a word instead of inputting an entire word. If an attempt is successful, uncover the letter. We also need to add the lose condition — players have eight attempts to guess all letters that appear in the word. When players run out of attempts, the game ends.

Don't forget to get rid of the hints: replace all the letters in a word with hyphens at the beginning. Players input one lowercase letter at a time, so there is no need to worry about that.

Later on, we will also determine the win conditions, but in this stage, let's just see how well our player guesses the word on each attempt.

##### Objectives

Your game should work as follows:

- Players have exactly eight attempts to guess the word by entering letters one by one. Asking for a letter, print: `Input a letter:`. If a player uncovered all the letters, but some attempts are still left, the program must continue to ask for input until all the tries are exhausted;
- If the letter doesn't appear in the word, the computer takes one try away – even if a user has already suggested this letter – and prints `That letter doesn't appear in the word.`;
- If the letter does appear in the word but a user has already suggested this letter and it's open, no need to print any messages;
- If all attempts are exhausted, the game ends; the program shows a final message (`Thanks for playing!`). Otherwise, players can continue to input letters;
- We continue to stick with the word list from the previous stage: `python`, `java`, `swift`, `javascript`. It ensures that your program is tested reliably. Don't worry about `javascript`. Yes, it's longer than 8 characters, but we'll keep it in the list for consistency since we're not done with developing the game yet and for now there is no win or lose.



Please, make sure that the output format of your program follows the example precisely. Pay attention to the empty lines between attempts and at the end.



##### Examples

The greater-than symbol followed by a space (`> `) represents the user input. Note that it's not part of the input. Comments after `#` provided for illustrative purposes and not as part of the task.

**Example 1**:

```no-highlight
H A N G M A N  // 8 attempts

----------
Input a letter: > a  // 7 attempts

-a-a------
Input a letter: > i  // 6 attempts

-a-a---i--
Input a letter: > o
That letter doesn't appear in the word.  // 5 attempts

-a-a---i--
Input a letter: > z
That letter doesn't appear in the word.  // 4 attempts

-a-a---i--
Input a letter: > l
That letter doesn't appear in the word.  // 3 attempts

-a-a---i--
Input a letter: > p  // 2 attempts

-a-a---ip-
Input a letter: > h
That letter doesn't appear in the word.  // 1 attempt

-a-a---ip-
Input a letter: > k
That letter doesn't appear in the word.  // 0 attempts

Thanks for playing!
```

**Example 2**:

```no-highlight
H A N G M A N  // 8 attempts

----
Input a letter: > j  // 7 attempts

j---
Input a letter: > i
That letter doesn't appear in the word.  // 6 attempts

j---
Input a letter: > g
That letter doesn't appear in the word.  // 5 attempts

j---
Input a letter: > o
That letter doesn't appear in the word.  // 4 attempts

j---
Input a letter: > a  // 3 attempts

ja-a
Input a letter: > v  // 2 attempts

java
Input a letter: > a  // 1 attempt

java
Input a letter: > j  // 0 attempts

Thanks for playing!
```

```javascript
// Use "input()" to input a line from the user
// Use "input(str)" to print some text before requesting input
// You will need this in the following stages
const input = require('sync-input');
const words = ["python", "java", "swift", "javascript"];
const answer = words[Math.floor(Math.random() * words.length)];
let solution = '-'.repeat(answer.length);
console.log("H A N G M A N");
for (let attempts = 8; attempts > 0; attempts--) {
    console.log("\n" + solution);
    const letter = input(`Input a letter: `);
    if (answer.includes(letter)) {
        // let poses = [];
        for (let i = 0; i < answer.length; i++) {
            if (answer[i] === letter) {
                // poses.push(i);
                solution = solution.substring(0, i) + letter + solution.substring(i + 1);
            }
        }
        // solution = solution.replace(/-/g, (c, i) => poses.includes(i) ? letter: c);
    } else {
        console.log("That letter doesn't appear in the word.");
    }
}
console.log("\nThanks for playing!");
```

```javascript
const input = require('sync-input');
const words = ["python", "java", "swift", "javascript"];
const answer = words[Math.floor(Math.random() * words.length)];
let solution = '-'.repeat(answer.length);
console.log("H A N G M A N");
for (let attempts = 8; attempts > 0; attempts--) {
    console.log("\n" + solution);
    const letter = input(`Input a letter: `);
    if (answer.includes(letter)) {
        solution = solution.replace(/-/g, (c, i) => i === answer.indexOf(letter, i) ? letter : c);
    } else {
        console.log("That letter doesn't appear in the word.");
    }
}
console.log("\nThanks for playing!");
```

## Stage 6/8: The value of life

##### Description

So far, our game has been some kind of a draft; we still lack a way to handle the player's victory. The player has only eight attempts, and the number of remaining attempts decreases every turn, even if players guess them correctly.

In this stage, we will start reducing the attempts only after players make a mistake. They can be mistaken eight times: attempts are reduced if the suggested letter is not in the word or if it has already been suggested before (no matter whether it's been a correct one or not). If a player has guessed all the letters, they win. If a player has some attempts after guessing the word, discard them, notify the player, and terminate the game.

##### Objectives

Players start the game with eight lives. In other words, they can make a mistake only eight times.

- When players input a valid letter, uncover it in the word, and carry on;
- Print `That letter doesn't appear in the word.` and reduce the number of attempts if the word doesn't contain the letter, even if this particular letter has already been suggested before;
- Print `No improvements.` and reduce the attempt counter when players input a letter that has been successfully uncovered before;
- When players win, print the uncovered word, `You guessed the word!` , and the winning message. Each one should be on a new line.



Please, make sure that the output format of your program follows the example precisely. Pay attention to the empty lines between attempts and at the end.



##### Examples

The greater-than symbol followed by a space (`> `) represents the user input. Note that it's not part of the input. Comments after `#` provided for illustrative purposes and not as part of the task.

**Example 1**: *note how the attempts are decreased when the player inputs the same letter twice or thrice*

```no-highlight
H A N G M A N  # 8 attempts

------
Input a letter: > t

--t---
Input a letter: > z
That letter doesn't appear in the word.  # 7 attempts

--t---
Input a letter: > t
No improvements.  # 6 attempts

--t---
Input a letter: > t
No improvements.  # 5 attempts

--t---
Input a letter: > y

-yt---
Input a letter: > x
That letter doesn't appear in the word.  # 4 attempts

-yt---
Input a letter: > y
No improvements.  # 3 attempts

-yt---
Input a letter: > p

pyt---
Input a letter: > p
No improvements.  # 2 attempts

pyt---
Input a letter: > q
That letter doesn't appear in the word.  # 1 attempt

pyt---
Input a letter: > p
No improvements.  # 0 attempts

You lost!
```

**Example 2**: *success*

```no-highlight
H A N G M A N  # 8 attempts

----
Input a letter: > j

j---
Input a letter: > i
That letter doesn't appear in the word.  # 7 attempts

j---
Input a letter: > g
That letter doesn't appear in the word.  # 6 attempts

j---
Input a letter: > g
That letter doesn't appear in the word.  # 5 attempts

j---
Input a letter: > g
That letter doesn't appear in the word.  # 4 attempts

j---
Input a letter: > g
That letter doesn't appear in the word.  # 3 attempts

j---
Input a letter: > a

ja-a
Input a letter: > v

java
You guessed the word!
You survived!
```

```javascript
const input = require('sync-input');
const words = ["python", "java", "swift", "javascript"];
const answer = words[Math.floor(Math.random() * words.length)];
let solution = '-'.repeat(answer.length);
console.log("H A N G M A N");
for (let attempts = 8; attempts > 0; attempts--) {
    console.log("\n" + solution);
    if (solution === answer) {
        console.log("You guessed the word!");
        console.log("You survived!");
        return;
    }
    const letter = input(`Input a letter: `);
    if (solution.includes(letter)) {
        console.log("No Improvements.")
    } else if (answer.includes(letter)) {
        solution = solution.replace(/-/g, (c, i) => i === answer.indexOf(letter, i) ? letter: c);
        attempts++;
    } else {
        console.log("That letter doesn't appear in the word.");
    }
}
console.log("\nYou lost!");
```

## Stage 7/8: Error!

##### Description

The skeleton of the game is ready; let's put some more gameplay meat on it.

In the previous stage, if players entered the same letter twice or more, the program reduced the number of remaining attempts regardless of whether this was a correct letter or not. This doesn’t seem fair, right? Players gain nothing, and the number of attempts gets smaller. Let's fix it!

##### Objectives

To complete this stage, follow the suggested order of the required checks:

- Check whether players enter exactly one letter. If not, print `Please, input a single letter.`. Remember that when players input nothing or non-letter characters, it shouldn't count as a correct input either;
- Make sure that the player entered a lowercase English letter. If not, the program should print `Please, enter a lowercase letter from the English alphabet.`;
- If users enter the same letter twice (doesn't matter whether it appears in the word or not), then the program should output `You've already guessed this letter.`. Do not decrease the number of attempts in this case;
- None of the three errors described above should reduce the number of remaining attempts!
- When players win, print `You guessed the word <word>!`, where `<word>` should be substituted with the uncovered word, and the winning message. Each one should be on a new line.



Please, make sure that the output format of your program follows the example precisely. Pay attention to the empty lines between attempts and at the end.



##### Examples

The greater-than symbol followed by a space (`> `) represents the user input. Note that it's not part of the input. Comments after `#` provided for illustrative purposes and not as part of the task.

**Example 1**:

```no-highlight
H A N G M A N  # 8 attempts

----------
Input a letter: > a

-a-a------
Input a letter: > i

-a-a---i--
Input a letter: > o
That letter doesn't appear in the word.  # 7 attempts

-a-a---i--
Input a letter: > o
You've already guessed this letter.

-a-a---i--
Input a letter: > p

-a-a---ip-
Input a letter: > p
You've already guessed this letter.

-a-a---ip-
Input a letter: > h
That letter doesn't appear in the word.  # 6 attempts

-a-a---ip-
Input a letter: > k
That letter doesn't appear in the word.  # 5 attempts

-a-a---ip-
Input a letter: > a
You've already guessed this letter.

-a-a---ip-
Input a letter: > z
That letter doesn't appear in the word.  # 4 attempts

-a-a---ip-
Input a letter: > t

-a-a---ipt
Input a letter: > x
That letter doesn't appear in the word.  # 3 attempts

-a-a---ipt
Input a letter: > b
That letter doesn't appear in the word.  # 2 attempts

-a-a---ipt
Input a letter: > d
That letter doesn't appear in the word.  # 1 attempt

-a-a---ipt
Input a letter: > w
That letter doesn't appear in the word.  # 0 attempts

You lost!
```

**Example 2**:

```no-highlight
H A N G M A N  # 8 attempts

----
Input a letter: > j

j---
Input a letter: > i
That letter doesn't appear in the word.  # 7 attempts

j---
Input a letter: > +
Please, enter a lowercase letter from the English alphabet.

j---
Input a letter: > A
Please, enter a lowercase letter from the English alphabet.

j---
Input a letter: > ii
Please, input a single letter.

j---
Input a letter: > ++
Please, input a single letter.

j---
Input a letter: >
Please, input a single letter.

j---
Input a letter: > g
That letter doesn't appear in the word.  # 6 attempts

j---
Input a letter: > a

ja-a
Input a letter: > v
You guessed the word java!
You survived!
```

```javascript
const input = require('sync-input');
const words = ["python", "java", "swift", "javascript"];
const answer = words[Math.floor(Math.random() * words.length)];
let solution = '-'.repeat(answer.length);
let guessed = [];
let attempts = 8;
console.log("H A N G M A N");
while (attempts > 0) {
    console.log("\n" + solution);
    if (solution === answer) {
        console.log(`You guessed the word ${answer}!`);
        console.log("You survived!");
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
```

## Stage 8/8: Menu, please

##### Description

In this stage, let's add a little more flavor to the game by constructing a menu to restart the program after the current session ends.

##### Objectives

- The game now starts with the menu where players can choose to either play, see their score, or exit;
- Print `Type "play" to play the game, "results" to show the scoreboard, and "exit" to quit:` and show this message again if players input something else;
- If players choose `play`, start the game. When the game is finished (regardless of whether a player wins or not), pop up the menu once again to make the gameplay seamless;
- If players choose `results`, print how many games they won, e.g. `You won: 0 times`, and how many games they lost, e.g. `You lost: 25 times`;
- If players choose `exit`, end the game.



Please, make sure that the output format of your program follows the example precisely. Pay attention to the empty lines between attempts and at the end.



##### Example

The greater-than symbol followed by a space (`> `) represents the user input. Note that it's not part of the input. Comments after `#` provided for illustrative purposes and not as part of the task.

**Example 1**:

```no-highlight
H A N G M A N  # 8 attempts
Type "play" to play the game, "results" to show the scoreboard, and "exit" to quit: > play

------
Input a letter: > h

---h--
Input a letter: > K
Please, enter a lowercase letter from the English alphabet.

---h--
Input a letter: > t

--th--
Input a letter: > o

--tho-
Input a letter: > +
Please, enter a lowercase letter from the English alphabet.

--tho-
Input a letter: > K
Please, enter a lowercase letter from the English alphabet.

--tho-
Input a letter: > h
You've already guessed this letter.

--tho-
Input a letter: > K
Please, enter a lowercase letter from the English alphabet.

--tho-
Input a letter: > n

--thon
Input a letter: > q
That letter doesn't appear in the word.  # 7 attempts

--thon
Input a letter: > y

-ython
Input a letter: > h
You've already guessed this letter.

-ython
Input a letter: > p

You guessed the word python!
You survived!
Type "play" to play the game, "results" to show the scoreboard, and "exit" to quit: > results
You won: 1 times.
You lost: 0 times.
Type "play" to play the game, "results" to show the scoreboard, and "exit" to quit: > exit
```

```javascript
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
                solution = solution.replace(/-/g, (c, i) => i === answer.indexOf(letter, i) ? letter : c);
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
```

