/*
DOM = Document Object Model
manipular os componentes do site

Árvore DOM
window
    location
    document
        html
            head
            body
    history

Selecionar os elementos html
    por Marca => tags
        getElementsByTagName()
    por ID
        getElementById()
    por Nome
        getElementsByName()
    por Classe
        getElementsByClassName()
    por Seletor
        querySelector()
*/
var p1 = window.document.getElementsByTagName("p")[0] //Pega o 1º <p>
p1.style.color = "red"
window.document.writeln(p1.innerHTML)

/*
var p2 = window.document.getElementById("itexto")
p2.style.backgroundColor = "green"
p2.innerText = "Modifiquei o texto por JS"

var texto = window.document.getElementsByName("texto")[0]
texto.style.color = "green"

*/
var texto = window.document.querySelector("p#itexto")
texto.style.color = "yellow"