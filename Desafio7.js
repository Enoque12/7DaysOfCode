let numero1 = 0;
let numero2 = 0;

while (true) {
  let opcao = parseInt(
    prompt(
      "Bem vindo a Calculadora!!\nEscolha a operação que deseja realizar:\n1 - Soma\n2 - Subtração\n3- Multiplicação\n4 - Divisão\n5 - Sair"
    )
  );

  if (opcao >= 1 && opcao < 5) {
    numero1 = parseInt(prompt("Digite o primeiro numero: "));
    numero2 = parseInt(prompt("Digite o segundo numero: "));
    alert(result(opcao));
  } else {
    alert("Até a próxima");
    break;
  }
}

function result(opcao) {
  switch (opcao) {
    case 1:
      return `A soma de ${numero1} e ${numero2} e igual a ${soma(
        numero1,
        numero2
      )}`;
    case 2:
      return `A Subtracao de ${numero1} e ${numero2} e igual a ${subtracao(
        numero1,
        numero2
      )}`;
    case 3:
      return `A Multiplicacao de ${numero1} e ${numero2} e igual a ${multiplicacao(
        numero1,
        numero2
      )}`;
    case 4:
      if (numero2 === 0) {
        return "Erro de Divisao por Zero";
      } else {
        return `A Divisao de ${numero1} e ${numero2} e igual a ${divisao(
          numero1,
          numero2
        )}`;
      }
    default:
      return "Opção inválida!!";
  }
}
function soma(num1, num2) {
  return num1 + num2;
}

function subtracao(num1, num2) {
  return num1 - num2;
}

function multiplicacao(num1, num2) {
  return num1 * num2;
}

function divisao(num1, num2) {
  return num1 / num2;
}
