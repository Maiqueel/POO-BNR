import { Quadras } from "./Quadras";
import prompt from "prompt-sync";

const teclado = prompt();

console.log("Criação da Quadra");
const quadra: Quadras = criaQuadra();

while (true) {
  console.log("########### MENU ###########");
  console.log("1 - Reservar");
  console.log("2 - Listar Quadras Disponiveis");
  console.log("3 - Listar Reservas Feitas");
  console.log("0 - Sair");

  const opcao = +teclado("Escolha uma opção: ");
  if (opcao === 0) {
    break;
  }
  switch (opcao) {
    case 1:
        reservas()
      break;
    case 2:
        console.log(`Nome: ${quadra.nomeQuadra} \nTipo de Esporte: ${quadra.tipoEsporte} \nHorario Disponiveis: ${quadra.hora}`);
      break;
    case 3:

      break;

    default:
      break;
  }
}

console.table(quadra);

function criaQuadra(): Quadras {

  const nomeQuadra = teclado("Nome da Quadra: ");
  const tipoEsporte = teclado("Tipo de Esporte: ");
  const quadra: Quadras = new Quadras(nomeQuadra, tipoEsporte);
  
  return quadra;
}

    function reservas(): void {
        const horaAgenda = +teclado("Hora da reserva (HH): ");
        const nomeCliente = teclado("Nome do cliente: ");
        const novaReserva = 
        //remover um item de um array
        quadra.hora.splice(horaAgenda, 1)
        quadra.nomeCliente = nomeCliente;
        
        console.log(`Reserva efetuada com sucesso!`);
        
}