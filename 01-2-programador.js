const user = {
    name: 'Carlos',
    age: 32,
    technologies: [
        {name: 'C++', specialty: 'Desktop'},
        {name: 'Python', specialty: 'Data Science'},
        {name: 'JavaScript', specialty: 'Web/Mobile'}
    ]
}

console.log(`The user ${user.name} has ${user.age} years old and uses the technologie ${user.technologies[0].name} with specialty in ${user.technologies[0].specialty}`)