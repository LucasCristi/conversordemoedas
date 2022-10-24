function converter(){

    let valor = document.getElementById("dolar").value
    let dolarAtual = document.getElementById("dolarAtual").value

    let calculo = valor * dolarAtual
    document.getElementById("resultado").innerHTML = `Valor em reais R$ ${calculo.toFixed(2)}`
}