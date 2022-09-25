function verificaSeOChutePossuiUmValorValido(chute) {
    const numero = +chute;

    if (chuteForInvalido(numero)) {
        if (chute.toUpperCase() === "GAME OVER") {
            document.body.innerHTML = `
                <h2>Game Over!!!</h2>

                <h3>O número secreto era ${numeroSecreto}</h3>

                <button id="jogarNovamente" class="btn-jogar">Jogar Novamente</button>
            `

            document.body.style.backgroundColor = "black";
            document.body.style.color = "white";
        } else {
            elementoChute.innerHTML += `
                <div class>Valor inválido.</div>

                <button id="jogarNovamente" class="btn-jogar">Jogar Novamente</button>
            `;
        }

        return 
    }

    if (numeroForMaiorOuMenorQueOValorPermitido(numero)) {
        elementoChute.innerHTML += `
            <div>Valor inválido: fale um valor entre ${menorValor} e ${maiorValor}</div>
            
            <button id="jogarNovamente" class="btn-jogar">Jogar Novamente</button>
        `;

        return 
    }

    if (numero === numeroSecreto) {
        document.body.innerHTML = `
            <h2>Você acertou!</h2>
            <h3>O número secreto era ${numeroSecreto}</h3>

            <button id="jogarNovamente" class="btn-jogar">Jogar Novamente</button>
        `
    } else if (checaNumeroDeTentativas(tentativas)) {
        document.body.innerHTML = `
            <h2>Game Over!!!</h2>
            <h3>O número secreto era ${numeroSecreto}</h3>

            <button id="jogarNovamente" class="btn-jogar">Jogar Novamente</button>
        `
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
    } else if (numero > numeroSecreto) {
        elementoChute.innerHTML += `
            <div>O número secreto é menor <i class="fa-solid fa-down-long"></i></div>
        `
    } else {
        elementoChute.innerHTML += `
            <div>O número secreto é maior <i class="fa-solid fa-up-long"></i></div>
        `
    }
}

function chuteForInvalido(numero) {
    return Number.isNaN(numero);
}

function numeroForMaiorOuMenorQueOValorPermitido(numero) {
    return numero > maiorValor || numero < menorValor;
}

document.body.addEventListener('click', e => {
    if(e.target.id == 'jogarNovamente') {
        window.location.reload();
    }
})