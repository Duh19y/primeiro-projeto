var nomeHeroi = "Duardinho Da Sensi Ignorante"

var Nivel = "9753"



switch (true){
    case Nivel <= 1000:
        console.log("O Herói de nome " + nomeHeroi + ", está no nível de Ferro");
        break;
    case Nivel >= 1001 && Nivel <= 2000:
        console.log("O Herói de nome " + nomeHeroi + ", está no nível de Bronze");
        break;
    case Nivel >= 2001 && Nivel <= 5000:
        console.log("O Herói de nome " + nomeHeroi + ", está no nível de Prata");
        break;
    case Nivel >= 5001 && Nivel <= 7000:
        console.log("O Herói de nome " + nomeHeroi + ", está no nível de Ouro");
        break;
    case Nivel >= 7001 && Nivel <= 8000:
        console.log("O Herói de nome " + nomeHeroi + ", está no nível de Platina");
        break;
    case Nivel >= 8001 && Nivel <= 9000:
        console.log("O Herói de nome " + nomeHeroi + ", está no nível de Ascendente");
        break;
    case Nivel >= 9001 && Nivel <= 10000:
        console.log("O Herói de nome " + nomeHeroi + ", está no nível de Imortal");
        break;
    case Nivel >= 10001: 
        console.log("O Herói de nome " + nomeHeroi + ", está no nível de Radiante");
        break;
}



