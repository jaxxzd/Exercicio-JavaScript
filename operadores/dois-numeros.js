let n1, n2;

n1 = 6;
n2 = 3;

console.log("primeiro número é:", n1, "segundo número é:", n2,);

let resultSum = n1 + n2;
console.log("O resultado dessa soma é:", resultSum);

let resultSubtraction = n1 - n2;
console.log("O resultado dessa subtração é:", resultSubtraction);

let resultMultiplication = n1 * n2;
console.log("O resultado dessa multiplicação é:", resultMultiplication);

let resultDivision = n1 / n2;
console.log("O resultado dessa divisão é:", resultDivision);

let resultRest = n1 % n2;
console.log("O resultado desse resto é:", resultRest);

if(n1 === n2){
    console.log(n1, "É igual a", n2);
}
else{   
    console.log(n1, "É diferente de:", n2);
}

if(n1 && n2 > 10){
    console.log(n1, "e", n2, "é maior que 10");
}
else{
    console.log(n1, "e", n2, "não é maior que 10");
}

let resultSameDifferent = n1 == n2 ? "Números iguais" : "Números diferentes"
console.log(resultSameDifferent);