## Stage 1/4: Welcome to Simple Currency Converter

##### Description

To start things off, you need to print a message to greet your users: `Welcome to Currency Converter!`

The next thing you need to do is print the list of currencies that the program can convert. For now, show the currencies and their equivalents in USD:

| **USD** | **1.0**   |
| ------- | --------- |
| **JPY** | **113.5** |
| **EUR** | **0.89**  |
| **RUB** | **74.36** |
| **GBP** | **0.75**  |


The rates can fluctuate over time; for this project, use the list above throughout all stages.

##### Objectives

In this stage, your program should output:

- A welcome message;
- A list of currencies and their rates.

##### Example

The greater-than symbol followed by a space (`> `) represents the user input. Note that it's not part of the input.

**Example 1:**

```no-highlight
Welcome to Currency Converter!
1 USD equals 1 USD
1 USD equals 113.5 JPY
1 USD equals 0.89 EUR
1 USD equals 74.36 RUB
1 USD equals 0.75 GBP
```

```javascript
//Write your code here
console.log(`Welcome to Currency Converter!
1 USD equals 1 USD
1 USD equals 113.5 JPY
1 USD equals 0.89 EUR
1 USD equals 74.36 RUB
1 USD equals 0.75 GBP`);
```

## Stage 2/4: Convert a currency

##### Description

In this stage, we will start converting a provided amount of USD to the list of currencies in the first stage.

First, print a message to let users know what the program can do:

```no-highlight
I can convert USD to these currencies: JPY, EUR, RUB, USD, GBP
Type the currency you wish to convert: USD
```

Get input from users like in the example. Calculate and output the result that must take 4 decimal places.

To simplify getting input from the console, we're using a JS library, check out the [documentation](https://github.com/hyperskill/sync-input#usage) to see how it's used.

Don’t forget that when getting the input for the desired currency, the program should be able to process lower and uppercase letters. Also, if an unknown input is provided by users, print the following message and stop the program: `Unknown currency`.

The value for the converted amount should not be less than `1`. If it's less, output `The amount cannot be less than 1`. If the amount is not a number, output `The amount has to be a number`.



Hint

##### Objectives

In this stage, your program should:

- Output a new message about what it can do;
- Ask for the currency and `amount` (see Examples);
- Calculate and output the correct result;
- Handle any uppercased or lowercased inputs;
- Handle unknown currency input;
- Handle an amount that is less than `1`;

##### Examples

The greater-than symbol followed by a space (`> `) represents the user input. Note that it's not part of the input.

**Example 1:** *converting to JPY*

```no-highlight
Welcome to Currency Converter!
1 USD equals 1 USD
1 USD equals 113.5 JPY
1 USD equals 0.89 EUR
1 USD equals 74.36 RUB
1 USD equals 0.75 GBP
I can convert USD to these currencies: JPY, EUR, RUB, USD, GBP
Type the currency you wish to convert: USD
To: > JPY
Amount: > 1
Result: 1 USD equals 113.5000 JPY
```

**Example 2:** *converting to EUR*

```no-highlight
Welcome to Currency Converter!
1 USD equals 1 USD
1 USD equals 113.5 JPY
1 USD equals 0.89 EUR
1 USD equals 74.36 RUB
1 USD equals 0.75 GBP
I can convert USD to these currencies: JPY, EUR, RUB, USD, GBP
Type the currency you wish to convert: USD
To: > EUR
Amount: > 18
Result: 18 USD equals 16.0200 EUR
```

**Example 3:** *unknown currency*

```no-highlight
Welcome to Currency Converter!
1 USD equals 1 USD
1 USD equals 113.5 JPY
1 USD equals 0.89 EUR
1 USD equals 74.36 RUB
1 USD equals 0.75 GBP
I can convert USD to these currencies: JPY, EUR, RUB, USD, GBP
Type the currency you wish to convert: USD
To: > TL
Unknown currency
```

**Example 4:** *wrong amount*

```no-highlight
Welcome to Currency Converter!
1 USD equals 1 USD
1 USD equals 113.5 JPY
1 USD equals 0.89 EUR
1 USD equals 74.36 RUB
1 USD equals 0.75 GBP
I can convert USD to these currencies: JPY, EUR, RUB, USD, GBP
Type the currency you wish to convert: USD
To: > USD
Amount: > -1
The amount cannot be less than 1
```

**Example 5:** *wrong amount*

```no-highlight
Welcome to Currency Converter!
1 USD equals 1 USD
1 USD equals 113.5 JPY
1 USD equals 0.89 EUR
1 USD equals 74.36 RUB
1 USD equals 0.75 GBP
I can convert USD to these currencies: JPY, EUR, RUB, USD, GBP
Type the currency you wish to convert: USD
To: > USD
Amount: > a
The amount has to be a number
```

**Example 6:** *lowercase handling*

```no-highlight
Welcome to Currency Converter!
1 USD equals 1 USD
1 USD equals 113.5 JPY
1 USD equals 0.89 EUR
1 USD equals 74.36 RUB
1 USD equals 0.75 GBP
I can convert USD to these currencies: JPY, EUR, RUB, USD, GBP
Type the currency you wish to convert: USD
To: > jpy
Amount: > 3
Result: 3 USD equals 340.5000 JPY
```

```javascript
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

for (const property in currencyList) {
    console.log(`1 USD equals ${currencyList[property]} ${property}`);
}

console.log(`I can convert USD to these currencies: JPY, EUR, RUB, USD, GBP
Type the currency you wish to convert: USD`);
let currency = input("To: ").toUpperCase();
if (Array.from(Object.keys(currencyList)).includes(currency)) {
    let amount = Number(input("Amount: "));
    if (isNaN(amount)) {
        console.log("The amount has to be a number");
    } else if (amount < 1) {
        console.log("The amount cannot be less than 1");
    } else {
        console.log(`Result: ${amount} USD equals ${(currencyList[currency] * amount).toFixed(4)} ${currency}`);
    }
} else {
    console.log("Unknown currency");
}
```

## Stage 3/4: Convert all currencies

##### Description

In this stage, we need to adjust our program to start converting all currencies between themselves.

First, remove the previous message:

```
I can convert USD to these currencies: JPY, EUR, RUB, USD, GBP
Type the currency you wish to convert: USD
```

Then, output the following message: `What do you want to convert?` After this, users provide input that indicates a currency to convert from. Don't forget to handle all unknown and invalid inputs like in the previous stage.

##### Objectives

In this stage, your program should:

- Ask for the currencies (see Examples);
- Calculate and output the result;
- Handle any unknown and incorrect inputs.

##### Examples

The greater-than symbol followed by a space (`> `) represents the user input. Note that it's not part of the input.

**Example 1:** *EUR to GBP*

```no-highlight
Welcome to Currency Converter!
1 USD equals 1 USD
1 USD equals 113.5 JPY
1 USD equals 0.89 EUR
1 USD equals 74.36 RUB
1 USD equals 0.75 GBP
What do you want to convert?
From: > EUR
To: > GBP
Amount: > 115
Result: 115 EUR equals 96.9101 GBP
```

**Example 2:** *wrong input*

```no-highlight
Welcome to Currency Converter!
1 USD equals 1 USD
1 USD equals 113.5 JPY
1 USD equals 0.89 EUR
1 USD equals 74.36 RUB
1 USD equals 0.75 GBP
What do you want to convert?
From: > USD
To: > This is a currency, believe me!
Unknown currency
```

**Example 3:** *JPY to JPY*

```no-highlight
Welcome to Currency Converter!
1 USD equals 1 USD
1 USD equals 113.5 JPY
1 USD equals 0.89 EUR
1 USD equals 74.36 RUB
1 USD equals 0.75 GBP
What do you want to convert?
From: > jpy
To: > jpy
Amount: > 3
Result: 3 JPY equals 3.0000 JPY
```

```javascript
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

for (const property in currencyList) {
    console.log(`1 USD equals ${currencyList[property]} ${property}`);
}

console.log("What do you want to convert?");
let currencyFrom = input("From: ").toUpperCase();
if (!(currencyFrom in currencyList)) {
    console.log("Unknown currency");
} else {
    let currencyTo = input("To: ").toUpperCase();
    if (currencyTo in currencyList) {
        let amount = Number(input("Amount: "));
        if (isNaN(amount)) {
            console.log("The amount has to be a number");
        } else if (amount < 1) {
            console.log("The amount cannot be less than 1");
        } else {
            console.log(`Result: ${amount} ${currencyFrom} equals ${(currencyList[currencyTo] * amount / currencyList[currencyFrom]).toFixed(4)} ${currencyTo}`);
        }
    } else {
        console.log("Unknown currency");
    }
}
```

## Stage 4/4: Loop it!

##### Description

In the final stage, we will loop our program to make it run continuously until the exit command is prompted.

First, ask the user what they want to do: `What do you want to do?`

Give two choices to users: one is conversion, the other is the exit. Users need to input `1` and `2`, respectively: `1-Convert currencies 2-Exit program`

In case of any wrong input, you need to ask again for the input and repeat the process.

Print the following message when users choose to exit the program: `Have a nice day!`

Print the following message when unknown input occurs: `Unknown input`

##### Objectives

In this stage, your program should:

1. Continuously ask for new currency input;
2. Give two choices to users;
3. Handle unknown inputs.

##### Examples

The greater-than symbol followed by a space (`> `) represents the user input. Note that it's not part of the input.

**Example 1:** *USD to JPY*

```no-highlight
Welcome to Currency Converter!
1 USD equals 1 USD
1 USD equals 113.5 JPY
1 USD equals 0.89 EUR
1 USD equals 74.36 RUB
1 USD equals 0.75 GBP
What do you want to do?
1-Convert currencies 2-Exit program
> 1
What do you want to convert?
From: > USD
To: > JPY
Amount: > 115
Result: 115 USD equals 13052.5000 JPY
What do you want to do?
1-Convert currencies 2-Exit program
```

**Example 2:** *unknown currency*

```no-highlight
Welcome to Currency Converter!
1 USD equals 1 USD
1 USD equals 113.5 JPY
1 USD equals 0.89 EUR
1 USD equals 74.36 RUB
1 USD equals 0.75 GBP
What do you want to do?
1-Convert currencies 2-Exit program
> 1
What do you want to convert?
From: > TL
Unknown currency
What do you want to convert?
From: 
```

**Example 3:** *exiting the program*

```no-highlight
Welcome to Currency Converter!
1 USD equals 1 USD
1 USD equals 113.5 JPY
1 USD equals 0.89 EUR
1 USD equals 74.36 RUB
1 USD equals 0.75 GBP
What do you want to do?
1-Convert currencies 2-Exit program
> 2
Have a nice day!
```

**Example 4:** *unknown input*

```no-highlight
Welcome to Currency Converter!
1 USD equals 1 USD
1 USD equals 113.5 JPY
1 USD equals 0.89 EUR
1 USD equals 74.36 RUB
1 USD equals 0.75 GBP
What do you want to do?
1-Convert currencies 2-Exit program
> a
Unknown input
What do you want to do?
1-Convert currencies 2-Exit program
```

```javascript
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
```

