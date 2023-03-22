//Write your code here
const input = require('sync-input');
let currencyList = {
    USD : 1.0,
    JPY : 113.5,
    EUR : 0.89,
    RUB : 74.36,
    GBP : 0.75,
};

console.log("Welcome to Currency Converter!");

for (const [property, value] of Object.entries(currencyList)) {
    console.log(`1 USD equals ${value} ${property}`);
}

while (true) {
    console.log(`What do you want to do?
1-Convert currencies 2-Exit program`);
    let choice = Number(input());
    if (choice === 1) {
        console.log("What do you want to convert?");
        let currencyFrom = input("From: ").toUpperCase();
        while (!(currencyFrom in currencyList)) {
            console.log("Unknown currency");
            currencyFrom = input("From: ").toUpperCase();
        }
        let currencyTo = input("To: ").toUpperCase();
        while (!(currencyTo in currencyList)) {
            console.log("Unknown currency");
            currencyTo = input("To: ").toUpperCase();
        }
        let amount = Number(input("Amount: "));
        if (isNaN(amount)) {
            console.log("The amount has to be a number");
        } else if (amount < 1) {
            console.log("The amount cannot be less than 1");
        } else {
            console.log(`Result: ${amount} ${currencyFrom} equals ${(currencyList[currencyTo] * amount / currencyList[currencyFrom]).toFixed(4)} ${currencyTo}`);
        }
    } else if (choice === 2) {
        console.log("Have a nice day!");
        break;
    } else {
        console.log("Unknown input");
    }
}