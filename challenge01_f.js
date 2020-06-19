const users = [
    {name: 'Carlos', technologies: ['HTML', 'CSS']},
    {name: 'Jasmine', technologies: ['JavaScript', 'CSS']},
    {name: 'Tuane', technologies: ['HTML', 'Node.js']}
]

function userCheckCSS(user) {
    for (let technologies of user.technologies) {
        if (technologies == 'CSS') {
            return true
        }
    }
    return false
}

for (let user of users) {
    const userWorksWithCSS = userCheckCSS(user)

    if (userWorksWithCSS) {
        console.log(`The user ${user.name} works with CSS!`)
    }
}