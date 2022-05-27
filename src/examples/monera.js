const Vive = require('./vive.js')

class Monera extends Vive {
    constructor(alimentacao) {
        super(0, false, false, alimentacao, "assexuada");
    }
}

module.exports = Monera;