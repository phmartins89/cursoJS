import {Cliente} from "./Cliente.js"  // O IMPORT serve para importar a classe com seu import {Cliente} from "./Cliente"  // O IMPORT serve para importar a classe com 
import {ContaCorrente} from "./ContaCorrente.js"   

const cliente1 = new Cliente("Pedro",11122233344);
// cliente1.nome = "Pedro";
// cliente1.cpf = 11122233344;


const cliente2 = new Cliente("Alice",44455566677);
//cliente2.nome = "Alice";
//cliente2.cpf = 44455566677;


const contaCorrentePedro = new ContaCorrente(1001,cliente1);
// contaCorrentePedro.agencia = 1001;
// contaCorrentePedro.cliente = cliente1;
contaCorrentePedro.depositar(500);


const conta2 = new ContaCorrente(102,cliente2);
new ContaCorrente(102,cliente2);
new ContaCorrente(102, cliente2);
new ContaCorrente(102, cliente2);
new ContaCorrente(102, cliente2);
new ContaCorrente(102, cliente2);

// conta2.cliente = new Cliente(); //O objeto não é uma varivel primitiva ela é uma referencia de uma endereço na memoria
// conta2.cliente.nome = "Alice"  //Aqui estou acessando o NOME de CLIENTE  de CONTA2
// conta2.cliente.cpf = 44455566677;
// conta2.cliente = cliente1;
// conta2.agencia = 102;


let valor = 200;
contaCorrentePedro.transferir(valor, conta2);
console.log(ContaCorrente.numeroDeContas);





