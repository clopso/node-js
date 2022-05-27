const Palpavel = require('./palpavel.js')

class Vive extends Palpavel {
    #pluricelular;
    #alimentacao;
    #reproducao;

    constructor(peso, cor, pluricelular, alimentacao, reproducao) {
        super(peso, cor);
        this.#pluricelular = pluricelular;
        this.#alimentacao = alimentacao;
        this.#reproducao = reproducao;
    }

    getPluricelular() {
        return this.#pluricelular;
    }

    getAlimentacao() {
        return this.#alimentacao;
    }

    getReproducao() {
        return this.#reproducao;
    }
}

module.exports = Vive