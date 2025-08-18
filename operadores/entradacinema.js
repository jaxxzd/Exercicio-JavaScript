const prompt = require('prompt-sync')();

let age, studentCard;

age = Number(prompt("Digite a sua idade: "));
studentCard = prompt("Possui carteirinha de estudante? (sim/não): ").toLowerCase() === 'sim';

if(age < 12 || age > 60) {
    console.log("Ganhou entrada gratuita");
}
else if (studentCard === true) {
    console.log("Ganhou meia entrada");
}
else {
    console.log("Entrada inteira")
}