// Definindo o nome e a quantidade de experiência do herói
let nomeDoHeroi = "Vinícius";
let XPDoHeroi = 9500; // Altere este valor para testar diferentes níveis de XP

// Verificando o nível com base na quantidade de experiência
let nivel;

if (XPDoHeroi < 1000) {
  nivel = "Ferro";
} else if (XPDoHeroi >= 1001 && XPDoHeroi <= 2000) {
  nivel = "Bronze";
} else if (XPDoHeroi >= 2001 && XPDoHeroi <= 5000) {
  nivel = "Prata";
} else if (XPDoHeroi >= 6001 && XPDoHeroi <= 7000) {
  nivel = "Ouro";
} else if (XPDoHeroi >= 7001 && XPDoHeroi <= 8000) {
  nivel = "Platina";
} else if (XPDoHeroi >= 8001 && XPDoHeroi <= 9000) {
  nivel = "Ascendente";
} else if (XPDoHeroi >= 9001 && XPDoHeroi <= 10000) {
  nivel = "Imortal";
} else {
  nivel = "Radiante";
}

// Exibindo a mensagem com o nível do herói
console.log(`O Herói de nome ${nomeDoHeroi} está no nível de ${nivel}`);
