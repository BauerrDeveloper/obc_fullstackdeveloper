let opcaoSelecionada = 0

do {
    opcaoSelecionada = parseInt(prompt(
        "Selecione uma das opções abaixo:" + "\n" +
        "1 - Exibe uma mensagem" + "\n" +
        "2 - Exibe uma mensagem" + "\n" +
        "3 - Exibe uma mensagem" + "\n" +
        "4 - Exibe uma mensagem" + "\n" +
        "5 - Encerrar"
    ))

    switch (opcaoSelecionada) {
        case 1:
            alert("Você selecionou a primeira opção")
            break;
        case 2:
            alert("Você selecionou a segunda opção")
            break;
        case 3:
            alert("Você selecionou a terceira opção")
            break;
        case 4:
            alert("Você selecionou a quarta opção")
            break;
        case 5:
            alert("Encerrando a aplicação")
            break;
        default:
            alert("Opção inválida")
            break;
    }
 
} while (opcaoSelecionada !== 5);