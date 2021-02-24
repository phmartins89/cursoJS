export class Cliente {   //O EXPORT serve para dizer q essa classe pode ser usada em outro arquivo
    nome;
    _cpf;

    get cpf(){
        return this._cpf;
    }

    constructor(nome,cpf){
        this.nome = nome;
        this._cpf = cpf;
    }
}
