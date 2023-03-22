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