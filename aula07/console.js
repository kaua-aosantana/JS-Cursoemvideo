// Operadores
/*
Principais Familias de operadores:
    aritmeticos
    atribuicao
    relacionais
    logicos
    ternario
    ...
*/
/*
Operadores Aritmeticos
    + = adicao
    - = subtracao
    * = multiplicacao
    / = divisao
    % = resto da divisao
    ** = exponenciacao

Ordem de precedência
    1º ()
    2º **
    3º * / %
    4º + -

*/
operacao = (5 + 3) / 2
document.writeln(operacao)

/*
Operadores de atribuicao
    = (ex: nome = 'kaua')

*/

// Auto atribuicao
var n = 3
n = n + 4
n = n - 5
n = n * 4
n = n / 2
n = n ** 2
n = n % 5

// Forma simplificada
var n = 3
n += 4
n -= 5
n *= 4
n /= 2
n **= 2
n %= 5
document.writeln(n)

// Operadores de incremento(++) e decremento(--)

var x = 5

// Pos-inclemento
x++ // x = x + 1
x-- // x = x - 1

// Pre-inclemento
++x
--x