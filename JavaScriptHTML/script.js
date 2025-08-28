function verifyGlacier() {
    let name, quantityIceCream, valueTotal, result, error;

    name = document.getElementById("input-name-glacier").value.trim();
    quantityIceCream = (document.getElementById("input-quantity-ice-cream-glacier").value.trim());
    error = {};

    // verificação de ambos inputs vazios

    if (!name && quantityIceCream.trim() === "") {
        return
    };

    quantityIceCream = Number(quantityIceCream);

    const caseSensitive = quantityIceCream === 1 ? "sorvete" : "sorvetes";

    const valueIceCream = 8;

    const nameRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/;

    // nome

    if (name === "") {
        name = "Visitante";
    }
    else if (!nameRegex.test(name)) {
        error.nome = "✕ erro: Nome inválido";
    }

    // validação de erros da quantidade de sorvetes

    if (quantityIceCream <= 0 || isNaN(quantityIceCream)) {
        error.quantidade = "✕ erro: Quantidade inválida";
    }

    // detectação de erro de ambos os inputs

    if (Object.keys(error).length > 0) {
        showResult(Object.values(error).join("<br>"), "red");
    }
    else if (quantityIceCream > 0) {
        valueTotal = valueIceCream * quantityIceCream;
        showResult(`✓ Olá, ${name}, você comprou ${quantityIceCream} ${caseSensitive}, o valor debitado é ${"R$ " + valueTotal.toFixed(2)}`, "green");
    }

    // limpeza dos inputs

    document.getElementById("input-name-glacier").value = "";
    document.getElementById("input-quantity-ice-cream-glacier").value = "";
}

function showResult(message, color) {

    // criação de cores e mensagens automáticas

    const resultElement = document.getElementById("result");
    resultElement.innerHTML = message;
    resultElement.style.color = color;
    resultElement.classList.add("show");
}