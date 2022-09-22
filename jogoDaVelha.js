const casas = document.querySelectorAll(".casa");
const textoStatus = document.querySelector("#textoStatus");
const vitoria = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

let opções = ["", "", "", "", "", "", "", "", ""];
let jogadorDaVez = "X";
let jogoRodando = false;

iniciar();

function iniciar() {
    casas.forEach(casa => casa.addEventListener("click", casaClicada));
    textoStatus.textContent = `VEZ DO JOGADOR ${jogadorDaVez}`;
    jogoRodando = true;
}

function casaClicada() {
    const numeroCasa = this.getAttribute("id");
    

    if (opções[numeroCasa] != "" || !jogoRodando) {
        return;
    }
    marcaCasaClicada(this, numeroCasa);
    // mudarVezJogador();
    informaResultado();

}

function marcaCasaClicada(casa, index) {
    opções[index] = jogadorDaVez;
    casa.textContent = jogadorDaVez;
}

function mudarVezJogador() {
    jogadorDaVez = (jogadorDaVez == "X") ? "O" : "X";
    textoStatus.textContent = `Vez do jogador ${jogadorDaVez}`;
}

function informaResultado() {
    let vencedorDaRodada = false;

    for (let i = 0; i < vitoria.length; i++) {
        const condição = vitoria[i];
        const casaA = opções[condição[0]];
        const casaB = opções[condição[1]];
        const casaC = opções[condição[2]];
      

        if (casaA == "" || casaB == "" || casaC == "") {
            continue;
        }
        if (casaA == casaB && casaB == casaC) {
            vencedorDaRodada = true;
            break;
        }
    }

    if (vencedorDaRodada) {
        textoStatus.textContent = `${jogadorDaVez} é o vencedor!`;
        jogoRodando = false;
    }
    else if (!opções.includes("")) {
        textoStatus.textContent = 'Empate!';
        jogoRodando = false;
    }
    else {
        mudarVezJogador();
    }

}


// function checkWinner(){
//     let roundWon = false;

//     for(let i = 0; i < winConditions.length; i++){
//         const condition = winConditions[i];
//         const cellA = options[condition[0]];
//         const cellB = options[condition[1]];
//         const cellC = options[condition[2]];

//         if(cellA == "" || cellB == "" || cellC == ""){
//             continue;
//         }
//         if(cellA == cellB && cellB == cellC){
//             roundWon = true;
//             break;
//         }
//     }

//     if(roundWon){
//         statusText.textContent = `${currentPlayer} wins!`;
//         running = false;
//     }
//     else if(!options.includes("")){
//         statusText.textContent = `Draw!`;
//         running = false;
//     }
//     else{
//         changePlayer();
//     }
// }


