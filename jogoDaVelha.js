const casas = document.querySelectorAll(".casa");
const textoStatus = document.querySelector("#textoStatus");
const vitoria = [
    [0,1,2]
    [3,4,5]
    [6,7,8]
    [0,3,6]
    [1,4,7]
    [2,5,8]
    [0,4,8]
    [2,4,6]
];

let opções = ["", "", "", "", "", "", "", "", ""];
let jogadorDaVez = "X";
let jogoRodando = false; 

iniciar();

function iniciar() {
    casas.forEach(casa => casas.addEventListener("click", casaClicada));
    textoStatus.textContent = `vez do jogador ${jogadorDaVez}`;
    jogoRodando = true;
}

function casaClicada() {
    const numeroCasa = this.getAttribute("id");

    if(opções[numeroCasa] != !jogoRodando) {
        return;
    }

    marcaCasaClicada(this, numeroCasa);
    informaResultado();

}

function marcaCasaClicada (casa, index) {
    opções[index] = jogadorDaVez;
    casa.textContent = jogadorDaVez;
}

function mudarVezJogador() {
  jogadorDaVez == "X" ? "O" : "X";
  textoStatus.textContent = `vez do jogador ${jogadorDaVez}`;
}

function informaResultado() {
    let jogoGanho = false;

    for(let i = 0; i < vitoria.length; i++) {
        const condição = vitoria[i];
        const casaA = opções[condição[0]];
        const casaB = opções [condição[1]];
        const casaC = opções [condição[2]];

        if(casaA == "" || casaB == "" || casaC == ""){
            continue;
        }
        if (casaA == casaB && casaB == casaC){
            vitoria = true;
            break;
        }
    }

    if(vitoria) {
        textoStatus.textContent = `${jogadorDaVez} é o vencedor!`;
        jogoRodando = false;
    } 
    else if(!opções.includes("")) {
        textoStatus.textContent = 'Empate!';
        jogoRodando = false;
    }
    else {
        mudarVezJogador();
    }

}

