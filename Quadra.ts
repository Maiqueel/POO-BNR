class Quadra {
    nome: string;
    esporte: string;

    constructor(nome: string, esporte: string) {
        this.nome = nome;
        this.esporte = esporte;
    }
}

class Reserva {
    cliente: string;
    quadra: Quadra;
    data: Date;

    constructor(cliente: string, quadra: Quadra, data: Date) {
        this.cliente = cliente;
        this.quadra = quadra;
        this.data = data;
    }
}

export class SistemaBNR {
    quadras: Quadra[] = [];
    reservas: Reserva[] = [];

    listarQuadras(): Quadra[] {
        return this.quadras;
    }

    listarReservas(): Reserva[] {
        return this.reservas;
    }

    cadastrarQuadra(nome: string, esporte: string): void {
        const quadra = new Quadra(nome, esporte);
        this.quadras.push(quadra);
    }
}