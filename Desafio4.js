let chute = numeroAleatorio(0, 10);
alert(chute);
let tentativa = 0;
let chances = 3;
let cont = 1;
let msg = "";
console.log("-----------------------------------------------");
console.log("      Jogo do numero secreto");
console.log("-----------------------------------------------");

while (chances > 0) {
  tentativa = tentativaChute();
  if (tentativa == chute) {
    alert("Parabens voce acertou");
    break;
  } else if (chances != 1) {
    msg = cont == 0 ? "Tentativa" : "Tentativas";
    alert(`Você errou! Tente denovo, ficaste com ${cont + 1}  ${msg}.`);
  } else {
    alert(`Acabaram as suas tentativas! O numero inicial era ${chute}!`);
  }
  chances--;
  cont--;
}

function tentativaChute() {
  let aux = 0;
  while (true) {
    aux = prompt("Escolha um número entre 0 a 10: ");
    if (aux >= 0 && aux <= 10) {
      break;
    } else {
      alert(
        "O numero escolhedo está fora do intervalo! Por favor escolha um número dentro do intervalo"
      );
    }
  }
  return aux;
}

function numeroAleatorio(minimo, maximo) {
  return Math.floor(Math.random() * (maximo - minimo + 1) + minimo);
}
