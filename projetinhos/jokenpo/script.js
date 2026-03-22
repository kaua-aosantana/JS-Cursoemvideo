// Escolhas do computador
const escolhas = ["✊", "✋", "✌️"];

// Variaveis
let escolhaP;
let escolhaJ;
let msg;

let scoreJ = document.getElementById("pontos-jogador");
let scoreP = document.getElementById("pontos-computador");

let pontoJ = 0;
let pontoP = 0;

function verificacao(){

    document.getElementById("mascara").classList.add("aparece");

    if ((escolhaJ == "✊" && escolhaP == "✌️") ||
    (escolhaJ == "✋" && escolhaP == "✊") ||
    (escolhaJ == "✌️" && escolhaP == "✋")){
        msg = "Voce venceu!";
        pontoJ++;

    }
    else if (escolhaJ == escolhaP){
        msg = "Empate!";
    }
    else{
        msg = "Voce perdeu!";
        pontoP++;
    }

    document.getElementById("resultado").textContent = msg;
    scoreJ.textContent = pontoJ;
    scoreP.textContent = pontoP;
}

function resetar(){
    escolhaJ = "";
    escolhaP = "";

    document.getElementById("escolha-pc").innerHTML = "";
    document.getElementById("resultado").textContent = "";

    document.getElementById("mascara").classList.remove("aparece");

    document.querySelectorAll("input[type='radio']").forEach(radio => {
        radio.checked = false;
    });
}

// Pegar a escolha do jogador e define a nova escolha do computador

document.querySelectorAll("input[type='radio']").forEach(radio => {
    radio.addEventListener("change", () => {
        escolhaJ = document.querySelector("input[type='radio']:checked + label").textContent;
        console.log(escolhaJ);

        escolhaP = escolhas[Math.floor(Math.random() * 3)];
        document.getElementById("escolha-pc").innerHTML = `<p>${escolhaP}</p>`;

        setTimeout(() =>{
            verificacao();
        }, 2000)

    });
});