/*
Operadores relacionais
    > maior que
    < menor que
    >= maior ou igual que
    <= menor ou igual que
    == igual
    != diferente

    O resultado é sempre booleano: true ou false
*/
var a = 8
var b = 15

document.writeln(a > b - 10) // Faz primeiro os aritmeticos

// Identidade

document.writeln(5 == "5") // Retorna true pq == so compara os valores
document.writeln(5 === "5") // Compara valor e tipo
document.writeln(5 !== "5") // Retorna true pq 5 é de tipo diferente de "5"

/*
Operadores Logicos
    ! negacao (NAO)
        unario => so tem 1 coisa dps dele
        ex
            !true = false
            !false = true
    && conjuncao (E)
        binario => 1 de cada lado
        ex
            true && true = true
            true && false = false
            false && true = false
            false && false = false
    || disjuncao (OU)
        binario
        ex
            true || true = true
            true || false = true
            false || true = true
            false || false = false
*/
/*
Ordem dos operadores logicos
    1º !
    2º &&
    3º ||
Ordem dos operadores
    1º aritmeticos
    2º relacionais
    3º logicos
    4º atribuicao
*/
/*
Operadores Ternario => é o if e else numa unica linha
    ?
    :
    ex
        teste ? true : false
*/
var media = 8.5
var x = media % 2 == 0?5:9
document.writeln(media >= 7?"Aprovado":"Reprovado")
document.writeln(x)