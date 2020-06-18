const name = 'Cássio'
const weight = 60
const height = 1.80
const gender = 'male'

const imc = weight / (height * height)

let message = ""

if (imc >= 30) {
    message = (`${name}, you are overweight!`)
} else {
    message = (`${name}, you aren't overweight!`)
}

console.log(message)