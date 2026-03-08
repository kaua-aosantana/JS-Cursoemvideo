var n1 = window.prompt("Digite um numero")
var n2 = window.prompt("Digite outro numero")

var soma = Number.parseFloat(n1) + Number.parseFloat(n2)

/*
Converter para numero:
    Number.parseInt() = inteiro
    Number.parseFloat() = decimal

Converter para texto:
    String()
    toString()

Metodos para string
    texto.length = tamanho do texto
    texto.toUpperCase() = tudo maiuscula
    texto.toLowerCase() = tudo minuscula
*/

window.alert(`A soma de ${n1} e ${n2} é ${soma}`) // Template string e ${} = placeholder