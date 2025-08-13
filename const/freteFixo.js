let valueRequested = 101;

const freight = 20;

if(valueRequested >= 100){
    console.log("Você recebeu frete grátis com valor total de:", "R$", valueRequested.toFixed(2));
}
else{
    console.log("Você recebeu o frete de:", "R$", freight.toFixed(2), "com o valor padrão de:", "R$", valueRequested.toFixed(2));
}