const botao = document.querySelector(".nao");
const sim = document.querySelector(".sim");
let paddingAtual = 30;

function ativarClick() {
  paddingAtual += 20;
  sim.style.padding = paddingAtual + "px";
}

botao.addEventListener("click", ativarClick);
