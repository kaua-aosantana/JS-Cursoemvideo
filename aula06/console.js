// Formatacao de textos
var nome = window.prompt("Qual é o seu nome?")

document.writeln(`Seu nome tem ${nome.length} letras<br>`)
document.writeln(`Nome em maiusculo: ${nome.toUpperCase()}<br>`)

// Formatacao de numeros
var n1 = 1545.5

// toFixed = quantidade de numeros depois da virgula
document.writeln(n1.toFixed(2).replace(".", ",") + "<br>")

// Converter para dinheiro R$
document.writeln(n1.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}))