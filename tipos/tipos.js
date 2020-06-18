"use strict";
// Tipo string
var nome = "Alex Gomes";
console.log(nome);
// nome = 28
// Tipo numbers
var idade = 30;
// idade = 'Ana'
idade = 40;
console.log(idade);
// Tipo boolean
var possuiHobbies = false;
// possuiHobbies = 1
console.log(possuiHobbies);
// Declarando Tipos de maneira explícita
var minhaIdade;
minhaIdade = 40;
console.log(typeof minhaIdade);
// minhaIdade = '40'
// Tipo array
var hobbies = ["Cozinhar", "Correr", "Ler"];
console.log(hobbies[2]);
console.log(typeof hobbies);
hobbies = [100, 200, 300];
// hobbies = 100
console.log(hobbies);
// Tipo tuplas
var endereco = ["Av. Castelo Forte", 1000, ""];
console.log(endereco);
endereco = ["Rua Novo Endereço", 3232, "Bloco 10"];
console.log(endereco);
// Tipo enums
var Cor;
(function (Cor) {
    Cor[Cor["Cinza"] = 0] = "Cinza";
    Cor[Cor["Verde"] = 100] = "Verde";
    Cor[Cor["Azul"] = 10] = "Azul";
    Cor[Cor["Laranja"] = 11] = "Laranja";
    Cor[Cor["Amarelo"] = 12] = "Amarelo";
    Cor[Cor["Vermelho"] = 100] = "Vermelho";
})(Cor || (Cor = {}));
var minhaCor = Cor.Verde;
console.log(minhaCor);
console.log(Cor.Azul);
console.log(Cor.Laranja, Cor.Amarelo);
console.log(Cor.Verde, Cor.Vermelho);
// Tipo any - qualquer um
var carro = "Hilux";
console.log(carro);
carro = { nome: "Hilux", marca: "Toyota", ano: 2019 };
console.log(carro);
// Usando funções com Tipos - TypeScript
function retornaMeuNome() {
    // return minhaIdade
    return nome;
}
console.log(retornaMeuNome());
// Usando void - Sem Retorno
function digaOi() {
    console.log("Hi, my brother!");
    // return minhaIdade
}
digaOi();
function multiplicar(numA, numB) {
    return numA * numB;
}
console.log(multiplicar(4.7, 9));
// Tipo função
var calculo;
// calculo = digaOi
// calculo()
// calculo = {}
calculo = multiplicar;
console.log(calculo(5, 6));
// Tipo objetos
var usuario = {
    nome: "João",
    idade: 27,
    sexo: "M"
};
console.log(usuario);
// usuario = {}
// usuario = {
//     name: 'Maria',
//     age: 31
// }
usuario = {
    idade: 31,
    nome: "Maria",
    sexo: "F"
};
console.log(usuario);
