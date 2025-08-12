let idade, conviteVip;

idade = 19;
conviteVip = true;

let verifyAge = idade >= 18;

if(verifyAge == true){
    console.log("Verificação permitida")
}
else{
    console.log("Verificação negada")
}

let verifyEntry = idade >= 18 && conviteVip == true ? "Entrada permitida" : "Entrada negada";
console.log(verifyEntry)
