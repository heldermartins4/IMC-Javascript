const nome = document.getElementById('nome');
const peso = document.getElementById('peso');
const altura = document.getElementById('altura');
const calcular = document.getElementById('calcular');
const resultado = document.getElementById('resultado');

function imc () {
    const nome = document.getElementById('nome').value;
    const peso = document.getElementById('peso').value;
    const altura = document.getElementById('altura').value;
    const resultado = document.getElementById('resultado');

    if (nome !== '' && altura !== '' && peso !== '') {
        const valorIMC = (peso / (altura*altura)).toFixed(1);

        resultado.textContent = valorIMC;

        let classificacao = "";

        if (valorIMC < 18.5) {
            classificacao = 'Magro!'
        }
        else if (valorIMC < 25) {
            classificacao = 'Normal!'
        }
        else if (valorIMC < 30) {
            classificacao = 'com Sobrepeso!'
        }
        else if (valorIMC < 35) {
            classificacao = 'com Obesidade grau I!. Atenção!'
        }
        else if (valorIMC < 35) {
            classificacao = 'com Obesidade grau II. Cuidado'
        }
        else if (valorIMC < 35) {
            classificacao = 'com Obesidade grau III. Alerta❗❗'
        }

        resultado.textContent = `${nome} seu IMC é  ${valorIMC} e você está ${classificacao}`;
    }
    else {
        resultado.textContent = 'Preencha todos os campos!!!'
    }
}

calcular.addEventListener('click', imc);
