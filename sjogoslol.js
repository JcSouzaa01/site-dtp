const JOGOS = [
    {
      logoJogo: "imgjogos/lol/lolx1r1.png",
    },
    {
        logoJogo: "imgjogos/lol/lolx1r1-3.png",
    },
    {
      logoJogo: "imgjogos/lol/lolx1r1-2.png",
    },
    {
      logoJogo: "imgjogos/lol/lol5v5semi.png",
    },
    {
        logoJogo: "imgjogos/lol/lolaramsemi.png",
    },
];

const quadrosDivs = document.querySelectorAll("#quadros");
const anteriorBtns = document.querySelectorAll("#anterior");
const proximaBtns = document.querySelectorAll("#proxima");
let indexInicio = 0;

function mostrarJogos() {
    quadrosDivs.forEach((quadrosDiv, index) => {
        quadrosDiv.innerHTML = "";
        for (let i = indexInicio; i < JOGOS.length && i < indexInicio + 4; i++) {
            const jogo = JOGOS[i];
            const quadrado = document.createElement("div");
            quadrado.innerHTML = `
                <img src="${jogo.logoJogo}" alt="Nome do Jogo" class="logo1">
            `;
            quadrosDiv.appendChild(quadrado);
        }
        anteriorBtns[index].disabled = indexInicio === 0;
        proximaBtns[index].disabled = indexInicio + 4 >= JOGOS.length;
    });
}

function mostrarAnterior() {
    indexInicio = Math.max(0, indexInicio - 4);
    mostrarJogos();
}

function mostrarProxima() {
    indexInicio = Math.min(indexInicio + 4, JOGOS.length);
    mostrarJogos();
}

mostrarJogos();