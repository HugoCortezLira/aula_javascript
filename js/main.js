var perguntas = [
  { pergunta: "Quanto é 83 + 95?", resposta: "178" },
  { pergunta: "Quanto é 64 + 21?", resposta: "85" },
  { pergunta: "Quanto é 34 + 14?", resposta: "48" },
];

var perguntaAtual = 0;

saiu(document.getElementById("pergunta"));

function cima(elemento) {
  if (perguntaAtual < perguntas.length) {
    elemento.innerHTML = perguntas[perguntaAtual].resposta;
  } else {
    elemento.innerHTML = "ENCERRADO";
  }
}

function saiu(elemento) {
  if (perguntaAtual < perguntas.length) {
    elemento.innerHTML = perguntas[perguntaAtual].pergunta;
  } else {
    elemento.innerHTML = "ENCERRADO";
  }
}

function placar() {
  document.getElementById("placar").innerHTML = "Placar = " + perguntaAtual;
}

function acertou() {
  if (perguntaAtual < perguntas.length) {
    alert("Parabens, continue assim!!!");
    perguntaAtual++;
    placar();
    saiu(document.getElementById("pergunta"));
  }
}

function errou() {
  if (perguntaAtual < perguntas.length) {
    saiu(document.getElementById("pergunta"));
    alert("Que pena, pode tentar novamente");
  }
}
