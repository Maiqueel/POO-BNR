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
    console.log("|5 - Excluir Reserva                   |");
    console.log("|0 - Sair                              |");
    console.log("+============ Bola na Rede ============+");
    
    const opcao = +teclado('Escolha uma opção: ');
    if(opcao === 0){
        break;
    }
    switch (opcao) {
        case 1:
            const nomeQuadra = teclado("Nome da Quadra: ").toLowerCase();
            const esporteQuadra = teclado("Esporte da Quadra: ").toLowerCase();
            sistema.cadastrarQuadra(nomeQuadra, esporteQuadra)
            break;
            
            case 2:
                console.log(sistema.listarQuadras());
                break;
                
            case 3:
                const reservaCliente = teclado("Nome do Cliente: ").toLowerCase();
                const reservaQuadra = teclado("Nome da Quadra: ").toLowerCase();
                const reservaHora = teclado("Horário da Reserva: ");
                sistema.cadastrarReserva(reservaCliente, reservaQuadra, reservaHora);
                break;
                    
            case 4:
                console.log(sistema.listarReservas());
                break;
            case 5:
                console.log(sistema.listarReservas());
                console.log("Excluir reserva:");
                const excluir = teclado("Nome da quadra: ").toLowerCase();
                sistema.excluirReserva(excluir);
                break;

        default:
            break;
    }
}