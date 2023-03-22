var addButton = document.querySelector("#adicionar-paciente")
addButton.addEventListener("click", function (event) {
    event.preventDefault()

    var form = document.querySelector("#form-adiciona")
    var paciente = getInfoForms(form)

    //cria a tr e a td dos pacientes (linhas da tabela(tr), colunas da tabela(td))
    var pacienteTr = criaTr(paciente)

    //Adicionando paciente na tabela
    var tabela = document.querySelector("#tabela-pacientes")
    tabela.appendChild(pacienteTr)

    form.reset()
})

// extrai informações do forms e cria um objeto paciente
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

// cria a tr e os td, preenche as td com os dados armazenado no parâmetro paciente
function criaTr(paciente) { //parametro passado é (paciente)

    var pacienteTr = document.createElement("tr") // aqui se cria a tr(linha da tabela) do paciente
    pacienteTr.classList.add("paciente") // aqui adiciona uma classe nas tr criadas. variavel.classList.add("nomeDaClasse")

    // criando as td (colunas) e adicionando a classe
    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"))
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"))
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"))
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"))
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"))



    console.log(pacienteTr)

    return pacienteTr
}

function montaTd(dado, classe) {
    var td = document.createElement("td")
    td.classList.add(classe)
    td.textContent = dado

    return td
}