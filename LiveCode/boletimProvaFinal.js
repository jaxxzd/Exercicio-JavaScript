const prompt = require('prompt-sync')();

let name, P1, P2, P3, frequency, bonusParticipation, PF, MP, MF, absence, lowGrade, result;

name = prompt("Digite o nome do aluno: ");
P1 = Math.round(parseFloat(prompt("Digita a primeira nota (0 a 10): ")));
P2 = Math.round(parseFloat(prompt("Digita a segunda nota (0 a 10): ")));
P3 = Math.round(parseFloat(prompt("Digita a terceira nota (0 a 10): ")));
bonusParticipation = parseInt(prompt("Digite o bônus de participação (0 a 1): ")) === 1 ? +1 : 0;
MP = P1 * 0.3 + P2 * 0.3 + P3 * 0.4;
(MP += bonusParticipation > 10 ? 10 : 0).toFixed(1);
PF = parseFloat(prompt("Digite a nota da Prova Final (0 a 10): "));
frequency = parseInt(prompt("Digite a frequência do aluno (1 a 100): "));

console.log(" ")

// Média parcial (MP)

if(isNaN(P1) || P1 < 0 || P1 > 100 || isNaN(P2) || P2 < 0 || P2 > 100 || isNaN(P3) || P3 < 0 || P3 > 100) {
    console.error("As notas devem ser informadas entre 0 a 100");
    process.exit();
}

console.log(" ")

// Regras de aprovação

if(frequency < 75) {
    console.error(`Reprovado por falta (${frequency})`);
}

if(MP >= 7.0) {
    result = "Aprovado Direto";
}

else if(frequency > 75 && 4.0 <= MP < 7.0) {
    console.log("Recuperação(Prova Final)")
}

MF = (MP + PF) / 2;

if(MF >= 5.0) {
    result = "Aprovado por final";
}
else{
    result = "Reprovado por nota"
}

if(MP < 4.0) {
    result = "Reprovado por nota (sem direito a Prova Final)";
}

console.log(" ")

// Regra extra de segurança

if(P1, P2, P3 < 2 && MF >= 6.0) {
    result = "Aprovado por final"
}

// Saída

console.log(" ")

console.log("-------- SAÍDA --------")

console.log(" ")

console.log("nome do aluno é:", name);
console.log("P1:", P1);
console.log("P2:", P2);
console.log("P3:", P3);
console.log("Frequência:", "%", frequency);
console.log("Bônus aplicado:", bonusParticipation);
console.log("Mèdia parcial após o bônus:", Math.round(MP));
console.log("Nota da prova final é:", Math.round(PF));
console.log("Mèdia Final é:", Math.round(MF));
console.log("A situação do aluno é:", result);

