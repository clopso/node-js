const Vive = require('./vive.js')

class Animalia extends Vive {
    constructor(peso, cor, reproducao) {
        super(peso, cor, true, "heterotrofico", reproducao);
    }
}

module.exports = Animalia;