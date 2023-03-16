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
        var imc = peso / (altura * altura)
        tdImc.textContent = imc.toFixed(2)
    }
}

var addButton = document.querySelector("#adicionar-paciente")
addButton = addEventListener("click", function (event) {
    event.preventDefault()

    var form = document.querySelector("#form-adiciona")

    var nome = form.nome.value
    var peso = form.peso.value
    var altura = form.altura.value
    var gordura = form.gordura.value

    var pacienteTr = document.createElement("tr")

    var nomeTd = document.createElement("td")
    var pesoTd = document.createElement("td")
    var alturaTd = document.createElement("td")
    var gorduraTd = document.createElement("td")

    nomeTd.textContent = nome
    pesoTd.textContent = peso
    alturaTd.textContent = altura
    gorduraTd.textContent = gordura

    pacienteTr.appendChild(nomeTd)
    pacienteTr.appendChild(pesoTd)
    pacienteTr.appendChild(alturaTd)
    pacienteTr.appendChild(gorduraTd)

    console.log(pacienteTr)

    var tabela = document.querySelector("#tabela-pacientes")

    tabela.appendChild(pacienteTr)
})