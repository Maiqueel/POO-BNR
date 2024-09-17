import prompt from "prompt-sync";
import { SistemaBNR } from "./Quadra";

const teclado = prompt();

const sistema = new SistemaBNR();

while(true){
    console.log("+============ Bola na Rede ============+");
    console.log("|1 - Cadastrar Quadra                  |");
    console.log("|2 - Listar Quadras                    |");
    console.log("|3 - Reservar Quadra                   |");
    console.log("|4 - Listar Reservas                   |");
    console.log("|0 - Sair                              |");
    console.log("+============ Bola na Rede ============+");
    
    const opcao = +teclado('Escolha uma opção: ');
    if(opcao === 0){
        break;
    }
    switch (opcao) {
        case 1:
            const nomeQuadra = teclado("Nome da Quadra: ")
            const esporteQuadra = teclado("Esporte da Quadra: ")
            sistema.cadastrarQuadra(nomeQuadra, esporteQuadra)
            console.log("Quadra cadastrada com sucesso.")

        case 2:
            console.log("Quadras disponíveis:")
            console.log(sistema.listarQuadras());

        case 3:
            console.log("Reserva realizada com sucesso.")

        case 4:
            console.log("Reservas realizadas por nossos usuários:")
            console.log(sistema.listarReservas());

        default:
            break;
    }
}