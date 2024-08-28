function fraseBotao(botao, texto) {
  let button = document.getElementById(`game-${botao}`).querySelector("a");

  button.innerHTML = texto;
}

fraseBotao(1, "Alugar");
fraseBotao(2, "Alugar");
fraseBotao(3, "Devolver");

function alterarStatus(jogo) {
  let selecionaJogo = document.getElementById(`game-${jogo}`);
  let game = selecionaJogo.querySelector("div");
  let button = selecionaJogo.querySelector("a");

  if (button.innerHTML === "Alugar") {
    game.classList.add("dashboard__item__img--rented");
    button.classList.add("dashboard__item__button--return");
    fraseBotao(jogo, "Devolver");
  } else if (button.innerHTML === "Devolver") {
    game.classList.remove("dashboard__item__img--rented");
    button.classList.remove("dashboard__item__button--return");
    fraseBotao(jogo, "Alugar");
  }
}
