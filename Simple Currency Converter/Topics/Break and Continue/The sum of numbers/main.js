function sum(numbers) {
    // write your code here
    let i, result = 0;
    for (i of numbers) {
        if (i == 0) {
            break;
        }
        result += i;
    }
    return result;
}