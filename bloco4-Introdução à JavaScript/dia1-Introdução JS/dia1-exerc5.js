// Faça um programa que defina três variáveis com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false caso contrário.
// Para os ângulos serem de um triângulo válido, a soma dos três deve ser 180 graus. Caso os ângulos estejam inválidos, o programa deve retornar uma mensagem de erro.

let ang1 = 60;
let ang2 = 30;
let ang3 = 90;

if (ang1 + ang2 + ang3 === 180) {
  console.log("Os angulos informado são de um triangulo!");
} else {
  console.log("Erro! Os angulos informados não são de um triangulo!");
}