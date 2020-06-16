const programmerData = {
    name: 'Cássio',
    age: 31,
    technologies: [
        {name: 'C++', specialties: 'Desktop'},
        {name: 'Python', specialties: 'Data Science'},
        {name: 'JavaScript', specialties: 'Web/Mobile'}
    ]
}

console.log(`O usuário ${programmerData.name} tem ${programmerData.age} anos e usa a tecnologia ${programmerData.technologies[0].name} com especialidade em ${programmerData.technologies[0].specialties}`)