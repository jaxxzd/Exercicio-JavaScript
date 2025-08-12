let price, discount, studentGrade;

price =  120;
discount = 0.2;
studentGrade = 9.99;

let discountFinal = discount * price;
let priceFinal = price - discountFinal;

console.log("O valor do desconto é de 20% com o valor final alterado para:" ,"R$", priceFinal)

console.log(" ")

if(discount > 0.5){
    console.log("O desconto é maior que 50%")
}
else if(discount == 0.5){
    console.log("O desconto é de 50%")
}
else {
    console.log("O desconto é menor que 50%")
}

console.log(" ")

let studentFinalGrade = studentGrade >= 7 && studentGrade <= 10 ? "Aprovado" : "Reprovado";
console.log(studentFinalGrade)





