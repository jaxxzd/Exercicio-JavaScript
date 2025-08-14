const prompt = require('prompt-sync')();

let num1, num2;

num1 = Number(prompt("Digite o primeiro número:"));
num2 = Number(prompt("Digite o segundo número:"));

if(num1 > num2) {
    console.log("O número", num1, "é maior que o número", num2);
}
else if(num1 === num2) {
    console.log(num1, "é igual a", num2);
}
else {
    console.log("O número", num2, "é maior que o número", num1);
}

