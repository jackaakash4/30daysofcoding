const getUserInfo = (firstName, lastName, country, title, skills) => {
    return `${firstName} ${lastName}, a ${title} developer based on  ${country}. He knows ${skills.join(' ')}`
}

const skills = ['HTML', 'CSS', 'React']
console.log(
    getUserInfo('Aakash', 'Shrestha', 'Nepal', 'FullStack Developer', skills)

)