const nomeDoTurista = prompt("Qual seu nome? ")
let cidadesVisitadas = ""
let qtdeCidadesVisitadas = 0

let visitouOutrasCidades = prompt(nomeDoTurista + ", voce já visitou outras cidades?")

if (visitouOutrasCidades === "nao") {
    alert(nomeDoTurista + " nunca visitou outra cidade.")
} else { 
    while (visitouOutrasCidades === "sim") {
        let cidades = prompt("Qual o nome da cidade visitada?")
        cidadesVisitadas += cidades + "\n"
        qtdeCidadesVisitadas++
        visitouOutrasCidades = prompt("Visitou outra cidade?")
    }
    
    alert(nomeDoTurista + " visitou " + qtdeCidadesVisitadas + " cidades." + "\n" +
        "Cidades visitadas: " + "\n" + cidadesVisitadas
    )
}



