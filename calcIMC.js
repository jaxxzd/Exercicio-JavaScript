let peso, altura;

peso = 100;
altura = 1.80^2;

let IMC = peso/altura;

if(IMC > 30) {
    console.log("Você está com o IMC de:", IMC, "e está com obesidade")
}
else if(IMC < 18.5) {
    console.log("Você está com o IMC de:", IMC, "e está abaixo do peso")
}
else {
    console.log("Você está com o IMC de:", IMC, "e está com o peso normal" )
}