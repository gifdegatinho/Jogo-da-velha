const casas = document.querySelectorAll(".casa")
const textoStatus = document.querySelector("#textoStatus")
const reiniciarBtn = document.querySelector("#reiniciarBtn")
const condicoesVitoria = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];
let opcoes = ["","","","","","","","",""];
let jogadorAtual = "X";
let rodando = false;

iniciar();

function iniciar(){
    casas.forEach(casa => casa.addEventListener("click", clicarCasa));
    reiniciarBtn.addEventListener("click", reiniciarJogo);
    textoStatus.textContent = `Vez do jogador ${jogadorAtual}`;
    rodando = true;
}
function clicarCasa(){
    const casaIndex = this.getAttribute("casaIndex");

    if(opcoes[casaIndex] != "" || !rodando){
        return;
    }

    atualizarCasa(this, casaIndex);
    verificarVencedor();
}
function atualizarCasa(casa, index){
    opcoes[index] = jogadorAtual;
    casa.textContent = jogadorAtual;

}
function mudarJogador(){
    jogadorAtual = (jogadorAtual == "X") ? "O" : "X";
    textoStatus.textContent = `Vez do jogador ${jogadorAtual}`;
}
function verificarVencedor(){
    let rodadaVencedora = false;
    
    for(let i = 0; i < condicoesVitoria.length; i++){
        const condicao = condicoesVitoria[i];
        const casaA = opcoes[condicao[0]];
        const casaB = opcoes[condicao[1]];
        const casaC = opcoes[condicao[2]];

        if(casaA == "" || casaB == "" || casaC == ""){
            continue;
        }
        if(casaA == casaB && casaB == casaC){
            rodadaVencedora = true;
            break;
        }
    }
    
    if(rodadaVencedora){
        textoStatus.textContent = `${jogadorAtual} venceu ! !`;
        rodando = false;
    }
    else if(!opcoes.includes("")){
        textoStatus.textContent = `Empate!`;
        rodando = false;
    }
    else{
        mudarJogador();
    }
}
function reiniciarJogo(){
    jogadorAtual = "X";
    textoStatus.textContent = `Vez do jogador ${jogadorAtual}`;
    opcoes = ["","","","","","","","",""];
    casas.forEach(casa => casa.textContent = "");
    rodando = true;
}