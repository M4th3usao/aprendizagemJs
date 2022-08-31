// const array = [1, 2, 3] 
//pode alterar os valores do array, porém não pode reatribuir valores, se fosse let daria certo

// const pessoa1 = {
//     nome: 'Luiz', 
//     sobrenome: 'Miranda',
//     idade: 24
// };

// const pessoa2 = {
//     nome: 'Jeny', 
//     sobrenome: 'Oliveira',
//     idade: 24
// };
// console.log(pessoa2.nome);


function criaPessoa(nome, sobrenome, idade){
    return {
        // nome: nome,
        // sobrenome: sobrenome,
        // idade: idade 
        //podem ser declarados dessa maneira, ou desse modo mais simples:
        nome, 
        sobrenome, 
        idade

    }
}
// chamamos essa função de factory, ela cria objetos.

const pessoa1 = criaPessoa('Matheus','Oliveira', 21)
const pessoa2 = criaPessoa('Jeny','Campos', 21)
const pessoa3 = criaPessoa('Lucas','Santos', 23)
const pessoa4 = criaPessoa('Lary','Cruz', 19)
const pessoa5 = criaPessoa('Dudu','Duarte', 25)
console.log(pessoa2.nome, pessoa1.sobrenome)


const pessoa7 = {
    nome: 'Matheus',
    sobrenome: 'Henrique',
    idade: 20,

    fala() {
        console.log(`${this.nome} ${this.sobrenome} está falando oi...`)
        console.log(`Minha idade atual é: ${this.idade} anos`)
    },

    //irá incrementar na idade
    incrementarIdade() {
    this.idade++; 
    }

};

pessoa7.fala();
pessoa7.incrementarIdade();
pessoa7.fala();

//com a palavra 'this', dentro do objeto, pode-se referenciar o objeto ou qualquer atributo do método dentro do method(método) contido no objeto, como no exemplo acima