// Carne - 400gr por pessoa + de 6horas - 650gr
// Cerveja - 1200ml por Pessoa + 6 horas - 2000ml
// Refrigerante/água - 1000ml por pessoa + 6 horas 1500ml
// Crianças valem por 0,5.

// Ação ao clicar em calcular e limpar
var botaoCalc = document.getElementById("calcular");
botaoCalc.addEventListener("click", calc);

var botaoLimpar = document.getElementById("limpar");
botaoLimpar.addEventListener("click", limpa);

// Elementos HTML atribuidos a variaveis
var inputAdultN = document.getElementById("adultosN");
var inputAdultB = document.getElementById("adultosBeb");
var inputCrianca = document.getElementById("criancas");
var inputDuracao = document.getElementById("duracao");
var resultado = document.getElementById("resultado");

// Função que será executada ao clicar no botão "Calcular"
function calc() {
    let adultosN = parseInt(inputAdultN.value);
    let adultosB = parseInt(inputAdultB.value);
    let crianc = parseInt(inputCrianca.value);
    let duracao = parseFloat(inputDuracao.value);

    if (inputAdultN.value == "" || inputAdultB.value == "" || inputCrianca.value == "" || inputDuracao.value == "") {
        resultado.innerHTML = `<p class="bi-exclamation-octagon-fill
        "> Preencha todos os campos!</p>`;
    }

    else {
        let qtdCarne = carne(duracao) * (adultosN + adultosB) + ((carne(duracao) / 2) * crianc);
        let qtdCerveja = cerveja(duracao) * adultosB;
        let qtdBebida = bebida(duracao) * (adultosN + adultosB) + ((bebida(duracao) / 2) * crianc);
        
        resultado.innerHTML = `<h4>Vai ser necessário:</h4>`
        resultado.innerHTML += 
            `<div>
                <img class="d-inline" src="./img/meat.png" alt="">
                <p class="d-inline">${qtdCarne / 1000} Kg de carne</p>
            </div>`
        resultado.innerHTML += 
            `<div>
                <img class="d-inline" src="./img/beer.png" alt="">
                <p class="d-inline">${Math.ceil(qtdCerveja / 350)} latas de cerveja(350ml)</p>
            </div>`
        resultado.innerHTML += 
            `<div>
                <img class="d-inline" src="./img/refrigerante.png" alt="">
                <p class="d-inline">${Math.ceil(qtdBebida / 2000)} garrafas de bebida (2L)</p>
            </div>`
    }
}

// Função que será executada ao clicar no botão "Limpar"
function limpa() {
    resultado.innerHTML = "";
}

// Funções para calcular quantidade de carne, cerveja e bebida de acordo com a duração
function carne(duracao) {
    if (duracao > 6) {
        return 650
    }

    else {
        return 400
    }
}

function cerveja(duracao) {
    if (duracao > 6) {
        return 2000
    }

    else {
        return 1200
    }
}

function bebida(duracao) {
    if (duracao > 6) {
        return 1500
    }

    else {
        return 1000
    }
}