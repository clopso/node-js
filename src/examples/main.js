const Animalia = require('./animalia.js')
const Vegetalia = require('./vegetalia.js')
const Monera = require('./monera.js')
const Inanimado = require('./inanimado.js')

console.log ("\nAnimalia")
const raposa = new Animalia(12, "laranja", "sexuada");
console.log("A Raposa tem " + raposa.getPeso() + "Kg, ela é da cor " + raposa.getCor() + ", faz reprodução " + raposa.getReproducao() + " e é do grupo " + raposa.getAlimentacao());
const estrelaDoMar = new Animalia(1, "rosa", "assexuada");
console.log("A Estrela-do-mar tem " + estrelaDoMar.getPeso() + "Kg, ela é da cor " + estrelaDoMar.getCor() + ", faz reprodução " + estrelaDoMar.getReproducao() + " e é do grupo " + estrelaDoMar.getAlimentacao());

console.log("\nMonera")
const microcystis = new Monera("autotrofico");
console.log("A Microcystis participa do grupo " + microcystis.getAlimentacao());
const vibrioCholerae = new Monera("heterotrofico")
console.log("A Vibrio Cholerae participa do grupo " + vibrioCholerae.getAlimentacao());

console.log("\nVegetalia")
const eucalipto = new Vegetalia(500, "bege", "sexuada")
console.log("O Eucalipto tem "+ eucalipto.getPeso() + " Kg, ele é da cor " + eucalipto.getCor() + ", faz reprodução " + eucalipto.getReproducao() + " e é do grupo " + eucalipto.getAlimentacao());
const roseira = new Vegetalia(1, "vermelha", "sexuada")
console.log("A Roseira tem "+ roseira.getPeso() + " Kg, ela é da cor " + roseira.getCor() + ", faz reprodução " + roseira.getReproducao() + " e é do grupo " + roseira.getAlimentacao());

console.log("\nInanimado")
const pao = new Inanimado(0.1, "bege", "é")
console.log("O Pao tem "+ pao.getPeso() + "Kg, ele é da cor " + pao.getCor() + " e " + pao.getAlimento()+ " um alimento")
const sapato = new Inanimado(0.3, "azul", "não é")
console.log("O Sapato tem "+ sapato.getPeso() + "Kg, ele é da cor " + sapato.getCor() + " e " + sapato.getAlimento()+ " um alimento")