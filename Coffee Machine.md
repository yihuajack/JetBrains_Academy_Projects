## Stage 1/6: Making coffee

##### Description

Let's start with a program that makes you a coffee – virtual coffee, of course. In this project, you will implement functionality that simulates a real coffee machine. It can run out of ingredients, such as milk or coffee beans, it can offer you various types of coffee, and, finally, it will take money for the prepared drink.

##### Objective

The first version of the program just makes you a coffee. It should print to the standard output what it is doing as it makes the drink.

##### Example

Take a look at the sample output below and print all the following lines.

Output:

```no-highlight
Starting to make a coffee
Grinding coffee beans
Boiling water
Mixing boiled water with crushed coffee beans
Pouring coffee into the cup
Pouring some milk into the cup
Coffee is ready!
```

```javascript
// Use "input()" to input a line from the user
// Use "input(str)" to print some text before requesting input
// You will need this in the following stages
const input = require('sync-input')

console.log(`Starting to make a coffee
Grinding coffee beans
Boiling water
Mixing boiled water with crushed coffee beans
Pouring coffee into the cup
Pouring some milk into the cup
Coffee is ready!`);

```

## Stage 2/6: Ingredient calculator

##### Description

Now let's consider a case when you need a lot of coffee. Maybe you're hosting a party with a lot of guests! In these circumstances, it's better to make preparations in advance.

So, we will ask a user to enter the desired amount of coffee, in cups. Given this, you can adjust the program by calculating how much water, coffee, and milk are necessary to make the specified amount of coffee.

Of course, all this coffee is not needed *right* now, so at this stage, the coffee machine doesn't actually make any coffee yet.

##### Objectives

Let's break the task into several steps:

1. First, read the numbers of coffee drinks from the input.
2. Figure out how much of each ingredient the machine will need. Note that one cup of coffee made on this coffee machine contains *200 ml* of water, *50 ml* of milk, and *15 g* of coffee beans.
3. Output the required ingredient amounts back to the user.

##### Examples

The greater-than symbol followed by a space (`> `) represents the user input. Note that it's not part of the input.

**Example 1:** *a dialogue with a user might look like this*

```no-highlight
Write how many cups of coffee you will need:
> 25
For 25 cups of coffee you will need:
5000 ml of water
1250 ml of milk
375 g of coffee beans
```

**Example 2:** *here is another dialogue*

```no-highlight
Write how many cups of coffee you will need:
> 125
For 125 cups of coffee you will need:
25000 ml of water
6250 ml of milk
1875 g of coffee beans
```

```javascript
const input = require('sync-input')

console.log("Write how many cups of coffee you will need:");
let cups = input();
console.log(`For ${cups} cups of coffee you will need:
${200 * cups} ml of water
${50 * cups} ml of milk
${15 * cups} g of coffee beans`);

```

## Stage 3/6: Coffee for all

##### Description

A real coffee machine doesn't have an infinite supply of water, milk, or coffee beans. And if you input a really big number, it's almost certain that a real coffee machine wouldn't have the supplies needed to make all that coffee for you.

In this stage, you need to improve the previous program. Now you will check amounts of water, milk, and coffee beans available in your coffee machine at the moment.

##### Objectives

Write a program that does the following:

1. It requests the amounts of water, milk, and coffee beans available at the moment, and then asks for the number of cups a user needs.
2. If the coffee machine has enough supplies to make the specified amount of coffee, the program should print `"Yes, I can make that amount of coffee"`.
3. If the coffee machine can make more than that, the program should output `"Yes, I can make that amount of coffee (and even N more than that)"`, where *N* is the number of additional cups of coffee that the coffee machine can make.
4. If the amount of given resources is not enough to make the specified amount of coffee, the program should output `"No, I can make only N cups of coffee"`.

Like in the previous stage, the coffee machine needs *200 ml* of water, *50 ml* of milk, and *15 g* of coffee beans to make one cup of coffee.

##### Examples

The greater-than symbol followed by a space (`> `) represents the user input. Note that it's not part of the input.

**Example 1:**

```no-highlight
Write how many ml of water the coffee machine has:
> 300
Write how many ml of milk the coffee machine has:
> 65
Write how many grams of coffee beans the coffee machine has:
> 100
Write how many cups of coffee you will need:
> 1
Yes, I can make that amount of coffee
```

**Example 2:**

```no-highlight
Write how many ml of water the coffee machine has:
> 500
Write how many ml of milk the coffee machine has:
> 250
Write how many grams of coffee beans the coffee machine has:
> 200
Write how many cups of coffee you will need:
> 10
No, I can make only 2 cups of coffee
```

**Example 3:**

```no-highlight
Write how many ml of water the coffee machine has:
> 1550
Write how many ml of milk the coffee machine has:
> 299
Write how many grams of coffee beans the coffee machine has:
> 300
Write how many cups of coffee you will need:
> 3
Yes, I can make that amount of coffee (and even 2 more than that)
```

**Example 4:**

```no-highlight
Write how many ml of water the coffee machine has:
> 0
Write how many ml of milk the coffee machine has:
> 0
Write how many grams of coffee beans the coffee machine has:
> 0
Write how many cups of coffee you will need:
> 1
No, I can make only 0 cups of coffee
```

**Example 5:**

```no-highlight
Write how many ml of water the coffee machine has:
> 0
Write how many ml of milk the coffee machine has:
> 0
Write how many grams of coffee beans the coffee machine has:
> 0
Write how many cups of coffee you will need:
> 0
Yes, I can make that amount of coffee 
```

**Example 6:**

```no-highlight
Write how many ml of water the coffee machine has:
> 200
Write how many ml of milk the coffee machine has:
> 50
Write how many grams of coffee beans the coffee machine has:
> 15
Write how many cups of coffee you will need:
> 0
Yes, I can make that amount of coffee (and even 1 more than that)
```

```javascript
const input = require('sync-input')

console.log("Write how many ml of water the coffee machine has:");
let water = input();
console.log("Write how many ml of milk the coffee machine has:");
let milk = input();
console.log("Write how many grams of coffee beans the coffee machine has:");
let beans = input();
console.log("Write how many cups of coffee you will need:");
let cups = Number(input());
let amount = Math.floor(Math.min(water / 200, milk / 50, beans / 15));
if (amount > cups) {
    console.log(`Yes, I can make that amount of coffee (and even ${amount - cups} more than that)`);
} else if (amount === cups) {
    console.log("Yes, I can make that amount of coffee");
} else {
    console.log(`No, I can make only ${amount} cups of coffee`);
}
```

## Stage 4/6: Buy, fill, take!

##### Description

Let's simulate an actual coffee machine! What do we need for that? This coffee machine will have a limited supply of water, milk, coffee beans, and disposable cups. Also, it will calculate how much money it gets for selling coffee.

There are several options for the coffee machine we want you to implement: first, it should sell coffee. It can make different types of coffee: espresso, latte, and cappuccino. Of course, each variety requires a different amount of supplies, however, in any case, you will need only one disposable cup for a drink. Second, the coffee machine must get replenished by a special worker. Third, another special worker should be able to take out money from the coffee machine.

##### Objectives

Write a program that offers to buy one cup of coffee or to fill the supplies or to take its money out. Note that the program is supposed to do one of the mentioned actions at a time. It should also calculate the amounts of remaining ingredients and how much money is left. Display the quantity of supplies before and after purchase.

1. First, your program reads one option from the standard input, which can be `"buy"`, `"fill"`, `"take"`. If a user wants to buy some coffee, the input is `"buy"`. If a special worker thinks that it is time to fill out all the supplies for the coffee machine, the input line will be `"fill"`. If another special worker decides that it is time to take out the money from the coffee machine, you'll get the input `"take"`.

2. If the user writes

    

   ```
   "buy"
   ```

    

   then they must choose one of three types of coffee that the coffee machine can make: espresso, latte, or cappuccino.

   - For one espresso, the coffee machine needs *250 ml* of water and *16 g* of coffee beans. It costs *$4*.
   - For a latte, the coffee machine needs *350 ml* of water, *75 ml* of milk, and *20 g* of coffee beans. It costs *$7*.
   - And for a cappuccino, the coffee machine needs *200 ml* of water, *100 ml* of milk, and *12 g* of coffee beans. It costs *$6*.

3. If the user writes `"fill"`, the program should ask them how much water, milk, coffee and how many disposable cups they want to add into the coffee machine.

4. If the user writes `"take"` the program should give all the money that it earned from selling coffee.

At the moment, the coffee machine has *$550*, *400 ml* of water, *540 ml* of milk, *120 g* of coffee beans, and *9* disposable cups.



To sum up, your program should print the coffee machine's state, process one query from the user, as well as print the coffee machine's state after that. Try to use functions for implementing every action that the coffee machine can do.



##### Examples

An espresso should be number *1* in the list, a latte number *2*, and a cappuccino number *3*.
Options are named as `"buy"`, `"fill"`, `"take"`.

The greater-than symbol followed by a space (`> `) represents the user input. Note that it's not part of the input.

**Example 1:**

```no-highlight
The coffee machine has:
400 ml of water
540 ml of milk
120 g of coffee beans
9 disposable cups
$550 of money

Write action (buy, fill, take): 
> buy
What do you want to buy? 1 - espresso, 2 - latte, 3 - cappuccino: 
> 3

The coffee machine has:
200 ml of water
440 ml of milk
108 g of coffee beans
8 disposable cups
$556 of money
```

**Example 2:**

```no-highlight
The coffee machine has:
400 ml of water
540 ml of milk
120 g of coffee beans
9 disposable cups
$550 of money

Write action (buy, fill, take): 
> fill
Write how many ml of water you want to add: 
> 2000
Write how many ml of milk you want to add: 
> 500
Write how many grams of coffee beans you want to add: 
> 100
Write how many disposable cups you want to add: 
> 10

The coffee machine has:
2400 ml of water
1040 ml of milk
220 g of coffee beans
19 disposable cups
$550 of money
```

**Example 3:**

```no-highlight
The coffee machine has:
400 ml of water
540 ml of milk
120 g of coffee beans
9 disposable cups
$550 of money

Write action (buy, fill, take): 
> take
I gave you $550

The coffee machine has:
400 ml of water
540 ml of milk
120 g of coffee beans
9 disposable cups
$0 of money
```

```javascript
const input = require('sync-input')
let coffeeMachine = {
    water: 400,
    milk: 540,
    coffeeBeans: 120,
    disposableCups: 9,
    money: 550,
    sell(coffee) {
        this.water -= coffee.water;
        this.milk -= coffee.milk;
        this.coffeeBeans -= coffee.coffeeBeans;
        this.disposableCups--;
        this.money += coffee.costs;
    },
    add(water, milk, coffeeBeans, disposableCups) {
        this.water += water;
        this.milk += milk;
        this.coffeeBeans += coffeeBeans;
        this.disposableCups += disposableCups;
    },
    withdraw() {
        let moneyTaken = this.money;
        this.money = 0;
        return moneyTaken;
    }
}
const coffees = [
    {name: "espresso", water: 250, milk: 0, coffeeBeans: 16, costs: 4},
    {name: "latte", water: 350, milk: 75, coffeeBeans: 20, costs: 7},
    {name: "cappuccino", water: 200, milk: 100, coffeeBeans: 12, costs: 6}
]
function printCoffeeMachine() {
    console.log(`The coffee machine has:
${coffeeMachine.water} ml of water
${coffeeMachine.milk} ml of milk
${coffeeMachine.coffeeBeans} g of coffee beans
${coffeeMachine.disposableCups} disposable cups
$${coffeeMachine.money} of money
`);
}
function buy() {
    console.log("What do you want to buy? 1 - espresso, 2 - latte, 3 - cappuccino: ");
    let coffeeToBuy = input();
    coffeeMachine.sell(coffees[coffeeToBuy - 1]);
    console.log();
}
function fill() {
    console.log("Write how many ml of water you want to add: ");
    let waterToAdd = Number(input());
    console.log("Write how many ml of milk you want to add: ");
    let milkToAdd = Number(input());
    console.log("Write how many grams of coffee beans you want to add: ");
    let coffeeBeansToAdd = Number(input());
    console.log("Write how many disposable cups you want to add: ");
    let disposableCupsToAdd = Number(input());
    coffeeMachine.add(waterToAdd, milkToAdd, coffeeBeansToAdd, disposableCupsToAdd);
    console.log();
}
function take() {
    console.log(`I gave you $${coffeeMachine.withdraw()}\n`);
}
printCoffeeMachine();
console.log("Write action (buy, fill, take): ");
let action = input();
switch (action) {
    case "buy":
        buy();
        printCoffeeMachine();
        break;
    case "fill":
        fill();
        printCoffeeMachine();
        break;
    case "take":
        take();
        printCoffeeMachine();
        break;
}
```

## Stage 5/6: Keeping track of the supplies

##### Description

Just one action is not so interesting, is it? Let's improve the program so it can do multiple actions, one after another. It should repeatedly ask a user what they want to do. If the user types `"buy"`, `"fill"` or `"take"`, then the program should do exactly the same thing it did in the previous step. However, if the user wants to switch off the coffee machine, they should type `"exit"`. The program should terminate on this command. Also, when the user types `"remaining"`, the program should output all the resources that the coffee machine has. This means that you shouldn't show the remaining stock levels at the beginning/end of the program.

Remember, that:

- For the espresso, the coffee machine needs 250 ml of water and 16 g of coffee beans. It costs $4.
- For the latte, the coffee machine needs 350 ml of water, 75 ml of milk, and 20 g of coffee beans. It costs $7.
- And for the cappuccino, the coffee machine needs 200 ml of water, 100 ml of milk, and 12 g of coffee. It costs $6.

##### Objectives

Write a program that will work endlessly to make coffee for all interested persons until the shutdown signal is given. Introduce two new options: `"remaining"` and `"exit"`.

Do not forget that you can be out of resources for making coffee. If the coffee machine doesn't have enough resources to make coffee, the program should output a message that says it can't make a cup of coffee and state what is missing.

And the last improvement to the program at this step — if the user types `"buy"` to buy a cup of coffee and then changes his mind, they should be able to type `"back"` to return into the main cycle.

##### Example

Your coffee machine should have the same initial resources as in the example (*400 ml* of water, *540 ml* of milk, *120 g* of coffee beans, *9* disposable cups, *$550* in cash).

The greater-than symbol followed by a space (`> `) represents the user input. Note that it's not part of the input.

```no-highlight
Write action (buy, fill, take, remaining, exit): 
> remaining

The coffee machine has:
400 ml of water
540 ml of milk
120 g of coffee beans
9 disposable cups
$550 of money

Write action (buy, fill, take, remaining, exit): 
> buy

What do you want to buy? 1 - espresso, 2 - latte, 3 - cappuccino, back - to main menu: 
> 2
I have enough resources, making you a coffee!

Write action (buy, fill, take, remaining, exit): 
> remaining

The coffee machine has:
50 ml of water
465 ml of milk
100 g of coffee beans
8 disposable cups
$557 of money

Write action (buy, fill, take, remaining, exit): 
> buy

What do you want to buy? 1 - espresso, 2 - latte, 3 - cappuccino, back - to main menu: 
> 2
Sorry, not enough water!

Write action (buy, fill, take, remaining, exit): 
> fill

Write how many ml of water you want to add: 
> 1000
Write how many ml of milk you want to add: 
> 0
Write how many grams of coffee beans you want to add: 
> 0
Write how many disposable cups you want to add: 
> 0

Write action (buy, fill, take, remaining, exit): 
> remaining

The coffee machine has:
1050 ml of water
465 ml of milk
100 g of coffee beans
8 disposable cups
$557 of money

Write action (buy, fill, take, remaining, exit): 
> buy

What do you want to buy? 1 - espresso, 2 - latte, 3 - cappuccino, back - to main menu: 
> 2
I have enough resources, making you a coffee!

Write action (buy, fill, take, remaining, exit): 
> remaining

The coffee machine has:
700 ml of water
390 ml of milk
80 g of coffee beans
7 disposable cups
$564 of money

Write action (buy, fill, take, remaining, exit): 
> take

I gave you $564

Write action (buy, fill, take, remaining, exit): 
> remaining

The coffee machine has:
700 ml of water
390 ml of milk
80 g of coffee beans
7 disposable cups
$0 of money

Write action (buy, fill, take, remaining, exit): 
> exit
```

```javascript
const input = require('sync-input')
const coffees = [
    {name: "espresso", water: 250, milk: 0, coffeeBeans: 16, costs: 4},
    {name: "latte", water: 350, milk: 75, coffeeBeans: 20, costs: 7},
    {name: "cappuccino", water: 200, milk: 100, coffeeBeans: 12, costs: 6}
]
let coffeeMachine = {
    water: 400,
    milk: 540,
    coffeeBeans: 120,
    disposableCups: 9,
    money: 550,
    print() {
        console.log(`
The coffee machine has:
${this.water} ml of water
${this.milk} ml of milk
${this.coffeeBeans} g of coffee beans
${this.disposableCups} disposable cups
$${this.money} of money
`);
    },
    compare(coffee) {
        // Suppose if there are multiple items not enough, only print the first one.
        if (this.water < coffee.water) {
            return "water";
        } else if (this.milk < coffee.milk) {
            return "milk";
        } else if (this.coffeeBeans < coffee.coffeeBeans) {
            return "coffee beans";
        } else if (this.disposableCups <= 0) {
            return "disposable cups";
        } else {
            return false;
        }
    },
    sell() {
        console.log("\nWhat do you want to buy? 1 - espresso, 2 - latte, 3 - cappuccino, back - to main menu: ");
        const item = input();
        if (item !== "back") {
            const coffee = coffees[item - 1];
            const notEnough = this.compare(coffee);
            if (!notEnough) {
                console.log("I have enough resources, making you a coffee!");
                this.water -= coffee.water;
                this.milk -= coffee.milk;
                this.coffeeBeans -= coffee.coffeeBeans;
                this.disposableCups--;
                this.money += coffee.costs;
            } else {
                console.log(`Sorry, not enough ${notEnough}!`);
            }
        }
        console.log();  // Suppose back also requires an empty line
    },
    add() {
        console.log("\nWrite how many ml of water you want to add: ");
        this.water += Number(input());
        console.log("Write how many ml of milk you want to add: ");
        this.milk += Number(input());
        console.log("Write how many grams of coffee beans you want to add: ");
        this.coffeeBeans += Number(input());
        console.log("Write how many disposable cups you want to add: ");
        this.disposableCups += Number(input());
        console.log();
    },
    withdraw() {
        console.log(`\nI gave you $${this.money}\n`);
        this.money = 0;
    }
}
while (true) {
    console.log("Write action (buy, fill, take, remaining, exit): ");
    let action = input();
    switch (action) {
        case "buy":
            coffeeMachine.sell();
            break;
        case "fill":
            coffeeMachine.add();
            break;
        case "take":
            coffeeMachine.withdraw();
            break;
        case "remaining":
            coffeeMachine.print();
            break;
        case "exit":
            return;
    }
}
```

## Stage 6/6: The sandbox

##### Description

The time goes on, and the competitors are developing their own coffee machines to attract coffee lovers with special types of coffee or interesting features. It's time to enhance your coffee machine to compete with them!

In this stage, you are free to add anything you want to your coffee machine!

##### Objective

This stage will not be tested. Try to be creative and add something new to your coffee machine. It can be a new type of coffee, different milk flavors, or different volumes of disposable cups.

Leave a comment with the link to the full source code of your coffee machine and tell us what you have implemented!

Good luck!