let firstName = prompt('Primeiro nome: ')
let lastName = prompt('Sobrenome: ')
let studyField = prompt('Campo de estudo: ')
let yearOfBirth = prompt('Em que ano você nasceu: ')

const dataAtual = new Date();
const anoAtual = dataAtual.getFullYear();

alert('Primeiro nome: ' + firstName + '\n' + 
       'Sobrenome: ' + lastName + '\n' + 
       'Campo de estudo: ' + studyField + '\n' + 
       'Idade: ' + (anoAtual - parseFloat(yearOfBirth)))