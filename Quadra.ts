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
    data: string;

    constructor(cliente: string, quadra: Quadra, data: string) {
        this.cliente = cliente;
        this.quadra = quadra;
        this.data = data;
    }
}

export class SistemaBNR {
    quadras: Quadra[] = [];
    reservas: Reserva[] = [];

    listarQuadras(): Quadra[] {
        if(this.quadras.length > 0) {
            console.log("Quadras disponíveis para Reserva:")
            return this.quadras;
        }else {
            console.log("Nenhuma quadra está disponível!")
        }
        return [];
    }

    listarReservas(): Reserva[] {
        if (this.reservas.length > 0) {
            console.log("Reservas feitas por nossos usuários:");
            return this.reservas;
        } else {
            console.log("Nenhuma reserva foi realizada.");
            return [];
        }
    }

    cadastrarQuadra(nome: string, esporte: string) {
        const quadra = new Quadra(nome, esporte);
        this.quadras.push(quadra);
        console.log("Quadra cadastrada com sucesso.")
    }

    cadastrarReserva(cliente: string, quadra: string, data: string) {
        const quadraVerif = this.quadras.find(q => q.nome === quadra);
        if (quadraVerif) {
            const reserva = new Reserva(cliente, quadraVerif, data);
            this.reservas.push(reserva);

            const indexQuadra = this.quadras.findIndex(q => q.nome === quadra)
            this.quadras.splice(indexQuadra, 1);

            console.log("Reserva feita com sucesso!")
        }else {
            console.log("Quadra não encontrada.")
        }

    }
    
}