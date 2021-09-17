function Converter() {
    var elemento = document.getElementById("valor");
    var valor = elemento.value;
    var valorConvertido = parseFloat(valor); // transforma em Real
    var valorEmReal = valorConvertido * 5; // estabelecento um valor fixo para transformar dolar em Real
    console.log(valorEmReal); //printa no console
    var elementoConvertido = document.getElementById("valorConvertido"); // pega elemento pelo id
    var valorConvertidoReal = "Resultado é R$ " + valorEmReal; //printa resultado na tela
    elementoConvertido.innerHTML = valorConvertidoReal;
    var valorEmBitcoin = valorEmReal * 0.0000039;
    var valorConvertidoBitcoin = "Resultado em bitcoin é " + valorEmBitcoin; //printa resultado na tela
    var pegueiDiv = document.querySelector("div");
    var elementoConvertido2 = document.createElement("h3");
    pegueiDiv.appendChild(elementoConvertido2);
    elementoConvertido2.innerHTML = valorConvertidoBitcoin;
  }