import { SistemaBNR } from './Quadra';

describe('SistemaBNR', () => {
    let sistema: SistemaBNR;

    beforeEach(() => {
        sistema = new SistemaBNR();
    });

    test('deve cadastrar uma nova quadra', () => {
        sistema.cadastrarQuadra('quadra-teste', 'Futebol');
        expect(sistema.quadras.length).toBe(1);
        expect(sistema.quadras[0].nome).toBe('quadra-teste');
    });

    test('não deve cadastrar uma quadra com nome duplicado', () => {
        sistema.cadastrarQuadra('quadra-teste', 'Futebol');
        sistema.cadastrarQuadra('quadra-teste', 'Basquete');
        expect(sistema.quadras.length).toBe(1);
    });

    test('deve cadastrar uma nova reserva', () => {
        sistema.cadastrarQuadra('quadra-teste', 'Futebol');
        sistema.cadastrarReserva('Cliente 1', 'quadra-teste', '19:00');
        expect(sistema.reservas.length).toBe(1);
        expect(sistema.reservas[0].cliente).toBe('Cliente 1');
        expect(sistema.reservas[0].quadra.nome).toBe('quadra-teste');
        expect(sistema.reservas[0].horario).toBe('19:00');
    });

    test('não deve cadastrar uma reserva para uma quadra inexistente', () => {
        sistema.cadastrarReserva('Cliente 1', 'Quadra Inexistente', '19:00');
        expect(sistema.reservas.length).toBe(0);
    });

    test('deve excluir uma reserva existente', () => {
        sistema.cadastrarQuadra('quadra-teste', 'Futebol');
        sistema.cadastrarReserva('Cliente 1', 'quadra-teste', '19:00');
        sistema.excluirReserva('quadra-teste');
        expect(sistema.reservas.length).toBe(0);
    });

    test('não deve excluir uma reserva inexistente', () => {
        sistema.excluirReserva('Quadra Inexistente');
        expect(sistema.reservas.length).toBe(0);
    });

    test('não deve cadastrar reserva com horário inválido', () => {
        sistema.cadastrarQuadra('Quadra 1', 'Futebol');
        sistema.cadastrarReserva('Cliente 1', 'Quadra 1', '25:00');
        expect(sistema.reservas.length).toBe(0);
    });
});
