const prompt = require("prompt-sync")();

let hour = parseInt(prompt("Digite a hora (ex: 0 a 23: "));

if (hour < 12) {
    console.log("Bom dia")
}
else if (hour < 18) {
    console.log("Boa tarde")
}
else {
    console.log("Boa noite")
}