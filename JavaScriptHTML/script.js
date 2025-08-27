let timeClearing = null;

function verifyGlacier() {
    let name, quantityIceCream, valueTotal, result;

    name = document.getElementById("input-name-glacier").value.trim();
    quantityIceCream = Number(document.getElementById("input-quantity-ice-cream-glacier").value.trim());

    const valueIceCream = 8;

    const nameRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/;

    valueTotal = valueIceCream * quantityIceCream;

    // nome

    if (name === "") {
        name = "Visitante";
    }
    else if (!nameRegex.test(name)) {
        showResult("Erro: nome inválido", "red");
        return
    }

    // quantidade de sorvetes

    if (quantityIceCream > 1) {
        showResult(`Olá, ${name}, você comprou ${quantityIceCream} sorvetes, o valor debitado é ${"R$ " + valueTotal.toFixed(2)}`, "green");
    }
    else if (quantityIceCream === 1) {
        showResult(`Olá, ${name}, você comprou ${quantityIceCream} sorvete, o valor debitado é ${"R$ " + valueTotal.
        toFixed(2)}`, "green");
    }
    else if (quantityIceCream <= 0 || isNaN(quantityIceCream))
    else {
        showResult("Digite uma quantidade válida", "red")
    }

    // limpeza dos inputs

    document.getElementById("input-name-glacier").value = "";
    document.getElementById("input-quantity-ice-cream-glacier").value = "";
}

function showResult(message, color = "green") {
    // execução do programa

    const resultElement = document.getElementById("result");
    resultElement.innerHTML = message;
    resultElement.style.color = color;
    resultElement.style.opacity = 1

    // cancela tempos anteriores

    if(timeClearing) clearTimeout(timeClearing);

    // limpeza da mensagem

    timeClearing = setTimeout(() => {
        resultElement.style.opacity = 0;
    }, 3500);
}