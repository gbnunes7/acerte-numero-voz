const menorValor = parseInt(prompt("Escreva o número menor"))
const maiorValor = parseInt(prompt("Escreva o número maior"))
const menorValorHtml = document.getElementById('menor-valor');
const maiorValorHtml = document.getElementById('maior-valor');
const numeroAleatorio = sorteiaNumero()

menorValorHtml.innerHTML = `${menorValor} e `;
maiorValorHtml.innerHTML = maiorValor;

function sorteiaNumero() {
    return parseInt(Math.random() * ( (maiorValor+1) - menorValor ) + menorValor)
}
 
