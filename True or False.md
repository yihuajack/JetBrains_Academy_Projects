## Stage 1/6: Invitation

##### Description

Before retrieving data from the API, you need to learn your username and password. Connect to the given endpoint and download your ID card. Then print the content of the ID card to the standard output.

##### Objectives

Let's break the task into several steps:

- Print the welcoming message: `Welcome to the True or False Game!`;
- Use `curl`, connect to the endpoint `http://0.0.0.0:8000/download/file.txt`, and download the file as *ID_card.txt*;
- Use the `--silent` option to avoid the terminal messages;
- Use the `--output <filename>` option to name the output file;
- Print the content of *ID_card.txt* to the standard output;

##### Example

The greater-than symbol followed by a space (`> `) represents the user input. Note that it's not part of the input.

**Example 1**:

```bash
Welcome to the True or False Game!
{"username": "the_username", "password": "the_password"}
```

```bash
#!/usr/bin/env bash

#  write your code here
echo "Welcome to the True or False Game!"
curl --output ID_card.txt --silent http://0.0.0.0:8000/download/file.txt
cat ID_card.txt

```

## Stage 2/6: Access granted

##### Description

You know your username and password. In this stage, connect to the endpoint with the username and password, grant access, and save your session cookie.

##### Objectives

Let's break the task into several steps:

- Print the welcoming message: `Welcome to the True or False Game!`;
- Use `curl` to connect to the endpoint `http://0.0.0.0:8000/login` and save your session cookie as *cookie.txt*;
- Use the `--silent` option to avoid the terminal messages;
- Use the `--cookie-jar <cookie_name>` option to name the cookie;
- Use the `--user <username:password>` option to authenticate. You know your username and password from the previous stage;
- Print the login message: `Login message: the-message-from-endpoint`

##### Example

The greater-than symbol followed by a space (`> `) represents the user input. Note that it's not part of the input.

**Example 1**:

```bash
Welcome to the True or False Game!
Login message: L***** ** ************!
```

```bash
#!/usr/bin/env bash

#  write your code here
echo "Welcome to the True or False Game!"
# curl --output ID_card.txt http://0.0.0.0:8000/download/file.txt
# cut -d="\"" ID_card.txt
curl --output cookie.txt --silent http://0.0.0.0:8000/login --cookie-jar mycookie.txt --user rihanna:785bdf267c5244
echo "Login message:" `cat cookie.txt`


```

## Stage 3/6: That is the question

##### Description

Time to get a question from the API. Connect to the given endpoint with your session cookie and get a question. Print the question to the standard output.

##### Objectives

Let's break the task into several steps:

- Keep functionality from the previous steps;
- Use curl to connect to the endpoint `http://0.0.0.0:8000/game` by sending your session cookie `cookie.txt`;
- Use the `--cookie <cookie_name>` option to send the cookie;
- The endpoint will respond to you with a question and the answer;
- Print the response to the standard output. `Response: {"question": "the-question-from-endpoint", "answer": "the-answer-from-endpoint"}`;

##### Examples

The greater-than symbol followed by a space (`> `) represents the user input. Note that it's not part of the input.

**Example 1**:

```bash
Welcome to the True or False Game!
Login message: Logged in successfully!
Response: {"question": "The Sun is 109 times wider than Earth", "answer": "True"}
```

**Example 2**:

```bash
Welcome to the True or False Game!
Login message: Logged in successfully!
Response: {"question": "Rihanna is a rugby player", "answer": "False"}
```

**Example 3**:

```bash
Welcome to the True or False Game!
Login message: Logged in successfully!
Response: {"question": "Illidan Stormrage betrayed his own clan", "answer": "True"}
```

```bash
#!/usr/bin/env bash

#  write your code here
echo "Welcome to the True or False Game!"
curl --output cookie.txt --silent http://0.0.0.0:8000/login --cookie-jar mycookie.txt --user rihanna:785bdf267c5244
echo "Login message:" `cat cookie.txt`
curl --output output.txt http://0.0.0.0:8000/game --cookie mycookie.txt
echo "Response:" `cat output.txt`
```

## Stage 4/6: Menu

##### Description

Now, you need to create the main menu for your program.

##### Objectives

Let's break the task into several steps:

- Start with the message `Welcome to the True or False Game!`

- Print out the menu and ask for an option:

  ```bash
  0. Exit
  1. Play a game
  2. Display scores
  3. Reset scores
  Enter an option:
  ```

- Read the option from the standard input;

- If the option is not found:

  - Print `Invalid option!`
  - Return to the main menu;

- If the option is

   

  ```bash
  1
  ```

  :

  - Print `Playing game`;
  - Return to the main menu;

- If the option is

   

  ```bash
  2
  ```

  :

  - Print `Displaying scores`;
  - Return to the main menu;

- If the option is

   

  ```bash
  3
  ```

  :

  - Print `Resetting scores`;
  - Return to the main menu;

- If the option is

   

  ```bash
  0
  ```

  :

  - Print, `See you later!` and exit the program.

##### Example

The greater-than symbol followed by a space (`> `) represents the user input. Note that it's not part of the input.

**Example 1**:

```bash
Welcome to the True or False Game!

0. Exit
1. Play a game
2. Display scores
3. Reset scores
Enter an option:
> 7
Invalid option!

0. Exit
1. Play a game
2. Display scores
3. Reset scores
Enter an option:
> 1
Playing game

0. Exit
1. Play a game
2. Display scores
3. Reset scores
Enter an option:
> 2
Displaying scores

0. Exit
1. Play a game
2. Display scores
3. Reset scores
Enter an option:
> 3
Resetting scores

0. Exit
1. Play a game
2. Display scores
3. Reset scores
Enter an option:
> 0
See you later!
```

```bash
#!/usr/bin/env bash

#  write your code here
echo "Welcome to the True or False Game!"
curl --output cookie.txt --silent http://0.0.0.0:8000/login --cookie-jar mycookie.txt --user rihanna:785bdf267c5244
# echo "Login message:" `cat cookie.txt`
curl --output output.txt http://0.0.0.0:8000/game --cookie mycookie.txt
# echo "Response:" `cat output.txt`
echo
while true
do
    echo "0. Exit"
    echo "1. Play a game"
    echo "2. Display scores"
    echo "3. Reset scores"
    echo "Enter an option:"
    read option
    case $option in
        0)
            echo "See you later!"
            break;;
        1)
            echo "Playing game";;
        2)
            echo "Displaying scores";;
        3)
            echo "Resetting scores";;
        *)
            echo "Invalid option!";;
    esac
done
```

## Stage 5/6: The game is on

##### Description

In this stage, create the game functionality. Start by asking the player's name. Loop the game until the answer is wrong. Display the score when a game ends.

##### Objectives

Let's break the task into several steps:

- Keep the functionality from the previous steps;

- Print out the menu and ask for an option;

- If the option is

   

  ```bash
  1
  ```

  :

  - Ask for the player's name with `What is your name?`
  - Use the `RANDOM` function to generate random numbers. For testing purposes, start each game with a seed value. `RANDOM=4096`;
  - Connect to the `/game` endpoint of the API to retrieve a question and an answer;
  - Print the question to the standard output;
  - Ask if it is `True or False?`;
  - Read the user response from the standard input;
  - Compare it with the answer from the endpoint;
  - If the answers match:
    - The player wins ten score points. Store them;
    - Select a random word from the list with the help of the `RANDOM` function `( "Perfect!" "Awesome!" "You are a genius!" "Wow!" "Wonderful!" )` and print to the standard output;
    - Repeat until the player's answer is wrong;
  - If the answer is wrong:
    - Print `Wrong answer, sorry!`;
    - Print `<player_name> you have <number_of_correct_answers> correct answer(s).`;
    - Print `Your score is <score> points.`;
    - Return to the main menu;

- If the option is

   

  ```bash
  0
  ```

  :

  - Print `See you later!` and exit from the program

You can parse a key from the JSON string with the help of the `sed` command. The code snippet below shows an example of it:

```bash
item="the-question-answer-item-from-the-API"
question=$(echo "$item" | sed 's/.*"question": *"\{0,1\}\([^,"]*\)"\{0,1\}.*/\1/')
```

As an alternative, if you have `Python3`, you can use the code snippet below:

```bash
item="the-question-answer-item-from-the-API"
question=$(python3 -c "data=$item; print(data.get('question'))
```

You can pick a random element from a list with the help of the `RANDOM` function. The code snippet below shows an example of it:

```bash
idx=$((RANDOM % 5))
echo "${responses[$idx]}"
```

##### Examples

The greater-than symbol followed by a space (`> `) represents the user input. Note that it's not part of the input.

**Example 1**:

```bash
Welcome to the True or False Game!

0. Exit
1. Play a game
2. Display scores
3. Reset scores
Enter an option:
> 5
Invalid option!

0. Exit
1. Play a game
2. Display scores
3. Reset scores
Enter an option:
> 2
Displaying scores

0. Exit
1. Play a game
2. Display scores
3. Reset scores
Enter an option:
> 3
Resetting scores

0. Exit
1. Play a game
2. Display scores
3. Reset scores
Enter an option:
> 0
See you later!
```

**Example 2**:

```bash
Welcome to the True or False Game!

0. Exit
1. Play a game
2. Display scores
3. Reset scores
Enter an option:
> 1
What is your name?
> hyper

Bright brothers had invented the first successful airplane
True or False?
> False
You are a genius!

The International Space Station circles the globe every 900 minutes
True or False?
> False
Wonderful!

The Sun is 109 times wider than Earth
True or False?
> True
Awesome!

John Bardeen - Walter Brattain - William Shockley invented the first working transistors at Bell Labs
True or False?
> False
Wrong answer, sorry!
hyper you have 3 correct answer(s).
Your score is 30 points.

0. Exit
1. Play a game
2. Display scores
3. Reset scores
Enter an option:
> 0
See you later!
```

```bash
#!/usr/bin/env bash

#  write your code here
echo -e "Welcome to the True or False Game!"
curl --output cookie.txt --silent http://0.0.0.0:8000/login --cookie-jar mycookie.txt --user rihanna:785bdf267c5244
menu(){
    echo
    echo "0. Exit"
    echo "1. Play a game"
    echo "2. Display scores"
    echo "3. Reset scores"
    echo "Enter an option:"
    read -r option
}
correct=0
responses=( "Perfect!" "Awesome!" "You are a genius!" "Wow!" "Wonderful!" )
while true;
do
    menu
    case $option in
        0 | 'quit')
            echo "See you later!"
            break;;
        1)
            echo "What is your name?"
            read player_name
            item=$(curl http://0.0.0.0:8000/game --cookie mycookie.txt)
            question=$(echo "$item" | sed 's/.*"question": *"\{0,1\}\([^,"]*\)"\{0,1\}.*/\1/')
            echo $question
            answer=$(echo "$item" | sed 's/.*"answer": *"\{0,1\}\([^,"]*\)"\{0,1\}.*/\1/')
            echo "True or False?"
            read -r ans
            while [ "$answer" = "$ans" ];
            do
                rn=$RANDOM;
                idx=$(($rn % 5))
                echo -e "${responses[$idx]}\n"
                correct=$(($correct + 1))
                item=$(curl http://0.0.0.0:8000/game --cookie mycookie.txt)
                question=$(echo "$item" | sed 's/.*"question": *"\{0,1\}\([^,"]*\)"\{0,1\}.*/\1/')
                echo $question
                answer=$(echo "$item" | sed 's/.*"answer": *"\{0,1\}\([^,"]*\)"\{0,1\}.*/\1/')
                echo "True or False?"
                read -r ans
            done
            echo "Wrong answer, sorry!"
            echo "$player_name you have $correct correct answer(s)."
            score=$((10 * $correct))
            echo "Your score is $score points."
            ;;
        2)
            echo "Displaying scores";;
        3)
            echo "Resetting scores";;
        *)
            echo -e "Invalid option!";;
    esac
done
```

## Stage 6/6: I am the best

##### Description

In this stage, we will continue working on the menu. Store the game score of each game.

##### Objectives

Let's break the task into several steps:

- Keep the functionality from the previous steps;

- Save the player's score in the *scores.txt* file;

- Use the format `User: hyper, Score: 20, Date: 2022-04-23` and add each new score line to the end of the score file;

- Print out the menu and ask for an option;

- If the option is

   

  ```bash
  2
  ```

  :

  - If the score file is found:
    - Print `Player scores` as the header;
    - Then print the scores to the standard output;
  - If the file is not found or there are no scores inside:
    - Print `File not found or no scores in it!`;

- If the option is

   

  ```bash
  3
  ```

  :

  - If the score file is found:
    - Delete the `scores.txt`;
    - Display message `File deleted successfully!`;
    - `scores.txt` should not exist after deletion;
  - If the file is not found or there are no scores inside:
    - Print `File not found or no scores in it!`;

- If the option is

   

  ```bash
  0
  ```

  :

  - Print `See you later!` and exit from the program

##### Examples

The greater-than symbol followed by a space (`> `) represents the user input. Note that it's not part of the input.

**Example 1**:

```bash
Welcome to the True or False Game!

0. Exit
1. Play a game
2. Display scores
3. Reset scores
Enter an option:
> 2
File not found or no scores in it!

0. Exit
1. Play a game
2. Display scores
3. Reset scores
Enter an option:
> 3
File not found or no scores in it!

0. Exit
1. Play a game
2. Display scores
3. Reset scores
Enter an option:
> 0
See you later!
```

**Example 2**:

```bash
Welcome to the True or False Game!

0. Exit
1. Play a game
2. Display scores
3. Reset scores
Enter an option:
> 1
What is your name?
> hyper

Pong is the first commercially successful video game
True or False?
> True
You are a genius!

The first mechanical computer - The Babbage Difference Engine - was designed by Charles Babbage in 1922
True or False?
> False
Wonderful!

Rihanna is a rugby player
True or False?
> False
Awesome!

Bright brothers had invented the first successful airplane
True or False?
> False
You are a genius!

The heaviest land mammal is the African bush elephant
True or False?
> False
Wrong answer, sorry!
hyper you have 4 correct answer(s).
Your score is 40 points.

0. Exit
1. Play a game
2. Display scores
3. Reset scores
Enter an option:
> 1
What is your name?
> jet

The International Space Station circles the globe every 900 minutes
True or False?
> False
You are a genius!

The Sun is 109 times wider than Earth
True or False?
> True
Wonderful!

John Bardeen - Walter Brattain - William Shockley invented the first working transistors at Bell Labs
True or False?
> False
Wrong answer, sorry!
jet you have 2 correct answer(s).
Your score is 20 points.

0. Exit
1. Play a game
2. Display scores
3. Reset scores
Enter an option:
> 0
See you later!
```

**Example 3**:

```bash
Welcome to the True or False Game!

0. Exit
1. Play a game
2. Display scores
3. Reset scores
Enter an option:
> 2
Player scores
User: hyper, Score: 40, Date: 2022-05-08
User: jet, Score: 20, Date: 2022-06-19

0. Exit
1. Play a game
2. Display scores
3. Reset scores
Enter an option:
> 0
See you later!
```

**Example 4**:

```bash
Welcome to the True or False Game!

0. Exit
1. Play a game
2. Display scores
3. Reset scores
Enter an option:
> 3
File deleted successfully!

0. Exit
1. Play a game
2. Display scores
3. Reset scores
Enter an option:
> 0
See you later!
```

```bash
#!/usr/bin/env bash

#  write your code here
echo -e "Welcome to the True or False Game!"
curl --output cookie.txt --silent http://0.0.0.0:8000/login --cookie-jar mycookie.txt --user rihanna:785bdf267c5244
menu() {
    echo
    echo "0. Exit"
    echo "1. Play a game"
    echo "2. Display scores"
    echo "3. Reset scores"
    echo "Enter an option:"
    read -r option
}
retrieve() {
    item=$(curl http://0.0.0.0:8000/game --cookie mycookie.txt)
    question=$(echo "$item" | sed 's/.*"question": *"\{0,1\}\([^,"]*\)"\{0,1\}.*/\1/')
    echo $question
    answer=$(echo "$item" | sed 's/.*"answer": *"\{0,1\}\([^,"]*\)"\{0,1\}.*/\1/')
    echo "True or False?"
    read -r ans
}
responses=( "Perfect!" "Awesome!" "You are a genius!" "Wow!" "Wonderful!" )
while true;
do
    menu
    case $option in
        0 | 'quit')
            echo "See you later!"
            break;;
        1)
            echo "What is your name?"
            read player_name
            correct=0
            retrieve
            while [ "$answer" = "$ans" ];
            do
                rn=$RANDOM;
                idx=$(($rn % 5))
                echo -e "${responses[$idx]}\n"
                correct=$(($correct + 1))
                retrieve
            done
            echo "Wrong answer, sorry!"
            echo "$player_name you have $correct correct answer(s)."
            score=$((10 * $correct))
            echo "Your score is $score points."
            echo "User: $player_name, Score: $score, Date: $(date +'%Y-%m-%d')" >> scores.txt
            ;;
        2)
            if [ -e scores.txt ]; then
              echo "Player scores"
              cat scores.txt
            else
              echo "File not found or no scores in it!"
            fi
            ;;
        3)
            if [ -e scores.txt ]; then
                rm scores.txt
                echo "File deleted successfully!"
            else
                echo "File not found or no scores in it!"
            fi
            ;;
        *)
            echo -e "Invalid option!";;
    esac
done
```

