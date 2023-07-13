const valorEmMetros = parseFloat(prompt("Insira o valor em metros para a conversão: "))
const opcaoSelecionada = parseFloat(prompt("Para qual medida deseja a conversão?"+ "\nSelecione uma das opções abaixo: \n\n" + 
    "1) Milimetro\n" + 
    "2) Centímetro\n" + 
    "3) Decímetro\n"  +  
    "4 Decâmetro \n" +
    "5) Hectômetro \n" + 
    "6) Quilômetro"))

switch (opcaoSelecionada) {
    case 1:
        alert("Você selecionou a conversão para Milímetro. \nO resultado da conversão é: " + (valorEmMetros * 1000) + "mm")
        break;
    case 2:
        alert("Você selecionou a conversão para Centímetro. \nO resultado da conversão é: " + (valorEmMetros * 100) + "cm")
        break;
    case 3:
        alert("Você selecionou a conversão para Decímetro. \nO resultado da conversão é: " + (valorEmMetros * 10) + "dm")
        break;
    case 4:
        alert("Você selecionou a conversão para Decâmetro. \nO resultado da conversão é: " + (valorEmMetros / 10) + "dam")
        break;
    case 5:
        alert("Você selecionou a conversão para Hectômetro. \nO resultado da conversão é: " + (valorEmMetros / 100) + "hm")
        break;
    case 6:
        alert("Você selecionou a conversão para Quilômetro. \nO resultado da conversão é: " + (valorEmMetros / 1000) + "km")
        break;
    default:
        alert("Você não selecionou uma das opções válidas.")
        break;
}