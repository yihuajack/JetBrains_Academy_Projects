## Stage 1/5: Welcome to the carnival!

##### Description

It’s a beautiful day at the carnival! Visitors have played many games and now want to spend their tickets. So, let’s welcome them with this message first: `WELCOME TO THE CARNIVAL GIFT SHOP!`

Then, let’s greet our visitors with this message: `Hello friend! Thank you for visiting the carnival!`

Next, we will show the list of gifts that the visitors can buy. It is the list of gifts that we will use throughout the project:

```no-highlight
Teddy Bear

Big Red Ball

Huge Bear

Candy

Stuffed Tiger

Stuffed Dragon

Skateboard

Toy Car

Basketball

Scary Mask
```

Before we show the list, output this message:`Here's the list of gifts:`

Then, output the list of gifts like in the Example.

##### Objectives

In this stage, your program should:

1. Print the welcoming and greeting messages.
2. Print the list of gifts.

##### Examples

**Example 1:** *where the program starts with the welcome messages and shows the list of gifts*

```no-highlight
WELCOME TO THE CARNIVAL GIFT SHOP!
Hello friend! Thank you for visiting the carnival!
Here's the list of gifts:

Teddy Bear
Big Red Ball
Huge Bear
Candy
Stuffed Tiger
Stuffed Dragon
Skateboard
Toy Car
Basketball
Scary Mask
```

```javascript
// write your code here
console.log(`WELCOME TO THE CARNIVAL GIFT SHOP!
Hello friend! Thank you for visiting the carnival!
Here's the list of gifts:
`);
gifts = ["Teddy Bear",
    "Big Red Ball",
    "Huge Bear",
    "Candy",
    "Stuffed Tiger",
    "Stuffed Dragon",
    "Skateboard",
    "Toy Car",
    "Basketball",
    "Scary Mask"];
gifts.forEach(gift => console.log(gift));
```

## Stage 2/5: How much?

##### Description

In the previous stage, you've shown the list of gifts in our gift shop. Now, we need to show more information about these gifts: the price and id/order.

Keep all the previous messages but change how the list of gifts is shown with additional information.

The details about the gifts are below:

| Name           | Price | ID/Order |
| -------------- | ----- | -------- |
| Teddy Bear     | 10    | 1        |
| Big Red Ball   | 5     | 2        |
| Huge Bear      | 50    | 3        |
| Candy          | 8     | 4        |
| Stuffed Tiger  | 15    | 5        |
| Stuffed Dragon | 30    | 6        |
| Skateboard     | 100   | 7        |
| Toy Car        | 25    | 8        |
| Basketball     | 20    | 9        |
| Scary Mask     | 75    | 10       |

























Output the changes like in the example. Using objects can be helpful with the details of a gift.

##### Objectives

In this stage, your program should:

1. Print welcoming and greeting messages from the previous stage.
2. Print the list of gifts with the new information.

##### Examples

**Example 1:** *where the program starts with the welcome messages and shows the list of gifts with the new details*

```no-highlight
WELCOME TO THE CARNIVAL GIFT SHOP!
Hello friend! Thank you for visiting the carnival!
Here's the list of gifts:

1- Teddy Bear, Cost: 10 tickets
2- Big Red Ball, Cost: 5 tickets
3- Huge Bear, Cost: 50 tickets
4- Candy, Cost: 8 tickets
5- Stuffed Tiger, Cost: 15 tickets
6- Stuffed Dragon, Cost: 30 tickets
7- Skateboard, Cost: 100 tickets
8- Toy Car, Cost: 25 tickets
9- Basketball, Cost: 20 tickets
10- Scary Mask, Cost: 75 tickets
```

```javascript
// write your code here
console.log(`WELCOME TO THE CARNIVAL GIFT SHOP!
Hello friend! Thank you for visiting the carnival!
Here's the list of gifts:
`);
const gifts = {
    "Teddy Bear": 10,
    "Big Red Ball": 5,
    "Huge Bear": 50,
    "Candy": 8,
    "Stuffed Tiger": 15,
    "Stuffed Dragon": 30,
    "Skateboard": 100,
    "Toy Car": 25,
    "Basketball": 20,
    "Scary Mask": 75
};
for (let i = 0; i < Object.keys(gifts).length; i++) {
    console.log(`${i + 1}- ${Object.keys(gifts)[i]}, Cost: ${Object.values(gifts)[i]} tickets`);
}
```

## Stage 3/5: What visitor wants

##### Description

Now that you have the list of gifts with details, the visitors will decide what they want.

To simplify getting input from the console, we're using a JS library; check out the [documentation](https://github.com/hyperskill/sync-input#usage) to see how you can use it.

First, let’s get this input from the visitor:

```no-highlight
What do you want to do?

1-Buy a gift 2-Add tickets 3-Check tickets 4-Show gifts
```

The visitor will enter the respective number to choose an option. Also, the visitor will have `100` tickets in the beginning.

In the first option, we will ask for another input: `Enter the number of the gift you want to get:`

The visitor will enter the id/order number of the gift, and we will output the name of the gift: `Here you go, one %GIFT_NAME%!`

Then, we will subtract the ticket amount of the chosen gift from the visitor’s total tickets and show the total tickets: `Total tickets: 90`

In the second option, the visitor will enter the number of tickets to add with this input: `Enter the ticket amount:`

After that, we will show the total number of tickets again!

In the third option, let's show the total tickets that the visitor has: `Total tickets: 90`

And in the last option, show the list of gifts again like in the example!

After any of these cases, output this message before ending the program: `Have a nice day!`

##### Objectives

In this stage, your program should:

1. Print the welcoming and greeting messages from the previous stage;
2. Print the list of gifts;
3. Handle the initial input where the user chooses what to do;
4. Handle the option to buy a gift;
5. Handle the option to add more tickets;
6. Handle the option to see the total tickets;
7. Handle the option to see the list of gifts;
8. Terminate the program with a new message.

##### Examples

The greater-than symbol followed by a space (`> `) represents the user input. Note that it's not part of the input.

**Example 1:** *where the program handles the initial input with the first option*

```no-highlight
WELCOME TO THE CARNIVAL GIFT SHOP!
Hello friend! Thank you for visiting the carnival!
Here's the list of gifts:

1- Teddy Bear, Cost: 10 tickets
2- Big Red Ball, Cost: 5 tickets
3- Huge Bear, Cost: 50 tickets
4- Candy, Cost: 8 tickets
5- Stuffed Tiger, Cost: 15 tickets
6- Stuffed Dragon, Cost: 30 tickets
7- Skateboard, Cost: 100 tickets
8- Toy Car, Cost: 25 tickets
9- Basketball, Cost: 20 tickets
10- Scary Mask, Cost: 75 tickets

What do you want to do?
1-Buy a gift 2-Add tickets 3-Check tickets 4-Show gifts
> 1
Enter the number of the gift you want to get: > 1
Here you go, one Teddy Bear!
Total tickets: 90
Have a nice day!
```

**Example 2:** *where the program handles the initial input with the second option*

```no-highlight
WELCOME TO THE CARNIVAL GIFT SHOP!
Hello friend! Thank you for visiting the carnival!
Here's the list of gifts:

1- Teddy Bear, Cost: 10 tickets
2- Big Red Ball, Cost: 5 tickets
3- Huge Bear, Cost: 50 tickets
4- Candy, Cost: 8 tickets
5- Stuffed Tiger, Cost: 15 tickets
6- Stuffed Dragon, Cost: 30 tickets
7- Skateboard, Cost: 100 tickets
8- Toy Car, Cost: 25 tickets
9- Basketball, Cost: 20 tickets
10- Scary Mask, Cost: 75 tickets

What do you want to do?
1-Buy a gift 2-Add tickets 3-Check tickets 4-Show gifts
> 2
Enter the ticket amount: > 100
Total tickets: 200
Have a nice day!
```

**Example 3:** *where the program handles the initial input with the third option*

```no-highlight
WELCOME TO THE CARNIVAL GIFT SHOP!
Hello friend! Thank you for visiting the carnival!
Here's the list of gifts:

1- Teddy Bear, Cost: 10 tickets
2- Big Red Ball, Cost: 5 tickets
3- Huge Bear, Cost: 50 tickets
4- Candy, Cost: 8 tickets
5- Stuffed Tiger, Cost: 15 tickets
6- Stuffed Dragon, Cost: 30 tickets
7- Skateboard, Cost: 100 tickets
8- Toy Car, Cost: 25 tickets
9- Basketball, Cost: 20 tickets
10- Scary Mask, Cost: 75 tickets

What do you want to do?
1-Buy a gift 2-Add tickets 3-Check tickets 4-Show gifts
> 3
Total tickets: 100
Have a nice day!
```

**Example 4:** *where the program handles the initial input with the fourth option*

```no-highlight
WELCOME TO THE CARNIVAL GIFT SHOP!
Hello friend! Thank you for visiting the carnival!
Here's the list of gifts:

1- Teddy Bear, Cost: 10 tickets
2- Big Red Ball, Cost: 5 tickets
3- Huge Bear, Cost: 50 tickets
4- Candy, Cost: 8 tickets
5- Stuffed Tiger, Cost: 15 tickets
6- Stuffed Dragon, Cost: 30 tickets
7- Skateboard, Cost: 100 tickets
8- Toy Car, Cost: 25 tickets
9- Basketball, Cost: 20 tickets
10- Scary Mask, Cost: 75 tickets

What do you want to do?
1-Buy a gift 2-Add tickets 3-Check tickets 4-Show gifts
> 4
Here's the list of gifts:

1- Teddy Bear, Cost: 10 tickets
2- Big Red Ball, Cost: 5 tickets
3- Huge Bear, Cost: 50 tickets
4- Candy, Cost: 8 tickets
5- Stuffed Tiger, Cost: 15 tickets
6- Stuffed Dragon, Cost: 30 tickets
7- Skateboard, Cost: 100 tickets
8- Toy Car, Cost: 25 tickets
9- Basketball, Cost: 20 tickets
10- Scary Mask, Cost: 75 tickets
Have a nice day!
```

```javascript
// write your code here
const input = require("sync-input");
let totalTickets = 100;
const gifts = {
    "Teddy Bear": 10,
    "Big Red Ball": 5,
    "Huge Bear": 50,
    "Candy": 8,
    "Stuffed Tiger": 15,
    "Stuffed Dragon": 30,
    "Skateboard": 100,
    "Toy Car": 25,
    "Basketball": 20,
    "Scary Mask": 75
};
console.log(`WELCOME TO THE CARNIVAL GIFT SHOP!
Hello friend! Thank you for visiting the carnival!`);
function showGifts() {
    console.log(`Here's the list of gifts:
`);
    for (let i = 0; i < Object.keys(gifts).length; i++) {
        console.log(`${i + 1}- ${Object.keys(gifts)[i]}, Cost: ${Object.values(gifts)[i]} tickets`);
    }
}
function checkTickets() {
    console.log(`Total tickets: ${totalTickets}`);
}
showGifts();
console.log(`
What do you want to do?
1-Buy a gift 2-Add tickets 3-Check tickets 4-Show gifts`)
let choice = Number(input());
switch (choice) {
    case 1:
        let number = Number(input("Enter the number of the gift you want to get: "));
        console.log(`Here you go, one ${Object.keys(gifts)[number - 1]}!`);
        totalTickets -= Object.values(gifts)[number - 1];
        checkTickets();
        break;
    case 2:
        let ticketAmount = Number(input("Enter the ticket amount: > "));
        totalTickets += ticketAmount;
        checkTickets();
        break;
    case 3:
        checkTickets();
        break;
    case 4:
        showGifts();
        break;
}
console.log("Have a nice day!");
```

## Stage 4/5: Can you repeat?

##### Description

In the previous stage, you've implemented the operations the visitor can do with our program. Now, let's loop our program until visitors decide to quit. Add a new prompt to exit the program to the initial input:

```no-highlight
What do you want to do?

1-Buy a gift 2-Add tickets 3-Check tickets 4-Show gifts 5-Exit the shop
```

If the visitor enters the exit command, the program will end and show the previous ending message. Otherwise, the program will go back to our initial input and ask the visitors what to do again.

Additionally, in the case of buying gifts, if everything goes well, remove the gift that the visitor bought from the list of gifts.

Don't worry about the user not having enough tickets to buy a gift. You'll handle cases like this in the next stage.

The starting tickets will be `zero` this time.

##### Objectives

In this stage, your program should:

1. Print the welcoming and greeting messages from the previous stage;
2. Print the list of gifts;
3. Handle initial input which the user chooses what to do;
4. Handle the option to buy a gift and remove the gift from the list;
5. Handle the option to add more tickets;
6. Handle the option to see the total tickets;
7. Handle the option to see the list of gifts;
8. Handle a new option to quit the program;
9. Run continuously;
10. Terminate the program with the message.

##### Examples

The greater-than symbol followed by a space (`> `) represents the user input. Note that it's not part of the input.

**Example 1:** *where the program starts and runs continuously until the exit prompt*

```no-highlight
WELCOME TO THE CARNIVAL GIFT SHOP!
Hello friend! Thank you for visiting the carnival!
Here's the list of gifts:

1- Teddy Bear, Cost: 10 tickets
2- Big Red Ball, Cost: 5 tickets
3- Huge Bear, Cost: 50 tickets
4- Candy, Cost: 8 tickets
5- Stuffed Tiger, Cost: 15 tickets
6- Stuffed Dragon, Cost: 30 tickets
7- Skateboard, Cost: 100 tickets
8- Toy Car, Cost: 25 tickets
9- Basketball, Cost: 20 tickets
10- Scary Mask, Cost: 75 tickets

What do you want to do?
1-Buy a gift 2-Add tickets 3-Check tickets 4-Show gifts 5-Exit the shop
> 2
Enter the ticket amount: > 100
Total tickets: 100

What do you want to do?
1-Buy a gift 2-Add tickets 3-Check tickets 4-Show gifts 5-Exit the shop
> 1
Enter the number of the gift you want to get: > 10
Here you go, one Scary Mask!
Total tickets: 25

What do you want to do?
1-Buy a gift 2-Add tickets 3-Check tickets 4-Show gifts 5-Exit the shop
> 4
Here's the list of gifts:

1- Teddy Bear, Cost: 10 tickets
2- Big Red Ball, Cost: 5 tickets
3- Huge Bear, Cost: 50 tickets
4- Candy, Cost: 8 tickets
5- Stuffed Tiger, Cost: 15 tickets
6- Stuffed Dragon, Cost: 30 tickets
7- Skateboard, Cost: 100 tickets
8- Toy Car, Cost: 25 tickets
9- Basketball, Cost: 20 tickets

What do you want to do?
1-Buy a gift 2-Add tickets 3-Check tickets 4-Show gifts 5-Exit the shop
> 3
Total tickets: 25

What do you want to do?
1-Buy a gift 2-Add tickets 3-Check tickets 4-Show gifts 5-Exit the shop
> 5
Have a nice day!

Process finished with exit code 0
```

```javascript
// write your code here
const input = require("sync-input");
let totalTickets = 0;
const gifts = [
    { id: 1, name: "Teddy Bear", price: 10 },
    { id: 2, name: "Big Red Ball", price: 5 },
    { id: 3, name: "Huge Bear", price: 50 },
    { id: 4, name: "Candy", price: 8 },
    { id: 5, name: "Stuffed Tiger", price: 15 },
    { id: 6, name: "Stuffed Dragon", price: 30 },
    { id: 7, name: "Skateboard", price: 100 },
    { id: 8, name: "Toy Car", price: 25 },
    { id: 9, name: "Basketball", price: 20 },
    { id: 10, name: "Scary Mask", price: 75 }
];
function showGifts() {
    console.log("Here's the list of gifts:\n");
    gifts.forEach(gift => {
        console.log(`${gift.id}- ${gift.name}, Cost: ${gift.price} tickets`);
    });
}
function checkTickets() {
    console.log(`Total tickets: ${totalTickets}`);
}
console.log(`WELCOME TO THE CARNIVAL GIFT SHOP!
Hello friend! Thank you for visiting the carnival!`);
showGifts();
while (true) {
    console.log(`
What do you want to do?
1-Buy a gift 2-Add tickets 3-Check tickets 4-Show gifts 5-Exit the shop`);
    let choice = Number(input());
    switch (choice) {
        case 1:
            let number = Number(input("Enter the number of the gift you want to get: "));
            let gift = gifts.find(gift => gift.id === number);
            console.log(`Here you go, one ${gift.name}!`);
            delete gifts[gifts.findIndex(gift => gift.id === number)];
            totalTickets -= gift.price;
            checkTickets();
            break;
        case 2:
            let ticketAmount = Number(input("Enter the ticket amount: > "));
            totalTickets += ticketAmount;
            checkTickets();
            break;
        case 3:
            checkTickets();
            break;
        case 4:
            showGifts();
            break;
        case 5:
            console.log("Have a nice day!");
            return;
    }
}
```

## Stage 5/5: Expect the unexpected

##### Description

We made our program run continuously, but there is a problem, as you cannot handle any unexpected inputs! The visitor could enter a different number than you provide, or they could enter a character instead of a number. Now, we will handle these cases.

For the initial input, where you ask the visitors what to do, if the visitor enters anything unexpected, output `Please enter a valid number!`

For the **first** option, where the visitor chooses to buy a gift, handle these cases;

- If there're no gifts left to buy, output: `Wow! There are no gifts to buy.`
- If there are non-numeric characters in the input: `Please enter a valid number!`
- If there are no gifts with that number. Output this message: `There is no gift with that number!`
- If the visitor doesn’t have enough tickets to buy a gift: `You don't have enough tickets to buy this gift.`

For the **second** option, where the visitor enters the number of tickets they want to add, handle these cases:

- if they enter a non-numeric value.
- the number they enter should be between `0` and `1000` (both inclusive).

Output this message if **any** of these cases happen: `Please enter a valid number between 0 and 1000.`

For the **last** option, where you show the list of gifts, if there are no gifts left to offer, output this message again:`Wow! There are no gifts to buy.`

Following the previous stage, the program will run until the exit prompt is entered.

You can use the [isNaN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isNaN) built-in method to check if an input is a number.

##### Objectives

In this stage, your program should:

1. Print the welcoming and greeting messages from the previous stage;
2. Print the list of gifts;
3. Handle the initial input where the user chooses what to do and handle any unexpected inputs;
4. Handle the option to buy a gift and handle all of the cases mentioned above;
5. Handle the option to add more tickets to the total tickets and handle all of the cases mentioned above;
6. Handle the option to see the total tickets;
7. Handle the option to see the list of gifts and handle all of the cases mentioned above;
8. Handle the option to quit the program;
9. Run continuously;
10. Terminate the program the message.

##### Examples

The greater-than symbol followed by a space (`> `) represents the user input. Note that it's not part of the input.

**Example 1:** *where the program handles an unexpected input at the initial stage*

```no-highlight
WELCOME TO THE CARNIVAL GIFT SHOP!
Hello friend! Thank you for visiting the carnival!
Here's the list of gifts:

1- Teddy Bear, Cost: 10 tickets
2- Big Red Ball, Cost: 5 tickets
3- Huge Bear, Cost: 50 tickets
4- Candy, Cost: 8 tickets
5- Stuffed Tiger, Cost: 15 tickets
6- Stuffed Dragon, Cost: 30 tickets
7- Skateboard, Cost: 100 tickets
8- Toy Car, Cost: 25 tickets
9- Basketball, Cost: 20 tickets
10- Scary Mask, Cost: 75 tickets

What do you want to do?
1-Buy a gift 2-Add tickets 3-Check tickets 4-Show gifts 5-Exit the shop
> 6
Please enter a valid number!

What do you want to do?
1-Buy a gift 2-Add tickets 3-Check tickets 4-Show gifts 5-Exit the shop
> 5
Have a nice day!

Process finished with exit code 0
```

**Example 2:** *where the program takes a random input at the first option*

```no-highlight
WELCOME TO THE CARNIVAL GIFT SHOP!
Hello friend! Thank you for visiting the carnival!
Here's the list of gifts:

1- Teddy Bear, Cost: 10 tickets
2- Big Red Ball, Cost: 5 tickets
3- Huge Bear, Cost: 50 tickets
4- Candy, Cost: 8 tickets
5- Stuffed Tiger, Cost: 15 tickets
6- Stuffed Dragon, Cost: 30 tickets
7- Skateboard, Cost: 100 tickets
8- Toy Car, Cost: 25 tickets
9- Basketball, Cost: 20 tickets
10- Scary Mask, Cost: 75 tickets

What do you want to do?
1-Buy a gift 2-Add tickets 3-Check tickets 4-Show gifts 5-Exit the shop
> 2
Enter the ticket amount: > 100
Total tickets: 100

What do you want to do?
1-Buy a gift 2-Add tickets 3-Check tickets 4-Show gifts 5-Exit the shop
> 1
Enter the number of the gift you want to get: > a
Please enter a valid number!

What do you want to do?
1-Buy a gift 2-Add tickets 3-Check tickets 4-Show gifts 5-Exit the shop
> 5
Have a nice day!

Process finished with exit code 0
```

**Example 3:** *where the program addresses if the user enters the wrong id at the first option*

```no-highlight
WELCOME TO THE CARNIVAL GIFT SHOP!
Hello friend! Thank you for visiting the carnival!
Here's the list of gifts:

1- Teddy Bear, Cost: 10 tickets
2- Big Red Ball, Cost: 5 tickets
3- Huge Bear, Cost: 50 tickets
4- Candy, Cost: 8 tickets
5- Stuffed Tiger, Cost: 15 tickets
6- Stuffed Dragon, Cost: 30 tickets
7- Skateboard, Cost: 100 tickets
8- Toy Car, Cost: 25 tickets
9- Basketball, Cost: 20 tickets
10- Scary Mask, Cost: 75 tickets

What do you want to do?
1-Buy a gift 2-Add tickets 3-Check tickets 4-Show gifts 5-Exit the shop
> 2
Enter the ticket amount: > 100
Total tickets: 100

What do you want to do?
1-Buy a gift 2-Add tickets 3-Check tickets 4-Show gifts 5-Exit the shop
> 1
Enter the number of the gift you want to get: > 0
There is no gift with that number!

What do you want to do?
1-Buy a gift 2-Add tickets 3-Check tickets 4-Show gifts 5-Exit the shop
> 5
Have a nice day!

Process finished with exit code 0
```

**Example 4:** *where the program addresses if the user has insufficient tickets at the first option*

```no-highlight
WELCOME TO THE CARNIVAL GIFT SHOP!
Hello friend! Thank you for visiting the carnival!
Here's the list of gifts:

1- Teddy Bear, Cost: 10 tickets
2- Big Red Ball, Cost: 5 tickets
3- Huge Bear, Cost: 50 tickets
4- Candy, Cost: 8 tickets
5- Stuffed Tiger, Cost: 15 tickets
6- Stuffed Dragon, Cost: 30 tickets
7- Skateboard, Cost: 100 tickets
8- Toy Car, Cost: 25 tickets
9- Basketball, Cost: 20 tickets
10- Scary Mask, Cost: 75 tickets

What do you want to do?
1-Buy a gift 2-Add tickets 3-Check tickets 4-Show gifts 5-Exit the shop
> 1
Enter the number of the gift you want to get: > 1
You don't have enough tickets to buy this gift.
Total tickets: 0

What do you want to do?
1-Buy a gift 2-Add tickets 3-Check tickets 4-Show gifts 5-Exit the shop
> 5
Have a nice day!

Process finished with exit code 0
```

**Example 5:** *where the program addresses if there are no gifts left at the first option*

```no-highlight
...
What do you want to do?
1-Buy a gift 2-Add tickets 3-Check tickets 4-Show gifts 5-Exit the shop
> 1
Wow! There are no gifts to buy.

What do you want to do?
1-Buy a gift 2-Add tickets 3-Check tickets 4-Show gifts 5-Exit the shop
>
```

**Example 6:** *where the program takes an unexpected input at the second option*

```no-highlight
WELCOME TO THE CARNIVAL GIFT SHOP!
Hello friend! Thank you for visiting the carnival!
Here's the list of gifts:

1- Teddy Bear, Cost: 10 tickets
2- Big Red Ball, Cost: 5 tickets
3- Huge Bear, Cost: 50 tickets
4- Candy, Cost: 8 tickets
5- Stuffed Tiger, Cost: 15 tickets
6- Stuffed Dragon, Cost: 30 tickets
7- Skateboard, Cost: 100 tickets
8- Toy Car, Cost: 25 tickets
9- Basketball, Cost: 20 tickets
10- Scary Mask, Cost: 75 tickets

What do you want to do?
1-Buy a gift 2-Add tickets 3-Check tickets 4-Show gifts 5-Exit the shop
> 2
Enter the ticket amount: > a
Please enter a valid number between 0 and 1000.

What do you want to do?
1-Buy a gift 2-Add tickets 3-Check tickets 4-Show gifts 5-Exit the shop
> 5
Have a nice day!

Process finished with exit code 0
```

**Example 7:** *where the program takes unexpected information at the second option*

```no-highlight
WELCOME TO THE CARNIVAL GIFT SHOP!
Hello friend! Thank you for visiting the carnival!
Here's the list of gifts:

1- Teddy Bear, Cost: 10 tickets
2- Big Red Ball, Cost: 5 tickets
3- Huge Bear, Cost: 50 tickets
4- Candy, Cost: 8 tickets
5- Stuffed Tiger, Cost: 15 tickets
6- Stuffed Dragon, Cost: 30 tickets
7- Skateboard, Cost: 100 tickets
8- Toy Car, Cost: 25 tickets
9- Basketball, Cost: 20 tickets
10- Scary Mask, Cost: 75 tickets

What do you want to do?
1-Buy a gift 2-Add tickets 3-Check tickets 4-Show gifts 5-Exit the shop
> 2
Enter the ticket amount: > 1001
Please enter a valid number between 0 and 1000.

What do you want to do?
1-Buy a gift 2-Add tickets 3-Check tickets 4-Show gifts 5-Exit the shop
> 5
Have a nice day!

Process finished with exit code 0
```

**Example 8:** *where the program addresses if there are no gifts left at the fourth option*

```no-highlight
...
What do you want to do?
1-Buy a gift 2-Add tickets 3-Check tickets 4-Show gifts 5-Exit the shop
> 4
Here's the list of gifts:

Wow! There are no gifts to buy.

What do you want to do?
1-Buy a gift 2-Add tickets 3-Check tickets 4-Show gifts 5-Exit the shop
> 5
Have a nice day!

Process finished with exit code 0
```

```javascript
// write your code here
const input = require("sync-input");
let totalTickets = 0;
const gifts = [
    { id: 1, name: "Teddy Bear", price: 10 },
    { id: 2, name: "Big Red Ball", price: 5 },
    { id: 3, name: "Huge Bear", price: 50 },
    { id: 4, name: "Candy", price: 8 },
    { id: 5, name: "Stuffed Tiger", price: 15 },
    { id: 6, name: "Stuffed Dragon", price: 30 },
    { id: 7, name: "Skateboard", price: 100 },
    { id: 8, name: "Toy Car", price: 25 },
    { id: 9, name: "Basketball", price: 20 },
    { id: 10, name: "Scary Mask", price: 75 }
];
function buyGift(giftID) {
    let giftItem = gifts.find(gift => gift.id === giftID);
    let giftIndex = gifts.findIndex(gift => gift.id === giftID);
    if (isNaN(giftID)) {
        console.log("Please enter a valid number!");
    } else if (giftIndex === -1) {
        console.log("There is no gift with that number!");
    } else if (totalTickets < giftItem.price) {
        console.log("You don't have enough tickets to buy this gift.");
    } else {
        console.log(`Here you go, one ${giftItem.name}!`);
        gifts.splice(giftIndex, 1);
        totalTickets -= giftItem.price;
        checkTickets();
    }
}
function addTickets(amount) {
    if (isNaN(amount) || amount < 0 || amount > 1000) {
        console.log("Please enter a valid number between 0 and 1000.");
    } else {
        totalTickets += amount;
        checkTickets();
    }
}
function checkTickets() {
    console.log(`Total tickets: ${totalTickets}`);
}
function showGifts() {
    console.log("Here's the list of gifts:\n");
    gifts.forEach(gift => {
        console.log(`${gift.id}- ${gift.name}, Cost: ${gift.price} tickets`);
    });
}
console.log(`WELCOME TO THE CARNIVAL GIFT SHOP!
Hello friend! Thank you for visiting the carnival!`);
showGifts();
while (true) {
    console.log(`
What do you want to do?
1-Buy a gift 2-Add tickets 3-Check tickets 4-Show gifts 5-Exit the shop`);
    let choice = Number(input());
    switch (choice) {
        case 1:
            if (gifts.length === 0) {
                console.log("Wow! There are no gifts to buy.");
            } else {
                let giftID = Number(input("Enter the number of the gift you want to get: "));
                buyGift(giftID);
            }
            break;
        case 2:
            let ticketAmount = Number(input("Enter the ticket amount: > "));
            addTickets(ticketAmount);
            break;
        case 3:
            checkTickets();
            break;
        case 4:
            showGifts();
            if (gifts.length === 0) {
                console.log("Wow! There are no gifts to buy.");
            }
            break;
        case 5:
            console.log("Have a nice day!");
            return;
        default:
            console.log("Please enter a valid number!");
            break;
    }
}
```

