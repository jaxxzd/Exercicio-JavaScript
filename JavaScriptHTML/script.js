function verifyGlacier() {
    let name, quantityIceCream, valueTotal, error;

    name = document.getElementById("input-name-glacier").value;
    quantityIceCream = document.getElementById("input-quantity-ice-cream-glacier").value;
    const valueIceCream = 8;
    const nameRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/;
    error = {};
    
    // verificação de ambos inputs vazios

    if (!name.trim() && !quantityIceCream) return;

    // nome

    name = name.trim() || "Visitante";

    if (!nameRegex.test(name)) {
        error.nome = "✕ erro: Nome inválido";
    } 

    // validação de erros da quantidade de sorvetes

    if (!quantityIceCream) {
        error.quantidade = "✕ erro: Campo de quantidade obrigatório";
    } else {
        quantityIceCream = Number(quantityIceCream);
        if (quantityIceCream <= 0) {
            error.quantidade ="✕ erro: Quantidade inválida";
        }
    }

    // detectação de erro de ambos os inputs e aparecendo juntos se houver

    if (Object.keys(error).length) {
        showResult(Object.values(error).join("<br>"), "red");
        return
    }

    const caseSensitive = quantityIceCream == 1 ? "sorvete" : "sorvetes";
    valueTotal = valueIceCream * quantityIceCream;

    showResult(`✓ Olá, ${name}, você comprou ${quantityIceCream} ${caseSensitive}, o valor debitado é ${"R$ " + valueTotal.toFixed(2)}`, "green");

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