const name = 'Silvana'
const gender = 'F'
const age = 55
const contribution = 30
const contributionSum = age + contribution

const maleCanRetire = gender == 'M' && contribution >= 35 && contributionSum >= 95
const femaleCanRetire = gender == 'F' && contribution >= 30 && contributionSum >= 85

if (maleCanRetire || femaleCanRetire) {
    console.log(`${name}, you can retire!`)
} else {
    console.log(`${name}, you can't retire!`)
}