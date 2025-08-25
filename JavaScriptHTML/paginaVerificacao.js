function Verification() {
    
    let nome, idade, result;

    nome = document.getElementById("name").value;
    idade = document.getElementById("age").value
    result = "";

    nome = nome === " " ? "Visitante" : nome;

    if (idade >= 18) {
        result = `Olá, ${nome}, você é maior de idade!`;
    }
    else {
        result = `Olá, ${nome}, você é menor de idade!`;
    }

    document.getElementById("result").innerHTML = result;
}
