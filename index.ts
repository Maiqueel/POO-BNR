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
            break;
            
            case 2:
                console.log(sistema.listarQuadras());
                break;
                
            case 3:
                const reservaCliente = teclado("Nome do Cliente: ")
                const reservaQuadra = teclado("Nome da Quadra: ")
                const reservaHora = teclado("Horário da Reserva: ")
                sistema.cadastrarReserva(reservaCliente, reservaQuadra, reservaHora)
                break;
                    
            case 4:
                console.log(sistema.listarReservas());
                break;

        default:
            break;
    }
}