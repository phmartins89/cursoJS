class Cliente {
    nome;
    cpf;

}


class ContaCorrente {
    agencia;
    _saldo = 0; //Por convensão da comunidade a variavel com _UNDERLINE na frente é mexer para acessa la apenas dentro da classe

    sacar(valor) { //ISTO É UM MÉTODO COM SEU PARAMETRO DECLARADO COMO "VALOR"
        if (this._saldo >= valor) { // O "THIS" REFERE SE AQUELA CONTA ESPECIFICA
            this._saldo -= valor;
            return valor;
        }
    }

    depositar(valor) {
        if (valor <= 0) return; //CLEANCODE: fazer a lógica do que não fazer e colocar um RETURN, o IF termina e faz a operaçãp seguinte
        this._saldo += valor;
        }
    }

const cliente1 = new Cliente();
cliente1.nome = "Pedro";
cliente1.cpf = 11122233344;


const cliente2 = new Cliente();
cliente2.nome = "Alice";
cliente2.cpf = 44455566677;


const contaCorrentePedro = new ContaCorrente();
contaCorrentePedro.agencia = 1001;

contaCorrentePedro.depositar(-100);
contaCorrentePedro.depositar(100);
contaCorrentePedro.depositar(100);

const valorSacado = contaCorrentePedro.sacar(50);
console.log(valorSacado);


console.log(contaCorrentePedro)


