const nomeP1 = prompt("Qual o nome do primeiro personagem?");
let ataqueP1 = parseFloat(prompt("Qual o poder de ataque do(a) " + nomeP1 + "?"));

const nomeP2 = prompt("Qual o nome do segundo personagem?");
let qtdePontosVidaP2 = parseFloat(prompt("Qual a quantidade de pontos de vida do(a) " + nomeP2 + "?"));
let poderDefesaP2 = parseFloat(prompt("Qual o poder de defesa do(a) " + nomeP2 + "?"));
let possuiEscudoP2 = prompt(nomeP2 + " possui escudo? Responda com Sim ou Não apenas.");

let danoCausado = 0;

if (ataqueP1 > poderDefesaP2 && possuiEscudoP2 === "Não") {
  danoCausado = qtdePontosVidaP2 - ataqueP1;
} else if (ataqueP1 > poderDefesaP2 && possuiEscudoP2 === "Sim") {
  danoCausado = (qtdePontosVidaP2 - ataqueP1) / 2;
}

qtdePontosVidaP2 -= danoCausado
