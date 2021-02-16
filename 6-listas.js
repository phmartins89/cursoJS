console.log(`Trabalhando com Listas`);
// const salvador = `Salvador`;
// const saoPaulo = `São Paulo`;
// const rioDeJaneiro = `Rio de Janeiro`;


// console.log("Destinos possíveis");
// console.log(salvador,saoPaulo,rioDeJaneiro);

//ARRAY

const listaDeDestinos = new Array (
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
)

listaDeDestinos.push(`Curitiba`); // ADICIONANDO UM ITEM A LISTA  (.PUSH)

console.log("Destinos Possíveis:");
// console.log(salvador,saoPaulo,rioDeJaneiro);

console.log(listaDeDestinos);

listaDeDestinos.splice(1,1); //removendo um item da Lista
console.log(listaDeDestinos);
console.log(listaDeDestinos[1]); //acessando um item especifico da lista

