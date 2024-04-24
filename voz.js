const elementoChute = document.getElementById('chute')
const body = document.querySelector('.body');

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.lang = 'pt-Br';
recognition.start();

recognition.addEventListener('result' , onSpeak)

recognition.addEventListener('end', () => recognition.start())

function onSpeak(e) {
    chute = e.results[0][0].transcript
    numeroChutado(chute)
    verificaSeChuteEValido(chute)
}

function numeroChutado(chute) {
    elementoChute.innerHTML = `<div>Você disse:</div><span class="box">${chute}</span>`
}

function verificaSeChuteEValido(chute) {
    const numero = +chute
    
    if (chute == 'Fim de jogo') {
        document.body.innerHTML = `<h2>Você preferiu acabar o jogo!</h2> <h3>O número secreto era ${numeroAleatorio}.<div><button class ='btn-jogar'>Jogar Novamente</button></div>`
        const botao = document.querySelector('.btn-jogar');
        body.classList.add('game-over')
        botao.addEventListener('click' , () => {
            window.location.reload();
        }
    )} 


    if(isNaN(numero)) {
        elementoChute.innerHTML = `<div>Você disse:</div><span class="box">${chute}</span> <div>Você não falou um número.</div>`
        return
    }

    if(numero > maiorValor || numero < menorValor) {
        elementoChute.innerHTML = `<div>Você disse:</div><span class="box">${chute}</span> <div>Você disse um valor inválido, chute entre ${menorValor} e ${maiorValor}.</div>`
        return
    }

    if (numero === numeroAleatorio) {
        document.body.innerHTML = `<h2>Você acertou!</h2> <h3>O número secreto era ${numeroAleatorio}.<div><button class ='btn-jogar'>Jogar Novamente</button></div>`
        const botao = document.querySelector('.btn-jogar');
        botao.addEventListener('click' , () => {
            window.location.reload();
        })
        
    } else if (numero > numeroAleatorio) {
        elementoChute.innerHTML = `<div>Você disse:</div><span class="box">${chute}</span> <div>O número secreto é menor  <i class="fas fa-arrow-down"></i>.</div>`
    } else {
        elementoChute.innerHTML = `<div>Você disse:</div><span class="box">${chute}</span> <div>O número secreto é maior  <i class="fa-solid fa-arrow-up"></i></</i>.</div>`
    }
}

