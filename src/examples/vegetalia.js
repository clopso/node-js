const Vive = require('./vive.js')

class Vegetalia extends Vive {

    constructor(peso, cor, reproducao){
        super(peso, cor, true, "autotrofico", reproducao);
    }
}

module.exports = Vegetalia