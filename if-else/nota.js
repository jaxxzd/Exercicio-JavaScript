const prompt = require("prompt-sync")();

let grade = parseFloat(prompt("Digite a sua nota: "));

console.log(nota)

if (grade > 7) {
    console.log("Aprovado");
}
else {
    console.log("Reprovado")
}