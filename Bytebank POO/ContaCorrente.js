export class ContaCorrente {
    agencia;
    cliente;

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