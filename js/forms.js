var addButton = document.querySelector("#adicionar-paciente")
addButton.addEventListener("click", function (event) {
    event.preventDefault()

    var form = document.querySelector("#form-adiciona")

    var paciente = getInfoForms(form)

    //cria a tr e a td dos pacientes (linhas da tabela(tr), colunas da tabela(td))
    var pacienteTr = document.createElement("tr")

    var nomeTd = document.createElement("td")
    var pesoTd = document.createElement("td")
    var alturaTd = document.createElement("td")
    var gorduraTd = document.createElement("td")

    nomeTd.textContent = nome
    pesoTd.textContent = peso
    alturaTd.textContent = altura
    gorduraTd.textContent = gordura
    tdImc.textContent = calculaImc(peso, altura)

    pacienteTr.appendChild(nomeTd)
    pacienteTr.appendChild(pesoTd)
    pacienteTr.appendChild(alturaTd)
    pacienteTr.appendChild(gorduraTd)
    pacienteTr.appendChild(tdImc)

    console.log(pacienteTr)

    //Adicionando paciente na tabela
    var tabela = document.querySelector("#tabela-pacientes")

    tabela.appendChild(pacienteTr)
})

function getInfoForms(form) {

    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.altura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }
    return paciente
}