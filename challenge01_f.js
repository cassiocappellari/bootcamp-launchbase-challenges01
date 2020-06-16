const users = [
    {
        nome: 'Carlos',
        tecnologias: [
            'HTML',
            'CSS',
        ]
    },
    {
        nome: 'Jasmine',
        tecnologias: [
            'JavaScript',
            'CSS'
        ]
    },
    {
        nome: 'Tuane',
        tecnologias: [
            'HTML',
            'Node.js'
        ]
    }
]

function workWithCSS(user) {
    for (let i = 0; i < user.tecnologias.length; i++) {
        if (user.tecnologias[i] == 'CSS' ) {
            return true
        }
    }
    return false
}

for (let i = 0; i < users.length; i++) {
    const userWorksWithCSS = workWithCSS(users[i])
    if (userWorksWithCSS) {
        console.log(`O usuário ${users[i].nome} trabalha com CSS!`)
    }
}
