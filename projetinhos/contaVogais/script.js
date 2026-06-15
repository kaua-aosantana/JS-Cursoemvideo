const input = document.getElementById("itexto");
const botao = document.getElementById("ibotao");
const resultado = document.getElementById("iresultado");


function contagem(texto){

    let contador = 0;
    const vogais = ["a", "e", "i", "o", "u"];

    for (let letra = 0; letra < texto.length; letra++) {
        const elemento = texto[letra];
        
        if (elemento in vogais){
            contador++;
        }
    }

    return contador;
}

botao.addEventListener("click", ()=>{
    let item = document.createElement("p");
    item.textContent = contagem(input.textContent);

    resultado.appendChild(item);
    console.log(String(input.textContent)[1])
})