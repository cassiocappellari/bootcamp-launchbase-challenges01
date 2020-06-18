const name = 'Silvana'
const gender = 'female'
const age = 48
const contribution = 23

const contributionTime = age + contribution

const maleCanRetire = gender == 'male' && contribution > 35 && contributionTime > 95
const femaleCanRetire = gender == 'female' && contribution > 30 && contributionTime > 85

let message = ""

if (maleCanRetire || femaleCanRetire) {
    message = (`${name}, you can retire!`)
} else {
    message = (`${name}, you can't retire!`)
}

console.log(message)