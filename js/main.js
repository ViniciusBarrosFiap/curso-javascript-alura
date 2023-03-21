var titulo = document.querySelector(".titulo")
console.log("Olá mundo")
var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++) {
    var paciente = pacientes[i]

    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent

    var tdAltura = paciente.querySelector(".info-altura")
    var altura = tdAltura.textContent

    var tdImc = paciente.querySelector(".info-imc")
    var imc = peso / (altura * altura)

    var pesoEhValido = true
    var alturaEhValido = true

    if (peso < 0 || peso > 1000) {
        console.log("Peso inválido")
        pesoEhValido = false
        tdImc.textContent = "Peso inválido"
        paciente.classList.add("invalid__pacient")
    }

    if (altura < 0 || altura > 3.0) {
        console.log("Altura inválida")
        alturaEhValido = false
        tdImc.textContent = "Altura inválida"
        paciente.style.backgroundColor = "lightCoral"
    }

    if (pesoEhValido && alturaEhValido) {
        var imc = calculaImc(peso, altura)
        tdImc.textContent = imc
    }
}

function calculaImc(peso, altura) {
    var imc = 0
    var imc = peso / (altura * altura)

    return imc.toFixed(2)
}