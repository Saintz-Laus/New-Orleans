const resultado = document.querySelector(".imc__result");
const form = document.querySelector(".imc__card");

form.addEventListener("submit", (event) => {

    event.preventDefault();

    const altura = event.target.querySelector(".imc__altura");
    const peso = event.target.querySelector(".imc__peso");
    
    const pesoConverted = Number(peso.value);
    const alturaConverted = Number(altura.value);

    if (!pesoConverted) {
        innerResult('O valor inserido no peso é inválido e não pode ser nulo', false);
        return;
    }
   
    if (!alturaConverted) {
        innerResult('O valor inserido na altura é inválido e não pode ser nulo', false);
        return;
    }

    const imc = calcImc(pesoConverted, alturaConverted);
    const checkImc = verifyImc(imc);

    const msg = `O seu IMC é ${imc} e seu nível é: ${checkImc}`

    innerResult(msg, true);

    
});

function calcImc (peso, altura) {
    const imc = peso / altura ** 2;
    return imc.toFixed(2); 
}

function verifyImc (imc) {

    let checkImc = ["Abaixo do peso", "Peso normal", "Acima do peso", "Obesidade grau grau 1", 
    "Obesidade grau 2", "Obesidade grau 3"];

    if (imc > 40) return checkImc[5]; 
    if (imc >= 39) return checkImc[4];
    if (imc >= 34.9) return checkImc[3];
    if (imc >= 29.9) return checkImc[2];
    if (imc >= 24.9) return checkImc[1];
    if (imc <= 18.5) return checkImc[0];
}

function toP () {
    const p = document.createElement('p');
    return p;
}

function innerResult (msg, validation) {
    resultado.innerHTML = '';
    const p = toP();

    if (validation) {
        p.classList.add("green");
    } else {
        p.classList.add("red");
    }

    p.innerHTML = msg;
    resultado.appendChild(p);

}