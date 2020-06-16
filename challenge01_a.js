const name = 'Cássio'
const weight = 60
const height = 1.78
const gender = 'M'

const imc = weight / (height * height)

if (imc >= 30) {
    console.log(`${name}, você está acima do peso!`)
} else if (imc < 29.9) {
    console.log(`${name}, você não está acima do peso!`)
}
