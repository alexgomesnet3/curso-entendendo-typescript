// Tipo string
let nome: string = "Alex Gomes";
console.log(nome);
// nome = 28

// Tipo numbers
let idade: number = 30;
// idade = 'Ana'
idade = 40;
console.log(idade);

// Tipo boolean
let possuiHobbies: boolean = false;
// possuiHobbies = 1
console.log(possuiHobbies);

// Declarando Tipos de maneira explícita
let minhaIdade: number;
minhaIdade = 40;
console.log(typeof minhaIdade);
// minhaIdade = '40'

// Tipo array
let hobbies: any[] = ["Cozinhar", "Correr", "Ler"];
console.log(hobbies[2]);
console.log(typeof hobbies);

hobbies = [100, 200, 300];
// hobbies = 100
console.log(hobbies);

// Tipo tuplas
let endereco: [string, number, string] = ["Av. Castelo Forte", 1000, ""];
console.log(endereco);

endereco = ["Rua Novo Endereço", 3232, "Bloco 10"];
console.log(endereco);

// Tipo enums
enum Cor {
  Cinza, // 0
  Verde = 100, // 100
  Azul = 10, // 2
  Laranja,
  Amarelo,
  Vermelho = 100,
}

let minhaCor: Cor = Cor.Verde;
console.log(minhaCor);

console.log(Cor.Azul);
console.log(Cor.Laranja, Cor.Amarelo);
console.log(Cor.Verde, Cor.Vermelho);

// Tipo any - qualquer um
let carro: any = "Hilux";
console.log(carro);
carro = { nome: "Hilux", marca: "Toyota", ano: 2019 };
console.log(carro);

// Usando funções com Tipos - TypeScript
function retornaMeuNome(): string {
  // return minhaIdade
  return nome;
}

console.log(retornaMeuNome());

// Usando void - Sem Retorno
function digaOi(): void {
  console.log("Hi, my brother!");
  // return minhaIdade
}

digaOi();

function multiplicar(numA: number, numB: number): number {
  return numA * numB;
}

console.log(multiplicar(4.7, 9));

// Tipo função
let calculo: (x: number, y: number) => number;
// calculo = digaOi
// calculo()
// calculo = {}

calculo = multiplicar;
console.log(calculo(5, 6));

// Tipo objetos
let usuario: { nome: string; idade: number; sexo: string } = {
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


