//Desenvolva sua lógica aqui utilizando o método de array sort

//1) Dado o array [200, 153, 875, 53, 20, 62, 428, 5], ordene os números em ordem crescente.
const numbers = [200, 153, 875, 53, 20, 62, 428, 5];

numbers.sort((a,b) => {
  if(a < b) return -1;
})
console.log(numbers)

//2) Utilizando o array do exemplo anterior, ordene os números em ordem decrescente.

numbers.sort((a,b) => {
  if(a > b) return -1;
})
console.log(numbers)

//3) Dado o array ['Matheus', 'Samuel', 'Bruna', 'Patrick', 'Yan', 'Amanda', 'Carlos'], ordene os nomes em ordem alfabética
const names = [
  'Matheus',
  'Samuel',
  'Bruna',
  'Patrick',
  'Yan',
  'Amanda',
  'Carlos',
];

names.sort((a, b) => {
  if(a < b) return -1;
})
console.log(names)


//DESAFIO
//4) Dado um objeto "loja", acesse a propriedade "produtos", filtre apenas os elementos que possuem o preço maior que 100 e ordene em ordem crescente.
const loja = {
  nome: 'Kenzie Store',
  local: 'Brasil',
  produtos: [
    {
      nomeProduto: 'Moletom',
      preco: 250,
    },
    {
      nomeProduto: 'Casaco',
      preco: 100,
    },
    {
      nomeProduto: 'Tênis',
      preco: 180,
    },
    {
      nomeProduto: 'Regata',
      preco: 50,
    },
    {
      nomeProduto: 'Calça',
      preco: 120,
    },
  ],
};

const novaLoja = loja.produtos
.filter(element => element.preco > 100)
.sort((a,b) => {
  if(a.preco < b.preco) return -1
})
console.log(novaLoja)


const novaLoja2 = loja.produtos
.filter(element => element.preco > 100)
.sort((a,b) => a.preco < b.preco ? -1 : 1)
console.log(novaLoja2)