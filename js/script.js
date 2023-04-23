import { Modal } from './modal.js'
import {  AlertError } from './alert-error.js'
import { notNumber, calculateIMC } from './utils.js'

// variaveis - variables
const form = document.querySelector('form') // vai encontrar o formulário e deixar guardado na constante 
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')

//criar e atribuir a função a um evento
form.onsubmit = event => { //essa função só será executada ao clicar no botão submit 
    event.preventDefault() //(o padrão - default- de um evento submit é sempre recarregar a página ao enviar o formulário) N VAI MAIS RECARREGAR A PÁGINA
    
    const weight = inputWeight.value 
    const height = inputHeight.value
    
    const weightOrHeightIsNotNumber = notNumber(weight) || notNumber(height) // se for true (weight ou height n for n), mostra o alert

    if (weightOrHeightIsNotNumber) {
        AlertError.open()
        return;
    }

    AlertError.close()
 

    const result = calculateIMC(weight, height)
    displayResultMessage(result)
}

function displayResultMessage(result) {
    const message = `Seu IMC é de ${result}`

    Modal.message.innerText = message // vai aparecer o IMC
    Modal.open()
}

