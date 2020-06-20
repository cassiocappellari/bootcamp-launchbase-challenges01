const users = [
    {name: 'Carlos', technologies: ['HTML', 'CSS']},
    {name: 'Jasmine', technologies: ['JavaScript', 'CSS']},
    {name: 'Tuane', technologies: ['HTML', 'Node.js']}
]

function checkIfUserUseCSS(user) {
    for (let technologie of user.technologies) {
        if (technologie == 'CSS'){
            return true
        }
    }
    return false
}

for (let user of users) {
    const checkCSS = checkIfUserUseCSS(user)

    if (checkCSS) {
        console.log(`The user ${user.name} works with CSS!`)
    }
}