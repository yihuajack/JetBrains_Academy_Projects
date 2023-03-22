function isPalindrome(userStr) {
    for (let letter = 0; letter < userStr.length / 2; letter++) {
        if (userStr.charAt(letter) !== userStr.charAt(userStr.length - letter - 1)) {
            return false;
        }
    }
    return true;
}

console.log(isPalindrome("racecar"));
console.log(isPalindrome("javascript"));