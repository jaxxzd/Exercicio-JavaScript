function verifyGlacier() {
    let name, quantityIceCream, valueTotal, result;

    name = document.getElementById("input-name-glacier").value;
    quantityIceCream = document.getElementById("input-quantity-ice-cream-glacier").value;
    result = "";

    const valueIceCream = 8;

    valueTotal = valueIceCream * quantityIceCream;

    // nome

    if(name === "") {
        name = "Visitante";
    }
    else if (name === Number) {
        name = "Visitante";
    }

    // quantidade de sorvetes

    if(quantityIceCream > 0 && quantityIceCream !== NaN) {
        result = `Olá, ${name}, você comprou ${quantityIceCream} sorvetes, o valor a pagar é ${"R$ " + valueTotal.toFixed(2)}`;
    }
    else if (quantityIceCream === "") {
        
    }
    else if(quantityIceCream === NaN) {
        result = `Digite uma quantidade válida`
        document.getElementById("result").style.color = "red";
    }
    else {
        result = `Digite uma quantidade válida`
        document.getElementById("result").style.color = "red";
    }


    document.getElementById("result").innerHTML = result;
}