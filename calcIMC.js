let weight, height;

weight = 100;
heightSquared = 1.80**2;

const IMC = weight/heightSquared;

if(IMC >= 30) {
    console.log("Você está com o IMC de:", IMC, "e está classificado como obeso")
}

else if(IMC >= 25 && IMC < 30){
    console.log("Você está com o IMC de:", IMC, "e está classificado como sobrepeso")
}

else if(IMC < 18.5) {
    console.log("Você está com o IMC de:", IMC, "e está classificado como abaixo do peso")
}

else {
    console.log("Você está com o IMC de:", IMC, "e está classificado como peso normal")
}