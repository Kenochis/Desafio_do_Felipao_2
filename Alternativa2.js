calculoDaVitoria(150, 50);

//função para calcular as vitórias restantes
function calculoDaVitoria(ganhei, perdi){

    //laço para diminuir as vitórias conforme as derrotas
    for (let i = 0; i < perdi; i++){

        ganhei--;
    }
    return ganhei;
}

//chamando a função e armazenando o valor retornado
let vitoria = calculoDaVitoria(150, 50);

//estrutura switch para definir o rank conforme as vitórias
switch (true){

    case (vitoria >= 0 && vitoria <= 10):
        console.log(`O herói tem um total de ${vitoria} vitórias, e seu rank atual é de Ferro.`);
        break;

    case (vitoria >= 11 && vitoria <= 20):
        console.log(`O herói tem um total de ${vitoria} vitórias, e seu rank atual é de Bronze.`);
        break;

    case (vitoria >= 21 && vitoria <= 50):
        console.log(`O herói tem um total de ${vitoria} vitórias, e seu rank atual é de Prata.`);
        break;

    case (vitoria >= 51 && vitoria <= 70):
        console.log(`O herói tem um total de ${vitoria} vitórias, e seu rank atual é de Ouro.`);
        break;

    case (vitoria >= 71 && vitoria <= 80):
        console.log(`O herói tem um total de ${vitoria} vitórias, e seu rank atual é de Diamante.`);
        break;

    case (vitoria >= 81 && vitoria <= 100):
        console.log(`O herói tem um total de ${vitoria} vitórias, e seu rank atual é de Lendário.`);
        break;

    case (vitoria >= 101):
        console.log(`O herói tem um total de ${vitoria} vitórias, e seu rank atual é de Imortal.`);
        break;
}