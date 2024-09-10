function firstWord(text) {
    return text.match(/[A-z]+\'?[A-z]*/g)[0];
}

console.log(firstWord("Hello world") === "Hello");
console.log(firstWord(" a word ") === "a");
console.log(firstWord("don't touch it") === "don't");
console.log(firstWord("greetings, friends") === "greetings");
console.log(firstWord("... and so on ...") === "and");
console.log(firstWord("hi") === "hi");