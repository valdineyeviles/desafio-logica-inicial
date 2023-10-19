/**
 * Classificador de Nível de Herói
 * 
 * 
 * Descrição:
 *
 * Foi criado uma variável para armazenar o nome e a quantidade de experiência (XP) de um herói chamado de (Eviles).
 * Utilizei: variaveis, operadores, laço de repetição e estrutura de decisão para apresentar uma mensagem no console com base nessas informações.
 *
 * Notas:
 * 
 * O mapa de aventura foi bastante útil pra mim, principalmente na chamada da mensagem no console para o resultado no nivel e nome do jogador utilizando "$".
 *
 * Uso:
 * Basta definir o nome do herói na variável "nomeDoHeroi" e a experiência (XP) na variável "expDoHeroi" e o sistema apresentará uma mensagem com o nível do herói.
*/

do {

    // declarando a variavel com o nome do heroi
    let nomeDoHeroi = "Eviles"

    // declarando a variavel com a experiencia do heroi
    let expDoHeroi = 900

    // declarando uma variavel para definir o nivel do heroi com base nas decisões
    let nivelDoHeroi = ""

    // estruturas de decisões
    if (expDoHeroi < 1000) {
        nivelDoHeroi = "Ferro"
    }
    else if (expDoHeroi >= 1001 && expDoHeroi <= 2000) {
        nivelDoHeroi = "Bronze"
    }
    else if (expDoHeroi >= 2001 && expDoHeroi <= 5000) {
        nivelDoHeroi = "Prata"
    }
    else if (expDoHeroi >= 6001 && expDoHeroi <= 7000) {
        nivelDoHeroi = "Ouro"
    }
    else if (expDoHeroi >= 7001 && expDoHeroi <= 8000) {
        nivelDoHeroi = "Platina"
    }
    else if (expDoHeroi >= 8001 && expDoHeroi <= 9000) {
        nivelDoHeroi = "Ascendente"
    }
    else if (expDoHeroi >= 9001 && expDoHeroi <= 10000) {
        nivelDoHeroi = "Imortal"
    }
    else if (expDoHeroi >= 10001) {
        nivelDoHeroi = "Radiante"
    }
    // caso nenhuma estrutura de decisão retorne
    else {
        nivelDoHeroi = "Novato"
    }

    console.log(`O Herói de nome **{${nomeDoHeroi}}** está no nível de **{${nivelDoHeroi}}**`)

    var continuar = "nao"

} while (continuar !== "nao")