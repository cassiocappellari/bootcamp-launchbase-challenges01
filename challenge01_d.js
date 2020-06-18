const programmer = {
    name: 'Carlos',
    age: 32,
    technologies: [
        {name: 'C++', specialty: 'Desktop'},
        {name: 'Python', specialty:'Data Science'},
        {name: 'JavaScript', specialty: 'Web/Mobile'}
    ]
}

console.log(`The user ${programmer.name} has ${programmer.age} years old and use the technology ${programmer.technologies[0].name} with specialty in ${programmer.technologies[0].specialty}`)