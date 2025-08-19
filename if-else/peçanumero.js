const prompt = require('prompt-sync')();

let number = parseFloat(prompt("Digite um número: "));

if (number >= 1) {
    console.log("O número é positivo")
}
else if (number < 0) {
    console.log("O número é negativo")
}
else {
    console.log("O número é zero")
}