let price, discount, quantityPurchased;

price =  119.90;
discount = 0.5;
quantityPurchased = 2;

let discountFinal = discount * price;
let pricePerUnit = price - discountFinal;
let totalPurchasePrice = quantityPurchased * pricePerUnit;

if(discount > 0.5){
    console.log("O desconto é maior que 50%");
}
else if(discount == 0.5){
    console.log("O desconto é de 50%");
}
else {
    console.log("O desconto é menor que 50%");
}

let totalValueDiscountEspecialOrComum = discount >= 0.3 ? "Compra com desconto especial" : "Compra com desconto comum";
console.log(totalValueDiscountEspecialOrComum);

console.log("O valor final do produto é:", "R$", pricePerUnit)

if(totalPurchasePrice >= 100 && totalPurchasePrice <= 500 ){
    console.log("o valor total está entre R$100,00 e R$500,00, portanto o valor total é:", "R$", totalPurchasePrice.toFixed(2));
}
else{
    console.log("o valor não está entre R$100,00 e R$500,00, portanto o valor total é:", "R$", totalPurchasePrice.toFixed(2));
}







