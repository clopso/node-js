const Tudo = require('./tudo.js')


class Palpavel extends Tudo {
    #peso;
    #cor;

    constructor(peso, cor) {
        super(true);
        this.#peso = peso;
        this.#cor = cor;
    }

    getPeso() {
        return this.#peso;
    }

    getCor() {
        return this.#cor;
    }

}

module.exports = Palpavel;