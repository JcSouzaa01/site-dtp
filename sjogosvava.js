const JOGOS2 = [
    {
      logoJogo: "imgjogos/vavajogo2.png",
    },
    {
      logoJogo: "imgjogos/vavajogo2.png",
    },
    {
      logoJogo: "imgjogos/vavajogo2.png",
    },
    {
      logoJogo: "imgjogos/vavajogo2.png",
    },
    {
      logoJogo: "imgjogos/vavajogo2.png",
    },
    {
      logoJogo: "imgjogos/vavajogo2.png",
    }
];

const quadrosDivs2 = document.querySelectorAll("#quadros2");
const anteriorBtns2 = document.querySelectorAll("#anterior2");
const proximaBtns2 = document.querySelectorAll("#proxima2");
let indexInicio2 = 0;

function mostrarJogos2() {
    quadrosDivs2.forEach((quadrosDiv2, index) => {
        quadrosDiv2.innerHTML = "";
        for (let i = indexInicio2; i < JOGOS2.length && i < indexInicio2 + 4; i++) {
            const jogo2 = JOGOS2[i];
            const quadrado2 = document.createElement("div");
            quadrado2.innerHTML = `
                <img src="${jogo2.logoJogo}" alt="Nome do Jogo" class="logo1">
            `;
            quadrosDiv2.appendChild(quadrado2);
        }
        anteriorBtns2[index].disabled = indexInicio2 === 0;
        proximaBtns2[index].disabled = indexInicio2 + 4 >= JOGOS2.length;
    });
}

function mostrarAnterior2() {
    indexInicio2 = Math.max(0, indexInicio2 - 4);
    mostrarJogos2();
}

function mostrarProxima2() {
    indexInicio2 = Math.min(indexInicio2 + 4, JOGOS2.length);
    mostrarJogos2();
}

mostrarJogos2();