let firstName = 'Rodrigo '
let secondName = 'Paulo '
let thirdName = 'Bauernfeind'

const fullName = firstName + secondName + thirdName

console.log (fullName)
console.error(fullName)
console.warn (fullName)

window.alert(fullName)

let novoNome =  window.prompt('Insira o teu nome: ')
console.log(novoNome)

let confirmedName = window.confirm(novoNome + 'está correto??')
console.log(confirmedName)

alert('Window é o objeto global. Não precisa referenciar manualmente.')