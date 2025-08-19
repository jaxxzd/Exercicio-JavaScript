const prompt = require("prompt-sync")({ sigint: true });

let facialRecognition, facialRecognitionMarket, fingerSprintScanner, keyCardReader, password, doorMan;

facialRecognition = prompt("Possui reconhecimento facial? (sim/não): ").toLowerCase() === 'sim';
doorMan = prompt("Possui porteiro? (sim/não): ").toLowerCase() === "sim";
facialRecognitionMarket = prompt("Possui Reconhecimento facial do mercado? (sim/não): ").toLowerCase() === 'sim';
fingerSprintScanner = prompt("Possui scanner de impressão digital? (sim/não): ").toLowerCase() === 'sim';
keyCardReader = prompt("Possui leitor de cartão de acesso? (sim/não): ").toLowerCase() === 'sim';
password = Number(prompt("Digite a senha do apartamento: "));

// Verificação para o acesso ao condomínio

if (facialRecognition === true) {
    console.log("Seja bem-vindo! Você pode acessar o condomínio.")
}
else if (facialRecognition === false && doorMan === true) {
    console.log("Seja bem vindo! Você pode receber ajuda de autorização pelo porteiro.")
}
else {
    console.log("Entrada Negada! Você não possui reconhecimento facial cadastrado.")
}

// Verificação para o mercado do condomínio

if (facialRecognitionMarket === true) {
    console.log("Seja bem vindo! Você aceesar o mercado do condomínio!")
}
else if (facialRecognitionMarket === false && doorMan === true) {
    console.log("Você pode receber ajuda de autorização pelo porteiro para acessar o mercado.")
}
else {
    console.log("Entrada Negada! Você não possui reconhecimento facial cadastrado no mercado.")
}

// Verificação para o acesso ao apartamento

if (fingerSprintScanner === true || keyCardReader === true || password === "1234") {
    console.log("Seja bem vindo! Você pode acessar o seu apartamento!")
}
else if (fingerSprintScanner === false && keyCardReader === false || doorMan === true) {
    console.log("Você pode receber ajuda para localizar sua autorização do apartamento pelo porteiro.")
}
else {
    console.log("Entrada Negada! Você não possui autorização para acessar o apartamento.")
}


