//Botoes calcular e cancelar

function calcular() {
    document.querySelector("#calcularCaloria")

    document.querySelector(".modal").style.display = "none"

    var alimentoDesejado = document.querySelector("#alimento").value
    var carboidrato = document.querySelector("#carboidrato").value
    var proteina = document.querySelector("#proteina").value
    var lipidio = document.querySelector("#lipidios").value

    carboidrato = carboidrato * 4
    proteina = proteina * 4
    lipidio = lipidio * 9

    var resultado = parseInt(carboidrato) + parseInt(proteina) + parseInt(lipidio)

    document.querySelector(".resultadoFinal").innerHTML = alimentoDesejado + " contem: " + resultado + " calorias"

    

}

function cancelar() {
    document.querySelector("#cancelar")

    document.querySelector(".modal").style.display = "none"
}

//Botao abre Modal

function toggleModal() {
    document.querySelector(".modal").style.display = "block"

    document.querySelector(".resultadoFinal").innerHTML = ""
}

