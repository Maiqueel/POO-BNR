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
        sistema.cadastrarQuadra('Quadra 1', 'Futebol');
        sistema.cadastrarQuadra('Quadra 1', 'Basquete');
        expect(sistema.quadras.length).toBe(1);
    });

    test('deve cadastrar uma nova reserva', () => {
        sistema.cadastrarQuadra('Quadra 1', 'Futebol');
        sistema.cadastrarReserva('Cliente 1', 'Quadra 1', '2024-09-18');
        expect(sistema.reservas.length).toBe(1);
        expect(sistema.reservas[0].cliente).toBe('Cliente 1');
        expect(sistema.reservas[0].quadra.nome).toBe('Quadra 1');
        expect(sistema.reservas[0].data).toBe('2024-09-18');
    });

    test('não deve cadastrar uma reserva para uma quadra inexistente', () => {
        sistema.cadastrarReserva('Cliente 1', 'Quadra Inexistente', '2024-09-18');
        expect(sistema.reservas.length).toBe(0);
    });

    test('deve excluir uma reserva existente', () => {
        sistema.cadastrarQuadra('Quadra 1', 'Futebol');
        sistema.cadastrarReserva('Cliente 1', 'Quadra 1', '2024-09-18');
        sistema.excluirReserva('Quadra 1');
        expect(sistema.reservas.length).toBe(0);
    });

    test('não deve excluir uma reserva inexistente', () => {
        sistema.excluirReserva('Quadra Inexistente');
        expect(sistema.reservas.length).toBe(0);
    });
});
