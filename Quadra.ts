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
            console.log("\nQuadras disponíveis para Reserva:")
            console.log("-".repeat(33));
            console.log("Nome da quadra.: Esporte.......:");
            console.log("");
            
            this.quadras.forEach((quadra) => {
                console.log(`${quadra.nome.padEnd(16)} ${quadra.esporte.padEnd(15)}`);
            });
            
            console.log("-".repeat(33));            
        }else {
            console.log("Nenhuma quadra está criada!")
        }
        return [];
    }

    listarReservas(): Reserva[] {
        if (this.reservas.length > 0) {
            console.log("\nReservas feitas por nossos usuários:");
            console.log("-".repeat(59));
            console.log("Cliente.......: Nome da quadra.: Esporte.......: Horario..:");
            console.log("");
            
            this.reservas.forEach((reserva) => {
                console.log(`${reserva.cliente.padEnd(15)} ${reserva.quadra.nome.padEnd(16)} ${reserva.quadra.esporte.padEnd(15)} ${reserva.data.padEnd(10)}`);
            });
            console.log("-".repeat(59));
            return [];
        } else {
            console.log("Nenhuma reserva foi realizada.");
            return [];
        }
    }

    cadastrarQuadra(nome: string, esporte: string) {
        const quadraVerif = this.quadras.find(quadraArray => quadraArray.nome === nome);
        if (quadraVerif) {
            console.log("Abortado! Já possui uma arena com o mesmo nome.")
        }else {
            const quadra = new Quadra(nome, esporte);
            this.quadras.push(quadra);
            console.log("Quadra cadastrada com sucesso.")
        }
    }

    cadastrarReserva(cliente: string, quadra: string, data: string) {
        const quadraVerif = this.quadras.find(quadraArray => quadraArray.nome === quadra);
        if (quadraVerif) {
            const reserva = new Reserva(cliente, quadraVerif, data);
            this.reservas.push(reserva);

            const indexQuadra = this.quadras.findIndex(quadraArray => quadraArray.nome === quadra)
            this.quadras.splice(indexQuadra, 1);

            console.log("Reserva feita com sucesso!")
        }else {
            console.log("Quadra não encontrada.")
        }

    }

    excluirReserva(nomeQuadra: string): void {
        const indexReserva = this.reservas.findIndex(reserva => reserva.quadra.nome === nomeQuadra);

        if (indexReserva !== -1) {
            const reserva = this.reservas[indexReserva];
            this.reservas.splice(indexReserva, 1);

            console.log("Reserva excluída com sucesso.");
        } else {
            console.log("Reserva com o nome da quadra fornecido não encontrada.");
        }
    }
    
}