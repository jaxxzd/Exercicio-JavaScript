const prompt = require('prompt-sync')();

const valueIceCream = 8;

let quantityIceCream, discount;

quantityIceCream = Number(prompt("Digite a quantidade de sorvetes: "));
discount = Number(prompt("Insira o desconto (ex: 1 a 100): ")) / 100;

let valueDiscount = valueIceCream * discount;
let totalValueNoDiscount = valueIceCream * quantityIceCream;
let valueWithDiscount = totalValueNoDiscount * discount;
let totalValue = totalValueNoDiscount - (discount * totalValueNoDiscount);

console.log("O valor total sem desconto é: R$", totalValueNoDiscount.toFixed(2));
console.log("O valor do desconto é: R$", valueWithDiscount.toFixed(2));
console.log("O valor total com desconto é: R$", totalValue.toFixed(2));