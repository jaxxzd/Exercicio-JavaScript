const prompt = require("prompt-sync")();

let age = parseInt(prompt("Digite a sua idade: "));

if (age < 18) {
    console.log("Menor de idade")
}
else {
    console.log("Maior de idade")
}