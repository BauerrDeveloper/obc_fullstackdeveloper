let saldo = parseFloat(prompt("Informe o saldo da conta: "))
let opcaoSelecionada = 0
let quantidadeAdicionada = 0
let quantidadeRetirada = 0

do {
    opcaoSelecionada = parseFloat(prompt("O Saldo é R$ " + saldo + "\n" +
        "Selecione uma das opções abaixo para prosseguir: " + "\n" +
        "1 - Realizar um depósito" + "\n" +
        "2 - Realizar um saque" + "\n" +
        "3 - Encerrar"
    ))

    switch (opcaoSelecionada) {
        case 1:
            quantidadeAdicionada = parseFloat(prompt("Qual valor deseja adicionar:"))
            saldo = parseFloat((saldo) + (quantidadeAdicionada))
            alert("Saldo atual: R$" + saldo)
            break;
        case 2:
            quantidadeRetirada = prompt("Qual valor deseja retirar")
            saldo = parseFloat(saldo - quantidadeRetirada)
            alert("Saldo atual: R$" + saldo)
            break;
        case 3:
            alert("Encerrando a aplicação.")
            break;
        default:
            alert("Opção Inválida")
            break;
    }

} while (opcaoSelecionada !== 3);

