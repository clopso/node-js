const Palpavel = require('./palpavel.js')

class Inanimado extends Palpavel{
    #alimento;
    constructor(peso, cor, alimento){
        super(peso, cor);
        this.#alimento = alimento;
    }

    getAlimento() {
        return this.#alimento;
    }
}

module.exports = Inanimado;