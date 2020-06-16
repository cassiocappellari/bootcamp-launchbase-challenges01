const name = 'Cássio'
const gender = 'M'
const age = 32
const contribution = 15

const contributionRule = age + contribution
const manCanRetire = gender == 'M' && contribution >= 35 && contributionRule >= 95
const womanCanRetire = gender == 'F' && contribution >= 30 && contributionRule >= 85


if (manCanRetire || womanCanRetire) {
    console.log(`${name}, você pode se aposentar!`)
} else {
    console.log(`${name}, você ainda não pode se aposentar!`)
}
