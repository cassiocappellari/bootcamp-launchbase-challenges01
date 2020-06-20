const name = 'Carlos'
const weight = 84
const height = 1.88
const gender = 'M'

const imc = weight / (height * height)

let message = ''

if (imc >= 30) {
    message = (`${name}, you are overweight!`)
} else {
    message = (`${name}, you aren't overweight!`)
}

console.log(message)