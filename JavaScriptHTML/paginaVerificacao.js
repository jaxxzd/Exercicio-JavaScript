function Verification() {
    
    let nome, idade, result;

    nome = document.getElementById("name").value;
    idade = document.getElementById("age").value;
    result = "";

    idade = parseInt(idade)
    console.log(typeof(idade))

    // nome

    if (nome === "") {
        nome = "Visitante"
    }
    // idade
    
    if (idade >= 18 && idade < 122) {
        result = `Olá, ${nome}, você é maior de idade!`;
    }
    else if (idade == "") {

    }
    else if (idade < 18 && idade >= 0) {
        result = `Olá, ${nome}, você é menor de idade!`;
    }
    else if (idade < 0 || idade > 122 || isNaN(idade)) {
        result = "Idade inválida";
        document.getElementById("result").style.color = "red";
    }
    else {
        result = "idade inválida";
        document.getElementById("result").style.color = "red";
    }

    document.getElementById("result").innerHTML = result;
}
