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

for (let userName of users) {
    const userWorksWithCSS = userCheckCSS(userName)

    if (userCheckCSS) {
        console.log(`The user ${userName.name} works with CSS!`)
    }
}