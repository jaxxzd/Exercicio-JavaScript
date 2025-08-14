const prompt = require('prompt-sync')();

let numberGuess = Number(prompt('Tente adivinhar o número secreto (entre 1 e 10):'));

let numberSecret = numberGuess === 7 ? "Acertou!" : "Errou, tente novamente!";
console.log(numberSecret)