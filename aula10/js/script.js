//Iremos começar a utilizar o html e linkar com o script, utilizando o alert, confirm e prompt

// a função alert, exibe uma mensagem na tela
// alert('Com a nossa mensagem'); 

// a função confirm, exibe duas opção para o usuário confirmar se sim ou não para alguma ação.
// confirm('Você deseja cancelar sua inscrição?');

//vale lembrar que é possível utilizar o window.(algumaFunção):
// A função prompt da a opção do usuário inserir uma informação:
// window.prompt('Insira seu nome aqui:');

/* é possivel guardar/capturar o resultado da resposta de um usuário com o seguinte exemplo:

 const confirma = confirm('Você realmente deseja apagar este conteúdo?')

o resultado ficara salvo na const confima, basta chama-la para exibir o resultado do usuário
*/

/*
Tbm é possível utilizar o let para guardar/capturar a resposta de um usuário:

let confirma = confirm("deseja apagar?")
*/

//tbm é possível guardar valores que o usuário digitou com o prompt
//vale lembrar que tudo que o usuário inserir no prompt será uma string, então caso ele insira um número é preciso altera-lo para um valor numérico
// let num1 = prompt('Digite o primeiro valor:')
// let num2 = prompt('Digite o segundo valor:')

let num1 = prompt('Digite o primeiro valor:');
let num2 = prompt('Digite o segundo valor:');

num1 = Number(num1);
num2 = Number(num2);
const resultado = num1 + num2;
window.alert(`O resultado da soma dos valores é: ${resultado}`);