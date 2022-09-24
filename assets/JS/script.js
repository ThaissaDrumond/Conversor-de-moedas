function ConverterDolar() {
    var valorInformado = document.getElementById("valor");
    var valor = valorInformado.value;
    var valorX = parseFloat(valor);
    var valorDolar = valorX / 5.26;
    var valorFinal = valorDolar.toFixed(2);
    console.log(valorFinal);
    var elementoConvertido = document.getElementById("valorConvertido");
    var valorConvertidoFinal = "O resultado em dolar é U$ " + valorFinal;
    elementoConvertido.innerHTML = valorConvertidoFinal;
  }
  
  function ConverterBitcoin() {
    var valorInformado = document.getElementById("valor");
    var valor = valorInformado.value;
    var valorNovo = parseFloat(valor);
    var valorBitcoin = valorNovo / 100346.73;
    console.log(valorBitcoin);
    var valorFinalBitcoin = valorBitcoin.toFixed(8);
  
    var elementoConvertidoBitcoin = document.getElementById("valorConvertido");
    var valorConvertido = "O resultado em Bitcoin é ₿ " + valorFinalBitcoin;
    elementoConvertidoBitcoin.innerHTML = valorConvertido;
  }
  function ConverterEuro() {
    var valorInformado = document.getElementById("valor");
    var valor = valorInformado.value;
    var valorInformado = parseFloat(valor);
    var valorEuro = valorInformado / 5.10;
    console.log(valorEuro);
    var valorFinalEuro = valorEuro.toFixed(2);
  
    var elementoConvertidoEuro = document.getElementById("valorConvertido");
    var valorConvertido = "O resultado em Euro é € " + valorFinalEuro;
    elementoConvertidoEuro.innerHTML = valorConvertido;
  }
  
  function ConverterReal() {
    var valorInformado = document.getElementById("valorDolar");
    var valor = valorInformado.value;
    var valorInformado = parseFloat(valor);
    var valorReal = valorInformado * 5.26;
    console.log(valorReal);
    var valorFinalReal = valorReal.toFixed(2);
  
    var elementoConvertidoReal = document.getElementById("valorConvertidoReal");
    var valorConvertidoReal = "O resultado em Reais é R$ " + valorFinalReal;
    elementoConvertidoReal.innerHTML = valorConvertidoReal;
  }
  
  function ConverterRealB() {
    var valorInformado = document.getElementById("valorBitcoin");
    var valor = valorInformado.value;
    var valorNovo = parseFloat(valor);
    var valorRealB = valorNovo * 100346.73;
    console.log(valorRealB);
    var valorFinalRealB = valorRealB.toFixed(2);
  
    var elementoConvertidoRealB = document.getElementById("valorConvertidoRealB");
    var valorConvertido = "O resultado em Reais é R$ " + valorFinalRealB;
    elementoConvertidoRealB.innerHTML = valorConvertido;
  }
  
  function ConverterRealE() {
    var valorInformado = document.getElementById("valorEuro");
    var valor = valorInformado.value;
    var valorInformado = parseFloat(valor);
    var valorRealE = valorInformado * 5.10;
    console.log(valorRealE);
    var valorFinalRealE = valorRealE.toFixed(2);
  
    var elementoConvertidoRealE = document.getElementById("valorConvertidoRealE");
    var valorConvertido = "O resultado em Euro é € " + valorRealE.toFixed(2);
    elementoConvertidoRealE.innerHTML = valorConvertido;
  }
  