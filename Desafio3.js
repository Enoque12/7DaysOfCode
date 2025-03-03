let front = "área de Front-End";
let back = "área de Back-End";
let linguagem = [];

let escolha = prompt(`Digite 1 caso siga a ${front} ou 2 caso siga a ${back}`);

if (escolha == 1) {
  alert("Vamos juntos pela área de Front-End");
  escolha = prompt(
    "Digite 1 caso queira aprender REACT ou 2 caso queira aprender Vue"
  );
  if (escolha == 1) {
    alert("Boa! Então vamos aprender REACT Juntos");
  } else {
    alert("Boa! Então vamos aprender Vue Juntos");
  }
} else {
  alert("Vamos juntos pela área de Back-End");
  escolha = prompt(
    "Digite 1 caso queira aprender C# ou 2 caso queira aprender Java"
  );
  if (escolha == 1) {
    alert("Boa! Vamos aprender C# juntos!!");
  } else {
    alert("Boa! Vamos aprender Java juntos!!");
  }
}

front = "seguir se especializando na área escolhida";
back = "seguir se desenvolvendo para se tornar Fullstack";
escolha = prompt(`Digite 1 caso Você queira ${front} ou 2 caso queira ${back}`);

if (escolha == 1) {
  alert("Muito bom, continue seguindo a sua área");
} else {
  alert("Muito bom, siga como FullStack");
}

let pergunta = prompt(
  "Quais são as tecnologias nas quais você gostaria de se especializar ou de conhecer? Digite 1 para introduzir a tecnologia ou 2 caso não tenha nenhuma tecnologia a conhecer ou se especializar."
);

let tecnologia = "Nenhuma";
if (pergunta == 1) {
  while (true) {
    tecnologia = prompt("Introduza a tecnologia");
    linguagem.push(tecnologia);

    pergunta = prompt(
      "Tem mais alguma tecnologia que você gostaria de aprender? Digite 1 para Ok e continuar ou 2 para NÃO e terminar"
    );
    if (pergunta == 1) {
      alert("Vamos continuar!!");
    } else {
      alert("Obrigado! Por ter jogado connosco");
      break;
    }
  }
} else {
  alert("Obrigado pela paciência!!");
  linguagem.push(tecnologia);
}

alert(`As tecnologias que gostaria de aprender são ${linguagem}`);
