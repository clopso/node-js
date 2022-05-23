class Tudo {
    #existem;

    constructor(existem) {
        this.#existem = existem;
    }
}

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

class Animalia extends Vive {
    constructor(peso, cor, reproducao) {
        super(peso, cor, true, "heterotrofico", reproducao);
    }
}

const raposa = new Animalia(12, "laranja", "sexuada");
console.log("A Raposa tem " + raposa.getPeso() + "Kg, ela é da cor " + raposa.getCor() + ", faz reprodução " + raposa.getReproducao() + " e é do grupo " + raposa.getAlimentacao());
const estrelaDoMar = new Animalia(1, "rosa", "assexuada");
console.log("A Estrela-do-mar tem " + estrelaDoMar.getPeso() + "Kg, ela é da cor " + estrelaDoMar.getCor() + ", faz reprodução " + estrelaDoMar.getReproducao() + " e é do grupo " + estrelaDoMar.getAlimentacao());

class Monera extends Vive {
    constructor(alimentacao) {
        super(0, false, false, alimentacao, "assexuada");
    }
}

const microcystis = new Monera("autotrofico");
console.log("A Microcystis participa do grupo " + microcystis.getAlimentacao());

const vibrioCholerae = new Monera("heterotrofico")
console.log("A Vibrio Cholerae participa do grupo " + vibrioCholerae.getAlimentacao());