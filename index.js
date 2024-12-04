function reverseString(input) {
  if (typeof input !== "string") {
      throw new Error("Input must be a string");
  }
  return input.split("").reverse().join("");
}

// Тестовий запуск
const testString = "hello";
console.log(`Input: ${testString}, Reversed: ${reverseString(testString)}`);
