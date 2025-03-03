let listaFrutas = [];
let listaLaticinios = [];
let listaCongelados = [];
let listaDoces = [];
let mensagem = "sim";

alert("Bem vindo ao Nosso programa!");
mensagem = prompt(
  "você deseja adicionar uma comida na sua lista de compras? Sim ou Não? "
);
while (mensagem == "sim") {
  if (mensagem == "sim") {
    let comida = prompt("Qual comida você deseja inserir?");
    verifyCategoria(
      "Em qual categoria essa comida se encaixa? frutas, laticínios, congelados ou doces?",
      comida
    );
  } else if (mensagem == "nao") {
    alert("Volte sempre!");
    break;
  } else {
    alert("Invalido!!");
  }
  mensagem = prompt(
    "você deseja adicionar uma comida na sua lista de compras? Sim ou Não? "
  );
}

alert("Aqui segue as suas listas: ");
alert(`Frutas: ${listaFrutas}`);
alert(`Laticinios: ${listaLaticinios}`);
alert(`Congelados: ${listaCongelados}`);
alert(`Doces: ${listaDoces}`);

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
    } else if (categor == "doces") {
      listaDoces = adicionaNaLista(listaDoces, food);
      break;
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
