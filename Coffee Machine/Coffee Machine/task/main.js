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