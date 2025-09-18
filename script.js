var nomeCantina = "Cantina da Escola";
console.log("Bem-vindo à " + nomeCantina);
Use para declarar a quantidade de salgados disponíveis (esse valor pode mudar).
let salgados = 20;
console.log("Temos " + salgados + " salgados disponíveis.");
Use para declarar o preço fixo de cada salgado.
const precoSalgado = 5;
console.log("Cada salgado custa R$" + precoSalgado);salgados = salgados - 5;let totalVendido = 5 * precoSalgado;

console.log("Agora restam " + salgados + " salgados.");
console.log("A cantina vendeu R$" + totalVendido);if (true) {
var testeVar = "Sou var"; 
 let testeLet = "Sou let"; 
 console.log(testeVar); // funciona 
 console.log(testeLet); // funciona
} 
console.log(testeVar); // funciona 
console.log(testeLet); // ERRO
