let listaFrutas = [];
let listaLaticinios = [];
let listaCongelados = [];
let listaDoces = [];
let mensagem = 1;
let adiciona = "Adicionar uma comida na sua lista de compras";
let remove = "Remover uma comida na sua lista de compras";

alert("Bem vindo ao Nosso programa!");
mensagem = mensagemInicial();

if (mensagem == 1) {
  while (mensagem == 1 || mensagem == 2) {
    let comida = "";
    if (mensagem == 1) {
      comida = prompt("Qual comida você deseja inserir?");
      verifyCategoria(
        "Em qual categoria essa comida se encaixa? Frutas, Laticínios, Congelados ou Doces?",
        comida
      );
    } else if (mensagem == 2) {
      listaItens();
      comida = prompt("Qual item deseja remover?");
      removeItem(
        "Em qual categoria essa comida se encaixa? Frutas, Laticínios, Congelados ou Doces?",
        comida
      );
    } else {
      alert("Invalido!!");
    }

    if (
      listaFrutas.length == 0 &&
      listaLaticinios.length == 0 &&
      listaCongelados.length == 0 &&
      listaDoces.length == 0
    ) {
      mensagem = mensagemInicial();
      if (mensagem == 2) {
        break;
      }
    } else {
      mensagem = prompt(
        `Que operação você deseja executar?Escolha uma das opções:\n1 - ${adiciona}\n2 - ${remove}\n3 - Sair`
      );
    }
  }
} else {
  alert("Volte sempre!");
}

listaItens();

function mensagemInicial() {
  let msg = "";
  while (true) {
    msg = prompt(
      `Que operação você deseja executar?Escolha uma das opções:\n1 - ${adiciona}\n2 - Sair`
    );
    if (msg == 1) {
      break;
    } else if (msg == 2) {
      break;
    } else {
      alert("Opção inválida!Escolha entre 1 ou 2");
    }
  }
  return msg;
}

function verifyCategoria(texto, food) {
  while (true) {
    let categor = prompt(texto);
    if (categor == "Frutas") {
      listaFrutas = adicionaNaLista(listaFrutas, food);
      break;
    } else if (categor == "Laticinios") {
      listaLaticinios = adicionaNaLista(listaLaticinios, food);
      break;
    } else if (categor == "Congelados") {
      listaCongelados = adicionaNaLista(listaCongelados, food);
      break;
    } else if (categor == "Doces") {
      listaDoces = adicionaNaLista(listaDoces, food);
      break;
    } else {
      alert("Categoria invalida! Introduza uma categoria valida!");
    }
  }
}

function removeItem(texto, food) {
  let position = 0;
  while (true) {
    let categor = prompt(texto);
    if (categor == "Frutas") {
      if (verSeContem(listaFrutas, food) == true) {
        listaFrutas.splice(listaFrutas.indexOf(food), 1);
        break;
      } else {
        alert("Esse item não existe na categoria escolhida!");
        break;
      }
    } else if (categor == "Laticinios") {
      if (verSeContem(listaLaticinios, food) == true) {
        listaLaticinios.splice(listaLaticinios.indexOf(food), 1);
        break;
      } else {
        alert("Esse item não existe na categoria escolhida!");
        break;
      }
    } else if (categor == "Congelados") {
      if (verSeContem(listaCongelados, food) == true) {
        listaCongelados.splice(listaCongelados.indexOf(food), 1);
        break;
      } else {
        alert("Esse item não existe na categoria escolhida!");
        break;
      }
    } else if (categor == "Doces") {
      if (verSeContem(listaDoces, food) == true) {
        listaDoces.splice(listaDoces.indexOf(food), 1);
        break;
      } else {
        alert("Esse item não existe na categoria escolhida!");
        break;
      }
    } else {
      alert("Categoria invalida! Introduza uma categoria valida!");
    }
  }
}

function adicionaNaLista(listacatego, texto) {
  let lista = listacatego;
  lista.push(texto);
  return lista;
}

function listaItens() {
  alert(
    `Os itens disponíveis são:\nFrutas: ${listaFrutas}\nLaticinios: ${listaLaticinios}\nCongelados: ${listaCongelados}\nDoces: ${listaDoces}`
  );
}

function verSeContem(listacatego, food) {
  let lista = listacatego;
  return lista.includes(food);
}
