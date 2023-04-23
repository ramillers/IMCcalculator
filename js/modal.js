
export const Modal = {

    wrapper: document.querySelector('.modal-wrapper'),
    message: document.querySelector('.modal .title span'),
    buttonClose: document.querySelector('.modal button.close'),

    open() { // :function
        Modal.wrapper.classList.add('open') // vai mostrar a telinha de modal
    }, 
    close() {
        Modal.wrapper.classList.remove('open') //vai fechar a telinha ao clicar no "x"
    }
}


Modal.buttonClose.onclick = () => {
    Modal.close() // chamando os modais criado ali em cima
}

window.addEventListener('keydown', handleKeyDown)
function handleKeyDown(event) {
    if (event.key === 'Escape') {
        Modal.close() 
    }
}

