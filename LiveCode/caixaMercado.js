const prompt = require("prompt-sync")();

let product, pricePerUnit, quantityPurchased, discountCoupon, freight, ageClient, ageRestriction, finalTotal;

ageClient = parseInt(prompt("digite a sua idade: "));
product = prompt("Coloque o nome da categoria: ");
ageRestriction = prompt("O produto é para menores de idade? (sim/não): ").toLowerCase() === "sim";
pricePerUnit = parseFloat(prompt("Coloque o preço do produto: "));
quantityPurchased = Number(prompt("Coloque a quantidade comprada: "));
discountCoupon = prompt("Digite o cupom de Desconto (ex: OFERTA10): ");
freightCoupon = prompt("Digite o cupom de frete grátis (ex: FRETEGRATIS): ");
freight = 15;

let grossTotal = pricePerUnit * quantityPurchased;
let valueTotalWithDiscount = grossTotal - (grossTotal * 0.1);
let grossTotalWithFreight = grossTotal + freight;
let valueFinalWithDiscountAndFreight = valueTotalWithDiscount + freight;

console.log(" ");

// Restrição de idade

if (ageClient < 18 && product == 'bebidas' && ageRestriction == true) {
    console.log("Você não possui acesso a esse produto.")
}
else {
    console.log("Você possui acesso a esse produto.")
}

console.log(" ");

// Cupom de desconto

if(discountCoupon == "OFERTA10" && product == "bebidas" && ageClient < 18 && ageRestriction === true) {
    console.log("Cupom de desconto não foi aplicado, pois o produto é restrito para menores de idade.");
}
else if(discountCoupon == "OFERTA10") {
    discount = 0.1;
    pricePerUnit  = pricePerUnit - (pricePerUnit * discount);
    console.log("Cupom de desconto 10% em seu produto, com o valor de:", "R$", pricePerUnit.toFixed(2), "por unidade.")
}
else {
    console.log("Cupom de desconto não foi aplicado.");
}

console.log(" ");

// Cálculo do valor total com desconto atráves da quantidade comprada

if (quantityPurchased >= 10) {
    console.log("Foi aplicado 5% de desconto a sua compra, com o valor de: ","R$", grossTotal - (grossTotal * 0.05).toFixed(2));
}
else if (quantityPurchased >= 5){
    console.log("Foi aplicado 2% de desconto a sua compra, com o valor de: ","R$", grossTotal - (grossTotal * 0.02).toFixed(2));
}
else if(ageClient < 18 && ageRestriction == true && product == "bebidas") {
    console.log("Você não recebeu desconto, pois o produto é restrito para menores de idade.")
}
else {
    console.log("Não foi aplicado nenhum desconto a sua compra pelo total de quantidade, valor avaliado para: ","R$", grossTotal.toFixed(2))
}

console.log(" ");

// Frete Grátis

if (freightCoupon === "FRETEGRATIS") {
    freight = 0;
    grossTotalWithFreight = grossTotal - freight; 
    console.log("Você recebeu frete grátis na sua compra!")
}
else if(freightCoupon === "FRETEGRATIS" && product == "bebidas" && ageClient < 18 && ageRestriction == true) {
    console.log("Você não recebeu frete grátis na sua compra, pois o produto é restrito para menores de idade.")
}
else {
    console.log("Você não recebeu frete grátis com cupom na sua compra.")
}

if(valueTotalWithDiscount >= 200) {
    freight = 0;
    valueFinalWithDiscountAndFreight = valueTotalWithDiscount - freight;
    console.log("Você recebeu frete grátis na sua compra!")
}
else if(ageClient < 18 && ageRestriction == true && product == "bebidas") {
    console.log("Você não recebeu frete grátis na sua compra, pois o produto é restrito para menores de idade.")
}
else {
    console.log("Você não recebeu frete grátis na sua compra, com o valor total de: ","R$", grossTotalWithFreight.toFixed(2));
}

// Cálculo do valor final da compra

finalTotal = valueFinalWithDiscountAndFreight || grossTotalWithFreight || grossTotal;

console.log("  ");

if(finalTotal === valueFinalWithDiscountAndFreight ) {
    console.log("O Valor total da compra com desconto e frete é: ", valueFinalWithDiscountAndFreight.toFixed(2));
}
else if(finalTotal === grossTotalWithFreight) {
    console.log("O valor total da compra com frete é: ", grossTotalWithFreight.toFixed(2));
}
else if(finalTotal === grossTotal) {
    console.log("O valor total bruto da compra é: ", grossTotal.toFixed(2))
}

// Status da compra 

let purchaseStatus = finalTotal > 0 && ageRestriction === true ? "Compra Aprovada" : "Compra Negada";

console.log(" ");

console.log("Valor total da compra: ", finalTotal.toFixed(2));

console.log(" ");

console.log("--- RESUMO DA COMPRA ---")
console.log("preço unitário: ", pricePerUnit.toFixed(2));
console.log("Quantidade comprada: ", quantityPurchased);
console.log("Valor total bruto: ", grossTotal.toFixed(2));
console.log("Cupom aplicado: ", discountCoupon);
console.log("Valor total com desconto: ", valueTotalWithDiscount.toFixed(2));
console.log("frete aplicado: ", freight);
console.log("Cupom de frete aplicado: ", freightCoupon)
console.log("Valor final da compra: ", finalTotal.toFixed(2));
console.log("Status da compra é: ", purchaseStatus)
