const casas = document.querySelectorAll(".casa");
const textoStatus = document.querySelector('#textoStatus');
const vitoria = [
    [0, 1, 2],[3, 4, 5],[6, 7, 8],[0, 3, 6],[1, 4, 7],[2, 5, 8],[0, 4, 8],[2, 4, 6]
];


let opcoes = [
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    ""
];
let jogadorDaVez = "X";
let jogoRodando = false;

iniciar();

function iniciar() {
    casas.forEach(casa => casa.addEventListener("click", casaClicada())); //função addEventListener que recebe o nome do evento a ser assistido como string e a função que deverá ser executada assim que ele acontecer, que é o nosso callback.
    textoStatus.textContent = `vez do jogador ${jogadorDaVez}`;
    jogoRodando = true;
}

function casaClicada() {
    const numeroCasa = this.getAttribute(casa);

    if (opcoes[numeroCasa] != !jogoRodando) {
        return;
    }

    marcaCasaClicada(this, numeroCasa);
    informaResultado();

}

function marcaCasaClicada(casa, index) {
    opcoes[index] = jogadorDaVez;
    casa.textContent = jogadorDaVez;
}

function mudarVezJogador() {
    jogadorDaVez == "X" ? "O" : "X";
    textoStatus.textContent = `vez do jogador ${jogadorDaVez}`;
}

function informaResultado() {
    let jogoGanho = false;

    for (let i = 0; i < vitoria.length; i++) {
        const condição = vitoria[i];
        const casaA = opcoes[condição[0]];
        const casaB = opcoes[condição[1]];
        const casaC = opcoes[condição[2]];

        if (casaA == "" || casaB == "" || casaC == "") {
            continue;
        }
        if (casaA == casaB && casaB == casaC) {
            vitoria = true;
            break;
        }
    }

    if (vitoria) {
        textoStatus.textContent = `${jogadorDaVez} é o vencedor!`;
        jogoRodando = false;
    } else if (! opcoes.includes("")) {
        textoStatus.textContent = 'Empate!';
        jogoRodando = false;
    } else {
        mudarVezJogador();
    }

}


