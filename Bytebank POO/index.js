import {Cliente} from "./Cliente.js"  // O IMPORT serve para importar a classe com seu import {Cliente} from "./Cliente"  // O IMPORT serve para importar a classe com 
import {ContaCorrente} from "./ContaCorrente.js"   

const cliente1 = new Cliente();
cliente1.nome = "Pedro";
cliente1.cpf = 11122233344;


const cliente2 = new Cliente();
cliente2.nome = "Alice";
cliente2.cpf = 44455566677;


const contaCorrentePedro = new ContaCorrente();
contaCorrentePedro.agencia = 1001;
contaCorrentePedro.cliente = cliente1;


contaCorrentePedro.depositar(-100);
contaCorrentePedro.depositar(100);
contaCorrentePedro.depositar(100);

const valorSacado = contaCorrentePedro.sacar(50);
console.log(valorSacado);


console.log(contaCorrentePedro)

