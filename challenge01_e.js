/*

1. array: objetos(nome, tecnologias(novo array))


*/

const users = [
    {
        nome: 'Carlos',
        tecnologias: [
            'HTML',
            ' CSS'
        ]
    },
    {
        nome: 'Jasmine',
        tecnologias: [
            'JavaScript',
            ' CSS'
        ]
    },
    {
        nome: 'Tuane',
        tecnologias: [
            'HTML',
            ' Node.js'
        ]
    }
]

for (let i = 0; i < users.length; i++) {
    console.log(`${users[i].nome} trabalha com ${users[i].tecnologias}`)
}
