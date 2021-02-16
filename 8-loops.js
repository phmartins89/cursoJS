console.log(`\nTrabalhando com Condicionais`);
const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
)

const idadeComprador = 18;
const estaAcompanhada = false;
let temPassagemComprada = false;
const destino = "bh";


console.log("\nDestinos Possíveis:");
console.log(listaDeDestinos);



const podeComprar = idadeComprador >= 18 || estaAcompanhada == true; //FOI ATRIBUIDA A VARIAVEL UMA EXPRESSÃO

let contador = 0;
let destinoExiste = false;
while(contador < 3){
    if(listaDeDestinos[contador] == destino){   //SE NA POSIÇÃO ZERO A listaDeDestino FOR IGUAL AO destino
        destinoExiste = true;    //destino que era FALSE VIRA TRUE
        break;          //O WHILE PARA IMEDIATAMENTE
    }
    contador += 1; //CASO NÃO SEJA O contador RECEBE MAIS 1 E PERCORRE A LISTA NOVAMENTE
} 
console.log("Destino existe: ", destinoExiste);

if(podeComprar && destinoExiste){
    console.log("Boa viagem!");
}else{
    console.log("Desculpe tivemos um erro!")
}



