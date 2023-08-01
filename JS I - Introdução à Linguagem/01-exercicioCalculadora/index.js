let firstNumber = prompt('Primeiro número: ') 
let secondNumber = prompt('Segundo número: ')

let trasnformadoNumero1 = parseFloat(firstNumber)
let trasnformadoNumero2 = parseFloat(secondNumber)

const soma = trasnformadoNumero1 + trasnformadoNumero2

alert('Soma: ' + soma +'\n' + 
      'Subtração: ' + (firstNumber - secondNumber) + '\n' +
      'Muiltiplicação: ' + firstNumber * secondNumber + '\n' + 
      'Divisão: ' + firstNumber / secondNumber)