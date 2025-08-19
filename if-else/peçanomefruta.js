const prompt = require('prompt-sync')({ sigint: true });

let fruit = (prompt("Digite o nome da fruta: "));

if (fruit === "maçã") {
    console.log("Não vendemos maçã");
}
else if (fruit === "banana") {
    console.log("Temos banana por R$3.00");
}
else if (fruit === "melancia") {
    console.log("Está em falta");
}
else {
    console.log("Produto não disponível")
}