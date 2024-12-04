function reverseString(input) {
    if (typeof input !== "string") {
        throw new Error("Input must be a string");
    }
    return input.split("").reverse().join("");
}

// Експортуємо функцію
module.exports = reverseString;
