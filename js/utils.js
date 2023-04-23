
export function notNumber (value) {
    return isNaN(value) || value == ""// se weight or height n forem numeros, n vai entrar no valor da aplicação 
}

export function calculateIMC(weight, height) {
    return (weight / ((height / 100) ** 2)).toFixed(2)
}