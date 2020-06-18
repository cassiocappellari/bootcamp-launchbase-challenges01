const name = 'Cássio'
const weight = 60
const height = 1.80
const gender = 'male'

const imc = weight / (height * height)

let message = ""

if (imc >= 30) {
    message = (`${name}, você está acima do peso!`)
} else {
    message = (`${name}, você não está acima do peso!`)
}

console.log(message)