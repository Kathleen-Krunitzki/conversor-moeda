function Converter() {
    var valorElemento = document.getElementById("valor");
    var valor = valorElemento.value;
    var valorEmReal = parseFloat(valor);

    var valorEmDolarNumerico = valorEmReal * 0.19;
    var valorCorrigido = valorEmDolarNumerico.toFixed(2);

    if (valor != 0) {
        var elementoValorConvertido = document.getElementById("valorConvertido");
        var valorConvertido = "O resultado em dolar é US$ " + valorCorrigido;
        elementoValorConvertido.innerHTML = valorConvertido;
    } else
        alert("Insira um valor");
}

function ConverterEuro() {
    var valorElemento = document.getElementById("valor");
    var valor = valorElemento.value;
    var valorEmReal = parseFloat(valor);

    var valorEmEuroNumerico = valorEmReal * 0.16;
    var valorCorrigido = valorEmEuroNumerico.toFixed(2);

    if (valor != 0) {
        var elementoValorConvertido = document.getElementById("valorConvertido");
        var valorConvertido = "O resultado em euro é € " + valorCorrigido;
        elementoValorConvertido.innerHTML = valorConvertido;
    }
    else
        alert("Insira um valor");
}